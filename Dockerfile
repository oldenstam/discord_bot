FROM ubuntu

ENV TZ=Europe/Stockholm
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update && apt install -y nodejs npm
RUN npm install discord.js

WORKDIR /app
ADD app /app

CMD [ "node", "app.js" ]