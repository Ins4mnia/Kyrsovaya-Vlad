package server

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/noodypv/kursovaya/internal/transport"
)

type Server struct {
	handler *transport.Handler
	router  *mux.Router
	port    int
}

func New(handler *transport.Handler, port int) *Server {
	return &Server{
		router:  mux.NewRouter(),
		handler: handler,
		port:    port,
	}
}

func (s *Server) Run() error {
	return http.ListenAndServe(
		fmt.Sprintf(":%d", s.port),
		s.router,
	)
}

func (s *Server) Init() {
	s.router = s.router.PathPrefix("/api").Subrouter()

	s.router.HandleFunc("/news/all", s.handler.GetAll()).Methods("GET")
	s.router.HandleFunc("/news/{id}", s.handler.GetById()).Methods("GET")
}
