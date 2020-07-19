Feature: As a user of the car trade, I would like to retrieve the data & validate the data , response time and status etc.


  # The background in cucumber to define a series of steps which is common in the feature file.
  # Here I declare URL that can use in all scenarios and I am getting all the gists and reusing in the following scenarios.

  Background:
    * url 'http://localhost:3000/'

  Scenario: Retrieve the cars api data & verify the specific data , status & response time
    Given path 'cars'
    When method get
    #Validate the status
    Then status 200
    #Print the response
    And print response
     * def output = response
    #Declare part the response
    * def out = { "brand": "Seat", "models": [ "Alhambra", "Altea", "Altea XL", "Arosa", "Cordoba", "Cordoba Vario", "Exeo", "Ibiza", "Ibiza ST", "Exeo ST", "Leon", "Leon ST", "Inca", "Mii", "Toledo"]}
   #Assert the exact value in the response
    * match output[0].brand == 'Seat'
    # Assert the exact response is string
    * match output[10].models[4] == "#string"
    #Assert the values of brand is string
    Then match each output[*].brand == '#string'
    # Validate the part of the response already declared
    Then match output[*] contains out
    Then assert responseTime < 1000

  Scenario: Delete the cars api which is not implemented


    Given path 'cars'
    And method delete
    Then status 404

  Scenario: Post the cars without payload which is not possible


    * def payload =
"""
{
        "brand": "TATA",
        "models": [
            "Land Rover",
            "Sumo"
        ]
    }
"""

    Given path 'cars'
    And request payload
    And method post
    Then status 500
    And match response contains 'TypeError'