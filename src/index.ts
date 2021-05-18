import { buildDecoder } from 'io-ts-transformer'

interface Flavoring<FlavorT> {
  _type?: FlavorT
}

type Flavor<T, FlavorT> = T & Flavoring<FlavorT>

type Id = Flavor<string, "user">

export const idValidator = buildDecoder<Id>()
