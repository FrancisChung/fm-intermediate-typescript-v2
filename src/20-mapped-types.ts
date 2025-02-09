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

type MyRecord = {[FruitKey in 'apple' | 'cherry']: Fruit}

function printFruitCatalog(fruitCatalog: MyRecord) {
    fruitCatalog.cherry
    fruitCatalog.apple
    fruitCatalog.pineapple
}

// A Record is a dictionary with specific keys (e.g. Cherry + Apple above)



