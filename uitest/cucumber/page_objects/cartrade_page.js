'use strict'
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

// As part of this file, all the page objects will be scripted here.
module.exports = function () {

    this.get = () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/')
    };

    this.selectBrand = (brand) => {

        element(by.id('S1')).isEnabled().then(function () {

        }).then(() => {
            let select = by.css("option[value= " + brand + "]");
            return element(select).click();

        })
    };

    this.selectModel = (model) => {
        browser.sleep(3000)
        element(by.id('S2')).isEnabled().then(function () {}).then(() => {
            let select = by.css("option[value= " + model + "]");
            return element(select).click();
        })
    };

    this.enterKeyword = (keyword) => {
        return element(by.id('T')).sendKeys(keyword);

    };

    this.clickSearch = () => {
        return element(by.id('B')).click();

    };

    // create a json based on input then validate against the gettext in alert
    this.verifyAlert = (brand, model, key) => {

        let obj = {
            model: model,
            brand: brand,
            keyword: key
        }
        let result = JSON.stringify(obj);
        browser.switchTo().alert().getText().then(text => {
            expect(text).to.contain(result);

        });

    };

    this.clickOk = () => {

        return browser.switchTo().alert().accept();

    };
};