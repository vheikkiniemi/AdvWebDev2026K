-- db/init/002_create_reservations.sql

CREATE TABLE IF NOT EXISTS reservations (
  id BIGSERIAL PRIMARY KEY,

  -- Links
  resource_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,

  -- Reservation time window
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,

  -- Optional description / purpose
  note TEXT,

  -- Status allows lifecycle management
  status VARCHAR(20) NOT NULL DEFAULT 'active'
    CHECK (status IN ('active','cancelled','completed')),

  -- Optional audit fields
  created_by_user_id BIGINT NULL,
  updated_by_user_id BIGINT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Resource link
  CONSTRAINT fk_reservations_resource
    FOREIGN KEY (resource_id)
    REFERENCES resources(id)
    ON DELETE CASCADE,

  -- User who made the reservation
  CONSTRAINT fk_reservations_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  -- Audit links
  CONSTRAINT fk_reservations_created_by_user
    FOREIGN KEY (created_by_user_id)
    REFERENCES users(id)
    ON DELETE SET NULL,

  CONSTRAINT fk_reservations_updated_by_user
    FOREIGN KEY (updated_by_user_id)
    REFERENCES users(id)
    ON DELETE SET NULL,

  -- Prevent impossible reservations
  CONSTRAINT chk_reservation_time
    CHECK (end_time > start_time)
);

-- Indexes for typical queries
CREATE INDEX IF NOT EXISTS idx_reservations_resource_id
ON reservations(resource_id);

CREATE INDEX IF NOT EXISTS idx_reservations_user_id
ON reservations(user_id);

CREATE INDEX IF NOT EXISTS idx_reservations_time_range
ON reservations(start_time, end_time);