import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name cannot exceed 50 characters")
    .required("Full Name is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),

  status: yup
    .string()
    .oneOf(["Student", "Employee"], "Invalid status")
    .required("Status is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
});

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
