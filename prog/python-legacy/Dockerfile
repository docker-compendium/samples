FROM python:2.7
RUN pip install --no-cache-dir matplotlib==2.1.2
WORKDIR /tmp
RUN curl -L http://download.osgeo.org/geos/geos-3.6.1.tar.bz2 \
	> geos.tar.bz2 \
  && tar xf geos.tar.bz2 && cd geos-3.6.1/ \
  && export GEOS_DIR=/usr/local \
  && ./configure --prefix=$GEOS_DIR \
  && make && make install \
  && rm -rf /tmp/geos-3.6.1/ /tmp/geos.tar.bz2
RUN curl -L https://downloads.sourceforge.net/project/matplotlib/matplotlib-toolkits/basemap-1.0.7/basemap-1.0.7.tar.gz > basemap.tar.gz \
  && cd /tmp && tar zxf basemap.tar.gz \
  && cd basemap-1.0.7 && python setup.py install \
  && rm -rf /tmp/basemap-1.0.7 /tmp/basemap.tar.gz
WORKDIR /src
COPY *.py /src/
USER www-data
CMD [ "python", "main.py" ]

