import { buildDecoder } from 'io-ts-transformer'

import {User} from "./schema"

export const userValidator = buildDecoder<Array<User>>()
