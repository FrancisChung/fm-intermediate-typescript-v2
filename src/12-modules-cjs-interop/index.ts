// ES Modules named imports & exports
import { Blueberry, Raspberry } from './berries'
import Kiwi from './kiwi' // default import
export function makeFruitSalad() {} // named export
export default class FruitBasket {} // default export
export { lemon, lime } from './citrus' // re-export
export * as berries from './berries' //


// Namespace imports
import * as allBerries from './berries'
allBerries.Strawberry
allBerries.Blueberry
allBerries.Raspberry

// export * as berries from "./berries'

// Importing Types
let x: Raspberry = {color: "red"}
const y = new Raspberry('black')

// Type Only Imports
// Used when you need the types for type-checking and not actually instantiating it

import type {Strawberry} from "./berries/strawberry"

let z:Strawberry = {color: 'red'}
// new Strawberry()    // cant instantiate because of import type instead of import

// CommonJS Interop
import * as bananaNamespace from './banana'
const banana = new bananaNamespace.Banana()
banana.peel()

import * as melonNamespace from './melon'
import Melon = require('./melon')
// Be careful with enabling esModuleInterop, as all clients will be forced to use this

const melon = new Melon()
melon.cutIntoSlices()


