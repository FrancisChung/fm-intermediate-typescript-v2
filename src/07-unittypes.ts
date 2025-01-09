// Unit Types

let myNull : null = null
let myUndefined : undefined = undefined

myNull = undefined
myUndefined = null

// Void Types

let myVoid : void = (function() {})()

myVoid = undefined
myVoid = null

myUndefined = myVoid
myNull = myVoid