describe("Random List of 6 Users", () => {
    it('clicking the generate button generates 6 more users' , () => {
        cy.visit('http://localhost:3000')

        cy.get('[data-testid="newUsersBtn"]')
            .click();

        //counts the number of children with .userCard for the div
        cy.get('[data-testid="usersContainer"]')
            .children('.userCard').should('have.length', 6)
    });
})
