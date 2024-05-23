"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../products/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrderDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // Find the product by ID
    const product = yield product_model_1.default.findOne({ _id: data.productId });
    // Check if the product exists and has sufficient inventory
    if (product &&
        ((_a = product.inventory) === null || _a === void 0 ? void 0 : _a.quantity) !== undefined &&
        product.inventory.quantity >= data.quantity) {
        // Decrease the product inventory by the ordered quantity
        yield product_model_1.default.updateOne({ _id: data.productId }, { $inc: { 'inventory.quantity': -data.quantity } });
        // Re-fetch the product to check the updated inventory status
        const productAfterDeduction = yield product_model_1.default.findOne({
            _id: data.productId,
        });
        // If the inventory quantity reaches zero, update the inStock status
        if (((_b = productAfterDeduction === null || productAfterDeduction === void 0 ? void 0 : productAfterDeduction.inventory) === null || _b === void 0 ? void 0 : _b.quantity) === 0) {
            yield product_model_1.default.updateOne({ _id: data.productId }, { $set: { 'inventory.inStock': false } });
        }
        // Create the order
        return yield order_model_1.default.create(data);
    }
    else {
        // Indicate insufficient inventory
        return null;
    }
});
const getOrderDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch orders based on the email query parameter
    if (!email) {
        // If no email is provided, fetch all orders
        return yield order_model_1.default.find({});
    }
    else {
        // Fetch orders for the specific email
        return yield order_model_1.default.find({ email });
    }
});
const OrderService = {
    createOrderDB,
    getOrderDB,
};
exports.default = OrderService;
