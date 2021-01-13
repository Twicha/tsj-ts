import { model, Schema, Document } from "mongoose";

export interface NewsModelInterface {
    _id?: string;
    title: string;
    text: string;
}

type NewsModelDocumentInterface = NewsModelInterface & Document;

const NewsSchema = new Schema<NewsModelInterface>(
    {
        title: {
            required: true,
            type: String,
        },
        text: {
            required: true,
            type: String,
        },
    },
    { timestamps: true }
);

export const NewsModel = model<NewsModelDocumentInterface>("News", NewsSchema);
