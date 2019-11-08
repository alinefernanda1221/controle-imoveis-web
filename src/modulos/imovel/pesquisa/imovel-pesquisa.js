import angular from 'angular';
import uirouter from 'angular-ui-router';

import ImovelPesquisaController from './imovel-pesquisa-controller';
import ImovelService from '../../../servicos/imovel-service';

export default angular.module('myApp.imovel.pesquisa', [uirouter, ImovelService])
  .controller('ImovelPesquisaController', ImovelPesquisaController)
  .name;

  