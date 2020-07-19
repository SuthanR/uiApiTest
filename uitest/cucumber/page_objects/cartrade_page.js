'use strict'
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
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
        element(by.id('S2')).isEnabled().then(function () {
        }).then(() => {
            let select = by.css("option[value= " + model + "]");
            return element(select).click();
        })
    };

    this.enterKeyword = (keyword) => {
       return  element(by.id('T')).sendKeys(keyword);

    };

    this.clickSearch = () => {
        browser.sleep(3000);
       return element(by.id('B')).click();

    };

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