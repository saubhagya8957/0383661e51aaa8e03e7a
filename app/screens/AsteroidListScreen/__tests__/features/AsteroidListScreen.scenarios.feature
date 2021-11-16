Feature: Asteroid List Screen

    Scenario: User navigates Asteroid List
        Given I am user loading Asteroid List Screen
        When I just navigate to the Asteroid List Screen
        Then Asteroid List Screen will mount with out any errors
        And I can unmount the screen with out any errors