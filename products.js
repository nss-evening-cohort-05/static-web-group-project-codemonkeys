var products = [
{
	name: "Bowling Shoes",
	description: "These shoes will make it easy to glide down any lane.",
	price: "$74.95",
	url: "/images/bowling-shoes.jpg",
	availability: "Men's and Women's sizes available."
},
{
	name: "Red Bowling Ball",
	description: "This red 12lb bowling ball will will help you knock out the competition.",
	price: "$99.95",
	url: "/images/bowling-ball-2.jpg",
	availability: "Call for availability of other colors."
},
{
	name: "Yellow Bowling Ball",
	description: "This yellow 11lb bowling ball is the perfect conversation starter.",
	price: "89.95",
	url: "/images/bowling-ball-1.jpg",
	availability: "Call for availability of other colors."
},
{
	name: "Black Bowling Ball",
	description: "This black 10lb bowling ball will bowl you away!",
	price: "79.95",
	url: "/images/bowling-ball-3.jpg",
	availability: "Call for availability of other colors."
},
{
	name: "Bowling Pins",
	description: "You can't bowl without bowling pins!",
	price: "$104.95 per set",
	url: "/images/bowling-pins.jpg",
	availability: "Ask about our bulk discounts"
},
{
	name: "Pin Setter Parts",
	description: "Why call a professional, when you can fix it yourself?",
	price: "$5.99 per cog",
	url: "/images/pinsetter-gears.jpg",
	availability: "Only available for professional grade pin-setters"
},
{
	name: "Cleaning Cloths",
	description: "Keep it clean!",
	price: "$14.99",
	url: "/images/cleaning-cloth.jpg",
	availability: "Available in black or white"
},
{
	name: "Bowling Alley Wax",
	description: "Make it shine!",
	price: "$12.99 for 16oz",
	url: "/images/Lane-oil.jpg",
	availability: "Ask about our bulk discounts"
}];
for (i=0; i < products.length; i++) {
	var p_url = document.getElementById("pic" + i);
	var p_name = document.getElementById("name" + i);
	var p_description = document.getElementById("description" + i);
	var p_price = document.getElementById("price" + i);
	var p_availability = document.getElementById("availability" + i)
	p_name.innerHTML = products[i].name;
	p_description.innerHTML = products[i].description + "<br>";
	p_price.innerHTML = products[i].price + "<br>";
	p_url.innerHTML = "<img src=" + products[i].url + ">";
	p_availability.innerHTML =products[i].availability;
}
