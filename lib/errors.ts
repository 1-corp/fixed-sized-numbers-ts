export class TypeNotSupportedError extends Error {
    constructor() {
        super("Handling this type is not supported.");
    }
}
export class InvalidSizeError extends Error {
    constructor(val: number) {
        super(`Invalid size: ${val}`);
    }
}
export class NegativeUnsignedError extends Error {
    constructor(val: number) {
        super(`Cannot construct negative unsigned integers, value attempted: ${val}`);
    }
}
export class OverflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Overflow error: capacity ${capacity}, required: ${required}`);
    }

}
export class UnderflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Underflow error: capacity ${capacity}, required: ${required}`);
    }

}
export class InconsistentSizeError extends Error {
    constructor(a: number, b: number) {
        super(`Cannot perform operations on different sized numbers. Got ${a} and ${b}`);
    }
}
export class FloatingPointNotSupportedError extends Error {
    constructor() {
        super("This library currently only supports integers.");
    }
}
export class DivisionByZeroError extends Error {
    constructor() {
        super("Division by zero.");
    }
}

