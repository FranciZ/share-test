angular.module('amsTest', ['ui.bootstrap','ui.router','ngAnimate','djds4rce.angular-socialshare']);

angular.module('amsTest').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('amsTest').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

angular.module('amsTest').run(function($FB){
    $FB.init('327463080622913');
});
