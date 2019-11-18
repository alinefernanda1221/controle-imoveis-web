import { inherit } from "@uirouter/core";

export default class ImovelPesquisaController {

  constructor($uibModal, $state) {
    var vm = this;
    vm.voltar = voltar;
    vm.formIsValid = true;

    init();

    function init() {
      vm.imoveisPesquisados = [
        {
          id: 1,
          nome: 'Imovel Um',
          endereco: { 
            logradouro : 'QR 313 CONJUNTO 12 CASA 22',
            estado: 'Distrito Federal - DF',
            bairro: 'Samambaia Sul',
            observacao: 'Observação XPTO'
          },
          tipo: { nome: 'CASA', valor: '1' },
          quartos: 2,
          descricao: 'Imovel XPTO'
        },
        {
          id: 2,
          nome: 'Imovel dois',
          endereco: {
            logradouro: 'QR 315 CONJUNTO 7 CASA 01',
            estado: 'Gama - DF',
            bairro: 'Ponte Alta Sul',
            observacao: 'Observacao XYZ'
          },
          tipo: { nome: 'APARTAMENTO', valor: '2' },
          quartos: 1,
          descricao: 'Imovel XYZ'
        }
      ];

    }

    vm.editarImovel = function(imovelEditar) {
      $state.go('imovel-edicao', {
    		imovel : imovelEditar 
    	 });

    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
ImovelPesquisaController.$inject = ['$uibModal', '$state'];
