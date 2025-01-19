interface HasId {
    id: string
}

interface Dict<T> {
    [k: string] : T
}

interface ColorWithId extends HasId {
    color?: string
}

const myColour : ColorWithId = {id: 'a', color: 'green'}
// myColour.color.substring(0,3)    // color is undefined because of ColorWithId
const newColour = {id: 'a', color: 'green'} satisfies ColorWithId


const testArr = [
    {id: 'a', color: 'green'},
    {id: 'b', color: 'red'},
    {id: 'c', color: 'blue'}
]

function listToDict<T extends HasId>(list: T[]) : Dict<T> {
    const dict: Dict<T> = {}

    list.forEach((item) => {
        dict[item.id] = item
    })
    return dict
}