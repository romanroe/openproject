
export class DemoService {

    constructor($rootScope: angular.IRootScopeService) {
        "ngInject";
        console.log("start");
        console.log($rootScope);
    }

    method() {
    }

}

angular.module('openproject').service("demoService", DemoService);

console.log(DemoService);
