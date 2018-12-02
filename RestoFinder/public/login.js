(function(){
    angular
        .module("RestoFinder")
        .config(configuration);

    function configuration($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';


        $routeProvider
            .when("/login", {
                templateUrl: "./login.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "./register.html",
                controller: "RegisterController"
            })
    }

})();