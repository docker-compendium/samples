docker-compose exec mongo1 mongo --host 'rs0/mongo1:27017,mongo2:27017,mongo3:27017' diary --eval '
db.users.insert({"user":"info@dockerbuch.info","public":false,"pass":"$2b$10$PY3p2eGZ2TrOEoD4dvNRhOIbKV2xjabSq.8TUxcU0afQYuQ8tavYS"})
'
