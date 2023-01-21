// Datei: db/mongo-auth/init/adduser.js
db.createUser({user: 'geonames', pwd: 'secret',
      roles: [{role: 'readWrite', db: 'geonames'}]});
