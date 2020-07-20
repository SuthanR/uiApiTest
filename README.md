# qwicTest
Protractor and Cucumber overview

Protractor Protractor is an end-to-end test framework for Angular and non-AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.More info : https://www.protractortest.org/#/

Cucumber Cucumber is a framework for writing high-level specifications of an application's functionality using plain text. It can be written and understood by non-technical people involved in a project. Cucumber’s language, Gherkin, lets you describe software’s behaviour without detailing implementation details.

Set up :

Install Node
git clone https://github.com/SuthanR/qwicTest

From your project root directory(/uitest) in cmd: npm install then check the respective version of modules installed

Go to the project location in terminal(/uitest) in cmd: webdriver-manager start (to start the webdriver)(if issues with driver please try webdriver-manager update then start)

Go to project location in another terminal(/uitest) in cmd: protractor protractor.conf.js or protractor (script will start running)

Folder and config:

Conf.js: The file defines spec patterns relative to the location of the feature and step file path. Here, we also define browser capabilities, tags, cucumber options etc.

The folder(cucumber) contains three parts 1. Features, where all the feature file can contain a scenario or can contain many scenarios in a single feature file but it usually contains a list of scenarios. 2. Step definitions: Is the place where all the cucumber steps are defined in this file and help to reuse most of the steps wherever necessary. 3.Page objects: This helps to arrange the test logic and elements and this makes scripts more organized and helps to maintain easily.