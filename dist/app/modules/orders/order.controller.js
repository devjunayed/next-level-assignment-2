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
exports.OrderController = void 0;
const order_service_1 = __importDefault(require("./order.service"));
const order_validate_1 = __importDefault(require("./order.validate"));
// Function to create a new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // Validate the request body against the Zod schema
        const zodParsedData = order_validate_1.default.parse(data);
        // Create the order in the database
        const result = yield order_service_1.default.createOrderDB(zodParsedData);
        // Check if there was insufficient inventory for the order
        if (result === null) {
            res.status(500).json({
                success: false,
                message: 'Insufficient quantity available in inventory',
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Order created successfully!',
                data,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not create order!',
        });
    }
});
// Function to get orders based on user email
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        // Fetch the orders from the database
        const result = yield order_service_1.default.getOrderDB(email);
        // Check if no orders were found
        if (result.length === 0) {
            res.status(500).json({
                success: false,
                message: 'Order not found',
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: email
                    ? 'Orders fetched successfully for user email!'
                    : 'Orders fetched successfully!',
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not get order!',
        });
    }
});
exports.OrderController = {
    createOrder,
    getOrder,
};
