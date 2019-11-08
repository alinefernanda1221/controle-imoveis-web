import angular from 'angular';

class LocacaoService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_LOCACAO = REST_API + "/locacao";
    }

    buscarTodasLocacoes() {
        return this.$http.get(this.ENDPOINT_LOCACAO);
    }

    buscarLocacaoPorParametro(paramPesquisa, param) {
        return this.$http.get(this.ENDPOINT_LOCACAO + param + paramPesquisa);
    }

    deleteById(id) {
        return this.$http.delete(this.ENDPOINT_LOCACAO + '/' + id);
    }

    getById(id) {
        return this.$http.get(this.ENDPOINT_LOCACAO + '/' + id);
    }

    cadastrarLocacao(locacao) {
        console.log("endpoint", this.ENDPOINT_LOCACAO);
        return this.$http.post(this.ENDPOINT_LOCACAO, locacao);
    }

    atualizarLocacao(locacao) {
        return this.$http.put(this.ENDPOINT_LOCACAO, locacao);
    }
}

export default angular.module('services.locacao-service', [])
.service('LocacaoService', LocacaoService)
.name;
