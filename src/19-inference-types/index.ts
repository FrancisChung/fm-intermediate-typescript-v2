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


//* Parameters<T>

/**
 * Obtain the parameters of a function type in a tuple
 */
type _Parameters
/**
 * The typeParam passed in, must be some subtype of a call signature,
 * which can take any number of arguments of any types, and can
 * have any return type
 */
    <T extends (...args: any) => any>
/**
 * As long as `T` matches a call signature, capture all of the args
 * (as a ...rest) parameter in a new tuple typeParam `P`
 */
    = T extends (...args: infer P) => any
    ? P // and then return the tuple
    : never; // or return never, if the condition is not matched

//* ConstructorParameters<T>
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type _ConstructorParameters
/**
 * The typeParam passed in, must be some subtype of a construct
 * signature.
 *
 * The `abstract` keyword lets this also work with abstract classes,
 * which can potentially have an `abstract` constructor
 */
    <T extends abstract new (...args: any) => any>
/**
 * As long as `T` matches a construct signature, capture all of the
 * args (as a ...rest) parameter in a new tuple typeParam `P`
 */
    = T extends abstract new (...args: infer P) => any
    ? P // and then return the tuple
    : never; // or return never, if the condition is not matched

//* ReturnType<T>
/**
 * Obtain the return type of a function type
 */
type _ReturnType
/**
 * The typeParam passed in must be some subtype of a call signature
 */
    <T extends (...args: any) => any>
/**
 * As long as `T` matches the call signature, capture the return type
 * in a new typeParam `R`
 */
    = T extends (...args: any) => infer R
    ? R // and then return it
    : any; // otherwise return any