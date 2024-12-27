package transport

import (
	"log/slog"
	"net/http"
)

func (h *Handler) GetAll() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		news, err := h.repo.GetNewsTitles()
		if err != nil {
			slog.Error("GetAll", "error", err)

			WriteJSON(res, nil, err)

			return
		}

		WriteJSON(res, news, nil)
	}
}
