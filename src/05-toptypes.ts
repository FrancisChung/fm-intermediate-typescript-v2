// Top Types

// any
let flexible: any = 4
flexible = window.document
flexible = setTimeout

console.log(window, promise, setTimeout, 'foo')

// unknown

let flexible2: any = 4
flexible2 = window.document
flexible2 = setTimeout

let myUnknown : unknown = 14

if (typeof myUnknown === 'string') {
    myUnknown
} else if (typeof myUnknown === 'number') {
    myUnknown
} else {
    myUnknown
}

// Practical Uses of Top Types

function doSomethingRisky() {
    if (Math.random() > 0.5) {return ok}
    else if (Math.random() > 0.5 {throw new Error('Bad Luck')}
    else throw 'Really bad luck;'
}

try {
    doSomethingRisky()
}
catch (e:unknown) {
    if (e instanceof Error) {
        e
    } else if (typeof e === 'string') {
        e
    } else {
        console.error(e)
    }
}

// Almost Top Type : Object

let val: object = { status : 'ok'}
// val = 'foo' // string not an object
// val = null     // null is not an onject (???)
val = () => 'ok'

let response =
    {success: 'ok', data: []} as {success: string; data: unknown } | { error: string, code: number}

val = response