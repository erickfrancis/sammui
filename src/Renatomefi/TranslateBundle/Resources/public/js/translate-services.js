'use strict';

angular.module('sammui.translateServices', ['ngResource', 'ngRoute'])
    // Resource factories for Langs API
    .factory('translateLangs', function ($resource) {
        return $resource('/l10n/manage/langs/:lang')
    })
    .factory('translateLangsKeys', function ($resource) {
        return $resource('/l10n/manage/langs/:lang/keys/:keys', {
            update: {
                method: 'PUT'
            }
        })
    })
    // Translation Loader to use inside Translation Provider
    .factory('translateLoader', ['$q', 'translateLangs', function ($q, translateLangs) {
        return function (options) {
            var deferred = $q.defer(),
                translations = new Object();

            var langs = translateLangs.query(function () {
                console.log(langs);
            });

            var lang = translateLangs.get({lang: options.key}, function () {
                lang.translations.forEach(function (t) {
                    if (t) {
                        translations[t.key] = t.value;
                    }
                })

                deferred.resolve(translations);
            });

            return deferred.promise;
        };
    }]);