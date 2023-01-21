mongo --host "rs0/mongo1,mongo2,mongo3" --eval 'db.users.insert({ "user":"info@dockerbuch.info","public":false,"pass":"$2b$10$PY3p2eGZ2TrOEoD4dvNRhOIbKV2xjabSq.8TUxcU0afQYuQ8tavYS" })'
