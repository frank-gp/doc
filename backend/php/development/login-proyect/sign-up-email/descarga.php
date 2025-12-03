<?php
session_start();

// Verificar si el usuario ha iniciado sesión
$usuario_autenticado = isset($_SESSION['usuario_id']);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Descarga</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <h1>Bienvenido a la Página de Descarga</h1>
    <p>Este es el contenido principal de la página.</p>

    <?php if ($usuario_autenticado) : ?>
        <p>Presiona el botón para descargar el archivo:</p>
        <button id="descargarBtn">Descargar Archivo</button>
    <?php else : ?>
        <p>Inicia sesión para acceder al botón de descarga.</p>
    <?php endif; ?>

    <script>
        // Agregar evento al botón de descarga si el usuario ha iniciado sesión
        <?php if ($usuario_autenticado) : ?>
            document.getElementById('descargarBtn').addEventListener('click', function() {
                // Redirigir a la ubicación del archivo zip
                window.location.href = 'ruta/del/archivo/file.zip';
            });
        <?php endif; ?>
    </script>
</body>
</html>
