import mongoose from "mongoose";

const blogpostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [100, "Title should not be more than 120 chars"],
    },
    body: {
      type: String,
      required: [true, "Blog Body is required"],
      trim: true,
      maxLength: [500, "Blog Body is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blogpost", blogpostSchema);
