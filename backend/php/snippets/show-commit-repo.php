<?php

$repo_owner = 'fgp555';
$repo_name = 'tutorial';
$api_url = "https://api.github.com/repos/{$repo_owner}/{$repo_name}/commits";

echo $api_url . "<hr>";

// Configuración de la solicitud
$options = [
    CURLOPT_URL => $api_url,
    CURLOPT_USERAGENT => 'fgp555', // Reemplaza con tu nombre de usuario de GitHub
    CURLOPT_RETURNTRANSFER => true,
];

// Inicializar cURL y configurar opciones
$ch = curl_init();
curl_setopt_array($ch, $options);

// Realizar la solicitud a la API de GitHub
$response = curl_exec($ch);

// Manejar errores de cURL
if (curl_errno($ch)) {
    echo 'Error al realizar la solicitud: ' . curl_error($ch);
    exit;
}

// Cerrar la sesión cURL
curl_close($ch);

// Decodificar la respuesta JSON
$commits = json_decode($response, true);

// Imprimir información sobre los últimos commits
foreach ($commits as $commit) {
    echo 'SHA: ' . $commit['sha'] . '<br>';
    echo 'Mensaje: ' . $commit['commit']['message'] . '<br>';
    echo 'Autor: ' . $commit['commit']['author']['name'] . '<br>';
    echo 'Fecha: ' . $commit['commit']['author']['date'] . '<br>';
    echo '<hr>';
}

 ?>