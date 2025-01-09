#!/bin/bash

curl -X POST http://localhost:5000/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{
           "firstName": "John",
           "lastName": "Doe",
           "email": "johndoe@example.com",
           "password": "password123",
           "confirm_password": "password123",
           "gender": "male",
           "date_of_birth": "1990-01-01"
         }'

