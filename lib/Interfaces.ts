import BigNumber from "bignumber.js";

export interface MetaInteger {
    _value: BigNumber;
    _size: number;
    validateSize(a: MetaInteger);
}

export type PreBigInteger = string | BigNumber | number;

export interface Uint8Face extends MetaInteger {
    _uint8: boolean;
    add(n: Uint8Face): Uint8Face;
    sub(n: Uint8Face): Uint8Face;
    mul(n: Uint8Face): Uint8Face;
    div(n: Uint8Face): Uint8Face;
}
export interface Uint16Face extends MetaInteger {
    _uint16: boolean;
    add(n: Uint16Face): Uint16Face;
    sub(n: Uint16Face): Uint16Face;
    mul(n: Uint16Face): Uint16Face;
    div(n: Uint16Face): Uint16Face;
}
export interface Uint32Face extends MetaInteger {
    _uint32: boolean;
    add(n: Uint32Face): Uint32Face;
    sub(n: Uint32Face): Uint32Face;
    mul(n: Uint32Face): Uint32Face;
    div(n: Uint32Face): Uint32Face;
}
export interface Uint64Face extends MetaInteger {
    _uint64: boolean;
    add(n: Uint64Face): Uint64Face;
    sub(n: Uint64Face): Uint64Face;
    mul(n: Uint64Face): Uint64Face;
    div(n: Uint64Face): Uint64Face;
}

export interface Uint128Face extends MetaInteger {
    _uint128: boolean;
    add(n: Uint128Face): Uint128Face;
    sub(n: Uint128Face): Uint128Face;
    mul(n: Uint128Face): Uint128Face;
    div(n: Uint128Face): Uint128Face;
}

export interface Uint256Face extends MetaInteger {
    _uint256: boolean;
    add(n: Uint256Face): Uint256Face;
    sub(n: Uint256Face): Uint256Face;
    mul(n: Uint256Face): Uint256Face;
    div(n: Uint256Face): Uint256Face;
}

export type Uint = Uint8Face | Uint16Face | Uint32Face | Uint64Face | Uint128Face | Uint256Face;

export interface Int8Face extends MetaInteger {
    _int8: boolean;
    _isPositive: boolean;
    add(n: Int8Face): Int8Face;
    sub(n: Int8Face): Int8Face;
    mul(n: Int8Face): Int8Face;
    div(n: Int8Face): Int8Face;
}
export interface Int16Face extends MetaInteger {
    _int16: boolean;
    _isPositive: boolean;
    add(n: Int16Face): Int16Face;
    sub(n: Int16Face): Int16Face;
    mul(n: Int16Face): Int16Face;
    div(n: Int16Face): Int16Face;
}
export interface Int32Face extends MetaInteger {
    _int32: boolean;
    _isPositive: boolean;
    add(n: Int32Face): Int32Face;
    sub(n: Int32Face): Int32Face;
    mul(n: Int32Face): Int32Face;
    div(n: Int32Face): Int32Face;
}
export interface Int64Face extends MetaInteger {
    _int64: boolean;
    _isPositive: boolean;
    add(n: Int64Face): Int64Face;
    sub(n: Int64Face): Int64Face;
    mul(n: Int64Face): Int64Face;
    div(n: Int64Face): Int64Face;
}

export interface Int128Face extends MetaInteger {
    _int128: boolean;
    _isPositive: boolean;
    add(n: Int128Face): Int128Face;
    sub(n: Int128Face): Int128Face;
    mul(n: Int128Face): Int128Face;
    div(n: Int128Face): Int128Face;
}

export interface Int256Face extends MetaInteger {
    _int256: boolean;
    _isPositive: boolean;
    add(n: Int256Face): Int256Face;
    sub(n: Int256Face): Int256Face;
    mul(n: Int256Face): Int256Face;
    div(n: Int256Face): Int256Face;
}

export type Int = Int8Face | Int16Face | Int32Face | Int64Face | Int128Face | Int256Face ;
