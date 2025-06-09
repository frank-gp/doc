# GET Request
Invoke-RestMethod -Uri "http://localhost:3000/items" -Method Get

# GET Request for a specific item by ID
Invoke-RestMethod -Uri "http://localhost:3000/items/1" -Method Get

# POST Request to create a new item
$body = @{
    name = "New Item"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/items" -Method Post -Body $body -ContentType "application/json"

# PUT Request to update an item by ID
$body = @{
    name = "Updated Item"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/items/1" -Method Put -Body $body -ContentType "application/json"

# DELETE Request to delete an item by ID
Invoke-RestMethod -Uri "http://localhost:3000/items/1" -Method Delete
