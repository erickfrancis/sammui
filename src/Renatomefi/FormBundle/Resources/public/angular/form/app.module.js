'use strict';

var sammuiForm = angular.module('sammui.form', [
    'sammui.formServices',
    'sammui.formControllers',
    'sammui.formAdminControllers',
    'sammui.formDirectives',
    'sammui.protocolServices',
    'sammui.protocolControllers'
]);

sammuiForm.config(function ($locationProvider, $routeProvider) {
    $routeProvider.when('/form', {
        templateUrl: '/bundles/form/angular/views/form/start.html',
        templatePreload: true,
        controller: 'formStart',
        reloadOnSearch: false
    });
    $routeProvider.when('/admin/form', {
        templateUrl: '/bundles/form/angular/views/form/admin/start.html',
        templatePreload: false,
        controller: 'formAdminProtocols',
        reloadOnSearch: false
    });
    $routeProvider.when('/form/:protocolId/:page?/:pageId?', {
        templateUrl: '/bundles/form/angular/views/form/filling/home.html',
        templatePreload: true,
        controller: 'formFillingMain',
        reloadOnSearch: false
    });
});