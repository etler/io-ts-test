import { buildDecoder } from "io-ts-transformer"

interface FilterQuery<F> {
  filters?: F
}

interface Filters {
  age: number
}

interface UserQuery extends FilterQuery<Filters> {
  name: string
}

export const idValidator = buildDecoder<UserQuery>()
