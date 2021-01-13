import express from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
import { NewsModel, NewsModelInterface } from "../models/NewsModel";

const isValidObjectId = mongoose.Types.ObjectId.isValid;

class NewsController {
    async index(_: any, res: express.Response) {
        try {
            const news = await NewsModel.find().sort({ createdAt: "-1" }).exec();

            res.json({
                status: "success",
                data: news,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error,
            });
        }
    }

    async show(req: any, res: express.Response): Promise<void> {
        try {
            const userId = req.params.id;

            if (!isValidObjectId(userId)) {
                res.status(400).send();

                return;
            }

            const user = await NewsModel.findById(userId).exec();

            if (!user) {
                res.status(404).send();

                return;
            }

            res.json({
                status: "success",
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error,
            });
        }
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                res.status(400).json({ status: "error", errors: errors.array() });

                return;
            }

            const data: NewsModelInterface = {
                title: req.body.title,
                text: req.body.text,
            };

            const news = await NewsModel.create(data);

            res.status(201).json({
                status: "success",
                data: news,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error,
            });
        }
    }
}

export const NewsCtrl = new NewsController();
