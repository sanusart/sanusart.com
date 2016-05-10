#!/usr/bin/env bash

# Build and push to remote via RSYNC
cd ~/clone
bundle install
bourbon install --path=src/css
npm install
gulp release --min
rsync -avz -e "ssh" ~/clone/_site/. $CODESHIP_REMOTE_PATH
