<?php
require 'vendor/autoload.php';
$Parsedown = new Parsedown();
$img = 'erto.jpg';
$exif = exif_read_data($img);
$md =  <<<EOD
![pic]($img)

# Exif information:

* Camera: {$exif['Make']}/{$exif['Model']}
* Date: {$exif['DateTimeOriginal']}
* Exposure time: {$exif['ExposureTime']}
* f-stop: {$exif['FNumber']}
* ISO: {$exif['ISOSpeedRatings']}
EOD;
echo $Parsedown->text($md);
