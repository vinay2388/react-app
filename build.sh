#!/bin/bash
if [[ -z "${username}" && -z "${password}" ]]; then
  gitUrl=$giturl
fi
echo $giturl
apt-get update
apt-get install -y zip unzip
git clone ${gitUrl} /opt/apps/react
cp /opt/apps/react/run.sh /opt/apps
cd /opt/apps/react
export REACT_APP_API_URL=${REACT_APP_API_URL}
npm install
npm run build
cd /opt/apps/
mkdir reactproject
cd /opt/apps/react
mv build /opt/apps/reactproject
mv package.json /opt/apps/reactproject
cd /opt/apps/
zip -r reactapp reactproject
rm -rf reactproject
rm -rf react