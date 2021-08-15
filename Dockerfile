FROM node:alpine

ARG OVH_AK
ARG OVH_AS
ARG OVH_CK

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
  nginx  \
  certbot  \
  certbot-nginx \ 
  curl \
  openssl
RUN curl https://get.acme.sh | sh -s email=mateuszklysz@outlook.com
WORKDIR /root/.acme.sh  
RUN ./acme.sh --issue -d mateuszklysz.pl -d www.mateuszklysz.pl --dns dns_ovh
WORKDIR /srv/www
COPY package*.json ./
RUN npm i
COPY . .
RUN ["npm", "run", "build"]
RUN mkdir -p /run/nginx             
COPY /nginx-config/nginx.conf /etc/nginx/
RUN rm -r nginx-config      
EXPOSE 80 443  
CMD ["nginx", "-g", "daemon off;"]


