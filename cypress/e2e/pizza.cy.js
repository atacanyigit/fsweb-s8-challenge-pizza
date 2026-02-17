describe("Pizza Order Flow", () => {
  it("Order sayfası açılır", () => {
    cy.visit("/order");
    cy.contains("Position Absolute Acı Pizza").should("be.visible");
  });

  it("Boş submit yapınca validasyon hatalarını gösterir", () => {
    cy.visit("/order");
    cy.get('[data-cy="submit-btn"]').click();

    cy.contains("Boyut seçmelisin.").should("be.visible");
    cy.contains("Hamur seçmelisin.").should("be.visible");
    cy.contains("İsim en az 3 karakter olmalı.").should("be.visible");
    cy.contains("Lütfen 4 ile 10 arası malzeme seçin.").should("be.visible");
  });

  it("Başarılı sipariş verince Success sayfasına gider", () => {
    cy.intercept("POST", "**/api/pizza*", (req) => {
      req.reply({
        statusCode: 201,
        body: {
          id: "test-id-1",
          createdAt: new Date().toISOString(),
          ...req.body,
        },
      });
    }).as("createPizza");

    cy.visit("/order");

    cy.get('[data-cy="name-input"]').type("Yigit");
    cy.get('[data-cy="dough-select"]').select("İnce");
    cy.get('[data-cy="size-Orta"]').check();

    cy.get('[data-cy="ing-Pepperoni"]').check();
    cy.get('[data-cy="ing-Mantar"]').check();
    cy.get('[data-cy="ing-Zeytin"]').check();
    cy.get('[data-cy="ing-Biber"]').check();

    cy.get('[data-cy="submit-btn"]').click();

    cy.wait("@createPizza").its("response.statusCode").should("eq", 201);

    cy.location("pathname").should("eq", "/success");
    cy.contains("SİPARİŞ ALINDI!").should("be.visible");
  });
  it("Boş submit yapınca butonun devre dışı olduğunu doğrular", () => {
  cy.visit("/order");
  
  cy.get('[data-cy="submit-btn"]').should('be.disabled'); 
});
});