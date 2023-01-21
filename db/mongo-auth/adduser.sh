mongo admin --username dockerbuch --password secret \
	--eval "db.createUser({user: 'geonames', pwd: 'secret',
      roles: [{role: 'readWrite', db: 'geonames'}]})"
