(function () {
    angular.module('MainApp', ['ngHideElement'])
    .controller('HomeCtrl', [function () {
        var hc = this;
        hc.greeting = "Hide-Element Example";
        hc.hideAndShow = false;
    }]);
})();
