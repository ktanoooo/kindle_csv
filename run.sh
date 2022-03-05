#!/bin/bash

set -eux

xmlpath=$1
charset=$2

yarn webpack

curl "https://gist.githubusercontent.com/ktanoooo/54cb81d199560a006b61a2508aa0f5fb/raw/2347b95bb9f62d6d75267f30cef45ae66bc259a1/iconv-lite-encodings-list.json" > dist/encodings_list.json

mkdir -p output
node ./dist/index.js $xmlpath $charset
