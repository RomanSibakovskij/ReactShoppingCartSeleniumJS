# ReactShoppingCartSeleniumJS

Simple Selenium test suite on basic shopping cart functionality (various product addition to / quantity update / removal from shopping cart) The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 1.Java JDK 8 or higher 
 
 2.Node.js

 3.Jest
 
 4.IntelliJ IDEA (or another IDE that supports Java and Maven)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

// home page product display by size tests

1.	//Test 001 -> display only XS size products test 
2.	//Test 001a -> display only S size products test
3.	//Test 001b -> display only M size products test
4.	//Test 001c -> display only ML size products test
5.	//Test 001d -> display only L size products test
6.	//Test 001e -> display only XL size products test
7.	//Test 001f -> display only XXL size products test

//home page product select and unselect size test

1.	//Test 001g -> select M size checkbox then unselect test

//home page singular product addition/removal to cart tests

1.	//Test 002 -> add singular XS size product to cart test
2.	//Test 002a -> remove XS size product from cart test

//home page multiple products addition/removal to cart tests

1.	//Test 003 -> add multiple S size products to cart test
2.	//Test 003a -> add multiple L size products (with increased quantity) to cart test
3.	//Test 003b -> add multiple XL and ML sizes products to cart test
4.	//Test 003c -> remove multiple L size products (of set size - L) to cart test

//singular product addition to check out test (the flow holds there as there's no checkout page or any other confirmation - other than the Google browser alert - and you can click as many times on 'Checkout' as you want - it's working in an infinite loop)

1.	//Test 004 -> add singular XS size product to check out test

//multiple products addition to check out tests (the flow holds there as there's no checkout page or any other confirmation - other than the Google browser alert - and you can click as many times on 'Checkout' as you want - it's working in an infinite loop)

1.	//Test 005 -> add multiple S size products to check out test
2.	//Test 005a -> add multiple L size products (with increased quantity) to check out test
3.	/Test 005b -> add multiple XL and ML sizes products to check out test
