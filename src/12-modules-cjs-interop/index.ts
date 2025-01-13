// ES Modules named imports & exports
import { Blueberry, Raspberry } from './berries'
import Kiwi from './kiwi' // default import
export function makeFruitSalad() {} // named export
export default class FruitBasket {} // default export
export { lemon, lime } from './citrus' // re-export
export * as berries from './berries' //


let x: Raspberry = {color: "red"}

// Namespace imports
import * as allBerries from './berries'
allBerries.Strawberry
allBerries.Blueberry
allBerries.Raspberry

export * as berries from "./berries'