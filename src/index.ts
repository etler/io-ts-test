import { buildDecoder } from "io-ts-transformer"


export const idValidator = buildDecoder<string>()
