import angular from 'angular';

class InquilinoService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_INQUILINO = REST_API + "/inquilino";
    }

    buscarTodosInquilinos() {
        return this.$http.get(this.ENDPOINT_INQUILINO);
    }

    buscarInquilinoPorParametro(paramPesquisa, param) {
        return this.$http.get(this.ENDPOINT_INQUILINO + param + paramPesquisa);
    }

    deleteById(id) {
        return this.$http.delete(this.ENDPOINT_INQUILINO + '/' + id);
    }

    getById(id) {
        return this.$http.get(this.ENDPOINT_INQUILINO + '/' + id);
    }

    cadastrarInquilino(inquilino) {
        console.log("endpoint", this.ENDPOINT_INQUILINO);
        return this.$http.post(this.ENDPOINT_INQUILINO, inquilino);
    }

    atualizarInquilino(inquilino) {
        return this.$http.put(this.ENDPOINT_INQUILINO, inquilino);
    }
}

export default angular.module('services.inquilino-service', [])
    .service('InquilinoService', InquilinoService)
    .name;
