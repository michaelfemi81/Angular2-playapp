upstream referral {
    server 169.50.9.245:6065;
}
upstream glance {
    server 169.50.9.245:6069;
}
upstream recharge {
    server 169.50.9.245:6066;
}

upstream trends {
    server 169.50.9.245:6080;
}

upstream website{
	server 169.50.9.245:8080;
}
upstream newsfeed{
	server 169.50.9.245:6060;
}
upstream sms{
	server 169.50.9.245:8082;
}
upstream admin{
	server 169.50.9.245:8081;
}
upstream settlement{
	server 169.50.9.245:6066;
}
upstream wallet{
	server 169.50.9.251:3000;
}
upstream main{
    
    server 169.50.9.245:8086;
}
#******************************************************************* getbonus.ng ***********************************************
server {
        listen 80;

       #ssl on;
       #ssl_certificate /root/cert/server.cert.crt;
       #ssl_certificate_key /root/server.key;


       server_name getbonus.ng;
  
        access_log /var/log/nginx/main.awoofapp.com.access.log;
  
        error_log /var/log/nginx/main.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://website;
        }
}

#******************************************************************* admin.getbonus.ng ***********************************************/

server {
        listen 80;

       #ssl on;
       #ssl_certificate /root/cert/server.cert.crt;
       #ssl_certificate_key /root/server.key;


       server_name admin.getbonus.ng;
  
        access_log /var/log/nginx/awoofapp.com.access.log;
  
        error_log /var/log/nginx/awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://admin;
        }
}

#******************************************************************* sms.getbonus.ng ***********************************************/

server {
        listen 80;

       server_name sms.getbonus.ng;
  
        access_log /var/log/nginx/sms.awoofapp.com.access.log;
  
        error_log /var/log/nginx/sms.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://sms;
        }
}


#******************************************************************* payment.getbonus.ng ***********************************************/

server {
        listen 80;

       server_name payment.getbonus.ng;
  
        access_log /var/log/nginx/payment.awoofapp.com.access.log;
  
        error_log /var/log/nginx/payment.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://payment;
        }
}

#******************************************************************* main.awoofapp.com ***********************************************/

server {
        listen 80;

       server_name main.awoofapp.com;
  
        access_log /var/log/nginx/payment.awoofapp.com.access.log;
  
        error_log /var/log/nginx/payment.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://main;
        }
}




#******************************************************************* newsfeed.getbonus.ng ***********************************************/

server {
        listen 80;

       server_name newsfeed.getbonus.ng;
  
        access_log /var/log/nginx/newsfeed.awoofapp.com.access.log;
  
        error_log /var/log/nginx/newsfeed.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://newsfeed;
        }
}


#***************************************************** wallet.getbonus.ng ************************************************************/
server {
        listen 80;

       server_name wallet.getbonus.ng;
  
        access_log /var/log/nginx/wallet.awoofapp.com.access.log;
  
        error_log /var/log/nginx/wallet.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://wallet;
        }
}

#***************************************************** referral.getbonus.ng ************************************************************/
server {
        listen 80;

       server_name referral.getbonus.ng;
  
        access_log /var/log/nginx/refferal.awoofapp.com.access.log;
  
        error_log /var/log/nginx/refferal.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://referral;
        }
}

#***************************************************** settlement.getbonus.ng ************************************************************/
server {
        listen 80;

       server_name settlement.getbonus.ng;
  
        access_log /var/log/nginx/recharge.awoofapp.com.access.log;
  
        error_log /var/log/nginx/recharge.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://recharge;
        }
}

#***************************************************** trends.getbonus.ng ************************************************************/
server {
        listen 80;

       server_name trends.getbonus.ng;
  
        access_log /var/log/nginx/trends.awoofapp.com.access.log;
  
        error_log /var/log/nginx/trends.awoofapp.com.error.log;

        
        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types       text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
            proxy_set_header   Connection "";
            proxy_pass http://trends;
        }
}

#******************************************************************* glance.getbonus.ng *********$

server {
        listen 80;

       #ssl on;
       #ssl_certificate /root/cert/server.cert.crt;
       #ssl_certificate_key /root/server.key;


       server_name glance.getbonus.ng;
  
        access_log /var/log/nginx/glance.getbonus.ng.access.log;
  
        error_log /var/log/nginx/glance.getbonus.ng.error.log;


        gzip             on;
        gzip_min_length  1000;
        gzip_proxied     expired no-cache no-store private auth;
        gzip_types	 text/plain application/xml text/json;
        gzip_comp_level  7;
 
        location / {
            proxy_redirect off;
            proxy_set_header   X-Real-IP            $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host                   $http_host;
            proxy_set_header   X-NginX-Proxy    true;
                    proxy_set_header   Connection "";
            proxy_pass http://glance;
        }
}






