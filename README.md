# Selenium Practice Application
This application was created and is shared only to support Training 360 Kft Selenium workshops

## How to run

### Pure docker container 

`cd` into the directory there you checked out the code.

```bash
$ docker build -t t360/selenium-practice .
```

```bash
$ docker run -p '9999:80' t360/selenium-practice 
```

### Docker compose way

`cd` into the directory there you checked out the code.

```bash
$ docker-compose up
```