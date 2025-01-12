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

// Using Type guards but a lot of noise in the code
function getLastPayment(data: ResponseData): number | undefined {
    const {customer} = data
    if (!customer) return

    const {lastInvoice} = customer
    if (!lastInvoice) return

    const {lastPayment} = lastInvoice
    if (!lastPayment) return

    return lastPayment.amount
}