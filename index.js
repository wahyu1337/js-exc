// 1

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: 15, rating: 4.5 },
  { id: 2, name: "Coffee Mug", price: 12, category: "Home", inStock: 0, rating: 4.2 },
  { id: 3, name: "Smartphone", price: 699, category: "Electronics", inStock: 8, rating: 4.7 },
  { id: 4, name: "Desk Chair", price: 149, category: "Furniture", inStock: 3, rating: 3.9 },
  { id: 5, name: "Headphones", price: 79, category: "Electronics", inStock: 12, rating: 4.1 }
];

// Tasks:

// Map: Create a display array with just name and formatted price (e.g., "$999.00")

// Filter: Find all electronics products that are in stock

// Reduce: Calculate the total value of all inventory (price × inStock for each item)

// Combo: Find the average rating of all products with price > $50

const productsName = products.map(item => ({
    name: item.name,
    price: `$${item.price}.00`
}));

console.log('TASK 1.1: ')
console.log(productsName);

// 1.2

const electronicsProducts = products.filter(item => item.inStock > 0 && item.category === "Electronics");
console.log('TASK 2.2: ')
console.log(electronicsProducts)

// 1.3

const productValue = products.reduce((total, product) => total + (product.price * product.inStock), 0)
console.log('TASK 1.3: ')
console.log(productValue)

// 1.4
const ExpensiveProduct = products.filter(item => item.price > 50)
const averageRating = ExpensiveProduct.reduce((sum, product) => (sum + product.rating), 0 ) / ExpensiveProduct.length
console.log('TASK 1.4: ')
console.log(averageRating)