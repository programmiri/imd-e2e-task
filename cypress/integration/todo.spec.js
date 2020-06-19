describe('TODO list test', () => {
  before( () => {
    cy.visit('http://localhost:8080')
  })

  it('first test is running 🎉', () => {
    expect(true).to.equal(true)
  })   

  it('user can add a todo', () => {
    cy.get('input').type("Neues Todo")
    cy.get('button').click()
    cy.get('li > label').then( ($el) => {
      expect($el).to.have.text("Neues Todo")
    })
  })  
})