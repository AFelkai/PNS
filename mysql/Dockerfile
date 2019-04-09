FROM mysql:5.7
ADD my.cnf /etc/mysql/conf.d/my.cnf
ADD saps_setup.sql /docker-entrypoint-initdb.d
COPY setup_database.sh /mysql/setup_database.sh
COPY saps_setup.sql /mysql/saps_setup.sql
RUN chown -R mysql:root /var/lib/mysql/

#ARG MYSQL_DATABASE=SAPS
#ARG MYSQL_USER=default_user
#ARG MYSQL_PASSWORD=secret
#ARG MYSQL_ROOT_PASSWORD=root

ENV MYSQL_DATABASE=SAPS
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root
ENV MYSQL_ROOT_PASSWORD=root

#RUN chmod +x /mysql/setup_database.sh
#RUN /mysql/setup_database.sh

CMD ["mysqld"]
EXPOSE 3306
