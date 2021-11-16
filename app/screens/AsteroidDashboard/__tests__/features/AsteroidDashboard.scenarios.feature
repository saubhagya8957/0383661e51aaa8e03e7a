Feature: Asteroid Dashboard Screen Find Asteroid Data

    Scenario: User navigates Asteroid Dashboard
        Given I am user loading Asteroid Dashboard Screen
        When I just navigate to the Asteroid Dashboard Screen
        Then Asteroid Dashboard will mount with out any errors
        And I can now enter asteroid id
        And I can press the asteroid submit button to fetch the asteroid data
        And I can press the asteroid random button to find the random asteroid list
        And I can unmount the screen with out any errors