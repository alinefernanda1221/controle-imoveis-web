'use strict';

/**ANGULAR/ OUTRAS LIBS */
import angular from 'angular'
import uirouter from 'angular-ui-router';
let blockUI = require('angular-block-ui');
let uiMask = require('angular-ui-mask');
import diretivas from './diretivas/diretivas.js';

/**ESTILOS E FRAMEWORKS VISUAIS */
import 'bootstrap';
import './scss/app.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import '../node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.scss';
// import '@awesome-bootstrap-checkbox';
// import  " ../awesome-bootstrap-checkbox " ;

/**PROJETO ANTIGO - TODO: REMOVER OS MODULOS NÃO UTILIZADOS */
import documento from './modulos/documento/documento.js';
import cadastro from './modulos/documento/cadastro/cadastro.js';
import edicao from './modulos/documento/edicao/edicao.js';
import home from './modulos/home/home.js';


/**APP GERAL */
import routing from './app.config';

/**IMOVEL */
// import imovel from './modulos/imovel/imovel.js';
import imovelHome from './modulos/imovel/home/imovel-home.js';
import imovelCadastro from './modulos/imovel/cadastro/imovel-cadastro.js';
import imovelEdicao from './modulos/imovel/edicao/imovel-edicao.js';

/**INQUILINO */
import inquilinoHome from './modulos/inquilino/home/inquilino-home.js';
import inquilinoCadastro from './modulos/inquilino/cadastro/inquilino-cadastro.js';

/**LOCACAO */
import locacaoHome from './modulos/locacao/home/locacao-home.js';
import locacaoCadastro from './modulos/locacao/cadastro/locacao-cadastro.js';

/**RELATORIOS */
import relatorioHome from './modulos/relatorios/home/relatorio-home.js';

angular
.module('myApp', [
  diretivas,
  uirouter,
  uiMask,
  blockUI,
  documento,
  cadastro,
  edicao,
  home,
  // imovel,
  imovelHome,
  imovelCadastro,
  imovelEdicao,
  inquilinoHome,
  inquilinoCadastro,
  locacaoHome,
  locacaoCadastro,
  relatorioHome
])
.config(routing);