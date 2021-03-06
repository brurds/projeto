const TestCRUD = require("../database/testCRUD");
const testCRUD = new TestCRUD();

class TestController {
    get() {
        return testCRUD.get();
    };
    getOne() {
        return testCRUD.getOne();
    };
    post() {
        return testCRUD.post();
    };
    delete() {
        return testCRUD.delete();
    };
    put() {
        return testCRUD.put();
    };
}

module.exports = TestController;
