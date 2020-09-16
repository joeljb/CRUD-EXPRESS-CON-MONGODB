require('dotenv').config();
console.log('process.env.MONGO_URI')
console.log(process.env.MONGO_URI)
console.log('process.env.MONGO_URI')
export default {
  'port': process.env.PORT || 3500,
  'mongo_uri': process.env.MONGO_URI || "mongodb://localhost:27017/endpoints"
};