import angular from 'angular';
import uirouter from 'angular-ui-router';

import ImovelCadastroController from './imovel-cadastro-controller';

import ImovelService from '../../../servicos/imovel-service';

export default angular.module('myApp.cadastro-imovel', [uirouter, ImovelService])
  .controller('ImovelCadastroController', ImovelCadastroController)
  .name;

  