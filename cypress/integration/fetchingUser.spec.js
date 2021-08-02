describe('Request', () => {
    it('displays a random user from the random user API', () => {
        cy.request('https://randomuser.me/api/?results=1')
            .should((response) =>  {
                expect(response.status).to.eq(200)
                expect(response.body.results).to.have.length(1)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            });
    });
});