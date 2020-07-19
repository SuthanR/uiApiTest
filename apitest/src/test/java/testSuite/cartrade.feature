Feature: As a user of the car trade, I would like to retrieve the data & validate the data , response time and status etc.


  # The background in cucumber to define a series of steps which is common in the feature file.
  # Here I declare URL that can use in all scenarios and I am getting all the gists and reusing in the following scenarios.

  Background:
    * url 'http://localhost:3000/'

  Scenario: Retrieve the complete details & verify the specific data , status & response time
    Given path 'cars'
    When method get
    Then status 200
    Then print response
     * def output = response
    * def out = { "brand": "Seat", "models": [ "Alhambra", "Altea", "Altea XL", "Arosa", "Cordoba", "Cordoba Vario", "Exeo", "Ibiza", "Ibiza ST", "Exeo ST", "Leon", "Leon ST", "Inca", "Mii", "Toledo"]}
    * match output[0].brand == 'Seat'
    * match output[10].models[4] == "#string"
    And match each output[*].brand == '#string'

   Then match output[*] contains out