require('dotenv').config();

export default {
  'port': process.env.PORT || 3500,
  'mongo_uri': process.env.MONGO_URI || "mongodb://localhost/crud-express-mongodb"
};