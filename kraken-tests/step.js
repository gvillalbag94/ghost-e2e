const { Given, When, Then } = require('@cucumber/cucumber');

// inicio de sesion
When('I enter email {string}', async function (identification) {
    let element = await this.driver.$('#identification');
    return await element.setValue(identification);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click in sign in', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

// creacion de un nuevo tag
When('I click in Tags', async function() {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
});

When('I click in New Tag', async function() {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
});

When('I enter a name of tag {string}', async function (name) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name);
});

When('I click in save', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click();
});


Then('I confirm that the tag was create', async function() {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
});



// Edicion de un tag publico
When('I click in tag', async function() {
    let element = await this.driver.$('li[data-test-tag = "66380b7f13b8100ae3c4dd8e"]');
    return await element.click();
});

When('I enter a description of tag {string}', async function (name) {
    let element = await this.driver.$('textarea[class="gh-input gh-tag-details-textarea"]');
    return await element.setValue(name);
});

Then('I confirm that the tag was edit', async function() {
    let element = await this.driver.$('li[data-test-tag = "66380b7f13b8100ae3c4dd8e"]');
    return await element.click();
});

// Eliminacion del tag publica
When('I click in tag to delete', async function() {
    let element = await this.driver.$('li[data-test-tag = "66380f2a13b8100ae3c4ddfe"]');
    return await element.click();
});

When('I click in delete tag', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    return await element.click();;
});

When('I confirm the action', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();;
});

Then('I confirm that the tag do not exist', async function() {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
});

//Creacion de un internal tag
When('I click in internal tags', async function () {
    let element = await this.driver.$('button[class="gh-btn "]');
    return await element.click();;
});



//Edicion de un internal tag
When('I click in internal tag', async function() {
    let element = await this.driver.$('li[data-test-tag = "663808ec13b8100ae3c4dd82"]');
    return await element.click();
});

Then('I confirm that the  internal tag was edit', async function() {
    let element = await this.driver.$('li[data-test-tag = "663808ec13b8100ae3c4dd82"]');
    return await element.click();
});