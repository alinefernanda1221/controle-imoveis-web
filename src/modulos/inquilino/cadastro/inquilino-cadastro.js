import angular from 'angular';
import uirouter from 'angular-ui-router';

import InquilinoCadastroController from './inquilino-cadastro-controller';

import InquilinoService from '../../../servicos/inquilino-service';

export default angular.module('myApp.inquilino.cadastro', [uirouter, InquilinoService])
  .controller('InquilinoCadastroController', InquilinoCadastroController)
  .name;