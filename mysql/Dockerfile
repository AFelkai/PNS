FROM mysql:5.7
ADD my.cnf /etc/mysql/conf.d/my.cnf
COPY saps_setup.sql /mysql/saps_setup.sql
RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE=SAPS
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=user
ENV MYSQL_ROOT_PASSWORD=root

CMD ["mysqld"]
EXPOSE 3306

CMD ["mysql /mysql/saps_setup.sql"]
