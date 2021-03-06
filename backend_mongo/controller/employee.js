const EmployeeCRUD = require("../database/employeeCRUD");
const employeeCRUD = new EmployeeCRUD();

class EmployeeController {
    get() {
        return employeeCRUD.get();
    };
    getOne() {
        return employeeCRUD.getOne();
    };
    post() {
        return employeeCRUD.post();
    };
    delete() {
        return employeeCRUD.delete();
    };
    put() {
        return employeeCRUD.put();
    };
}

module.exports = EmployeeController;
