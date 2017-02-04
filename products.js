var products = [
{
	name: "Bowling Shoes",
	description: "These shoes will make it easy to glide down any lane.",
	price: "$74.95",
	url: "",
	availability: "Men's and Women's sizes available."
},
{
	name: "Red Bowling Ball",
	description: "This red 12lb bowling ball will will help you knock out the competition.",
	price: "$99.95",
	url: "",
	availability: "Call for availability of other colors."
},
{
	name: "Yellow Bowling Ball",
	description: "This yellow 11lb bowling ball is the perfect conversation starter.",
	price: "89.95",
	url: "",
	availability: "Call for availability of other colors."
},
{
	name: "Black Bowling Ball",
	description: "This black 10lb bowling ball will bowl you away!",
	price: "79.95",
	url: "",
	availability: "Call for availability of other colors."
},
{
	name: "Bowling Pins",
	description: "You can't bowl without bowling pins!",
	price: "$104.95 per set",
	url: "",
	availability: "Ask about our bulk discounts"
},
{
	name: "Pin Setter Parts",
	description: "Why call a professional, when you can fix it yourself?",
	price: "$5.99 per cog",
	url: "",
	availability: "Only available for professional grade pin-setters"
},
{
	name: "Cleaning Cloths",
	description: "Keep it clean!",
	price: "$14.99",
	url: "",
	availability: "Available in black or white"
},
{
	name: "Bowling Alley Wax",
	description: "Make it shine!",
	price: "$12.99 for 16oz",
	url: "",
	availability: "Ask about our bulk discounts"
}];
console.log(products);
var p_name = document.getElementById().innerHTML;
var p_description = document.getElementById().innerHTML;
var p_price = document.getElementById().innerHTML;
var p_url = document.getElementById().innerHTML;
var p_availability = document.getElementById().innerHTML;
for (i=0; i < products.length; i++) {
	p_name.innerHTML = products[i].name;
	p_description.innerHTML = products[i].description;
	p_price.innerHTML = products[i].price;
	p_url.innerHTML = products[i].url;
	p_availability.innerHTML =products[i].availability;
}
