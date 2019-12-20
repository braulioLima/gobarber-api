#!/bin/bash

case $1 in
"--start")
    for i in "database" "mongobarber" "redisbarber";
      do
        docker start $i
      done
;;

"--stop")
    for i in "database" "mongobarber" "redisbarber";
      do
        docker stop $i
      done
;;
esac
