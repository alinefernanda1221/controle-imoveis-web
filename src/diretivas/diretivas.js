import angular from 'angular';

import limitTo from './limitTo/limit-to';

export default angular.module('myApp.diretivas', [])
    .directive('limitTo', limitTo)
    .name;