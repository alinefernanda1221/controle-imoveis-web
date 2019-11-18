import { inherit } from "@uirouter/core";

export default class ImovelEdicaoController {

  constructor($stateParams, $state, ImovelService) {
    var vm = this;
    // vm.voltar = voltar;
    vm.imovel = $stateParams.imovel;
    vm.formIsValid = true;

    init();

    function init() {
      vm.tiposImovel = [
        { nome: 'CASA', valor: '1' },
        { nome: 'APARTAMENTO', valor: '2' },
        { nome: 'PRÉDIO', valor: '3' },
        { nome: 'GALPÃO', valor: '4' },
      ];
    }

    vm.atualizarImovel = function(){
      if(vm.imovel === null){
        alert('Nenhum imóvel selecionado para edição!');
      }

      if(vm.formEdicaoImovel.$valid){
        vm.formIsValid = true;
        
        ImovelService.atualizarImovel(vm.imovel)
          .then((response) => {
            alert('Imóvel ID #' + vm.imovel.id + ' atualizado com sucesso!');
        }).catch((error) => {
          alert('Houve um erro ao tentar atualizar o imóvel: ' + error.data);
        });

      }else {
        vm.formIsValid = false;
      }
    }

    vm.voltar = () => {
      // $state.go('imovel-pesquisa');
      window.history.back();
    }

  }
}//Fim classe
ImovelEdicaoController.$inject = ['$stateParams', '$state', 'ImovelService'];