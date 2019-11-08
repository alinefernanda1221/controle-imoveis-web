import { inherit } from "@uirouter/core";

export default class ImovelEdicaoController {

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
ImovelEdicaoController.$inject = [];