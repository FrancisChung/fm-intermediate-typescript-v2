
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


export default {banana, Fruit}