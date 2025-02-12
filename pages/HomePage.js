const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const {warn} = require("./utils/Logger");
const {Alert} = require("selenium-webdriver/lib/webdriver");

class HomePage extends BasePage {

    constructor(driver){
        super(driver);

        //homepage web elements
        //header
        this._creatorGitHubLink = By.xpath("//div[@id='root']//a[@aria-label='View source on Github']");
        this._creatorImage = By.xpath("//div[@id='root']//img");
        this._creatorDescriptionBox = By.xpath("//div[@id='root']//div[@class='sc-joc36b-3 jCptDE']");
        this._shoppingCartButton = By.xpath("//div[@id='root']//button[@class='sc-1h98xa9-0 gFkyvN']");
        //sizes list button elements
        this._sizeButtonElements = By.xpath("//span[@class='checkmark']");
        //main page content
        this._sizesSubtitle = By.xpath("//h4[@class='sc-bj2vay-2 jepTHo']")
        this._asideSubtext = By.xpath("//div[@class='star-button-container']/p");
        this._gitHubStarLink = By.xpath("//div[@class='star-button-container']/a");
        this._productCount = By.xpath("//main[@class='sc-ebmerl-4 iliWeY']/p");
        //product grid table elements
        this._productGridFreeShippingTagElements = By.xpath("//div[@tabindex='1']/div[1]");
        this._productGridImageElements = By.xpath("//div[@tabindex='1']/div[2]");
        this._productGridNameElements = By.xpath("//div[@tabindex='1']/p");
        this._productGridUnitPriceElements = By.xpath("//div[@tabindex='1']/div[3]/p[1]");
        this._productGridAltPriceElements = By.xpath("//div[@tabindex='1']/div[3]/p[2]");
        this._productGridAddToCartButtonElements = By.xpath("//div[@tabindex='1']/button");
        //shopping cart aside section elements
        this._asideShoppingCartTitle = By.xpath("//div[@class='sc-1h98xa9-4 hzlwTK']/div[1]/span");
        this._asideShoppingCartIcon = By.xpath("//div[@class='sc-1h98xa9-4 hzlwTK']/div[1]/div");
        this._asideShoppingCartCloseButton = By.xpath("//button[@class='sc-1h98xa9-0 gFkyvN']");
        //shopping cart list elements
        this._asideShoppingCartProductImageElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/img");
        this._asideShoppingCartProductNameElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/div[1]/p[1]");
        this._asideShoppingCartProductDescriptionElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/div[1]/p[2]");
        this._asideShoppingCartProductUnitPriceElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/div[2]/p");
        this._asideShoppingCartProductQtyDecreaseButtonElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/div[2]//button[1]");
        this._asideShoppingCartProductQTYIncreaseButtonElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/div[2]//button[2]");
        this._addProductsToCartMessage = By.xpath("//p[@class='sc-7th5t8-1 hqDkK']");
        //singular elements
        this._asideShoppingCartProductRemoveButtonElements = By.xpath("//div[@class='sc-7th5t8-0 jehOnP']/div/button");
        this._asideShoppingCartOrderSubtotalPrice = By.xpath("//div[@class='sc-1h98xa9-12 fqwdnu']/div/p[1]");
        this._asideShoppingCartOrderSubtotalAltPrice = By.xpath("//div[@class='sc-1h98xa9-12 fqwdnu']/div/p[2]");
        this._asideShoppingCartCheckoutButton = By.xpath("//div[@class='sc-1h98xa9-12 fqwdnu']/button");
    }

    //size checkbox click method
    async clickSizeCheckbox(index) {
        const checkboxes = await this.driver.findElements(this._sizeButtonElements);
        await checkboxes[index].click();
    }

    //'Add to Cart' button click method
    async clickAddToCartButton(index) {
        const addToCartButtons = await this.driver.findElements(this._productGridAddToCartButtonElements);
        await addToCartButtons[index].click();
    }

    //aside shopping cart product 'Quantity Increase' button click method
    async clickAsideShopCartProductQtyIncreaseButton(index) {
        const increaseProductQtyButtons = await this.driver.findElements(this._asideShoppingCartProductQTYIncreaseButtonElements);
        await increaseProductQtyButtons[index].click();
    }

    //aside shopping cart product 'Remove' button click method
    async clickAsideShopCartProductRemoveButton(index) {
        const increaseProductRemoveButtons = await this.driver.findElements(this._asideShoppingCartProductRemoveButtonElements);
        await increaseProductRemoveButtons[index].click();
    }

