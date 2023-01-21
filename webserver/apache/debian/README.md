# webserver/apache/debian

```bash
$ docker build -t docbuc/apache-debian .
$ docker run -d -P --name apache-debian docbuc/apache-debian
$ docker port apache-debian

  80/tcp -> 0.0.0.0:32772 
```

open http://0.0.0.0:32772/ 
