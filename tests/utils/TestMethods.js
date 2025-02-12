const fs = require('fs');
const path = require('path');
const { HomePage } = require('../../pages/HomePage');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');

class TestMethods {

    constructor(driver) {
        this.driver = driver;
    }

    //home page product sorting by size tests

    //homepage display size XS only test method
    async homepageDisplayProductXSSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'XS' size checkbox
        await homePage.clickSizeCheckbox(0);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "XS Size Product Display Test Result");
    }
    //homepage display size S only test method
    async homepageDisplayProductSSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'S' size checkbox
        await homePage.clickSizeCheckbox(1);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "S Size Product Display Test Result");
    }
    //homepage display size M only test method
    async homepageDisplayProductMSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'M' size checkbox
        await homePage.clickSizeCheckbox(2);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "M Size Product Display Test Result");
    }
    //homepage display size ML only test method
    async homepageDisplayProductMLSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'ML' size checkbox
        await homePage.clickSizeCheckbox(3);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "ML Size Product Display Test Result");
    }
    //homepage display size L only test method
    async homepageDisplayProductLSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'L' size checkbox
        await homePage.clickSizeCheckbox(4);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "L Size Product Display Test Result");
    }
    //homepage display size XL only test method
    async homepageDisplayProductXLSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'XL' size checkbox
        await homePage.clickSizeCheckbox(5);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "XL Size Product Display Test Result");
    }
    //homepage display size XXL only test method
    async homepageDisplayProductXXLSizeTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'XXL' size checkbox
        await homePage.clickSizeCheckbox(6);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "XXL Size Product Display Test Result");
    }

    //select product size then unselect test

    //homepage select product size M (checkbox) only then unselect test method
    async homepageSelectProductMSizeAndUnselectTest(){
        const homePage = new HomePage(this.driver);
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //homepage text element assert
        await this.isHomePageTextElementAsExpected();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page data (before sorting)
        await this.logHomePageProductData();
        //click 'M' size checkbox
        await homePage.clickSizeCheckbox(2);
        //log home page data (after size selection)
        await this.logHomePageProductData();
        //capture screenshot of the set display
        await TestMethods.captureScreenshot(this.driver, "M Size Product Display Test Result");
        //click 'M' size checkbox again to unselect
        await homePage.clickSizeCheckbox(2);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Unselected M Size Display Test Result");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //singular product addition to cart test

    //add singular home page product (of set size) to cart test method
    async addSingularSetSizeProductToCartTest(){
        const homePage = new HomePage(this.driver);
        //click 'Add To Cart' button
        await homePage.clickAddToCartButton(0);
        //aside shopping cart web element assert
        await homePage.isAsideShoppingCartWebElementDisplayed();
        //aside shopping cart text element assert
        await this.isAsideShoppingCartTextElementAsExpected();
        //log product data
        await this.logAsideShoppingCartProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Singular Product Addition (of set size) To Cart Test Result");
    }

    //singular product removal from cart test (of set size)

    //remove singular home page product (of set size) from cart test method
    async removeSingularSetSizeProductFromCartTest(){
        const homePage = new HomePage(this.driver);
        //click 'Add To Cart' button
        await homePage.clickAddToCartButton(0);
        //aside shopping cart web element assert
        await homePage.isAsideShoppingCartWebElementDisplayed();
        //aside shopping cart text element assert
        await this.isAsideShoppingCartTextElementAsExpected();
        //log product data
        await this.logAsideShoppingCartProductData();
        //click product remove button
        await homePage.clickAsideShopCartProductRemoveButton(0);
        //assert user gets the expected message
        const addProductsToCartMessage = await homePage.getAddProductsToCartMessage();
        assert.strictEqual(addProductsToCartMessage, "Add some products in the cart\n" + ":)", "The 'Add products to cart' aside shopping cart message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Singular Product Removal (of set size) From Cart Test Result");
    }

    //multiple products addition to cart (of set size)

    //add multiple home page products (of set size - L) to cart test method
    async addMultipleProductsToCartTest(){
        const homePage = new HomePage(this.driver);
        //click 'Add To Cart' button
        await homePage.clickAddToCartButton(0);
        //click 'Add To Cart' button
        await homePage.clickAddToCartButton(1);
        //aside shopping cart web element assert
        await homePage.isAsideShoppingCartWebElementDisplayed();
        //aside shopping cart text element assert
        await this.isAsideShoppingCartTextElementAsExpected();
        //log product data (before product quantity increase)
        await this.logAsideShoppingCartProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Products Addition (of set size) To Cart Test Result");
    }

    //add multiple home page products (of set size - L) of added quantity to cart test method
    async addMultipleProductsToCartWithAddedQuantityTest(){
        const homePage = new HomePage(this.driver);
        //click 'Add To Cart' button
        await homePage.clickAddToCartButton(1);
        //click 'Add To Cart' button
        await homePage.clickAddToCartButton(2);
        //aside shopping cart web element assert
        await homePage.isAsideShoppingCartWebElementDisplayed();
        //aside shopping cart text element assert
        await this.isAsideShoppingCartTextElementAsExpected();
        //log product data (before product quantity increase)
        await this.logAsideShoppingCartProductData();
        //click product quantity increase button (multiple times to add not just one to the cart)
        await homePage.clickAsideShopCartProductQtyIncreaseButton(0)
        await homePage.clickAsideShopCartProductQtyIncreaseButton(0)
        await homePage.clickAsideShopCartProductQtyIncreaseButton(1)
        await homePage.clickAsideShopCartProductQtyIncreaseButton(1)
        //log product data (after product quantity increase)
        await this.logAsideShoppingCartProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Products Addition (with added qty - of set size) To Cart Test Result");
    }

    //multiple products removal from cart test

    //remove multiple home page products (of set size - L) from cart test method
    async removeMultipleProductsFromCartTest(){
        const homePage = new HomePage(this.driver);
        //click product remove buttons (twice since it's up to down click)
        await homePage.clickAsideShopCartProductRemoveButton(0);
        await homePage.clickAsideShopCartProductRemoveButton(0);
        //assert user gets the expected message
        const addProductsToCartMessage = await homePage.getAddProductsToCartMessage();
        assert.strictEqual(addProductsToCartMessage, "Add some products in the cart\n" + ":)", "The 'Add products to cart' aside shopping cart message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Products Removal (of set size) From Cart Test Result");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add product(products) to checkout test method
    async addProductToCheckoutTest(){
        const homePage = new HomePage(this.driver);
        //aside shopping cart web element assert
        await homePage.isAsideShoppingCartWebElementDisplayed();
        //aside shopping cart text element assert
        await this.isAsideShoppingCartTextElementAsExpected();
        //click 'Checkout' button
        await homePage.clickAsideShopCartCheckoutButton();
        //close Google browser alert
        await homePage.closeGoogleBrowserAlert();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Addition To Checkout Test Result");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page text element assert
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert creator description box is as expected
        const creatorBoxText = await homePage.getCreatorDescriptionBox();
        assert.strictEqual(creatorBoxText,  'Work in the Netherlands\n' + "Hi! I'm Jeremy Akeze from Doghouse IT Recruitment and I'm looking for skilled Software Engineers like you. If you wish to move abroad, follow me on Linkedin.", "The creator description box text doesn't match expectations.");
        //assert sizes subtitle is as expected
        const sizesSubtitle = await homePage.getSizesSubtitle();
        assert.strictEqual(sizesSubtitle, "Sizes:", "The sizes subtitle doesn't match expectations.");
        //assert aside subtext is as expected
        const asideSubtext = await homePage.getAsideSubtext();
        assert.strictEqual(asideSubtext, "Leave a star on Github if this repository was useful :)", "The aside subtext doesn't match expectations.");
    }

    //aside shopping cart text element assert test method
    async isAsideShoppingCartTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert aside shopping cart title is as expected
        const asideShoppingCartTitle = await homePage.getAsideShoppingCartTitle();
        assert.strictEqual(asideShoppingCartTitle, "Cart", "The aside shopping cart title doesn't match expectations.");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page product data logger method
    async logHomePageProductData(){
        const homePage = new HomePage(this.driver);
        //homepage product count getter
        const homePageProductCount = await homePage.getProductCount();
        Logger.info("Homepage product count: " + homePageProductCount);
        //homepage product names
        const homePageProductNames = await homePage.getHomePageProductName();
        Logger.info("Homepage product name(s): " + homePageProductNames);
        //homepage product unit prices
        const homePageProductUnitPrices = await homePage.getHomePageProductUnitPrice();
        Logger.info("Homepage product unit price(s): " + homePageProductUnitPrices);
        //homepage product alt prices
        const homePageProductAltPrices = await homePage.getHomePageProductAltPrice();
        Logger.info("Homepage product alt price(s): " + homePageProductAltPrices);
    }

    //aside shopping cart product data logger method
    async logAsideShoppingCartProductData(){
        const homePage = new HomePage(this.driver);
        //aside shopping cart product name getter
        const asideShopCartProductName = await homePage.getAsideShoppingCartProductName();
        Logger.info("Aside shopping cart product name(s): " + asideShopCartProductName);
        //aside shopping cart product description getter
        const asideShopCartProductDesc = await homePage.getAsideShoppingCartProductDescription();
        Logger.info("Aside shopping cart product description(s): " + asideShopCartProductDesc);
        //aside shopping cart product unlit price getter
        const asideShopCartProductUnitPrice = await homePage.getAsideShoppingCartProductUnitPrice();
        Logger.info("Aside shopping cart product unit price(s): " + asideShopCartProductUnitPrice);
        //aside shopping cart order subtotal price getter
        const asideShopCartOrderSubtotalPrice = await homePage.getAsideShoppingCartSubtotalPrice();
        Logger.info("Aside shopping cart order subtotal price(s): " + asideShopCartOrderSubtotalPrice);
        //aside shopping cart order alt price getter
        const asideShopCartOrderAltPrice = await homePage.getAsideShoppingCartSubtotalAltPrice();
        Logger.info("Aside shopping cart order alt price(s): " + asideShopCartOrderAltPrice);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, { recursive: true });
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }
}

module.exports = TestMethods;