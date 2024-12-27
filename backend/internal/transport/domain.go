package transport

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"

	"github.com/noodypv/kursovaya/internal/repository"
)

type Handler struct {
	repo *repository.Repository
}

type OkResponse struct {
	Data any `json:"data"`
}

type ErrorResponse struct {
	Error string `json:"error"`
}

func NewHandler(repo *repository.Repository) *Handler {
	return &Handler{
		repo: repo,
	}
}

func WriteJSON(res http.ResponseWriter, data any, cErr error) error {
	var response any

	if cErr == nil {
		response = &OkResponse{Data: data}
	} else {
		response = &ErrorResponse{Error: cErr.Error()}
	}

	bytes, err := json.Marshal(response)
	if err != nil {
		slog.Error("failed to marshal", "data", response, "error", err)

		return fmt.Errorf("failed to marshal: %w", err)
	}

	if _, err := res.Write(bytes); err != nil {
		slog.Error("failed to write json", "data", data, "err", err)

		return fmt.Errorf("failed to write json: %w", err)
	}

	return nil
}
