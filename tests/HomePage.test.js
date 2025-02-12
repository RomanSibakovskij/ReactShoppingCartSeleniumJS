const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('HomePage Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(40000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe('Home Page Product Sorting By Size Tests', () => {

        //Test 001 -> display only XS size products test (the product size is being displayed as 'S' though)
        test("Display Only XS Size Products Test", async function () {
            await testMethods.homepageDisplayProductXSSizeTest();
        });

        //Test 001a -> display only S size products test
        test("Display Only S Size Products Test", async function () {
            await testMethods.homepageDisplayProductSSizeTest();
        });

        //Test 001b -> display only M size products test
        test("Display Only M Size Products Test", async function () {
            await testMethods.homepageDisplayProductMSizeTest();
        });

        //Test 001c -> display only ML size products test
        test("Display Only ML Size Products Test", async function () {
            await testMethods.homepageDisplayProductMLSizeTest();
        });

        //Test 001d -> display only L size products test
        test("Display Only L Size Products Test", async function () {
            await testMethods.homepageDisplayProductLSizeTest();
        });

        //Test 001e -> display only XL size products test
        test("Display Only XL Size Products Test", async function () {
            await testMethods.homepageDisplayProductXLSizeTest();
        });

        //Test 001f -> display only XXL size products test
        test("Display Only XXL Size Products Test", async function () {
            await testMethods.homepageDisplayProductXXLSizeTest();
        });

    });

    describe('Home Page Product Select And Unselect Size Test', () => {

        //Test 001g -> select M size checkbox then unselect test
        test("Select M Size Products Checkbox And Unselect Test", async function () {
            await testMethods.homepageSelectProductMSizeAndUnselectTest();
        });

    });

    describe('Home Page Singular Product Addition/Removal To Cart Tests', () => {

        //Test 002 -> add singular XS size product to cart test
        test("Add Singular XS Size Product To Cart Test", async function () {
            //display only XS size products test
            await testMethods.homepageDisplayProductXSSizeTest();
            //add singular product to cart test
            await testMethods.addSingularSetSizeProductToCartTest();
        });

        //Test 002a -> remove XS size product from cart test
        test("Remove XS Size Product From Cart Test", async function () {
            //display only XS size products test
            await testMethods.homepageDisplayProductXSSizeTest();
            //remove singular product from cart test
            await testMethods.removeSingularSetSizeProductFromCartTest();
        });

    });

    describe('Home Page Multiple Product Addition/Removal To Cart Tests', () => {

        //Test 003 -> add multiple S size products to cart test
        test("Add Multiple S Size Products To Cart Test", async function () {
            //display only S size products test
            await testMethods.homepageDisplayProductSSizeTest();
            //add multiple products (of set size - S) to cart test
            await testMethods.addMultipleProductsToCartTest();
        });

        //Test 003a -> add multiple L size products (with increased quantity) to cart test
        test("Add Multiple L Size Products (with increased quantity) To Cart Test", async function () {
            //display only L size products test
            await testMethods.homepageDisplayProductLSizeTest();
            //add multiple products (of set size - L) with added quantity to cart test
            await testMethods.addMultipleProductsToCartWithAddedQuantityTest();
        });

        //Test 003b -> add multiple XL and ML sizes products to cart test (Basic Cactus T-Shirt size is displayed as X, and not ML)
        test("Add Multiple XL And ML Sizes Products To Cart Test", async function () {
            //display only XL size products test
            await testMethods.homepageDisplayProductXLSizeTest();
            //display only ML size products test
            await testMethods.homepageDisplayProductMLSizeTest();
            //add multiple products (of set sizes - XL and ML) to cart test
            await testMethods.addMultipleProductsToCartTest();
        });

        //Test 003c -> remove multiple L size products (of set size - L) to cart test
        test("Add Multiple L Size Products (of set size - L) To Cart Test", async function () {
            //display only L size products test
            await testMethods.homepageDisplayProductLSizeTest();
            //add multiple products (of set size - L) with added quantity to cart test
            await testMethods.addMultipleProductsToCartWithAddedQuantityTest();
            //remove multiple products (of set size - L) with added quantity from cart test
            await testMethods.removeMultipleProductsFromCartTest();
        });

    });

    //singular product addition to check out test (the flow holds there as there's no checkout page or any other confirmation - other than the Google browser alert - and you can click as many times on 'Checkout' as you want - it's working in an infinite loop)

    describe('Home Page Singular Product Addition To Checkout Tests', () => {

        //Test 004 -> add singular XS size product to check out test
        test("Add Singular XS Size Product To Checkout Test", async function () {
            //display only XS size products test
            await testMethods.homepageDisplayProductXSSizeTest();
            //add singular product to cart test
            await testMethods.addSingularSetSizeProductToCartTest();
            //add singular product to check out test
            await testMethods.addProductToCheckoutTest();
        });

    });

    //multiple products addition to check out tests (the flow holds there as there's no checkout page or any other confirmation - other than the Google browser alert - and you can click as many times on 'Checkout' as you want - it's working in an infinite loop)

    describe('Home Page Multiple Product Addition To Checkout Tests', () => {

        //Test 005 -> add multiple S size products to check out test
        test("Add Multiple S Size Products To Checkout Test", async function () {
            //display only S size products test
            await testMethods.homepageDisplayProductSSizeTest();
            //add multiple products (of set size - S) to cart test
            await testMethods.addMultipleProductsToCartTest();
            //add multiple products to check out test
            await testMethods.addProductToCheckoutTest();
        });

        //Test 005a -> add multiple L size products (with increased quantity) to check out test
        test("Add Multiple L Size Products (with increased quantity) To Checkout Test", async function () {
            //display only L size products test
            await testMethods.homepageDisplayProductLSizeTest();
            //add multiple products (of set size - L) with added quantity to cart test
            await testMethods.addMultipleProductsToCartWithAddedQuantityTest();
            //add multiple product to check out test
            await testMethods.addProductToCheckoutTest();
        });

        //Test 005b -> add multiple XL and ML sizes products to check out test (Basic Cactus T-Shirt size is displayed as X, and not ML)
        test("Add Multiple XL And ML Sizes Products To Checkout Test", async function () {
            //display only XL size products test
            await testMethods.homepageDisplayProductXLSizeTest();
            //display only ML size products test
            await testMethods.homepageDisplayProductMLSizeTest();
            //add multiple products (of set sizes - XL and ML) to cart test
            await testMethods.addMultipleProductsToCartTest();
            //add multiple products to check out test
            await testMethods.addProductToCheckoutTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

