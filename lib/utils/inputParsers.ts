import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import {FloatingPointNotSupportedError, InvalidSizeError, UseBigNumberError} from "../errors";

// Convert Constructor Inputs to BigNumbers
export const emptyValueToZero = (x) => x ? x : 0;
export const notFloat = (x: number): boolean => x % 1 === 0;

export const inputTypeToBigNumber = (value?: string | BigNumber | number): BigNumber | Error => {
    if (!value) {
        return new BigNumber(0);
    }

    try {
        const bn = new BigNumber(value);
        if (!bn.isInteger()) {
            return new FloatingPointNotSupportedError();
        }

        return bn;
    } catch (e) {
        return e;
    }
};

export const sizeCheckUint = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    return numSize <= size ? value : new InvalidSizeError(numSize);
};

export const sizeCheckInt = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    // If number is positive add 1 to account for sign (+/-)
    const adjustedSize = value >= new BigNumber(0) ? numSize + 1 : numSize;
    return adjustedSize <= size ? value : new InvalidSizeError(adjustedSize);
};
