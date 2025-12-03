<?php
function checkWebsiteAvailability($url) {
    $ch = curl_init($url);
    
    // Configurar opciones de la solicitud HTTP
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10); // tiempo de espera en segundos
    
    // Ejecutar la solicitud y obtener el código de respuesta
    $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Cerrar la sesión cURL
    curl_close($ch);
    
    // Verificar el código de respuesta
    return ($responseCode === 200);
}

// URL de tu sitio web
$websiteURL = "https://frank-gp.github.io/";

// Verificar la disponibilidad del sitio web
if (checkWebsiteAvailability($websiteURL)) {
    echo "El sitio web está en línea.";
} else {
    echo "¡Alerta! El sitio web parece estar caído.";
}
?>
