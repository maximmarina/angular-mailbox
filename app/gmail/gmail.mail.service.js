EmailService.$inject = ['$http'];
export class EmailService {
    constructor($http){
        this._$http = $http;
    }

    getAll() {
        return this._$http.get('./data/emails.json');
    }
}