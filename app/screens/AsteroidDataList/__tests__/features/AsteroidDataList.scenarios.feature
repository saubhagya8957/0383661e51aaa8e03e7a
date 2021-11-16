Feature: Asteroid Specific Data Screen

    Scenario: User navigates Asteroid Specific Data
        Given I am user loading Asteroid Specific Data Screen
        When I just navigate to the Asteroid Specific Data Screen
        Then Asteroid Specific Data will mount with out any errors
        And I can unmount the screen with out any errors