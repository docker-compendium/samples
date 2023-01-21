# Dockerfile for docbuc/apache-httpd-status (docbuc/httpd-status)
FROM httpd:2.4
RUN sed -i \
  -e 's/^#\(LoadModule info_module modules\/mod_info.so\)/\1/' \
  -e 's/^#\(Include conf\/extra\/httpd-info.conf\)/\1/' \
  conf/httpd.conf
RUN sed -i \
  -e 's/^ *Require host/## Require host/' \
  -e 's/^ *Require ip/## Require ip/' \
  conf/extra/httpd-info.conf
COPY ./html/ /usr/local/apache2/htdocs/

