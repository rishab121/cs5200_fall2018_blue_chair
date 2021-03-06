(function () {
    angular
        .module("RestoFinder")
        .config(configuration);

    function configuration($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';


        $routeProvider
            .when("/", {
                templateUrl: "./views/home.view.html",
                controller: "HomeController"
            })
            .when("/search", {
                templateUrl: "./views/search.view.html",
                controller: "SearchController"
            })
            .when("/login", {
                templateUrl: "./views/login.view.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "./views/register.view.html",
                controller: "RegisterController"
            })
            .when("/user/:userId", {
                templateUrl: "./views/user.view.html",
                controller: "UserController"
            })
            .when("/restaurant/:restaurantId", {
                templateUrl: "./views/restaurant.view.html",
                controller: "RestaurantController"
            })
            .when("/restaurants", {
                templateUrl: "./views/restaurants.view.html",
                controller: "RestaurantsController"
            })
            .when("/admin", {
                templateUrl: "./views/admin.view.html",
                controller: "AdminController"
            })
            .when("/create-restaurant", {
                templateUrl: "./views/create-restaurant.view.html",
                controller: "CreateRestaurantController"
            })
            .when("/update-restaurant/:restaurantId", {
                templateUrl: "./views/update-restaurant.view.html",
                controller: "UpdateRestaurantController"
            })
            .when("/update-user/:userId", {
                templateUrl: "./views/update-user.view.html",
                controller: "UpdateUserController"
            })
            .when("/favorites/:userId", {
                templateUrl: "./views/favorites.view.html",
                controller: "FavoritesController"
            })
            .when("/create-favorite/:userId", {
                templateUrl: "./views/create-favorite.view.html",
                controller: "CreateFavoriteController"
            })
            .when("/update-favorite/:userId/:restaurantId", {
                templateUrl: "./views/update-favorite.view.html",
                controller: "UpdateFavoriteController"
            });
    }

})();