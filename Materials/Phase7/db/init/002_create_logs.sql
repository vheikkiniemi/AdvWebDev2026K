CREATE TABLE IF NOT EXISTS system_log (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Who did it (nullable: guest action, removed user, unknown)
  actor_user_id BIGINT NULL,

  -- What happened
  action VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,

  -- Optional: what entity was affected
  entity_type VARCHAR(30) NULL,   -- e.g. 'reservation', 'resource', 'user'
  entity_id BIGINT NULL,

  CONSTRAINT fk_system_log_actor_user
    FOREIGN KEY (actor_user_id)
    REFERENCES users(id)
    ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_system_log_created_at
ON system_log (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_system_log_actor
ON system_log (actor_user_id);

CREATE INDEX IF NOT EXISTS idx_system_log_entity
ON system_log (entity_type, entity_id);

CREATE INDEX IF NOT EXISTS idx_system_log_action
ON system_log (action);