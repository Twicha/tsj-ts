import { body } from "express-validator";

export const createNewsValidations = [
    body("title", "Введите заголовок")
        .isString()
        .isLength({ min: 1 })
        .withMessage("Допустимое кол-во символов от 1."),
    body("text", "Введите содержимое новости")
        .isString()
        .isLength({ min: 1 })
        .withMessage("Допустимое кол-во символов от 1."),
];
