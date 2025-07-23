// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("openProfilesSection", () => {
  cy.get('section.data-inputs section[id="profiles"]').should("exist");
});

Cypress.Commands.add("addProfile", (network, username, url) => {
  cy.openProfilesSection().within(() => {
    cy.get("button.btn-black").click();
  });
  cy.get('form[id="profiles-form"]').within(() => {
    cy.get('select[id="network"]').select(network);
    cy.get('input[id="profile-username"]').type(username, { force: true });
    cy.get('input[id="profile-website"]').type(url, { force: true });
    cy.get("button.btn-white").click();
  });
});

Cypress.Commands.add("editProfileAtIndex", (index, newUsername) => {
  cy.openProfilesSection().within(() => {
    cy.get("ul > li").eq(index).click();
  });
  cy.get('form[id="profiles-form"]').within(() => {
    cy.get('input[id="profile-username"]').clear().type(newUsername, {
      force: true,
    });
    cy.get("button.btn-white").click();
  });
});

Cypress.Commands.add("deleteProfileAtIndex", (index) => {
  cy.openProfilesSection().within(() => {
    cy.get("ul > li").eq(index).click();
  });
  cy.get('form[id="profiles-form"]').within(() => {
    cy.get("button.btn-red").click();
  });
});
