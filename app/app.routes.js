app.config(function ($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/menu');
    
        $stateProvider
    
            .state('menu', {
                url: '/menu',
                templateUrl: 'views/menu.html'
            })
            

    
    
    });
    
    