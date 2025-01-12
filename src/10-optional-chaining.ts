// Optional Chaining

type Payment = {
    id: string
    amount: number
    createdAt: Date
}

type Invoice = {
    id: string
    due: number
    payments : Payment[]
    lastPayment?: Payment
    createdAt: Date
}

type Customer = {
    id: string
    lastInvoice?: Invoice
    invoices: Invoice[]
}

type ResponseData = {
    customers?: Customer[]
    customer?: Customer
}