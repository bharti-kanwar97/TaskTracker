import {z} from 'zod';
const registrationSchema = z.object({
     name: z
     .string()
     .min(1, "Name is required")
     .min(3, "Name must be at least 3 characters long")
    .regex(/^[A-Za-z\s]+$/, {message:"Name must contain only alphabets"}),

     email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
 
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,{message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}),

 confirmPassword: z
    .string()
    .min(1, "Confirm Password is required")
    .min(8, "Confirm Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,{message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"})
})
 .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export default registrationSchema