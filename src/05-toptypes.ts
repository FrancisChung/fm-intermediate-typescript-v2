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

