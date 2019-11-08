import { inherit } from "@uirouter/core";

export default class ImovelCadastroController {

  constructor(ImovelService) {
    let vm = this;
    vm.voltar = voltar;
    // vm.limparTela = limparTela;
    vm.formIsValid = true;

    init();

    function init() {}

    vm.cadastrarImovel = function(){
      if(vm.formCadastroImovel.$valid){
        vm.formIsValid = true;
      }else{
        vm.formIsValid = false
      }
    }

    // function limparTela() {
    //   document.getElementById("form-cadastro-imovel").reset(); // Reseta Form
    // }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
ImovelCadastroController.$inject = ['ImovelService'];
