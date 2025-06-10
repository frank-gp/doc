https://go.dev/dl/

```sh
go version
go env GOPATH

go mod init nombre-del-modulo

```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hola desde Go!")
}
```

```sh
go run main.go

go run .
```

# Compilando

```sh
# Compilando en Windows
go build main.go

# Compilando en Linux
go build -o main main.go
# open ./main.ex en power shell

# Compilando en windows para linux
$ GOOS=linux GOARCH=amd64 go build -o main_ubuntu main.go
# open ./main_ubuntu en wsl
```
