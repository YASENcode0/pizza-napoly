class Order {
    
  constructor(type, toppings, note, price) {
    this.id = 0;
    this.type = type || "normal";
    this.toppings = toppings;
    this.note = note || null;
    this.price = price;
  }
}

export default Order;
