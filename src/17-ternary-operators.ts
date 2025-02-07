const x = 16
const isNegative = x >=0 ? "No" : "Yes"

class Grill {
    startGas() {}
    stopGas() {}
}

class Oven {
    setTemperature(degrees: number) {}
}

type CookingDevice<T> = T extends 'grill' ? Grill : Oven

let device1: CookingDevice<'grill'>
let device2 : CookingDevice<'oven'>

const one = 1
const two = 2
const ten = 10

type IsLowNumber<T> = T extends 1 | 2 ? true : false
type TestOne = IsLowNumber<1>
type TestTwo = IsLowNumber<2>
type TestTen = IsLowNumber<10>
type TestTenWithTwo = IsLowNumber<10 | 2>
