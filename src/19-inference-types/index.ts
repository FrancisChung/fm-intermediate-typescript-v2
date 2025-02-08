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

const prefs: GetFirstArg<typeof createOrder> = {}
createOrder(prefs)