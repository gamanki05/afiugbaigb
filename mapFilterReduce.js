const products = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Shoes", price: 90 },
  { id: 3, title: "Book", price: 25 },
  { id: 4, title: "Phone", price: 850 },
  { id: 5, title: "T-shirt", price: 20 }
];

// -------- MAP --------
// Δώσε 10% έκπτωση σε όλα τα προϊόντα
const discounted = products.map(p => ({
  ...p,
  price: p.price * 0.9
}));
console.log("MAP → discounted:", discounted);

// -------- FILTER --------
// Κράτα μόνο όσων η τιμή είναι πάνω από 100€
const expensive = products.filter(p => p.price > 100);
console.log("FILTER → expensive:", expensive);

// -------- REDUCE --------
// Υπολόγισε συνολικό κόστος όλων των προϊόντων
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log("REDUCE → total cost:", total);