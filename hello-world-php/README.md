# hello-world-php

```bash
$ docker build -t docbuc/hello-world-php .
$ docker run -d -P --name hello-world docbuc/hello-world-php
$ docker port hello-world

  80/tcp -> 0.0.0.0:32772
```

open http://0.0.0.0:32772/ 
