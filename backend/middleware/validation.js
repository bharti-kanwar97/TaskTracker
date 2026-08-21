import {body, validationResult} from 'express-validator'

var validationRegistration = [
    body("name").notEmpty().withMessage("Name is required")
    .isLength({min: 3}).withMessage("Name must be at least 3 characters long")
    .matches(/^[A-Za-z\s]+$/).withMessage("Name must contain only alphabets"),
    
    body("email").notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Enter a valid email address")
    .normalizeEmail()
     .custom((value) => {
        const domain = value.split("@")[1];

        const allowedDomains = [
            "gmail.com",
            "yahoo.com",
            "outlook.com"
        ];

        if(!allowedDomains.includes(domain)){
            throw new Error("Email provider is not allowed");
        }

        return true;
    }),
    body("password").notEmpty().withMessage("Password is required")
    .isLength({min: 8}).withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/).withMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    (req,res,next) => {
        const error = validationResult(req)
        if(!error.isEmpty())
        {
            return res.status(400).json({errors: error.array()})
        }
        next()
    }
]
export default validationRegistration;