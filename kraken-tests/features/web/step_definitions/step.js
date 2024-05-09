const { Given, When, Then } = require('@cucumber/cucumber');


/*Escenario 1 Publish a draft*/


When('I enter my user {kraken-string}', async function (value) {
    let element = await this.driver.$('#identification');
    return await element.setValue(value);
});

When('I enter my password {kraken-string}', async function (value) {
    let element = await this.driver.$('#password');
    return await element.setValue(value);
});

Then('I click on Login', async function () {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

When('I navigate to the draft section', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)');
    return await element.click();
});


When('I click on the Edit Draft button', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div > li > a');
    return await element.click();
});


When('I click on publish button', async function () {
    let element = await this.driver.$('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger > span');
    return await element.click();
});


When('I click on continue final review button', async function () {
    let element = await this.driver.$('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button ');
    return await element.click();
});

When('I click on publish post button', async function () {
    let element = await this.driver.$('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button ');
    return await element.click();
});


Then('I click on Editor', async function () {
    let element = await this.driver.$('body > div.epm-modal-container > div > div > header > button > span');
    return await element.click();
});


Then('I click on Post', async function () {

    let element = await this.driver.$('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span');
    return await element.click();
});

When('I navigate to the published section', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)');
    return await element.click();
});


Then('The draft was published', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Published") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});

Then('I click on Profile', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div > div > div > div > div > div > div:nth-child(1)');
    return await element.click();
});


Then('I click on Logout', async function () {
    /*let element = await this.driver.$('body > div > div > ul > li:nth-child(9)');*/
    let element = await this.driver.$('a[class="ember-view dropdown-item user-menu-signout"]');
    return await element.click();
});



/*Escenario 2 UnPublish a post*/


When('I click on the Edit Published register button', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div > li > a');
    return await element.click();
});


When('I click on Edit post Published', async function () {

    let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1) > li > a > span')
    return await element.click();
});

When('I click on Unpublish', async function () {
    let element = await this.driver.$('body > div.gh-app > div > main > div.flex.flex-row> section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger > span');
    return await element.click();
});

When('I click on Unpublish and revert to private draft', async function () {
    let element = await this.driver.$('body > div.epm-modal-container> div > div > div > div.gh-publish-confirmation > p > button > span');
    return await element.click();
});


Then('The post was Unpublished', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Drafts") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});


Then('The drafts List', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Drafts") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});



When('I navigate to the Sheduled section', async function () {
    let element = await this.driver.$('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(2)');
    return await element.click();
});

When('I click on Show all post', async function () {
    /*let element = await this.driver.$('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.no-posts.feature-memberAttribution > li > div > a > span');*/
    let element = await this.driver.$('a[data-test-link="show-all"]');
    return await element.click();
});

Then('The Post List', async function () {
    /*let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');*/
    let actualMessageElement = await this.driver.$('a[class="active ember-view"]');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Posts") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});

Then('The published List', async function () {
    let actualMessageElement = await this.driver.$('body > div.gh-app > div > main > section > div > header > div > h2');
    let actualMessage = await actualMessageElement.getText(); // Obtenemos el texto completo
    if (actualMessage.trim() === "Published") { // Usamos trim() para eliminar espacios en blanco al principio y al final
        console.log("The draft message is correct: ", actualMessage);
    } else {
        throw new Error("Expected message: Published. but found: " + actualMessage);
    }
});





