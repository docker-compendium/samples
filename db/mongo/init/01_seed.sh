mongoimport --db geonames --collection geoname \
  --type tsv \
  --fields=geonameid,\
name,\
asciiname,\
alternatenames,\
latitude,\
longitude,\
feature_class,\
feature_code,\
country_code,\
cc2,\
admin1_code,\
admin2_code,\
admin3_code,\
admin4_code,\
population,\
elevation,\
dem,\
timezone,\
modification_date\
 /docker-entrypoint-initdb.d/DE.txt
