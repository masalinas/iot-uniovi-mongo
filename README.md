# Description
Iot MongoDB Docker Service

## Create and start service
```shell
docker-compose up -d
```

## Stop service
```shell
docker-compose stop
```

## Restart service
```shell
docker-compose start
```

## Remove service resources
```shell
docker-compose down
```

## Get service logs
```shell
docker-compose logs
```

## Connect from mongo shell
```shell
mongo -u admin -p --authenticationDatabase iotdb
```

## Connect from mongoDB compass
Use this uri:

```shell
mongodb://admin:uniovi@localhost:27017/iotdb
```

![MongoDB Compass](captures/mongo_compass.png "MongoDB Compass")