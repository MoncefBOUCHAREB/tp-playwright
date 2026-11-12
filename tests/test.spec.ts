import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';
import { RecruitmentPage } from '../Pages/RecruitmentPage';
import { AddCandidatePage } from '../Pages/AddCandidatePage';
import { CandidateProfilePage } from '../Pages/CandidateProfilePage';

let LP: LoginPage;
let RP: RecruitmentPage;
let ACP: AddCandidatePage;
let CPP: CandidateProfilePage;

test.beforeEach(async ({ page }) => {
    LP = new LoginPage(page)
    RP = new RecruitmentPage(page)
    ACP = new AddCandidatePage(page)
    CPP = new CandidateProfilePage(page)

    // aller sur la page de login
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});

test("login valide",{tag : "@Smoke" } ,async ({ page }) => {

    // remplir us et pass
    await LP.setUsername("Admin")
    await LP.setPassword("admin123")

    // cliquer login
    await LP.clickLogin()

    // verif que je suis sur le dashboard
    await expect(page).toHaveURL(/dashboard\/index$/)

    // cliquer sur recrutement
    await RP.clickMenuRecruitment()

    // verif que je suis dans la liste des condidats
    await expect(page).toHaveURL(/recruitment\/viewCandidates$/)

    // clique sur add
    await RP.clickAdd()

    // verif que je suis sur le formulaire
    await expect(page).toHaveURL(/recruitment\/addCandidate$/)

    // remplir les champs
    await ACP.setFirstName("Moncef")
    await ACP.setLastName("Test")
    await ACP.setEmail("moncef.test@gmail.com")

    // clique save
    await ACP.clickSave()


    // verif la page recap
    await expect(CPP.Elements.title()).toBeVisible()

    // verifer les formulaires bien saisie 
    await expect(CPP.Elements.firstName()).toHaveValue("Moncef")
    await expect(CPP.Elements.lastName()).toHaveValue("Test")
    await expect(CPP.Elements.email()).toHaveValue("moncef.test@gmail.com")
});

test("login avec mot de passe invalide", {tag : "@TNR" },async ({ page }) => {

    // remplir username et mdps
    await LP.setUsername("Admin")
    await LP.setPassword("mauvaisMdp")

    // clique login
    await LP.clickLogin()

    // verif msg erreur
    await expect(LP.Elements.errorMessage()).toContainText("Invalid credentials")

    // verif que je suis dans la page login
    await expect(page).toHaveURL(/auth\/login$/)
});


//pour le bug de vers la page dash et pas recr

/*test("Recruitment après login", async ({ page }) => {

    // remplir username et password
    await LP.setUsername("Admin")
    await LP.setPassword("admin123")

    // clique login
    await LP.clickLogin()

    // verif que je suis dans recrutement
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")
});*/