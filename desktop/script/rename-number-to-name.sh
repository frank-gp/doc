#!/bin/bash

# Mapea cada número con su nuevo nombre
declare -A names=(
  ["01"]="Introduccion"
  ["02"]="Introduccion a Dart"
  ["03"]="Instalacion de Flutter y Virtuales - Mac y Windows"
  ["04"]="Flutter - Primeros pasos"
  ["05"]="Yes No - Maybe App"
  ["06"]="Yes No - Maybe App - Funcionalidad"
  ["07"]="TokTik - Videos verticales"
  ["08"]="Conceptos de Clean Architecture - Datasources - Repositories"
  ["09"]="Widgets App"
  ["10"]="Widgets App - Continuacion"
  ["11"]="Riverpod - Menu y Temas"
  ["12"]="Full App - Cinemapedia"
  ["13"]="Cinemapedia - Continuacion"
  ["14"]="Peliculas individuales y actores"
  ["15"]="SearchDelegate - Busquedas"
  ["16"]="ShellRoutes - Go Router - Tabs"
  ["17"]="Local Databases"
  ["18"]="Estudios adicionales"
  ["19"]="BLoC - FlutterBloc y Cubits"
  ["20"]="Manejo de formularios"
  ["21"]="Push Notifications + Local Notifications"
  ["22"]="Enviar notificaciones desde una Rest API"
  ["23"]="Local Notifications"
  ["24"]="IOS - Push + Local Notifications"
  ["25"]="Preparacion de Backend con Autenticacion JWT"
  ["26"]="Autenticacion - Jwt - Riverpod"
  ["27"]="Go Router - Proteccion de Rutas"
  ["28"]="Obtener productos - Datasources y Repositories"
  ["29"]="Crear y Actualizar Productos"
  ["30"]="Camara, Galeria y carga de archivos"
  ["31"]="Despliegues a Play Store y Apple App Store"
  ["32"]="Cierre del curso"
)

# Recorre todas las carpetas numeradas y las renombra
for num in "${!names[@]}"; do
  if [ -d "$num" ]; then
    newname="${num} - ${names[$num]}"
    echo "Renombrando '$num' → '$newname'"
    mv "$num" "$newname"
  else
    echo "⚠️  Carpeta '$num' no encontrada, se omite."
  fi
done

echo "✅ Renombrado completado."
