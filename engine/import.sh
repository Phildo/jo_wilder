#!/bin/bash

BLOCK=0
FILE=""
ARGS=""
while IFS='' read -r LINE || [[ -n "$LINE" ]]; do
  if [ $BLOCK == 0 ]; then
    ARGS="`echo $LINE | sed 's/.*SAVE //'`"
    FILE="`./filefrom.sh $ARGS`"
    touch $FILE
    $BLOCK=1;
  else
    if [ "@$LINE" == "@" ]; then
      $BLOCK=0;
    else
      echo $line >> $FILE
    fi
  fi
done < "$1"

