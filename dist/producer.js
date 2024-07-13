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
const _1 = __importDefault(require("."));
const producer = _1.default.producer();
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    // producer to connect
    yield producer.connect();
    yield producer.send({
        topic: "payments",
        messages: [
            { value: "this is message produced by consumer" },
            { value: "this is message 2 produced by consumer" },
            { value: "this is message 3 produced by consumer" },
        ],
    });
});
run().catch(console.error);
