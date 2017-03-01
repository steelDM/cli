#!/bin/sh

if [ $1 == 'dev' ]
then
   webpack --display-modules --display-chunks --config webpack.dev.config.js
fi

if [ $1 == 'rel' ]
then
   webpack --display-modules --display-chunks --config webpack.config.js
fi

