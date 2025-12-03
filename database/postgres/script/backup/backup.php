<?php
// Detalles de la conexión a la base de datos
$dbHost = "localhost";
$dbPort = "5432";
$dbName = "postgres";
$dbUser = "postgres";
$dbPass = "admin";

// Ruta y nombre del archivo de respaldo en la carpeta actual
//$backupFile = __DIR__ . "/backups/{$dbName}_" . date('Y-m-d_H-i-s') . ".sql";

 $backupFile = __DIR__ . "/db_plain.sql";

// Establecer la variable de entorno para la contraseña
putenv("PGPASSWORD={$dbPass}");

// Comando para generar el respaldo
$command = "pg_dump -h {$dbHost} -p {$dbPort} -U {$dbUser} -F p -f \"{$backupFile}\" {$dbName}";

// Ejecutar el comando
$output = [];
$returnVar = null;
exec($command . " 2>&1", $output, $returnVar);

// Verificar si el comando se ejecutó correctamente
if ($returnVar === 0) {
    echo "¡Respaldo de la base de datos exitoso!\nArchivo generado: {$backupFile}\n";
} else {
    echo "Ocurrió un error al realizar el respaldo de la base de datos.\n";
    echo "Comando ejecutado: {$command}\n";
    echo "Salida del error:\n" . implode("\n", $output) . "\n";
}
?>
