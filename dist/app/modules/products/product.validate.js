"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZProductSchema = void 0;
const zod_1 = require("zod");
const ZVariantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const ZInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().positive().int(),
    inStock: zod_1.z.boolean(),
});
exports.ZProductSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string(),
    inventory: ZInventorySchema,
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(ZVariantSchema),
});
