<?php
// Definir variables por defecto si no se han enviado a través del formulario
$dbHost = 'localhost';
$dbPort = '5432';
$dbName = 'postgres';
$dbUser = 'postgres';
$dbPass = 'admin';
$backupFile = 'db_plain.sql';

// Comprobar si el formulario ha sido enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dbHost = isset($_POST['dbHost']) ? $_POST['dbHost'] : 'localhost';
    $dbPort = isset($_POST['dbPort']) ? $_POST['dbPort'] : '5432';
    $dbName = isset($_POST['dbName']) ? $_POST['dbName'] : 'postgres';
    $dbUser = isset($_POST['dbUser']) ? $_POST['dbUser'] : 'postgres';
    $dbPass = isset($_POST['dbPass']) ? $_POST['dbPass'] : 'admin';
    $backupFile = isset($_POST['backupFile']) ? __DIR__ . "/{$_POST['backupFile']}" : __DIR__ . "/db_plain.sql";

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
        $message = "¡Respaldo de la base de datos exitoso!\nArchivo generado: {$backupFile}";
    } else {
        $message = "Ocurrió un error al realizar el respaldo de la base de datos.\n";
        $message .= "Comando ejecutado: {$command}\n";
        $message .= "Salida del error:\n" . implode("\n", $output);
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Respaldo de Base de Datos</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
</head>
<body>
    <main>
        <h1>Crear Respaldo de la Base de Datos</h1>

        <form action="" method="POST">
            <label for="dbHost">Host de la base de datos:</label>
            <input type="text" id="dbHost" name="dbHost" value="<?= htmlspecialchars($dbHost) ?>" required><br><br>
            
            <label for="dbPort">Puerto de la base de datos:</label>
            <input type="text" id="dbPort" name="dbPort" value="<?= htmlspecialchars($dbPort) ?>" required><br><br>
            
            <label for="dbName">Nombre de la base de datos:</label>
            <input type="text" id="dbName" name="dbName" value="<?= htmlspecialchars($dbName) ?>" required><br><br>
            
            <label for="dbUser">Usuario de la base de datos:</label>
            <input type="text" id="dbUser" name="dbUser" value="<?= htmlspecialchars($dbUser) ?>" required><br><br>
            
            <label for="dbPass">Contraseña de la base de datos:</label>
            <input type="password" id="dbPass" name="dbPass" value="<?= htmlspecialchars($dbPass) ?>" required><br><br>
            
            <label for="backupFile">Nombre del archivo de respaldo:</label>
            <input type="text" id="backupFile" name="backupFile" value="<?= htmlspecialchars($backupFile) ?>" required><br><br>
            
            <button type="submit">Crear respaldo</button>
        </form>

        <?php if (isset($message)): ?>
            <section>
                <h2>Resultado</h2>
                <pre><?= htmlspecialchars($message) ?></pre>
            </section>
        <?php endif; ?>
    </main>
</body>
</html>
