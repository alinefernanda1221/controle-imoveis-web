import angular from 'angular';
import uirouter from 'angular-ui-router';

import RelatorioHomeController from './relatorio-home-controller';

// import LocacaoService from '../../../servicos/locacao-service';

export default angular.module('myApp.relatorio.home', [uirouter])
  .controller('RelatorioHomeController', RelatorioHomeController)
  .name;

  