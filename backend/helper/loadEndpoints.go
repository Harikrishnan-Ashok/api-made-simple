package helper

import (
	"api-made-simple/backend/model"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

func LoadEndpointStore()model.EndpointStore{
  var store model.EndpointStore
  //prepping paths
  homePath,err:=os.UserHomeDir()
  if err!=nil{
    fmt.Println("Error while looking for directory")
		return(store)
	}
	rootPath:=filepath.Join(homePath,"ApiMadeSimple")
	endpointFilePath:=filepath.Join(rootPath,"endpoint.json")

	//reading file
  fileData,err:=os.ReadFile(endpointFilePath)
  if err==nil && len(fileData)>0{
    err=json.Unmarshal(fileData,&store) 
	  if err!=nil{
      fmt.Println("error while unmarshalling")
		  return store
	  }
	}
	return store
}
