# HTTP Status Codes

## 1xx Informational

- **100 Continue:** The request was received, continuing process.

## 2xx Success

- **200 OK:** Standard response for successful HTTP requests.

## 3xx Redirection

- **301 Moved Permanently:** The requested resource has been permanently moved to a new location.

## 4xx Client Error

- **404 Not Found:** The server can't find the requested resource.

## 5xx Server Error

- **500 Internal Server Error:** A generic error message returned when an unexpected condition was encountered by the server.


# HTTP Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 100  | Continue | The server has received the request headers and the client should proceed to send the request body. |
| 101  | Switching Protocols | The requester has asked the server to switch protocols. |
| 200  | OK | The request was successful. |
| 201  | Created | The request was successful, and a resource was created. |
| 202  | Accepted | The request has been accepted for processing, but the processing has not been completed. |
| 204  | No Content | The server successfully processed the request but there is no additional content to send. |
| 206  | Partial Content | The server is delivering only part of the resource due to a range header sent by the client. |
| 300  | Multiple Choices | The requested resource has multiple representations, each with its own specific location. |
| 301  | Moved Permanently | The requested resource has been permanently moved to a new location. |
| 400  | Bad Request | The server could not understand the request due to malformed syntax or invalid request message framing. |
| 401  | Unauthorized | The request has not been applied because it lacks valid authentication credentials. |
| 403  | Forbidden | The server understood the request, but it refuses to authorize it. |
| 404  | Not Found | The server has not found anything matching the requested URI. |
| 405  | Method Not Allowed | The method specified in the request is not allowed for the resource identified by the request URI. |
| 500  | Internal Server Error | A generic error message returned when an unexpected condition was encountered by the server. |
| 501  | Not Implemented | The server does not support the functionality required to fulfill the request. |
| 503  | Service Unavailable | The server is not ready to handle the request. Common causes are a server that is down for maintenance or is overloaded. |

