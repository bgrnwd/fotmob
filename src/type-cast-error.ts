export class CastingError extends Error {
    constructor(message: any) {
        super(message);
        this.name = "CastingError";
    }
}
