describe("Activate plugin", () => {
  it("should be able to use plugin", () => {
    cy.ntlm(["localhost"], "TheUser", "ThePassword", "TheDomain");
    cy.visit("http://www.vecka.nu");
  });
});
