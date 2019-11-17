import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});

import {
    Int,
    Int8Face,
    Int16Face,
    Int32Face,
    Int64Face,
    Int128Face,
    Int256Face,
    MetaInteger,
} from "./Interfaces";

import { bigNumberOrThrowError, pipe } from "./utils/utils";
import { buildMetaInt, composeObjects } from "./utils/metaIntFactory";
import { resultTyperInt, addMathMethods } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheckInt } from "./utils/inputParsers";

const signInteger = (metaInt: MetaInteger) => ( {...metaInt, _isPositive: metaInt._value >= new BigNumber(0)} );

const IntFactory = <T>(size: number) => (identifier: object) => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckInt(size),
    bigNumberOrThrowError,
    buildMetaInt(size),
    signInteger,
    addMathMethods<T>(resultTyperInt),
    composeObjects<T>(identifier),
    Object.freeze,
);

export const Int8 = (value?: string | BigNumber): Int8Face => IntFactory<Int8Face>(8)({_int8: true})(value);

export const Int16 = (value?: string | BigNumber): Int16Face => IntFactory<Int16Face>(16)({_int16: true})(value);

export const Int32 = (value?: string | BigNumber): Int32Face => IntFactory<Int32Face>(32)({_int32: true})(value);

export const Int64 = (value?: string | BigNumber): Int64Face => IntFactory<Int64Face>(64)({_int64: true})(value);

export const Int128 = (value?: string | BigNumber): Int128Face => IntFactory<Int128Face>(128)({_int128: true})(value);

export const Int256 = (value?: string | BigNumber): Int256Face => IntFactory<Int256Face>(256)({_int256: true})(value);

// Type Checkers
export const isInt8 = (x: Int): x is Int8Face => (x as Int8Face)._int8;
export const isInt16 = (x: Int): x is Int16Face => (x as Int16Face)._int16;
export const isInt32 = (x: Int): x is Int32Face => (x as Int32Face)._int32;
export const isInt64 = (x: Int): x is Int64Face => (x as Int64Face)._int64;
export const isInt128 = (x: Int): x is Int128Face => (x as Int128Face)._int128;
export const isInt256 = (x: Int): x is Int256Face => (x as Int256Face)._int256;
