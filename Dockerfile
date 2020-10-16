FROM node:10
ADD https://raw.githubusercontent.com/vinay2388/react-app/main/build.sh /opt/apps/
WORKDIR /opt/apps/
ARG user
ARG pass
ARG giturl
ARG apiurl
RUN export username=$user
RUN export password=$pass
RUN export REACT_APP_API_URL=$giturl
ENV export REACT_APP_API_URL=$REACT_APP_API_URL
RUN chmod -R 777 /opt/apps/build.sh
RUN ./build.sh
RUN npm install -g serve
RUN npm install -g env-cmd
RUN chmod -R 777 /opt/apps/run.sh
CMD ./run.sh