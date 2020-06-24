'use strict';

function ticket (price) {
  const iva = price * 0.21;
  const totalPrice = price + iva;
  return `Precio sin IVA: ${price}, IVA: ${iva} y Total: ${totalPrice}`;
}

let priceTicket = ticket (10);
console.log (priceTicket);

priceTicket = ticket (15);
console.log (priceTicket);

priceTicket = ticket (20);
console.log (priceTicket);
