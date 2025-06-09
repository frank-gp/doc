#!/bin/bash

# Script para detener el servidor HTTP de Python
echo "Deteniendo el servidor HTTP..."

# Buscar el proceso del servidor HTTP y detenerlo
SERVER_PID=$(ps aux | grep "python3 -m http.server" | grep -v grep | awk '{print $2}')

if [ -z "$SERVER_PID" ]; then
    echo "No se encontró ningún servidor HTTP en ejecución."
else
    echo "Deteniendo el servidor HTTP con PID: $SERVER_PID"
    sudo kill -9 $SERVER_PID
    echo "Servidor HTTP detenido."
fi