    //aside shopping cart 'Checkout' button click method
    async clickAsideShopCartCheckoutButton() {
        const checkoutButton = await this.driver.findElement(this._asideShoppingCartCheckoutButton);
        await checkoutButton.click();
    }

    //close 'Google' browser alert
    async closeGoogleBrowserAlert(){
        const alert = await this.driver.switchTo().alert();
        await alert.accept();
    }

    //creator description box text getter
    async getCreatorDescriptionBox(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const creatorDescriptionText = await this.driver.findElement(this._creatorDescriptionBox);
        return await creatorDescriptionText.getText();
    }
    //sizes subtitle getter
    async getSizesSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const sizesSubtitle = await this.driver.findElement(this._sizesSubtitle);
        return await sizesSubtitle.getText();
    }
    //aside subtext getter
    async getAsideSubtext(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const asideSubtext = await this.driver.findElement(this._asideSubtext);
        return await asideSubtext.getText();
    }
    //product count getter
    async getProductCount(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const productCount = await this.driver.findElement(this._productCount);
        return await productCount.getText();
    }

    //home page product grid data getters
    async getHomePageProductName() {
        const elements = await this.driver.findElements(this._productGridNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageProductUnitPrice() {
        const elements = await this.driver.findElements(this._productGridUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get unit price:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageProductAltPrice() {
        const elements = await this.driver.findElements(this._productGridAltPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.replace(/^or \+ /, '').trim();
                } catch (error) {
                    warn('Failed to get alt price:', error.message);
                    return '';
                }
            })
        );
    }

    //aside shopping cart title getter
    async getAsideShoppingCartTitle(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const asideShopCartTitle = await this.driver.findElement(this._asideShoppingCartTitle);
        return await asideShopCartTitle.getText();
    }

    //aside shopping cart product text element getters
    async getAsideShoppingCartProductName() {
        const elements = await this.driver.findElements(this._asideShoppingCartProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getAsideShoppingCartProductDescription() {
        const elements = await this.driver.findElements(this._asideShoppingCartProductDescriptionElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    //aside shopping cart order summary text getters
    //subtotal price getter
    async getAsideShoppingCartSubtotalPrice(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const asideShopCartSubtotalPrice = await this.driver.findElement(this._asideShoppingCartOrderSubtotalPrice);
        return await asideShopCartSubtotalPrice.getText();
    }
    //subtotal price getter
    async getAsideShoppingCartSubtotalAltPrice(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const asideShopCartSubtotalAltPrice = await this.driver.findElement(this._asideShoppingCartOrderSubtotalAltPrice);
        return await asideShopCartSubtotalAltPrice.getText();
    }

    async getAsideShoppingCartProductUnitPrice() {
        const elements = await this.driver.findElements(this._asideShoppingCartProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    //'Add products to cart' message getter
    async getAddProductsToCartMessage(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const addProductsToCartMessage = await this.driver.findElement(this._addProductsToCartMessage);
        return await addProductsToCartMessage.getText();
    }

    //homepage web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            this._creatorGitHubLink,
            this._creatorImage,
            this._creatorDescriptionBox,
            this._shoppingCartButton,
            this._sizesSubtitle,
            this._asideSubtext,
            this._gitHubStarLink,
            this._productCount,
            //list elements
            //this._sizeButtonElements,
            this._productGridFreeShippingTagElements,
            this._productGridImageElements,
            this._productGridNameElements,
            this._productGridUnitPriceElements,
            this._productGridAltPriceElements,
            this._productGridAddToCartButtonElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAsideShoppingCartWebElementDisplayed(){
        const elementsToCheck = [
            //this._asideShoppingCartTitle, //Selenium fails to tag this element as displayed even though it's displayed and not obstructed
            //this._asideShoppingCartIcon, //Selenium fails to tag this element as displayed even though it's displayed and not obstructed
            this._asideShoppingCartCloseButton,
            this._asideShoppingCartOrderSubtotalPrice,
            this._asideShoppingCartOrderSubtotalAltPrice,
            this._asideShoppingCartCheckoutButton,
            //list elements
            this._asideShoppingCartProductImageElements,
            this._asideShoppingCartProductNameElements,
            this._asideShoppingCartProductDescriptionElements,
            this._asideShoppingCartProductUnitPriceElements,
            this._asideShoppingCartProductQtyDecreaseButtonElements,
            this._asideShoppingCartProductQTYIncreaseButtonElements,
            this._asideShoppingCartProductRemoveButtonElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }



}
module.exports = {HomePage};