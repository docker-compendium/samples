#!/bin/bash

# zur sicherheit alle npm Pakete installieren
npm i
exec "$@"
