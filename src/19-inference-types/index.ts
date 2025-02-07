import {createOrder}  from "./fruit-market"

type GetFirstArg<T> = any

const prefs: GetFirstArg<typeof createOrder> = {}

createOrder(prefs)