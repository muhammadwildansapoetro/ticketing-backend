"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
const generator = () => {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
};
exports.generator = generator;
