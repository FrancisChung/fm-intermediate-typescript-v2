
// identifiers
interface Fruit {
    name: string
    mass: number
    color: string
}

const banana : Fruit = {
    name: 'banana',
    color: 'yellow',
    mass: 183
}

function Fruit(kind: string) {
    switch (kind) {
        case 'banana':
            return banana
        default:
            throw new Error(`Unknown kind ${kind} of fruit. Not Supported`)
    }
}

//Namespace
namespace Fruit {
    function createBanana(): Fruit {
        return Fruit('banana')
    }

    createBanana()
}

//Tests
const is_a_value = 4
type is_a_type = {}
namespace is_a_namespace {
    const foo = 17
}

const x = is_a_value
const z: is_a_type = {}
//is_a_namespace

class Fruit2 {
    name?: string
    mass?: number
    color?: string
    static createBanana() {
        return {name: 'banana', color: 'yellow', mass: 183}
    }
}

//test for value
const valueTest = Fruit2
valueTest.createBanana()

//test for type
let typeTest: Fruit = {} as any
typeTest.color


export default {banana, Fruit, Fruit2}