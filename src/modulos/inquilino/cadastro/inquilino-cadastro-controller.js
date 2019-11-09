import { inherit } from "@uirouter/core";

export default class InquilinoCadastroController {

  constructor(InquilinoService) {
    let vm = this;
    vm.voltar = voltar;
    vm.limpar = limpar;
    vm.formIsValid = true;
    vm.inquilino = {};
    vm.inquilino.telefones = [];

    vm.telefone = {};

    init();

    function init() {
      vm.opcoesTipo = [
        { nome: 'TRABALHO', valor: '1'},
        { nome: 'CELULAR', valor: '2'},
        { nome: 'RESIDENCIAL', valor: '3'},
      ];

      vm.opcoesSexo = [
        { nome: 'MASCULINO', sigla: 'M' },
        { nome: 'FEMININO', sigla: 'F' }
      ];
    }

    vm.cadastrarInquilino = function(){
      if(vm.formCadastroInquilino.$valid){
        vm.formIsValid = true;
        
        InquilinoService.cadastrarInquilino(vm.inquilino)
        .then((response) => {
          vm.limpar();
          alert("Inquilino cadastrado com sucesso!");
        }).catch((error) => {
          alert("Ocorreu um erro! " + error.data);
        });

      }else{
        vm.formIsValid = false
      }
    }

    vm.adicionarTelefone = function(telefone){
      vm.inquilino.telefones.push(angular.copy(telefone));
      vm.telefone = {};
      vm.desabilitar();
    }

    vm.removerTelefone = function(index){
      vm.inquilino.telefones.splice(index, 1)
    }

    vm.habilitar = function(){
      vm.habilitarBotao = true;
    }

    vm.desabilitar = function(){
      vm.habilitarBotao = false;
    }

    function limpar(){
      vm.formCadastroInquilino.$setUntouched();
      document.getElementById("form-cadastro-inquilino").reset(); // Reseta Form
      vm.inquilino = {};
    }

    vm.retornaNomeTipo = function(telefone){
      let stringRetornada = "";
      vm.opcoesTipo.forEach((opcao) => {
        if(opcao.valor === telefone.tipo){
          stringRetornada =  opcao.nome;
        }
      });
      return stringRetornada;
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
InquilinoCadastroController.$inject = ['InquilinoService'];
