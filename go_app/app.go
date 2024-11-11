package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files from the "public" directory, the image doesn't work, anger consumes me.
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))

	// Main route that serves the index.html file >>> Nothing works anymore, at least it worked.
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/index.html")
	})

	// Start the server on port 5005
	log.Println("Server started at http://localhost:5005")
	log.Fatal(http.ListenAndServe(":5005", nil))
}
