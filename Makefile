init1:
	docker run --name mednews -p 5454:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres  -e POSTGRES_DB=mednews -d postgres:latest

init2:
	cd ./backend/ && migrate -path ./migrations/ -database "postgres://postgres:postgres@localhost:5454/mednews?sslmode=disable" up
	
run:
	cd ./backend/ && go run ./cmd/