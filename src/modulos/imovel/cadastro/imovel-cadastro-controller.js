import { inherit } from "@uirouter/core";

export default class ImovelCadastroController {

  constructor(ImovelService) {
    let vm = this;
    vm.voltar = voltar;
    vm.limpar = limpar;
    vm.formIsValid = true;

    init();

    function init() {
      vm.tiposImovel = [
        { nome: 'CASA', valor: '1' },
        { nome: 'APARTAMENTO', valor: '2' },
        { nome: 'PRÉDIO', valor: '3' },
        { nome: 'GALPÃO', valor: '4' },
      ];

      vm.situacoesImovel = [
        { nome: 'DISPONÍVEL PARA LOCAÇÃO', valor: '1' },
        { nome: 'EM CONSTRUÇÃO', valor: '2' }
      ];
    }

    vm.cadastrarImovel = function(){
      console.log(vm.imovel);
      if(vm.formCadastroImovel.$valid){
        vm.formIsValid = true;
        
        ImovelService.cadastrarImovel()
          .then((response) =>{
            alert('Gravado com sucesso!');
            vm.limpar();

        }).catch((error) => {
          alert('Ocorreu um erro!' + error.data);
        });
      }else{
        vm.formIsValid = false
      }
    }

    function limpar(){
      vm.formCadastroImovel.$setUntouched();
      document.getElementById("form-cadastro-imovel").reset(); // Reseta Form
      vm.imovel = {};
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
ImovelCadastroController.$inject = ['ImovelService'];
