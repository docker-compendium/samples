# webserver/apache/httpd-status

```bash
$ docker build -t docbuc/apache-httpd-status .
$ docker run -d -P --name apache-httpd-status docbuc/apache-httpd-status
$ docker port apache-httpd-status

  80/tcp -> 0.0.0.0:32772 
```

open http://0.0.0.0:32772/server-status 
