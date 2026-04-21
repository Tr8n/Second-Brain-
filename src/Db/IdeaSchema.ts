import mongoose, { Model, Schema } from "mongoose";

export interface IIdeaLink {
  name: string;
  url: string;
}

export interface IIdea {
  taskName: string;
  content: string;
  tags: string[];
  postLinks: IIdeaLink[];
  importance: 1 | 2 | 3 | 4 | 5;
  ideaDate: Date;
}

const ideaLinkSchema = new Schema<IIdeaLink>(
  {
    name: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const ideaSchema = new Schema<IIdea>(
  {
    taskName: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    // Starts as empty. User can create tags later.
    tags: { type: [String], default: [] },
    postLinks: { type: [ideaLinkSchema], default: [] },
    importance: { type: Number, min: 1, max: 5, default: 3 },
    ideaDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically.
  }
);

const IdeaModel: Model<IIdea> =
  mongoose.models.Idea || mongoose.model<IIdea>("Idea", ideaSchema);

export default IdeaModel;
