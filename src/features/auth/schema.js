import * as yup from "yup";

export const schema = yup.object({
  username: yup
    .string()
    .required("Username is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(2, "Password must be at least 4 characters"),
});
