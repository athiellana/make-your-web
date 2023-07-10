package main

import (
	"fmt"
	"make-your-web/handlers"
	"net/http"
)

const port = ":8888"

func main() {
	http.HandleFunc("/", handlers.HandleHome)
	http.HandleFunc("/command", handlers.HandleCommand)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets"))))
	http.Handle("/scripts/", http.StripPrefix("/scripts/", http.FileServer(http.Dir("./scripts"))))
	fmt.Println("(http://localhost:8888) - Server started on port", ":8888")
	http.ListenAndServe(":8888", nil)
}
