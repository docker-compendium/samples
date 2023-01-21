docker build -t docbuc/python-legacy .
docker run -v ${PWD}:/src/out -u $UID:$GID docbuc/python-legacy
