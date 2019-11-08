import angular from 'angular';

class ImovelService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_IMOVEL = REST_API + "/imovel";
    }

    buscarTodosImoveis() {
        return this.$http.get(this.ENDPOINT_IMOVEL);
    }

    buscarImovelPorParametro(paramPesquisa, param) {
        return this.$http.get(this.ENDPOINT_IMOVEL + param + paramPesquisa);
    }

    deleteById(id) {
        return this.$http.delete(this.ENDPOINT_IMOVEL + '/' + id);
    }

    getById(id) {
        return this.$http.get(this.ENDPOINT_IMOVEL + '/' + id);
    }

    cadastrarImovel(imovel) {
        console.log("endpoint", this.ENDPOINT_IMOVEL);
        return this.$http.post(this.ENDPOINT_IMOVEL, imovel);
    }

    atualizarImovel(imovel) {
        return this.$http.put(this.ENDPOINT_IMOVEL, imovel);
    }
}

export default angular.module('services.imovel-service', [])
    .service('ImovelService', ImovelService)
    .name;
