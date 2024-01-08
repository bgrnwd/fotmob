"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastingError = void 0;
class CastingError extends Error {
    constructor(message) {
        super(message);
        this.name = "CastingError";
    }
}
exports.CastingError = CastingError;
