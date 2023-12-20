export class CastingError extends Error {
    constructor(message) {
        super(message);
        this.name = "CastingError";
    }
}
