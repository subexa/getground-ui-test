describe('The NHS cost calulator Start screen', () => {
    
    beforeEach(() => {
        cy.visit('/start')
        cy.get('#next-button').click()
        cy.get('#label-wales').click()
        cy.get('#next-button').click()
        cy.get('#dob-day').type('22').should('have.value', '22')
        cy.get('#dob-month').type('11').should('have.value', '11')
        cy.get('#dob-year').type('1993').should('have.value', '1993')
    })

    it('Gets to You get help with NHS costs screen', () => {
        cy.get('#next-button').click()
        cy.get('#label-yes').click()
        cy.get('#next-button').click()
        cy.get('#label-yes').click()
        cy.get('#next-button').click()
        cy.get('[for="yes-universal"]').click()
        cy.get('#next-button').click()
        cy.get('#label-yes').click()
        cy.get('#next-button').click()
        cy.get('#label-yes').click()
        cy.get('#next-button').click()
        cy.contains("Done")
        cy.contains("You get help with NHS costs")
    })

    it('Lands on You get help with NHS prescriptions page ', () => {
        cy.get('#next-button').click()
        cy.visit('/partner')
        cy.get('#label-no').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-no"]').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-no"]').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-no"]').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-no"]').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-no"]').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-no"]').click()
        cy.get('#next-button').click()
        cy.get('[for="radio-yes"]').click()
        cy.get('#next-button').click()
    })

    it('Shows error for invalid date of birth', () => {
        cy.get('#dob-month').type('22')
        cy.get('#next-button').click()
        cy.contains("There is a problem")
    })
    
})