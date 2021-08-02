describe("Fetch 6 new users based on gender selected", () => {
    it("Clicking search fetches new user based on gender", () => {
        cy.visit('http://localhost:3000')

        cy.get('select').select('female')

        cy.get('[data-testid="genderButton"]')
            .click();

        cy.get('[data-testid="usersContainerGender"]')
            .children('.userCard').should('have.length', 6)

    });
});
