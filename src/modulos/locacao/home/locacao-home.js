import angular from 'angular';
import uirouter from 'angular-ui-router';

import LocacaoHomeController from './locacao-home-controller';

// import LocacaoService from '../../../servicos/locacao-service';

export default angular.module('myApp.locacao.home', [uirouter])
  .controller('LocacaoHomeController', LocacaoHomeController)
  .name;

  