#!/bin/bash

# zur sicherheit alle npm Pakete installieren
npm i

API_BASE=${API_BASE:-https://diaryapi.dockerbuch.info}

sed -i "s|^const apiBase = .*$|const apiBase = '$API_BASE'|" \
	  /src/vue/config/index.js

exec "$@"
