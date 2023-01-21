print("Generate GeoJson points...");
let i = 0;
db.geoname.find().forEach(data => {
  i++;
  db.geoname.update( { _id: data._id }, {
    $set: { location: { type: "Point",
      coordinates: [parseFloat(data.longitude), parseFloat(data.latitude)] } }
  })
});
print(i + " points done, generate 2d-index...")
db.geoname.createIndex( { location: "2dsphere" } );
