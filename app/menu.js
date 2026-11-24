const menu = [
  { id: 1, dish: 'Masala Dosa', price: 40 },
  { id: 2, dish: 'Veg Biryani', price: 70 },
  { id: 3, dish: 'Filter Coffee', price: 15 },
];

function totalFor(order) {
  return order.reduce((sum, id) => {
    const item = menu.find((m) => m.id === id);
    if (!item) throw new Error(`Unknown dish id ${id}`);
    return sum + item.price;
  }, 0);
}

module.exports = { menu, totalFor };
