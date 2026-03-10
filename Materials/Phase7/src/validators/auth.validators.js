import { body } from "express-validator";

export const registerValidators = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be 2-50 characters long"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be 2-50 characters long"),

  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Valid email is required")
    .isLength({ max: 100 })
    .withMessage("Email must be at most 100 characters long"),

  body("password")
    .isLength({ min: 8, max: 100 })
    .withMessage("Password must be 8-100 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number"),

  body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["reserver", "manager", "administrator"])
    .withMessage("Role must be reserver, manager, or administrator"),
];

export const loginValidators = [
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];