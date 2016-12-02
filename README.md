# containerized-services

docker-compose files for upstarting containerized development dependencies

## Configuring your network

First of all, make executable the file networkdef.sh

```bash
$ chmod +x network/networkdef.sh
```

Make sure that your docker container networking has only the default networks, with:

```bash
$ docker network ls
```

After checking your networks, execute:

```bash
$ ./network/networkdef.sh
```

## Initializing mongodb

### Sharded Replicas

Take a look at [this](https://docs.mongodb.com/manual/tutorial/deploy-shard-cluster/) documentation before proceeding.

***ATTENTION***: you should have the latest version of docker-compose in order to start the containers compose.

Proceed to execute docker-compose on the mongo/sharded-replica directory. (Take a look to the compose file in order to need to create directories).

```bash
$ cd mongo/sharded-replica
$ docker-compose up -d
```