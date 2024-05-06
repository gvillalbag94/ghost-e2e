Feature: Tag

@user1 @web
Scenario: Delete a public tag
  Given I navigate to page "<HOST>"
  And I wait for 2 seconds
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click in sign in
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  And I click in New Tag
  And I wait for 2 seconds
  And I enter a name of tag "NuevoTagDePrueba"
  And I wait for 2 seconds
  And I click in save
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  And I click in tag to delete
  And I wait for 2 seconds
  When I click in delete tag
  And I wait for 2 seconds
  And I confirm the action
  And I wait for 2 seconds
  Then I confirm that the tag do not exist
  And I wait for 2 seconds