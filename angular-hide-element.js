(function () {
    'use strict'
    angular.module('ngHideElement', [])
    .directive('hideElement', ['$window', function ($window) {
        return {
            restrict: 'EAC',
            scope: {
                hideMin: "=",
                hideMax: "=",
                isHidden: "="
            },
            link: link
        };
        function link(scope, elem, attrs) {
            var originalDisplayValue = elem.css('display');
            //default element to hidden. If no min or max is set in html, element will always be hidden
            var isHidden = true;
            //default min window width to start hiding element
            var min;
            //default max window width to start hiding element
            var max;
            scope.$watch('isHidden', function () {
                hideOrShow();
            });
            hideOrShow();
            function hideOrShow() {
                //set vars to defined scope variables
                if (scope.hideMax !== null && scope.hideMax > 0)
                    max = scope.hideMax;
                else
                    max = 0;
                if (scope.hideMin !== null && scope.hideMin > 0)
                    min = scope.hideMin;
                else
                    min = 0;
                if (scope.isHidden !== null && (scope.isHidden === true || scope.isHidden === false))
                    isHidden = scope.isHidden;
                //check to see if still hidden
                if (isHidden) {
                    //if min and max are untouched, always hide the element
                    if (min === 0 && max === 0)
                        hideElement();
                    else {
                        //Get the original css display value for element
                        var windowWidth = $window.innerWidth;
                        showOrHide(windowWidth);
                        //if the window width > min and either the max is not redefined or the window width < redefined max, hide the element
                        if (windowWidth > min && (max < min || windowWidth < max))
                            hideElement();
                        //add a watch for when the window is resized
                        angular.element($window).bind('resize', function () {
                            //determine current window size
                            windowWidth = $window.innerWidth;
                            showOrHide(windowWidth);
                        });
                    }
                }
                else
                    resetElement(originalDisplayValue);
            }
            function showOrHide(windowWidth) {
                if (max < min) {
                    if (max !== 0) {
                        if (windowWidth <= max || windowWidth >= min)
                            hideElement();
                        else
                            resetElement(originalDisplayValue);
                    }
                    else {
                        if (windowWidth > min)
                            hideElement();
                        else
                            resetElement(originalDisplayValue);
                    }
                }
                else {
                    if (windowWidth >= min && windowWidth < max)
                        hideElement();
                    else
                        resetElement(originalDisplayValue);
                }
            }
            function hideElement() {
                changeElemDisplay('none');
            }
            function resetElement(original) {
                changeElemDisplay(original);
            }
            function changeElemDisplay(value) {
                elem.css('display', value);
            }
        }
    }]);
})();