package config

import (
	"fmt"

	"github.com/kelseyhightower/envconfig"
)

type Config struct {
	DB DB
}

func New() (*Config, error) {
	cfg := &Config{}

	if err := envconfig.Process("", cfg); err != nil {
		return nil, fmt.Errorf("failed to process config: %w", err)
	}

	return cfg, nil
}

type DB struct {
	Driver   string `envconfig:"DB_DRIVER" required:"true" default:"postgres"`
	Host     string `envconfig:"DB_HOST" required:"true"`
	Port     string `envconfig:"DB_PORT" required:"true"`
	Name     string `envconfig:"DB_NAME" required:"true"`
	User     string `envconfig:"DB_USER" required:"true"`
	Password string `envconfig:"DB_PASSWORD" required:"true"`
}

func (d *DB) GetDSN() string {
	return fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		d.Host,
		d.Port,
		d.User,
		d.Name,
		d.Password,
	)
}
