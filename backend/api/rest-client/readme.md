```sh
@token={{$dotenv TOKEN_ENV}}
### GET users
# @name getUsers
@headerContenType={{getUsers.response.headers.Content-Type}}
@bodyLength={{getUsers.response.body.length}}

GET https://jsonplaceholder.typicode.com/users

### POST users
POST https://jsonplaceholder.typicode.com/users
Authorization: Bearer {{token}}
Content-Type: application/json

{
    // Request Variables
    "headerContenType": "{{headerContenType}}",
    "bodyLength": "{{bodyLength}}",
    // Global Variables
    "request_id": "{{$guid}}",
    "timestamp": "{{$timestamp}}",
    "timestamp-s": "{{$timestamp -1740224464 s}}",
    "timestamp-5h": "{{$timestamp -5 h}}",
    "randomInt": "{{$randomInt 1 999}}",
    "datetime": "{{$datetime iso8601}}",
    "datetime-YYYY-MM-DD": "{{$datetime 'YYYY-MM-DD'}}",
    "localDatetime": "{{$localDatetime 'YYYY-MM-DD-HH:mm:ss'}}",
    // .env Variables
    "API_URL": "{{$dotenv API_URL}}",
    "TOKEN_ENV": "{{$dotenv TOKEN_ENV}}",
    // System Variables
    "USERNAME": "{{$processEnv USERNAME}}",
    "PORT": "{{$processEnv PORT}}",
    "OS": "{{$processEnv OS}}",
    "PASSWORD": "{{$processEnv PASSWORD}}",
    "TOKEN": "{{$processEnv TOKEN}}"
}
###


### Prompt Variables
# @prompt promptVar
POST https://jsonplaceholder.typicode.com/users
Content-Type: application/json

{
    //Prompt Variables
    "promptVar": "{{promptVar}}"
}
```
