import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, trim: true,required:true },
    project: { type: String, trim: true },
    imgURL: { type: String },
    status: {
      type: String,
      trim: true,
    },
    
    description: { type: String, trim: true },

    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// middleware for delate
// this middleware is used to hide the deleted data from showing main data
projectSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
// this middleware is used to hide the deleted data from searching individual
projectSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
projectSchema.pre('findOneAndUpdate', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
export const Project = model<TProject>('Project', projectSchema);
