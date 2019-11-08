import angular from 'angular';
import uirouter from 'angular-ui-router';

import ImovelHomeController from './imovel-home-controller';

// import LocacaoService from '../../../servicos/locacao-service';

export default angular.module('myApp.imovel.home', [uirouter])
  .controller('ImovelHomeController', ImovelHomeController)
  .name;

  