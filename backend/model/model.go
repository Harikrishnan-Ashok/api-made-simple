package model

type NewEndpoint struct {
    ID               string `json:"id"`
    Method           string `json:"method"`
    Path             string `json:"path"`
    ErrorStatus      int    `json:"errorStatus"`
    ErrorResponse    string `json:"errorResponse"`
    SuccessStatus    int    `json:"successStatus"`
    SuccessResponse  string `json:"successResponse"`
}
