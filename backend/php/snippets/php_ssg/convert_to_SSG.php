<?php

function convertToHTML($phpFolder, $htmlFolder) {
    $phpFiles = glob("$phpFolder/*.php");

    foreach ($phpFiles as $phpFile) {
        $pageName = basename($phpFile);
        $htmlFileName = "$htmlFolder/" . str_replace('.php', '.html', $pageName);

        ob_start();
        include $phpFile;
        $content = ob_get_clean();

        if (!is_dir($htmlFolder)) {
            mkdir($htmlFolder, 0777, true);
        }

        file_put_contents($htmlFileName, $content);

        echo "$phpFile converted to $htmlFileName\n";
    }
}

function copyPublicFolder($phpFolder, $htmlFolder) {
    $publicFolder = "$phpFolder/public";
    $htmlPublicFolder = "$htmlFolder/public";

    if (is_dir($publicFolder)) {
        if (!is_dir($htmlPublicFolder)) {
            mkdir($htmlPublicFolder, 0777, true);
        }

        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($publicFolder, RecursiveDirectoryIterator::SKIP_DOTS),
            RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $item) {
            $targetPath = "$htmlPublicFolder/" . $iterator->getSubPathName();

            if ($item->isDir()) {
                mkdir($targetPath);
            } else {
                copy($item, $targetPath);
                echo "Copied: $item\n";
            }
        }

        echo "Public folder copied to $htmlPublicFolder\n";
    }
}

function updateHrefPaths($htmlFolder) {
    $htmlFiles = glob("$htmlFolder/*.html");

    foreach ($htmlFiles as $htmlFile) {
        $content = file_get_contents($htmlFile);

        // Update href="../" paths to reflect the new directory structure
        $content = str_replace('href="../', 'href="/', $content);

        // Update links with .php extension to .html
        $content = str_replace('.php"', '.html"', $content);

        file_put_contents($htmlFile, $content);

        echo "Updated paths in $htmlFile\n";
    }
}

$phpFolder = 'php_website'; // Change this to your PHP folder name
$htmlFolder = 'html_website'; // Change this to your HTML folder name

convertToHTML($phpFolder, $htmlFolder);
copyPublicFolder($phpFolder, $htmlFolder);
updateHrefPaths($htmlFolder);
