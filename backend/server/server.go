// backend/server/server.go
package server

import (
    "fmt"
    "net/http"
)

func StartServer() {
    http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusOK)
        w.Write([]byte(`{"message": "pong"}`))
    })

    port := ":8080"
    fmt.Println("🚀 Mock API Server running at http://localhost" + port)
    if err := http.ListenAndServe(port, nil); err != nil {
        fmt.Println("Failed to start server:", err)
    }
}
