import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

var EndpointSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cellPhone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });


export default mongoose.model('endpoints', EndpointSchema);