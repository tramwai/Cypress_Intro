
import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

describe('All Login Tests', function(){


    it('Login with valid credentials', function(){
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard').click()
    
    })
    
    it('Login with invalid username', function(){
    
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard').click()
    })
})

it('Login with invalid password', function(){
    
    loginPage.enterUsername('Admin123')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.contains('Dashboard').click()
})
