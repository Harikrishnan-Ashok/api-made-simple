package helper

import (
	"api-made-simple/backend/model"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

func CreateNewEndpoint(endpoint model.NewEndpoint) string {
	// Setup paths
	homePath, err := os.UserHomeDir()
	if err != nil {
		fmt.Println("Error getting home directory:", err)
		return "HomeDir Error"
	}
	rootPath := filepath.Join(homePath, "ApiMadeSimple")
	endpointFilePath := filepath.Join(rootPath, "endpoint.json")

	// Create dir if not exist
	err = os.MkdirAll(rootPath, os.ModePerm)
	if err != nil {
		fmt.Println("Error creating directory:", err)
		return "Directory Creation Error"
	}

	// Read existing file (if any)
	var store model.EndpointStore
	if fileData, err := os.ReadFile(endpointFilePath); err == nil && len(fileData) > 0 {
		err = json.Unmarshal(fileData, &store)
		if err != nil {
			fmt.Println("Error unmarshalling:", err)
			return "Unmarshal Error"
		}
	}

	// Append new endpoint
	store.ListOfEndpoints = append(store.ListOfEndpoints, endpoint)

	// Marshal updated store
	updatedData, err := json.MarshalIndent(store, "", "  ")
	if err != nil {
		fmt.Println("Error marshalling:", err)
		return "Marshal Error"
	}

	// Write back to file
	err = os.WriteFile(endpointFilePath, updatedData, 0644)
	if err != nil {
		fmt.Println("Error writing to file:", err)
		return "Write Error"
	}

	return "Endpoint Created Successfully"
}
