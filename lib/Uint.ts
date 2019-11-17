import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});

import {
    Uint,
    Uint8Face,
    Uint16Face,
    Uint32Face,
    Uint64Face,
    Uint128Face,
    Uint256Face, PreBigInteger,
} from "./Interfaces";

import { NegativeUnsignedError } from "./errors";
import { bigNumberOrThrowError, pipe } from "./utils/utils";
import { buildMetaInt, composeObjects } from "./utils/metaIntFactory";
import { resultTyperUint, addMathMethods } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheckUint } from "./utils/inputParsers";

const noNegativeUnsignedInteger = (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    return value.isPositive() ? value : new NegativeUnsignedError(value.toNumber());
};

const UintFactory = <T>(size: number) => (identifier: object) => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckUint(size),
    noNegativeUnsignedInteger,
    bigNumberOrThrowError,
    buildMetaInt(size),
    addMathMethods<T>(resultTyperUint),
    composeObjects<T>(identifier),
    Object.freeze,
);

export const Uint8 = (value?: PreBigInteger): Uint8Face => UintFactory<Uint8Face>(8)({_uint8: true})(value);

export const Uint16 = (value?: PreBigInteger): Uint16Face => UintFactory<Uint16Face>(16)({_uint16: true})(value);

export const Uint32 = (value?: PreBigInteger): Uint32Face => UintFactory<Uint32Face>(32)({_uint32: true})(value);

export const Uint64 = (value?: PreBigInteger): Uint64Face => UintFactory<Uint64Face>(64)({_uint64: true})(value);

export const Uint128 = (value?: PreBigInteger): Uint128Face => UintFactory<Uint128Face>(128)({_uint128: true})(value);

export const Uint256 = (value?: PreBigInteger): Uint256Face => UintFactory<Uint256Face>(256)({_uint256: true})(value);

// Type Checkers
export const isUint8 = (x: Uint): x is Uint8Face => (x as Uint8Face)._uint8;
export const isUint16 = (x: Uint): x is Uint16Face => (x as Uint16Face)._uint16;
export const isUint32 = (x: Uint): x is Uint32Face => (x as Uint32Face)._uint32;
export const isUint64 = (x: Uint): x is Uint64Face => (x as Uint64Face)._uint64;
export const isUint128 = (x: Uint): x is Uint128Face => (x as Uint128Face)._uint128;
export const isUint256 = (x: Uint): x is Uint256Face => (x as Uint256Face)._uint256;
