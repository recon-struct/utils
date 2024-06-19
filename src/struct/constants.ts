export const BYTE = 8

export const INT_TYPES = {
  Int16: 'Int16',
  Int32: 'Int32',
  Int8: 'Int8',
  Uint16: 'Uint16',
  Uint32: 'Uint32',
  Uint8: 'Uint8',
} as const

export const FLOAT_TYPES = {
  // Float16: 'Float16', // Not supported by TypeScript yet
  Float32: 'Float32',
  Float64: 'Float64',
} as const

export const BIGINT_TYPES = {
  BigInt64: 'BigInt64',
  BigUint64: 'BigUint64',
} as const

export const DATA_TYPES = {
  ...INT_TYPES,
  ...FLOAT_TYPES,
  ...BIGINT_TYPES,
} as const

export const DATA_TYPE_BYTE_LENGTHS = {
  [DATA_TYPES.BigInt64]: 8,
  [DATA_TYPES.BigUint64]: 8,
  // [DATA_TYPES.Float16]: 2, // Not supported by TypeScript yet
  [DATA_TYPES.Float32]: 4,
  [DATA_TYPES.Float64]: 8,
  [DATA_TYPES.Int16]: 2,
  [DATA_TYPES.Int32]: 4,
  [DATA_TYPES.Int8]: 1,
  [DATA_TYPES.Uint16]: 2,
  [DATA_TYPES.Uint32]: 4,
  [DATA_TYPES.Uint8]: 1,
} as const

export const STRUCT_TYPES = {
  Data: 'data',
  Tuple: 'tuple',
} as const
