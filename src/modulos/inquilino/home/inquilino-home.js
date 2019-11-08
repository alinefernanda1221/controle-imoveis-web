import angular from 'angular';
import uirouter from 'angular-ui-router';

import InquilinoHomeController from './inquilino-home-controller';

// import LocacaoService from '../../../servicos/locacao-service';

export default angular.module('myApp.inquilino.home', [uirouter])
  .controller('InquilinoHomeController', InquilinoHomeController)
  .name;

  