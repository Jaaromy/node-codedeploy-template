#!/bin/bash
source ~/.bashrc
nvm install node
npm uninstall pm2 -g
npm install pm2@latest -g
npm install --prefix /opt/app/
pm2 update
pm2 delete all -s
pm2 uninstall all
cd /opt/app
pm2 start ecosystem.json --env $DEPLOYMENT_GROUP_NAME
sudo su -c "env PATH=$PATH:$(dirname $(nvm which node)) pm2 startup amazon -u $USER --hp $HOME"
pm2 save
