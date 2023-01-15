import Joi from "joi";

const passSchema = Joi.string().min(3).max(10);

export default function validatePassword(password) {
 return passSchema.validate(password);
}; 
// by default can be exported only one item - foo function, or object of items
