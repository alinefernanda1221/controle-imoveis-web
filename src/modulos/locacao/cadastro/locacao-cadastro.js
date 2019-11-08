import angular from 'angular';
import uirouter from 'angular-ui-router';

import LocacaoCadastroController from './locacao-cadastro-controller';

import LocacaoService from '../../../servicos/locacao-service';

export default angular.module('myApp.locacao.cadastro', [uirouter, LocacaoService])
  .controller('LocacaoCadastroController', LocacaoCadastroController)
  .name;

  