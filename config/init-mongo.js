//db = db.getSiblingDB("admin");

db.createUser({
    user: "admin",
    pwd: "uniovi",
    roles: [
      {
        role: "dbOwner",
        db: "iotdb"
      }
    ]
  })

//db = db.getSiblingDB("iotdb");

db.createCollection("Measure")  