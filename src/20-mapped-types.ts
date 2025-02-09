//Recall Index Signature

type Fruit = {
    name: string
    color: string
    mass: number
}

type Dict<T> = {[k: string] : T | undefined}

const fruitCatalog: Dict<Fruit> = {}
fruitCatalog.apple

// First Mapped Type

//type MyRecord = {[FruitKey in 'apple' | 'cherry']: Fruit}

function printFruitCatalog(fruitCatalog: MyRecord) {
    fruitCatalog.cherry
    fruitCatalog.apple
    //fruitCatalog.pineapple // can only be apple or cherry
}

// A Record is a dictionary with specific keys (e.g. Cherry + Apple above)

// Record Examples

type AnyPossibleKey = keyof any
type MyRecord<K extends keyof any, V> = {[Key in K]: V}

type Record<K extends keyof any, T>= {[P in K]: T}

const myFruit : Record<"first" | "second", Fruit>
//myFruit.first
//myFruit.second

//const y: Window["document"]

type PartOfWindow = {
    [Key in "document" | "navigator" | "setTimeout"] : Window[Key]
}

type PickWindowProperties<Keys extends keyof Window> = {
    [Key in Keys]: Window[Key]
}

// Pick

type PartOfWindow2 = PickWindowProperties<"document" | "navigator" | "setTimeout">

type PickProperties<ValueType, Keys extends keyof ValueType> = {
    [Key in Keys]: ValueType[Key]
}

type PartOfWindow3 = PickProperties<Window, "document" | "navigator" | "setTimeout">

// Mapping Modifiers

//Make all properties in T Optional
type _Partial<T> = {
    [P in keyof T] ?: T[P]
}

//Make all properties in T Required
type _Required<T> = {
    [P in keyof T]-?: T[P]
}

//Make all properties in T Readonly
type _Readonly<T> = {
    readonly [P in keyof T] : T[P]
}