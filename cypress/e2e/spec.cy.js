import "../support/commands";
/// <reference types="cypress" />
describe("Resume Generator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.viewport(1280, 800);
  });
  it("Should have resume generator as headline", () => {
    cy.get("nav").should("contain", "RESUME GENERATOR");
  });

  describe("Basic Info", () => {
    it("The basic form should work and display correct resume basic info", () => {
      cy.get('section[id="basics"]')
        .should("exist")
        .within(() => {
          cy.get('input[name="fullName"]')
            .clear()
            .type("John Doe", { force: true });
          cy.get('input[name="headline"]')
            .clear()
            .type("Fullstack Dev", { force: true });
          cy.get('input[name="email"]')
            .clear()
            .type("johndoe21@gmail.com", { force: true });
          cy.get('input[name="phoneNumber"]')
            .clear()
            .type("000-000000", { force: true });
          cy.get('input[name="website"]')
            .clear()
            .type("https://john-doe.com", { force: true });
          cy.get('input[name="location"]')
            .clear()
            .type("New York", { force: true });
        });

      cy.get(".full-name").should("contain", "John Doe");
      cy.get(".headline").should("contain", "Fullstack Dev");
      cy.get(".location").should("contain", "New York");
      cy.get(".phone-number").should("contain", "000-000000");
      cy.get(".email").should("contain", "johndoe21@gmail.com");
      cy.get('a[href="https://john-doe.com"]').should(
        "have.attr",
        "href",
        "https://john-doe.com"
      );
    });
  });

  describe("Summary", () => {
    it("should able the change the summary data", () => {
      cy.get('section.data-inputs section[id="summary"]')
        .should("exist")
        .within(() => {
          cy.get('textarea[name="summary"]')
            .clear()
            .type(
              "A full-stack developer is a software engineer proficient in both front-end and back-end development, capable of building complete web applications from start to finish. On the front end, they work with technologies like HTML, CSS, and JavaScript frameworks (e.g., React or Vue) to create user interfaces",
              { force: true }
            );
        });

      cy.get('section.resume-canvas section[id="summary"]').should(
        "contain",
        "A full-stack developer is a software engineer proficient in both front-end and back-end development, capable of building complete web applications from start to finish. On the front end, they work with technologies like HTML, CSS, and JavaScript frameworks (e.g., React or Vue) to create user interfaces"
      );
    });
  });

  describe("Profiles", () => {
    it("should be able to do CRUD operation on profile", () => {
      const url = "https://github.com/bima-taruna";

      cy.addProfile("github", "bima-taruna", url);

      cy.get("ul.profile-list").within(() => {
        cy.get(`a[href="${url}"]`)
          .should("have.attr", "href", url)
          .should("contain", "bima-taruna");
      });

      cy.editProfileAtIndex(2, "bimataruna");

      cy.get("ul.profile-list").within(() => {
        cy.get(`a[href="${url}"]`).should("contain", "bimataruna");
      });

      cy.deleteProfileAtIndex(2);

      cy.get('section.data-inputs section[id="profiles"]').within(() => {
        cy.get("ul > li").eq(2).should("not.exist");
      });

      cy.get("ul.profile-list").eq(2).should("not.exist");
    });
  });
});
