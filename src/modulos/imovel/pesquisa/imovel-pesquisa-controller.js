import { inherit } from "@uirouter/core";

export default class ImovelPesquisaController {

  constructor() {
    var vm = this;
    vm.voltar = voltar;

    init();

    function init() {}

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
ImovelPesquisaController.$inject = [];
