import * as yup from "yup";
import { Schema } from "yup";
import {
  IProduct,
  IProductUpdate,
  IRegisterProduct,
  IListProductPurchases,
} from "../interfaces/products.interfaces";

// Product purchases schema
const productPurchasesSchema = yup.object({
  id: yup.number().required(),
  quantity: yup.number().required(),
  createdAt: yup.date().optional(),
  updatedAt: yup.date().optional(),
  deletedAt: yup.date().nullable().optional(),
}) as Schema<IListProductPurchases>;

// Register product request schema
const registerProductRequestSchema: Schema<IRegisterProduct> = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  size: yup.string().required(),
  imageUrl: yup.string().optional(),
  category: yup.string().required(),
  instock: yup.number().required(),
  tags: yup.array().of(yup.string()).optional(),
  reviews: yup.array().of(yup.string()).optional(),
  productAvailable: yup.string().required(),
  brand: yup.string().required(),
  carouselImages: yup.array().of(yup.string()).required(),
  price: yup.number().required(),
  discount: yup.number().required(),
  expirationDate: yup.date().required(),
}) as Schema<IRegisterProduct>;

// List all product schema
const listAllProductSchema: Schema<IProduct[]> = yup.array(
  yup.object({
    id: yup.number().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    size: yup.string().required(),
    imageUrl: yup.string().optional(),
    category: yup.string().required(),
    instock: yup.number().required(),
    tags: yup.array().of(yup.string()).optional(),
    reviews: yup.array().of(yup.string()).optional(),
    productAvailable: yup.string().required(),
    brand: yup.string().required(),
    carouselImages: yup.array().of(yup.string()).required(),
    createdAt: yup.date().optional(),
    updatedAt: yup.date().optional(),
    deletedAt: yup.date().nullable().optional(),
    productsPurchases: yup.array(productPurchasesSchema).optional(),
    price: yup.number().required(),
    discount: yup.number().required(),
    expirationDate: yup.date().required(),
  })
) as Schema<IProduct[]>;

// Update product schema
const updateProductSchema: Schema<IProductUpdate> = yup.object({
  name: yup.string().optional(),
  description: yup.string().optional(),
  size: yup.string().optional(),
  imageUrl: yup.string().optional(),
  category: yup.string().optional(),
  instock: yup.number().optional(),
  tags: yup.array().of(yup.string()).optional(),
  reviews: yup.array().of(yup.string()).optional(),
  productAvailable: yup.string().optional(),
  brand: yup.string().optional(),
  carouselImages: yup.array().of(yup.string()).optional(),
  createdAt: yup.date().optional(),
  updatedAt: yup.date().optional(),
  deletedAt: yup.date().nullable().optional(),
  productsPurchases: yup.array(productPurchasesSchema).optional(),
  price: yup.number().optional(),
  discount: yup.number().optional(),
  expirationDate: yup.date().optional(),
}) as Schema<IProductUpdate>;

export {
  registerProductRequestSchema,
  listAllProductSchema,
  updateProductSchema,
};
