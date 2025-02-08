import {createOrder}  from "./fruit-market"

// type GetFirstArg<T> = any
//const prefs: GetFirstArg<typeof createOrder> = {}
//createOrder(prefs)

//


// Infer only works on T below (1st part of the conditional) and not the P  (2nd part)
type UnwrapPromise<P> = P extends PromiseLike<infer T> ? T : P

type inftest1 = UnwrapPromise<Promise<string>>
type inftest2 = UnwrapPromise<Promise<[string[], number[]]>>
type inftest3 = UnwrapPromise<Promise<number>>

type OneArgFn<A = any> = (firstArg: A, ... _args: any[]) => void

//type GetFirstArg<T extends OneArgFn>
//    = T extends OneArgFn ? string[] : never;

type GetFirstArg<T extends OneArgFn>
    = T extends OneArgFn<infer R> ? R[] : never;



function foo(x: string, y:number) {
    return null
}

type t1= GetFirstArg<typeof foo>

// const prefs: GetFirstArg<typeof createOrder> = {}
// createOrder(prefs)

// Constraints to Infer examples

type GetFirstStringIshElement<T> = T extends readonly [
    infer S extends string,
    ..._ : any[]
] ? S : never

const t1 = ['success', 2, 1, 4] as const
const t2 = [4, 54, 5]
let firstT1 : GetFirstStringIshElement<typeof t1>
let firstT2 : GetFirstStringIshElement<typeof t2>
