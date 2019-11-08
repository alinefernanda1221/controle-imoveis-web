import { inherit } from "@uirouter/core";

export default class LocacaoCadastroController {

  constructor(LocacaoService, $q) {
    var vm = this;
    vm.limparTela = limparTela;
    vm.voltar = voltar;
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
        { nome: 'Aline Fernanda Pereira de Carvalho',
          email: 'alinefernanda2112@gmail.com',
          rg: 123456,
          cpf: 12345678912345
        },
        { nome: 'João Lucas Pereira Carvalho',
          email: 'jl36523@gmail.com',
          rg: 654321,
          cpf: 98765432198765
        },
        { nome: 'Marcos Henrique Pereira Carvalho',
          email: 'marcos_henrique@gmail.com',
          rg: 456789,
          cpf: 45612378932145
        }
      ]
    }

    // vm.adicionarInquilinos = function(){
    //   console.log("Adicionar Inquilinos");
      
    //   vm.imoveisPesquisados.forEach((imovel) => {
    //     if(!!imovel.selecionado){
    //       vm.locacao.imovel = angular.copy(imovel);
    //       return;
    //     }
    //   });
      
    //   console.log("Imovel Selecionado: ", vm.locacao.imovel);
    // }

    vm.selecionarInquilinos = function(){
      let existePrincipal = false;
      vm.locacao.inquilinos = [];

      vm.inquilinosPesquisados.forEach((inquilino) => {
        if(!!inquilino.marcado){
          vm.locacao.inquilinos.push(inquilino);
        }

        if(!!inquilino.selecionado){
          existePrincipal = true;
        }
      });

      // console.log("Inquilinos Marcados", vm.locacao.inquilinos);
      if(!existePrincipal){
        alert("Erro! Ao menos 1 inquilino deve ser marcado como principal.")
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
      let existeImovelSelecionado = false;
      vm.imoveisPesquisados.forEach((imovel) => {
        if(!!imovel.selecionado){
          vm.locacao.imovel = imovel;
          existeImovelSelecionado = true;
        }
      });

      if(!existeImovelSelecionado){
        alert("Erro! Ao menos 1 imóvel deve ser selecionado.")
      }
    }

    vm.cadastrarLocacao = function(){
      vm.selecionarInquilinos();
      vm.selecionarImovel();

      LocacaoService.cadastrarLocacao(vm.locacao)
        .then((response) => {
          alert('Gravado com sucesso!');
          vm.locacao = {};
          limparTela();
        }).catch((error) => {
          alert('Ocorreu um erro!' + error.data);
        });
    }

    function limparTela() {
      document.getElementById("form-cadastro-inquilino").reset();
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
LocacaoCadastroController.$inject = ['LocacaoService', '$q'];
