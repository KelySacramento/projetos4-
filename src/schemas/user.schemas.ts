import * as yup from "yup";
import { Schema } from "yup";
import {
  IUserRequest,
  IUserLogin,
  IUserUpdate,
  IUserResponse,
} from "../interfaces/users.interfaces";

const userBaseSchema = {
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup
    .mixed<"male" | "female" | "other">()
    .oneOf(["male", "female", "other"])
    .required("Gender is required"),
  address: yup.string().required("Address is required"),
  number: yup.string().required("Number is required"),
  complement: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  postalCode: yup.string().required("Postal code is required"),
  email: yup.string().email().required("Email is required"),
  cellphone: yup.string().required("Cellphone is required"),
  cpfCnpj: yup.string().required("CPF/CNPJ is required"),
  foreignerDocument: yup.string().optional(),
  isAdmin: yup.boolean().optional(),
  image: yup.string().nullable().optional(),
};

const userRequestSchema: Schema<IUserRequest> = yup.object({
  ...userBaseSchema,
  password: yup.string().required("Password is required"),
}) as Schema<IUserRequest>;

const userWithoutPasswordSchema: Schema<IUserResponse> = yup.object({
  id: yup.string().required("ID is required"),
  ...userBaseSchema,
  createdAt: yup.date().required("CreatedAt is required"),
  updatedAt: yup.date().required("UpdatedAt is required"),
}) as Schema<IUserResponse>;

const userLoginSchema: Schema<IUserLogin> = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
}) as Schema<IUserLogin>;

const userUpdateSchema: Schema<IUserUpdate> = yup.object({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  gender: yup
    .mixed<"male" | "female" | "other">()
    .oneOf(["male", "female", "other"])
    .optional(),
  address: yup.string().optional(),
  number: yup.string().optional(),
  complement: yup.string().optional(),
  city: yup.string().optional(),
  state: yup.string().optional(),
  country: yup.string().optional(),
  postalCode: yup.string().optional(),
  email: yup.string().email().optional(),
  cellphone: yup.string().optional(),
  cpfCnpj: yup.string().optional(),
  foreignerDocument: yup.string().optional(),
  image: yup.string().nullable().optional(),
}) as Schema<IUserUpdate>;

const listAllUsersSchema: Schema<IUserResponse[]> = yup.array(
  userWithoutPasswordSchema
) as Schema<IUserResponse[]>;

export {
  userRequestSchema,
  userWithoutPasswordSchema,
  userLoginSchema,
  userUpdateSchema,
  listAllUsersSchema,
};
