// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Fish",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Sausage",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "Organic Beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 15.00
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.00
	},
	{
		name: "Organic Blueberrie",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00
	},
	{
		name: "Organic Bananas",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.50
	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 12.00
	},
	{
		name: "Tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "Gluten free whole grain bagel",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 6.50
	},
	{
		name: "Gluten free Muffin",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.20
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}