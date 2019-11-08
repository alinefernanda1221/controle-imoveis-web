import { inherit } from "@uirouter/core";

export default class InquilinoHomeController {

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
InquilinoHomeController.$inject = [];
