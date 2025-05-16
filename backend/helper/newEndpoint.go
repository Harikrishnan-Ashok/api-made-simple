package helper

import (
	"api-made-simple/backend/model"
	"fmt"
)

func CreateNewEndpoint(endpoint model.NewEndpoint)string{
  return fmt.Sprintf("Endpoint created %s",endpoint.Path)
}


