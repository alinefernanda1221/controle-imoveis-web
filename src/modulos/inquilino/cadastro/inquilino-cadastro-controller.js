import { inherit } from "@uirouter/core";

export default class InquilinoCadastroController {

  constructor(InquilinoService) {
    var vm = this;
    vm.limparTela = limparTela;
    vm.voltar = voltar;
    vm.opcoesSexo = [];
    vm.opcoesTipo = [];
    vm.inquilino = {};
    init();

    function init() {
      vm.opcoesSexo = [
        { nome: 'FEMININO', sigla: 'F' },
        { nome: 'MASCULINO', sigla: 'M' }
      ];

      vm.opcoesTipo = [
        { nome: 'TIPO_UM', valor: 'UM' },
        { nome: 'TIPO_DOIS', valor: 'DOIS' },
        { nome: 'TIPO_TRES', valor: 'TRES' },
        { nome: 'TIPO_QUATRO', valor: 'QUATRO' }
      ];
    }

    vm.cadastrarInquilino = function () {
      console.log(vm.inquilino);

      InquilinoService.cadastrarInquilino(vm.inquilino)
        .then((response) => {
          alert('Gravado com sucesso!');
          vm.inquilino = {};
          limparTela();
        }).catch((error) => {
          alert('Ocorreu um erro!' + error.data.message);
        });
    }

    vm.adicionaTelefone = function (telefone) {
      vm.inquilino.telefone.push(angular.copy(telefone));
    }

    vm.excluirTelefone = function (telefone) {
      let index = vm.inquilino.telefone.indexOf(telefone);
      vm.inquilino.telefone.splice(index, 1);
    }

    function limparTela() {
      document.getElementById("form-cadastro-inquilino").reset();
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
InquilinoCadastroController.$inject = ['InquilinoService'];
