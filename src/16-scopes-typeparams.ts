function eatApple(bowl: any, eater:(arg:any) => void) {}

function receiveFruitBasket(bowl: any) {
    console.log('Thanks for the fruit basket'
    eatApple(bowl, (apple:any) => {

    })
}

function tupleCreator<T>(first: T) {
    // inner function
    return function finish<S>(last: S): [T, S] {
        return [first, last]
    }
}
const finishTuple = tupleCreator(3 as const)
const t1 = finishTuple(null)
const t2 = finishTuple([4, 8, 15, 16, 23, 42])

function example1<T extends HasId[]>(list: T) {
    return list.pop()
    //      ^?
}
function example2<T extends HasId>(list: T[]) {
    return list.pop()
    //      ^?
}

class Payment implements HasId {
    static #next_id_counter = 1;
    id = `pmnt_${Payment.#next_id_counter++}`
}
class Invoice implements HasId {
    static #next_id_counter = 1;
    id = `invc_${Invoice.#next_id_counter++}`
}

const result1 = example1([
    //   ^?
    new Payment(),
    new Invoice(),
    new Payment()
])

const result2 = example2([
    //   ^?
    new Payment(),
    new Invoice(),
    new Payment()
])

/**/
export default {}