//* Generic Constraints - A motivating use case
const phoneList = [
    { customerId: '0001', areaCode: '321', num: '123-4566' },
    { customerId: '0002', areaCode: '174', num: '142-3626' },
    { customerId: '0003', areaCode: '192', num: '012-7190' },
    { customerId: '0005', areaCode: '402', num: '652-5782' },
    { customerId: '0004', areaCode: '301', num: '184-8501' },
]
const phoneDict = {
    '0001': {
        customerId: '0001',
        areaCode: '321',
        num: '123-4566',
    },
    '0002': {
        customerId: '0002',
        areaCode: '174',
        num: '142-3626',
    },
    /*... and so on */
}

function listToDict<T>(
    list: T[],
    idGen: (arg: T) => string
) : {[k: string]: T} {
    const dict: { [k: string]: T } = {}

    for (let item of list) {
        dict[idGen(item)] = item
    }
    return dict
}