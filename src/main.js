function applyDiscount(cost, discount) {
  discount = discount || 10;

  return cost - (cost * discount / 100);
}
