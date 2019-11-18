routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
  let homeState = {
    name: 'home',
    url: '/home',
    templateUrl: './modulos/home/home.view.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  }
  $stateProvider.state(homeState);

  let documentoState = {
    name: 'documento',
    url: '/documento',
    templateUrl: './modulos/documento/documento.view.html',
    controller: 'DocumentoController',
    controllerAs: 'vm'
  }
  $stateProvider.state(documentoState);

  let cadastroState = {
    name: 'cadastro',
    url: '/documento/cadastro',
    templateUrl: './modulos/documento/cadastro/cadastro.html',
    controller: 'DocumentoCadastroController',
    controllerAs: 'vm'
  }
  $stateProvider.state(cadastroState);

  let edicaoState = {
    name: 'edicao',
    url: '/documento/edicao',
    templateUrl: './modulos/documento/edicao/edicao.html',
    controller: 'DocumentoEdicaoController',
    controllerAs: 'vm',
    params: { documento: null }
  }
  $stateProvider.state(edicaoState);

  /**IMOVEL */
  let imovelState = {
    name: 'imovel-cadastro',
    url: '/imovel/cadastro',
    templateUrl: './modulos/imovel/cadastro/imovel-cadastro-view.html',
    controller: 'ImovelCadastroController',
    controllerAs: 'imovelCadCtrl',
    params: { imovel: null }
  }
  $stateProvider.state(imovelState);

  let imovelHome = {
    name: 'imovel-home',
    url: '/imovel/home',
    templateUrl: './modulos/imovel/home/imovel-home-view.html',
    controller: 'ImovelHomeController',
    controllerAs: 'imovelHomeCtrl',
    params: { imovel: null }
  }
  $stateProvider.state(imovelHome);

  let imovelPesquisa = {
    name: 'imovel-pesquisa',
    url: '/imovel/pesquisa',
    templateUrl: './modulos/imovel/pesquisa/imovel-pesquisa-view.html',
    controller: 'ImovelPesquisaController',
    controllerAs: 'imovelPesquisaCtrl',
    params: { imovel: null }
  }
  $stateProvider.state(imovelPesquisa);

  let imovelEditar = {
    name: 'imovel-edicao',
    url: '/imovel/editar',
    templateUrl: './modulos/imovel/edicao/imovel-edicao-view.html',
    controller: 'ImovelEdicaoController',
    controllerAs: 'imovelEdicaoCtrl',
    params: { imovel: null }

  }
  $stateProvider.state(imovelEditar);

  /**INQUILINO */
  let inquilinoState = {
    name: 'inquilino-cadastro',
    url: '/inquilino/cadastro',
    templateUrl: './modulos/inquilino/cadastro/inquilino-cadastro-view.html',
    controller: 'InquilinoCadastroController',
    controllerAs: 'inquilinoCadCtrl',
    params: { inquilino: null }
  }
  $stateProvider.state(inquilinoState);

  let inquilinoHome = {
    name: 'inquilino-home',
    url: '/inquilino/home',
    templateUrl: './modulos/inquilino/home/inquilino-home-view.html',
    controller: 'InquilinoHomeController',
    controllerAs: 'inquilinoHomeCtrl',
    params: { inquilino: null }
  }
  $stateProvider.state(inquilinoHome);

  /**LOCAÇÃO */
  let locacaoState = {
    name: 'locacao-cadastro',
    url: '/locacao/cadastro',
    templateUrl: './modulos/locacao/cadastro/locacao-cadastro-view.html',
    controller: 'LocacaoCadastroController',
    controllerAs: 'locacaoCadCtrl',
    params: { locacao: null }
  }
  $stateProvider.state(locacaoState);

  let locacaoHome = {
    name: 'locacao-home',
    url: '/locacao/home',
    templateUrl: './modulos/locacao/home/locacao-home-view.html',
    controller: 'LocacaoHomeController',
    controllerAs: 'locacaoHomeCtrl',
    params: { locacao: null }
  }
  $stateProvider.state(locacaoHome);

  /**RELATORIO */
  let relatorioHomeState = {
    name: 'relatorio-home',
    url: '/relatorios/home',
    templateUrl: './modulos/relatorios/home/relatorio-home-view.html',
    controller: 'RelatorioHomeController',
    controllerAs: 'relatorioHomeCtrl',
    params: { relatorio: null }
  }
  $stateProvider.state(relatorioHomeState);

  $urlRouterProvider.otherwise('/home')
}