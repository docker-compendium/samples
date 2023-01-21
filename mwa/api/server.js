// Datei: mwa/api/server.js
const express = require("express"),
  cors = require("cors"),
  MongoClient = require('mongodb').MongoClient,
  debug = require("debug")("api"),
  session = require('express-session'),
  redis = require('redis'),
  RedisStore = require('connect-redis')(session),
  routes = require('./routes'),
  app = express();

const port = process.env.PORT || 3000;
const mongourl = process.env.MONGO_URL || 'mongodb://mongo:27017'
const secretsalt = process.env.SECRETSALT || 'waitie0rah5ievooyeij8Ceez0quohcah6xe8aenoo'
const redisClient = redis.createClient({
  host: 'redis',
});
let mongoConnected = false;

app.use(cors({
  origin: 'https://diary.dokerbuch.info',
  credentials: true
}));
app.use(express.json());
app.use(session({
  store: new RedisStore({
    client: redisClient,
  }),
  saveUninitialized: false,
  secret: secretsalt,
  resave: false
}));
app.use('/', routes);
app.get("/health", (req, res) => {
  debug("health-check von ", req.ip);
  res.json({ healthy: true });
});
connect()
app.listen(port, () => {
  console.log("API-Server auf Port ", port);
});

setTimeout(function() {
  if (!mongoConnected) {
    connect();
  }
}, 15000);

function connect() {
  console.log('Verbinde mit MongoDB: ', mongourl);
  MongoClient.connect(mongourl, { useNewUrlParser: true,
      useUnifiedTopology: true },
    (err, client) => {
    mongoConnected = true;
    const diary = client.db('diary')
    app.set('db', diary);
  });
}
