export default class Produto{
    #id: number
    #title: string
    #description: string
    #price: number
    #qttStorage: number

    constructor(title: string = '', description: string = '', price: number = 0, qttStorage: number = 0, id: number = 0) {
        this.#title = title
        this.#description = description
        this.#price = price
        this.#qttStorage = qttStorage
        this.#id = id
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }

    get description() {
        return this.#description
    }

    get price() {
        return this.#price
    }

    get qttStorage() {
        return this.#qttStorage
    }
 }