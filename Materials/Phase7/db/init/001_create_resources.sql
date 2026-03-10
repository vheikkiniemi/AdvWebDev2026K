CREATE TABLE IF NOT EXISTS resources (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  available BOOLEAN NOT NULL DEFAULT false,
  price NUMERIC(12,2) NOT NULL DEFAULT 0,
  price_unit TEXT,

  -- Optional audit fields
  created_by_user_id BIGINT NULL,
  updated_by_user_id BIGINT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_resources_created_by_user
    FOREIGN KEY (created_by_user_id)
    REFERENCES users(id)
    ON DELETE SET NULL,

  CONSTRAINT fk_resources_updated_by_user
    FOREIGN KEY (updated_by_user_id)
    REFERENCES users(id)
    ON DELETE SET NULL
);

-- Enforce unique names (case-insensitive)
CREATE UNIQUE INDEX IF NOT EXISTS resources_name_unique_ci
ON resources (LOWER(name));

CREATE INDEX IF NOT EXISTS idx_resources_created_by_user_id
ON resources (created_by_user_id);

CREATE INDEX IF NOT EXISTS idx_resources_updated_by_user_id
ON resources (updated_by_user_id);