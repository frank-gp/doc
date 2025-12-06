<?php
// Detalles de la conexión a la base de datos
$dbHost = "localhost";
$dbPort = "5432";
$dbName = "postgres";
$dbUser = "postgres";
$dbPass = "admin";

// Ruta y nombre del archivo de respaldo
$backupFile = __DIR__ . "/db_plain.sql";

// Verificar si el archivo de respaldo existe
if (!file_exists($backupFile)) {
    echo "El archivo de respaldo no existe: {$backupFile}\n";
    exit;
}

// Establecer la variable de entorno para la contraseña
putenv("PGPASSWORD={$dbPass}");

// Comando para restaurar la base de datos desde el archivo .sql
$command = "psql -h {$dbHost} -p {$dbPort} -U {$dbUser} -d {$dbName} -f \"{$backupFile}\"";

// Ejecutar el comando
$output = [];
$returnVar = null;
exec($command . " 2>&1", $output, $returnVar);

// Verificar si el comando se ejecutó correctamente
if ($returnVar === 0) {
    echo "¡Restauración de la base de datos exitosa!\n";
} else {
    echo "Ocurrió un error al restaurar la base de datos.\n";
    echo "Comando ejecutado: {$command}\n";
    echo "Salida del error:\n" . implode("\n", $output) . "\n";
}
?>
