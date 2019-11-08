import { inherit } from "@uirouter/core";

export default class ImovelCadastroController {

  constructor(ImovelService) {
    var vm = this;
    vm.cadastrarDocumento = null;
    vm.adicionaPagina = null;
    vm.paginas = null;
    vm.status = null;
    vm.limparTela = null;
    vm.voltar = null;
    init();

    
    function init(){
     /*inits*/
     const endpoint = '/documento';
     vm.paginas = [];
     vm.adicionaPagina = adicionaPagina;
     vm.excluirPagina = excluirPagina;
     vm.limparTela = limparTela;
     vm.voltar = voltar;
     
     vm.cadastrarDocumento = function (){
    	 if(getPaginas().length > 0){
    		 vm.documento.paginas = [];
    		 vm.documento.paginas = getPaginas();    		 
    	 }
    	 
    	 ImovelService.post(vm.documento, endpoint)
    	 .then(function response(resp){
    		 vm.status = 'Gravado com sucesso!';
    		 alert(vm.status);
             limparTela();
             vm.paginas = [];
    	 }).catch(function (error) {
    		 vm.status = '';
    		 vm.status = error.data.message;
    		 alert(vm.status);
    	  });
      }
     
     function adicionaPagina(pagina) { //Adiciona pagina num Array de Object
		vm.paginas.push(angular.copy(pagina));
     }

     function excluirPagina(pagina) { //Remove pagina do Array
    	 var index = vm.paginas.indexOf(pagina);
    	 vm.paginas.splice(index, 1);
     }
     
     function getPaginas(){
    	 return vm.paginas;
     }
     
     function limparTela() {
		 document.getElementById("form-cadastro-imovel").reset(); // Reseta Form
	 }
     
     function voltar() {
    	  window.history.back();
     };     

  }
 }
}//Fim classe
ImovelCadastroController.$inject = ['ImovelService'];
