Feature: As a user of this web, I would like to buy a car with specific model with a new features.

 Scenario Outline: Verify the happy flow & possible ways to search for a car

  Given the car website is displayed
   When the car <Brand> is chosen
    And select the <Model>
    And enter the require feature <Keyword>
    And click the search option
   Then validate the <Brand> and <Model> and <Keyword> options are in alert box
    And click Ok to proceed
  
  Examples:

|   Brand    |    Model   |    Keyword    |

|   Audi     |    A3      |    Manual     |
|   Honda    |    Civic   |    !@#$12     |

  