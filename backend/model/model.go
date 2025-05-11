package model

type NewEndpoint struct {
    ID               string `json:"id"`
    Method           string `json:"method"`
    Endpoint         string `json:"endpoint"`
    ErrorStatus      int    `json:"errorStatus"`
    ErrorResponse    string `json:"errorResponse"`
    SuccessStatus    int    `json:"successStatus"`
    SuccessResponse  string `json:"successResponse"`
}
