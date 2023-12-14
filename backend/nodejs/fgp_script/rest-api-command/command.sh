pause

# GET Request
curl http://localhost:3000/items
curl -s http://localhost:3000/items

# GET Request for a specific item by ID
curl http://localhost:3000/items/1

# POST Request to create a new item
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Item"}' http://localhost:3000/items

# PUT Request to update an item by ID
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Item"}' http://localhost:3000/items/1

# PATCH Request to update part of an item by ID
curl -X PATCH -H "Content-Type: application/json" -d '{"name": "Updated Partial Item"}' http://localhost:3000/items/1

# DELETE Request to delete an item by ID
curl -X DELETE http://localhost:3000/items/1
