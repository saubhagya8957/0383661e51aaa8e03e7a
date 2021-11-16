Feature: Asteroid Detail Screen

    Scenario: User navigates Asteroid Detail
        Given I am user loading Asteroid Detail Screen
        When I just navigate to the Asteroid Detail Screen
        Then Asteroid Detail Screen will mount with out any errors
        And I can unmount the screen with out any errors