<?php

$protocol = (empty($_SERVER['HTTPS']) ? 'http' : 'https');
$host = $_SERVER['HTTP_HOST'];
$requestUri = $_SERVER['REQUEST_URI'];

$url = $protocol . "://" . $host . $requestUri;

if (substr($requestUri, -4) === '.php') {
    $urlFolder =  dirname($url) . "/";
} else {
    $urlFolder =  $url;
}

echo $urlFolder;
