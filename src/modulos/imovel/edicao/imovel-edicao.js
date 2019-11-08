import angular from 'angular';
import uirouter from 'angular-ui-router';

import ImovelEdicaoController from './imovel-edicao-controller';

import ImovelService from '../../../servicos/imovel-service';

export default angular.module('myApp.edicao', [uirouter, ImovelService])
  .controller('ImovelEdicaoController', ImovelEdicaoController)
  .name;

  