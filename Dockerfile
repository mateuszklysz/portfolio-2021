FROM node:alpine
RUN apk update && \
  apk --no-cache add shadow \                                                                   
  gcc \                                                                                         
  musl-dev \                                                                                    
  autoconf \                                                                                    
  automake \                                                                                    
  make \                                                                                        
  libtool \                                                                                     
  nasm \                                                                                        
  tiff \                                                                                        
  jpeg \                                                                                        
  zlib \                                                                                        
  zlib-dev \                                                                                    
  file \                                                                                        
  pkgconf \     
  nginx    
WORKDIR /srv/www
COPY package*.json ./
RUN npm i
COPY . .
RUN ["npm", "run", "build"]
RUN mkdir -p /run/nginx             
COPY /nginx-config/nginx.conf /etc/nginx/
RUN rm -r nginx-config                                                 
CMD ["nginx", "-g", "daemon off;"]


