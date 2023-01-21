# hello-world-node

```bash
$ docker build -t docbuc/hello-world-node .
$ docker run -d -P --name hello-world docbuc/hello-world-node
$ docker port hello-world

  8080/tcp -> 0.0.0.0:32772 
```

now open http://0.0.0.0:32772/ 
