// inputa bir metin giren test
// birden fazla malzeme seçilebilen bir test
// formu gönderen bir test

describe("order page", () => {
    describe("input: username", () => {
        beforeEach(() => {
            cy.visit("http://localhost:5173/orderPizza")
        })
        it("invalid username", () => {
            //act
            cy.get('[data-cy="input-username"]').type("al");
            //assess
            cy.contains('İsminiz en az üç karakter içermeli.').should('be.visible');
            // cy.get('[data-cy="submit-button"]').should('be.disabled');
        })
        it("valid username", () => {
            //act
            cy.get('[data-cy="input-username"]').type("hande");
            //assess
            cy.contains('İsminiz en az üç karakter içermeli.').should('not.exist');
            // cy.get('[data-cy="submit-button"]').should('be.disabled');
        })
    })
    describe("extras selection", () => {
        beforeEach(() => {
            cy.visit("http://localhost:5173/orderPizza")
        })
        it("check less than 4", () => {
            //act
            cy.get('[type="checkbox"]').check('ananas');
            cy.get('[type="checkbox"]').check('sosis');
            cy.get('[type="checkbox"]').check('domates');      
            //assess
            cy.contains('En az 4 malzeme seçiniz.').should('be.visible');
        })
        it("check more than 10", () => {
            //act
            cy.get('[type="checkbox"]').check('pepperoni');
            cy.get('[type="checkbox"]').check('tavuk izgara'); // "Izgara" değil, "ızgara"!
            cy.get('[type="checkbox"]').check('mısır');
            cy.get('[type="checkbox"]').check('sarımsak');
            cy.get('[type="checkbox"]').check('ananas');
            cy.get('[type="checkbox"]').check('sosis');
            cy.get('[type="checkbox"]').check('soğan');
            cy.get('[type="checkbox"]').check('sucuk');
            cy.get('[type="checkbox"]').check('biber');
            cy.get('[type="checkbox"]').check('kabak');
            cy.get('[type="checkbox"]').check('kanada jambonu');
            cy.get('[type="checkbox"]').check('domates');
            
            //assess 
            cy.get('[data-cy="extras-warning"]').should('contain', 'En fazla 10 malzeme');

        })
    })
    beforeEach(() => {
        cy.intercept('POST', 'https://reqres.in/api/pizza', {
          statusCode: 201,
          body: { message: 'Sipariş alındı!' },
        }).as('submitOrder');
    
        cy.visit('http://localhost:5173/orderPizza');
      });
    
      it('should submit the order when submit button is clicked', () => {
        cy.get('[data-cy="submit-button"]').click();
    
        cy.wait('@submitOrder').its('response.statusCode').should('eq', 201);
    
        cy.location('pathname').should('eq', '/success');
      });
})