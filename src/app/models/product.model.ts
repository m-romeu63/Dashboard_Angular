export class Product {
  private _id: number;
  private _productName: string;
  private _price: number;
  private _salesNumber: number;
  private _totalRevenue: number;

  static productLength = 1;

  constructor(productName: string, price: number, salesNumber: number, totalRevenue: number) {
    this._id = Product.productLength;
    this._productName = productName;
    this._price = price;
    this._salesNumber = salesNumber;
    this._totalRevenue = totalRevenue;

    Product.productLength ++;
  }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter productName
     * @return {string}
     */
	public get productName(): string {
		return this._productName;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter salesNumber
     * @return {number}
     */
	public get salesNumber(): number {
		return this._salesNumber;
	}

    /**
     * Getter totalRevenue
     * @return {number}
     */
	public get totalRevenue(): number {
		return this._totalRevenue;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter productName
     * @param {string} value
     */
	public set productName(value: string) {
		this._productName = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter salesNumber
     * @param {number} value
     */
	public set salesNumber(value: number) {
		this._salesNumber = value;
	}

    /**
     * Setter totalRevenue
     * @param {number} value
     */
	public set totalRevenue(value: number) {
		this._totalRevenue = value;
	}

}
