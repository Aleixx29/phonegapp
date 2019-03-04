var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [
            {"id": 1, "firstName": "Alexandre", "lastName": "Claveau", "title":"Etudiant ISEN, Ouest", "managerId": 0, "city":"Rennes, REN", "cellPhone":"+33611223344", "officePhone":"+3311223344", "email":"alexandre.claveau@isen-ouest.yncrea.fr"},
            {"id": 2, "firstName": "Arnaud", "lastName": "Premel-Cabic", "title":"Etudiant ISEN, Ouest", "managerId": 0, "city":"Brest, BRES", "cellPhone":"+33611223344", "officePhone":"+3311223344", "email":"arnaud.premel-cabic@isen-ouest.yncrea.fr"}
        ];

    callLater(successCallback);

}