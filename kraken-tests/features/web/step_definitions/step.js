const { Given, When, Then } = require('@cucumber/cucumber');

When('the user tries to log in without entering any credentials', function () {
    return 'pending';
});
  
Then('the system should display an error message indicating that the login failed due to empty fields', function () {
    return 'pending';
});
  
Then('the user should remain on the login page', function () {
    return 'pending';
});