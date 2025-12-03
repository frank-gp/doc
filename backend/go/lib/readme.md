```sh
$GOPATH/bin
~/go/bin

# 1. Ver dependencias del proyecto:
go list -m all

# 2. Ver dependencias directas del proyecto:
go list -m direct

# 3. Ver dependencias indirectas del proyecto:
go list -m indirect

# 4. Ver dependencias transitorias del proyecto:
go list -m transitive

# 5. Ver dependencias de un paquete:
go list -m github.com/gorilla/mux

# 6. Ver dependencias de un paquete directo:
go list -m direct github.com/gorilla/mux

# 7. Ver dependencias de un paquete indirecto:
go list -m indirect github.com/gorilla/mux

# 8. Ver dependencias de un paquete transitorio:
go list -m transitive github.com/gorilla/mux
