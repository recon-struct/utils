import type { Add } from '@recon-struct/utility-types'
import type {
  BIGINT_TYPES,
  DATA_TYPES,
  DATA_TYPE_BYTE_LENGTHS,
  FLOAT_TYPES,
  INT_TYPES,
  STRUCT_TYPES,
} from './constants'

export type BigintTypes = typeof BIGINT_TYPES

export type BigintTypeKeys = BigintTypes[keyof BigintTypes]

export type FloatTypes = typeof FLOAT_TYPES

export type IntTypes = typeof INT_TYPES

export type NumberTypeKeys = (IntTypes | FloatTypes)[keyof (
  | IntTypes
  | FloatTypes
)]

export type DataTypes = typeof DATA_TYPES

export type DataTypeKeys = DataTypes[keyof DataTypes]

export type MethodName<A extends DataTypeKeys = DataTypeKeys> =
  `${'get' | 'set'}${A}`

export type DataTypeByteLengths = typeof DATA_TYPE_BYTE_LENGTHS

export interface DataBase<A extends number> {
  byteLength: A
}

export interface StructData<A extends DataTypeKeys = DataTypeKeys>
  extends DataBase<DataTypeByteLengths[A]> {
  type: typeof STRUCT_TYPES.Data
  dataType: A
}

export interface StructTuple<A extends AnyStruct[] = AnyStruct[]>
  extends DataBase<TupleByteLength<A>> {
  type: typeof STRUCT_TYPES.Tuple
  items: A
}

export type AnyStruct = StructData | StructTuple

export type TupleByteLength<
  A extends AnyStruct[],
  B extends number | bigint = 0,
> = A extends []
  ? B
  : A extends [infer C extends AnyStruct, ...infer E extends AnyStruct[]]
    ? TupleByteLength<E, Add<C['byteLength'], B>>
    : B

export type Scalar = number | bigint

export type ScalarArray = (Scalar | ScalarArray)[]

export type StructItemValue<A extends StructData> =
  A['dataType'] extends BigintTypeKeys ? bigint : number

export type StructItemsValue<
  A extends AnyStruct[],
  B extends ScalarArray = [],
> = A extends []
  ? B
  : A extends [infer C extends AnyStruct, ...infer E extends AnyStruct[]]
    ? StructItemsValue<E, [...B, StructValue<C>]>
    : B

export type StructValue<A extends AnyStruct> = A extends StructData
  ? StructItemValue<A>
  : A extends StructTuple
    ? StructItemsValue<A['items']>
    : Scalar
