export class Product {
    private _productId: number;
    private _productName: string;
    private _price: number;

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get productName(): string {
        return this._productName;
    }
    public set productName(value: string) {
        this._productName = value;
    }
    public get productId(): number {
        return this._productId;
    }
    public set productId(value: number) {
        this._productId = value;
    }

    constructor(id: number, name: string, price: number) {
        this.productId = id;
        this.productName = name;
        this.price = price;
    }
    print(): string {
        return `Name:${this._productName}, Id:${this._productId}, Price:${this._price}`
    }
}