
import mongoose, { Schema, models } from 'mongoose';

const planSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  plans: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Plan = models.Plan || mongoose.model('Plan', planSchema);
export default Plan;
