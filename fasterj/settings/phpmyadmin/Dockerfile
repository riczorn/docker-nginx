FROM phpmyadmin/phpmyadmin
WORKDIR "/application"
RUN /bin/mkdir /application/pma\
  && /bin/mv /application/*.php /application/pma/ &> /dev/null
