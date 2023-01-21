#!/bin/bash
# Datei: mwa/api/dev-entrypoint.sh

# zur sicherheit alle npm Pakete installieren
npm i
exec "$@"
