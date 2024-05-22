import { Schema, model } from 'mongoose'
import { TInventory, TProduct, TVariant } from './product.interface'

const VariantSchema = new Schema<TVariant>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false },
)

const InventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false },
)

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    inventory: InventorySchema,
    tags: {
      type: [String],
      required: true,
    },
    variants: {
      type: [VariantSchema],
      required: true,
    },
  },
  { versionKey: false },
)

const ProductModel = model<TProduct>('Product', ProductSchema)

export default ProductModel
