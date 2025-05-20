package helper

import (
	"api-made-simple/backend/model"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

func CreateNewEndpoint(endpoint model.NewEndpoint) string {
	// Marshalling the data
	jsonData, err := json.Marshal(endpoint)
	if err != nil {
		fmt.Println("An error occurred while Marshalling:", err)
		return "Marshalling Error"
	}

	//prepping file paths
	homePath,err:=os.UserHomeDir()
	  if err!=nil{
      fmt.Println("an error occured while getting the home directory",err)
		}
	rootPath:=filepath.Join(homePath,"ApiMadeSimple")
	endpointFilePath:=filepath.Join(rootPath,"endpoint.json")

	// Create the directory if it doesn't exist
	err = os.MkdirAll(rootPath, os.ModePerm)
	if err != nil {
		fmt.Println("Error creating directory:", err)
		return "Directory Creation Error"
	}

	// Create the file
	file, err := os.Create(endpointFilePath)
	if err != nil {
		fmt.Println("Error creating file:", err)
		return "File Creation Error"
	}
	defer file.Close() // Always close the file when done

	// Write JSON data to the file
	_, err = file.WriteString(string(jsonData))
	if err != nil {
		fmt.Println("Error writing to file:", err)
		return "File Write Error"
	}

	return fmt.Sprintf("Endpoint Created: %s", string(jsonData))
}
