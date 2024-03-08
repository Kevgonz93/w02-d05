/* eslint-disable max-params */
export class item {
  #description;
  #price;
  #amount;

  constructor(description, price, amount) {
    this.#description = description;
    this.#price = price;
    this.#amount = amount;
  }
  getItemsValue(){
    return (item) => item.#price * item.#amount
  }
}

export class Enterprise {
  #name;
  #address;
  #phone;
  #ifn;

  static 
  constructor(name, address, phone, ifn){
    this.#name =name;
    this.#address =address;
    this.#phone =phone;
    this.#ifn= ifn;
  }
}

export class invoice{
  #brand;
  #enterprise;
  #items;
  #total;
  #ivaType;
  #paymentForm

  constructor(brand, enterprise, items, total, ivaType=4, paymentForm='VISA') {
    this.#brand = brand;
    this.#enterprise = enterprise;
    this.#items =items;
    this.#total = this.calcularImporte();
    this.#ivaType=ivaType;
    this.#paymentForm=paymentForm;
  }
}


/*
export const invoice = new Invoice (
  new Enterprise('ISDI', 'Ca Viriato 20', '123123123', 'X-12312345'),
  new Enterprise('Coderhouse', 'Ca Aquinolleganadie 10', '123456789', 'X-12345678'),
  [
    new item('libro1', 1,10),
    new item('libro2', 2,20),
    new item('libro3', 3,30),
  ],
)
*/

calculaImporte() {
  this.#items.map((items)=>item.getItemsValue()).reduce((a,b) => a+b )
}

muestraImporte() {
  const IVA =this.#total * this.ivaType /100

  console.log(`
  total: {this.#total}
  IVA: ${IVA}
  total + IVA: ${this.total + IVA} `)
};

invoice.muestraImporte();


