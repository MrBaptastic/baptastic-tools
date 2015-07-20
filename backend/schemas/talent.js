
import { Schema } from "mongoose";

export default new Schema({
  name:    { type: String, required: true },
  page:    { type: Number, required: false },
  summary: { type: String, required: false }
});
