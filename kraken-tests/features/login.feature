Feature: Failed login due to empty fields

@user1 @web
Scenario: Publish a draft
  Given I navigate to page "http://54.188.89.84/ghost/#/signin"
  And I wait for 3 seconds
  And I enter my user "user@example.com"
  And I wait for 3 seconds
  And I enter my password "123456789**"
  And I wait for 3 seconds
  And I click on Login
  And I wait for 3 seconds
  When I navigate to the draft section
  And I wait for 3 seconds
  And I click on the Edit Draft button
  And I wait for 3 seconds
  And I click on publish button
  And I wait for 3 seconds
  And I click on continue final review button
  And I wait for 3 seconds
  And I click on publish post button
  And I wait for 3 seconds
  And I click on Editor
  And I wait for 3 seconds
  And I click on Post
  And I wait for 3 seconds
  When I navigate to the published section
  And I wait for 3 seconds
  Then The draft was published
  And I wait for 3 seconds
  And I click on Profile
  And I wait for 3 seconds
  And I click on Logout
 

@user2 @web
Scenario: UnPublist a post
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
  And I click on the Edit Published register button
  And I wait for 3 seconds
  And I click on Unpublish
  And I wait for 3 seconds
  And I click on Unpublish and revert to private draft
  And I wait for 3 seconds
  And I click on Post
  And I wait for 3 seconds
  When I navigate to the draft section
  And I wait for 3 seconds
  Then The post was Unpublished
  And I wait for 3 seconds
  And I click on Profile
  And I wait for 3 seconds
  And I click on Logout
 
 
@user3 @web
Scenario: List Posts (Drafts)
  Given I navigate to page "http://54.188.89.84/ghost/#/signin"
  And I wait for 3 seconds
  And I enter my user "user@example.com"
  And I wait for 3 seconds
  And I enter my password "123456789**"
  And I wait for 3 seconds
  And I click on Login
  And I wait for 3 seconds
  When I navigate to the draft section
  And I wait for 3 seconds
  Then The drafts List
  And I wait for 3 seconds
  And I click on Profile
  And I wait for 3 seconds
  And I click on Logout
 
 
 
@user4 @web
Scenario: List Posts (Scheduled)
  Given I navigate to page "http://54.188.89.84/ghost/#/signin"
  And I wait for 3 seconds
  And I enter my user "user@example.com"
  And I wait for 3 seconds
  And I enter my password "123456789**"
  And I wait for 3 seconds
  And I click on Login
  And I wait for 3 seconds
  When I navigate to the Sheduled section
  And I wait for 3 seconds
  And I click on Show all post
  And I wait for 3 seconds
  Then The Post List
  And I wait for 3 seconds
  And I click on Profile
  And I wait for 3 seconds
  And I click on Logout
 
 
@user5 @web
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
  

