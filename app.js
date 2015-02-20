(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'This is the end, my only friend, the ned....',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Ruby',
		price: 450.25,
		description: 'This one is red and pretty nice',
		canPurchase: true,
		soldOut: false,
	}
	];

})	();