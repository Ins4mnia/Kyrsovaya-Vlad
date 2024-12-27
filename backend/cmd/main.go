package main

import (
	"log"
	"log/slog"

	"github.com/joho/godotenv"
	"github.com/noodypv/kursovaya/internal/config"
	"github.com/noodypv/kursovaya/internal/repository"
	"github.com/noodypv/kursovaya/internal/server"
	"github.com/noodypv/kursovaya/internal/transport"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		slog.Warn("Error loading .env file: " + err.Error())
	}

	cfg, err := config.New()
	if err != nil {
		log.Fatal("failed to init config", err)
	}

	gormDB, err := gorm.Open(postgres.Open(cfg.DB.GetDSN()))
	if err != nil {
		log.Fatal("failed to init gorm", err)
	}

	repo := repository.NewRepository(gormDB)

	handler := transport.NewHandler(repo)

	server := server.New(handler, 8081)

	server.Init()

	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}
