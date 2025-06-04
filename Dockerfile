#for production 
#FROM nginx:alpine
#COPY ./dist /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx" , "-g" , "daemon off;"] 

#For dev mode 
FROM node:18-alpine 
WORKDIR /app 
COPY package*.json ./ 
RUN npm install 
COPY . . 
EXPOSE 5173 
CMD ["npm" , "run" , "dev" ] 
