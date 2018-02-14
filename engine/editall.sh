#!/bin/bash

for i in `find ../assets/data -name '*.meta' | grep "/$1/[^/]*\.meta" | xargs`; do
  echo -n "edit $i? (y/(n)/q):"
  read r
  if [ @$r == "@" ] || [ @$r == "@n" ]; then
    continue
  elif [ @$r == "@y" ]; then
    vim $i
  else
    exit 0
  fi
done
