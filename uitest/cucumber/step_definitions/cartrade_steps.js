const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
browser.driver.manage().window().maximize();
const carPage = require("../page_objects/cartrade_page.js");

module.exports = function () {

    this.World = function MyWorld() {
        this.page = new carPage();
    };

    this.Given(/^the car website is displayed$/, function () {
        this.page.get();

    });

    this.When(/^the car (.*) is chosen$/, function (brand) {
        this.page.selectBrand(brand);
    });

    this.When(/^select the (.*)$/, function (model) {
        this.page.selectModel(model);
    });

    this.When(/^enter the require feature (.*)$/, function (keyword) {
        this.page.enterKeyword(keyword);
    });

    this.When(/^click the search option$/, function () {
        this.page.clickSearch();
    });

    this.When(/^validate the (.*) and (.*) and (.*) options are in alert box$/, function (brand, model, key) {
        this.page.verifyAlert(brand, model, key);
    });

    this.When(/^click Ok to proceed$/, function () {
        this.page.clickOk();
    });

};