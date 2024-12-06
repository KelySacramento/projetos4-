import * as yup from "yup";
import { Schema } from "yup";
import {
  IPurchase,
  IPurchaseList,
  IPurchaseResponse,
} from "../interfaces/purchases.interfaces";

const productPurchaseSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  price: yup.number().required(),
  discount: yup.number().required(),
  quantity: yup.number().required(),
  total: yup.number().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

const purchaseResponseSchema: Schema<IPurchaseResponse> = yup.object({
  paymentID: yup.number().required(),
  purchaseStatus: yup.string().required(),
  qrCode: yup.string().optional(),
  product_purchases: yup.array(productPurchaseSchema).required(),
}) as Schema<IPurchaseResponse>;

const purchaseRequestSchema: Schema<{ purchases: IPurchase[] }> = yup.object({
  purchases: yup
    .array(
      yup.object({
        paymentID: yup.number().required(),
        purchaseStatus: yup.string().required(),
        qrCode: yup.string().optional(),
        productId: yup.number().required(),
        quantity: yup.number().required(),
      })
    )
    .required(),
}) as Schema<{ purchases: IPurchase[] }>;

const listAllPurchaseSchema: Schema<IPurchaseResponse[]> = yup.array(
  yup.object({
    paymentID: yup.number().required(),
    purchaseStatus: yup.string().required(),
    qrCode: yup.string().optional(),
    product_purchases: yup.array(productPurchaseSchema).required(),
  })
) as Schema<IPurchaseResponse[]>;

const listPurchaseSchema: Schema<IPurchaseList[]> = yup.array(
  yup.object({
    paymentID: yup.number().required(),
    purchaseStatus: yup.string().required(),
    qrCode: yup.string().optional(),
  })
) as Schema<IPurchaseList[]>;

const updatePurchaseSchema: Schema<{
  id: string;
  paymentID: number;
  purchaseStatus: string;
  qrCode: string;
  createdAt: Date;
  updatedAt: Date;
}> = yup.object({
  id: yup.string().required(),
  paymentID: yup.number().required(),
  purchaseStatus: yup.string().required(),
  qrCode: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
}) as Schema<{
  id: string;
  paymentID: number;
  purchaseStatus: string;
  qrCode: string;
  createdAt: Date;
  updatedAt: Date;
}>;

export {
  purchaseRequestSchema,
  purchaseResponseSchema,
  listAllPurchaseSchema,
  listPurchaseSchema,
  updatePurchaseSchema,
};
