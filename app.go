package main

import (
	"api-made-simple/backend/helper"
	"api-made-simple/backend/model"
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}


//func to call : creating new api endpoints 
func (a *App)CallCreateNewEndpoint(endpoint model.NewEndpoint)string{
  return helper.CreateNewEndpoint(endpoint)
}

// func to get the list of endpoints 
func (a *App)CallLoadEndpoints()model.EndpointStore{
	return helper.LoadEndpointStore()
}
