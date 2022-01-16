var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })

    .when('/aboutus', {
        templateUrl: 'aboutus.html'


    })

    .when('/contactus', {
        templateUrl: 'contactus.html'


    })

    .when('/shopnow', {
        templateUrl: 'shopnow2.html'


    })





    // .when('/login', {
    //     templateUrl: 'login.html'


    // })




    .otherwise({
        redirectTo: '/'
    })
})

app.controller('myController', function($scope, $location) {



    $scope.submit1 = function() {



        $location.path('/')

    }


    $scope.submit2 = function() {



        $location.path('/aboutus')

    }




    $scope.submit3 = function() {



        $location.path('/contactus')

    }

    $scope.submit4 = function() {

            alert("Hello Good Day!!!")

            $location.path('/shopnow')

        }
        // $scope.submit = function() {



    //     $location.path('/login')






})






// var app = angular.module("myModule", [])
app.controller("myCntrl", function($scope, $http) {
    $scope.carts = []; //create a variable name carts, this will be the storage of the product that the buyer choose

    $scope.test = function() {
        alert("hello")
    }

    $http({
        method: 'GET',
        url: '/model/product.json'
    }).then(function(response) {
        $scope.products = response.data;
    });

    $scope.add_cart = function(product) { //set a function name add_cart
        if (product) { //check if the product is already declared within the function
            $scope.carts.push({ p_id: product.p_id, p_name: product.p_name, p_price: product.p_price }); //pushes the chosen product into a new variable called carts when the add to cart button is clicked
        }
    }


    $scope.total = 0; //display the default value of total

    $scope.setTotals = function(cart) { //set a function name setTotals 
        if (cart) { //check if cart is already set in the function
            $scope.total += cart.p_price; //sum the total value of each product
        }
    }

    $scope.remove_cart = function(cart) { //set a function called remove_cart
        if (cart) { //checked if the cart has a value
            $scope.carts.splice($scope.carts.indexOf(cart), 1); //delete a product based on the index 
            $scope.total -= cart.p_price; //deduct the price of the product  simultaneously when deleted
        }
    }
});