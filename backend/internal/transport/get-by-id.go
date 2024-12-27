package transport

import (
	"fmt"
	"log/slog"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func (h *Handler) GetById() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		params := mux.Vars(req)

		if params["id"] == "" {
			slog.Error("GetById", "error", "empty id")

			WriteJSON(res, nil, fmt.Errorf("empty id"))

			return
		}

		id, err := strconv.Atoi(params["id"])
		if err != nil {
			slog.Error("GetById", "error", "not a number")

			WriteJSON(res, nil, fmt.Errorf("not a number"))

			return
		}

		news, err := h.repo.GetById(id)
		if err != nil {
			slog.Error("GetById", "error", err)

			WriteJSON(res, nil, err)

			return
		}

		WriteJSON(res, news, nil)
	}
}
