Feature: Post

@user1 @web
Scenario: List Posts (Published)
  Given I navigate to page "http://54.188.89.84/ghost/#/signin"
  And I wait for 3 seconds
  And I enter my user "user@example.com"
  And I wait for 3 seconds
  And I enter my password "123456789**"
  And I wait for 3 seconds
  And I click on Login
  And I wait for 3 seconds
  When I navigate to the published section
  And I wait for 3 seconds
  Then The published List
  And I wait for 3 seconds
  And I click on Profile
  And I wait for 3 seconds
  And I click on Logout
  

