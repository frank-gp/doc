<?php
// logout.php

// Iniciar sesión (puedes ajustar esto según tu sistema de sesión)
session_start();

// Destruir todas las variables de sesión
session_unset();

// Destruir la sesión
session_destroy();

// Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
header("Location: login.php");
exit();
?>
