#/bin/bash
set eo -x
docker network create -d bridge --subnet 172.25.0.0/16 backend
docker network create -d bridge --subnet 172.26.0.0/24 frontend