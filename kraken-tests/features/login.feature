Feature: Failed login due to empty fields
  @user1 @web
  Scenario: User attempts to login without entering credentials
    Given I navigate to page "http://54.188.89.84/ghost/"
    When the user tries to log in without entering any credentials
    Then the system should display an error message indicating that the login failed due to empty fields
    And the user should remain on the login page