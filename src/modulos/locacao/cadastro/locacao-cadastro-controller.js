import { inherit } from "@uirouter/core";

export default class LocacaoCadastroController {

  constructor(LocacaoService, $q) {
    var vm = this;
    vm.limpar = limpar;
    vm.voltar = voltar;
    vm.formIsValid = true;
    vm.locacao = {};
    vm.locacao.inquilinos = [];
    init();

    function init() {
      vm.imoveisPesquisados = [
        { nome: 'Imovel Um', 
          endereco: 'QR 313 CONJUNTO 12 CASA 22', 
          estado: 'Distrito Federal - DF', 
          bairro: 'Samambaia Sul', 
          tipo: 'Residência'
        },
        { nome: 'Imovel dois', 
          endereco: 'QR 315 CONJUNTO 7 CASA 01', 
          estado: 'Gama - DF', 
          bairro: 'Ponte Alta Sul', 
          tipo: 'Apartamento'
        }
      ];

      vm.inquilinosPesquisados = [
        { nome: 'Aline  Carvalho',
          email: 'aline@gmail.com',
          rg: 123456,
          cpf: 12345678912345
        },
        { nome: 'João Lucas',
          email: 'jl@gmail.com',
          rg: 654321,
          cpf: 98765432198765
        },
        { nome: 'Marcos Pereira',
          email: 'marcos@gmail.com',
          rg: 456789,
          cpf: 45612378932145
        }
      ]
    }

    vm.selecionarInquilinos = function(){
      vm.existePrincipal = false;
      vm.locacao.inquilinos = [];

      vm.inquilinosPesquisados.forEach((inquilino) => {
        if(!!inquilino.marcado){
          vm.locacao.inquilinos.push(inquilino);
        }

        if(!!inquilino.selecionado){
          return vm.existePrincipal = true;
        }
      });

      // console.log("Inquilinos Marcados", vm.locacao.inquilinos);
      if(!vm.existePrincipal){
        alert("Erro! Ao menos 1 inquilino deve ser marcado como principal.");
        return;
      }
    }

    vm.atualizaSelecao = function(itemSelecionado, elementos){
      let indiceSelecionado = elementos.indexOf(itemSelecionado);
      elementos.forEach((item) => {
        let index = elementos.indexOf(item);
        if(!!item.selecionado && index !== indiceSelecionado){
          item.selecionado = undefined;
        }
      });
    }

    vm.atualizaSelecaoInquilino = function(itemSelecionado, elementos){
      vm.atualizaSelecao(itemSelecionado, elementos);
      let index = elementos.indexOf(itemSelecionado);
      
      if(!elementos[index].marcado){
        elementos[index].marcado = true;
      }else{
        elementos[index].marcado = false;
      }
    }

    vm.selecionarImovel = function(){
      vm.existeImovelSelecionado = false;
      vm.imoveisPesquisados.forEach((imovel) => {
        if(!!imovel.selecionado){
          vm.locacao.imovel = imovel;
          vm.existeImovelSelecionado = true;
        }
      });

      if(!vm.existeImovelSelecionado){
        alert("Erro! Ao menos 1 imóvel deve ser selecionado.")
      }
    }

    function podeProsseguirCadastro(){
      return vm.existePrincipal && vm.existeImovelSelecionado;
    }

    vm.cadastrarLocacao = function(){
      if(vm.formCadastroLocacao.$valid){
        vm.formIsValid = true;
        vm.selecionarInquilinos();
        vm.selecionarImovel();
        
        if(podeProsseguirCadastro()){
          LocacaoService.cadastrarLocacao(vm.locacao)
            .then((response) => {
              alert('Gravado com sucesso!');
              limpar();
            }).catch((error) => {
              alert('Ocorreu um erro!' + error.data);
            });
        }

      }else{
        vm.formIsValid = false
      }
    }

    function limpar(){
      vm.formCadastroLocacao.$setUntouched();
      document.getElementById("form-cadastro-locacao").reset(); // Reseta Form
      vm.locacao = {};
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
LocacaoCadastroController.$inject = ['LocacaoService', '$q'];
