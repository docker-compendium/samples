<?php

use Zend\Feed\Reader\Reader;

require 'vendor/autoload.php';

$feed = Reader::import('https://www.heise.de/newsticker/heise-atom.xml');

foreach($feed as $entry) {
  printf("* [%s]: %s\n",
    $entry->getDateModified()->format("Y-m-d H:i:s"),
    $entry->getTitle());
}
