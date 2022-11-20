/**
 * Shopping cart.
 */

/**
 * Creates both lists that contain separate purchased and available products.
 */
const shoppingCartConstructor = () => {
  let purchasedProductsList = listOfPurchasedProducts(productsWarehouse()),
      availableProductsList = listOfAvailableProducts(productsWarehouse());

  // Purchased products list.
  printShoppingList('js-purchased-products', resultHtml(purchasedProductsList));

  // Available products list.
  printShoppingList('js-available-products', resultHtml(availableProductsList));
}

/**
 * Creates a single product object.
 * 
 * @param { string } productName   The name of the product.
 * @param { string } productIcon   The icon of the product for better visualization.
 * @param { integer } quantity     The quantity of the products.
 * @param { integer } productPrice   The price for 1 piece.
 * @param { boolean } purchased    If this product is already purchased or not.
 * @returns { object } newProduct.
 */
const productConstructor = ( productName, productIcon = '🙃', quantity, productPrice, purchased = false ) => {
  let newProduct = {
    product_name: productName,
    quantity: quantity,
    product_price: productPrice,
    purchased: purchased,
    icon: productIcon
  }

  newProduct.total = (newProduct.quantity * newProduct.product_price).toFixed(2);

  return newProduct;
}

/**
 * Creates the array of all the products in the store. 
 * Each product is supposed to be an object.
 * 
 * @returns { array } productsInWarehouse.
 */
const productsWarehouse = () => {
  const productsInWarehouse = [ 
    productConstructor('apple', '🍎', 5, 2.2),
    productConstructor('pear', '🍐', 3, 2.5),
    productConstructor('orange', '🍊', 6, 1.5, true),
    productConstructor('lemon', '🍋', 2, 3.5),
    productConstructor('banana', '🍌', 6, 1.9),
    productConstructor('watermelon', '🍉', 1, 2),
    productConstructor('grapes', '🍇', 3, 3.5),
    productConstructor('strawbery', '🍓', 1, 5, true),
    productConstructor('cherries', '🍒', 2, 4.5),
    productConstructor('peach', '🍑', 7, 4.5),
    productConstructor('mango', '🥭', 3, 3.4),
    productConstructor('coconut', '🥥', 5, 5.3),
    productConstructor('kivi', '🥝', 6, 2.4),
    productConstructor('melon', '🍈', 2, 2.1),
    productConstructor('pineaple', '🍍', 3, 5),
    productConstructor('brocoli', '🥦', 4, 0.8, true),
    productConstructor('tomato', '🍅', 5, 1.4),
    productConstructor('cucumber', '🥒', 2, 3.6, true),
    productConstructor('chili', '🌶', 2, 3.2),
    productConstructor('garlic', '🧄', 2, 1.5, true),
    productConstructor('onion', '🧅', 5, 0.5),
    productConstructor('carrot', '🥕', 8, 0.5),
    productConstructor('corn', '🌽', 4, 1),
    productConstructor('milk', '🥛', 1, 1.2 ),
    productConstructor('potato', '🥔', 5, 0.2, true),
    productConstructor('bagel', '🥯', 2, 2.5),
    productConstructor('croissant', '🥐', 5, 0.49, true),
    productConstructor('bread', '🍞', 2, 3.5),
    productConstructor('chease', '🧀', 2, 6.7, true),
    productConstructor('egg', '🥚', 12, 0.3),
    productConstructor('bacon', '🥓', 5, 0.5),
    productConstructor('pizza', '🍕', 2, 10),
    productConstructor('waffle', '🧇', 5, 3),
    productConstructor('dumpling', '🥟', 20, 0.1),
    productConstructor('coockie', '🍪', 5, 0.2, true),
    productConstructor('chockolate', '🍫', 1, 3.3),
    productConstructor('honey', '🍯', 1, 20),
    productConstructor('donut', '🍩', 4, 1, true),
    productConstructor('peanuts', '🥜', 50, 0.05)
  ];
  
  return productsInWarehouse;
}

/**
 * Filters the array of all the products and creates a list of purchased products.
 * 
 * @param { array } listOfProducts Array of all the products.
 * @returns { array } Only the purchased products.
 */
const listOfPurchasedProducts = ( listOfProducts ) => {
  purchasedProducts = listOfProducts.filter( ( product ) => product.purchased === true );

  return purchasedProducts;
}

/**
 * Filters the array of all the products and creates a list of available products.
 * 
 * @param { array } listOfProducts Array of all the products.
 * @returns { array }  Only the available products.
 */
 const listOfAvailableProducts = ( listOfProducts ) => {
  let listOfAvailableProducts = listOfProducts.filter( ( product ) => product.purchased === false );

  return listOfAvailableProducts;
}

/**
 * Gets all the checked products and adds it's values to array.
 * 
 * @returns { array } With selected product values.
 */
 const getSelectedProducts = ( ) => {
  let allSelected = document.querySelectorAll('input[type="checkbox"]:checked'),
      selectedValues = [];

  // Sanitizing and assigning selecteed product values to array.
  Object.keys(allSelected).forEach(key => {
    if (allSelected[key] === undefined) {
      delete allSelected[key];
    } else {
      selectedValues.push(allSelected[key].value);
    }
  });

  return selectedValues;
}

/**
 * Changing parameter purchased in products list.
 * 
 * @param { array } currentProducts                    Of current products. Could be purchased or available.
 * @param { array } selectedProductsValues             Of product names that were selected.
 * @param { array } updatedProductsInStock             Of products in stock.
 * @param { boolean } checkingListOfPurchasedProducts  Defines which list we check.
 * @returns { array }                                  With updated products that have new purchased true/false values.
 */
 const updatingProductStock = ( currentProducts, selectedProductsValues, updatedProductsInStock, checkingListOfPurchasedProducts = true ) => {
  let isPurchased = checkingListOfPurchasedProducts ? false : true;

  Object.keys(currentProducts).forEach(key => {
    if ( selectedProductsValues.includes( currentProducts[key].product_name ) ) {
      console.log(!currentProducts[key].product_name.purchased, currentProducts[key].product_name);
      updatedProductsInStock.find(product => product.product_name === currentProducts[key].product_name).purchased = isPurchased;
    }
  });

  return updatedProductsInStock;
}

/**
 * Callback function to handles all the logic after add/remove products to/from the list button clicked.
 * 
 * @param { boolean } purchasedList         If we update the list of purchased products.
 * 
 */
 let updatedProductsInStock = [];
 const updateList = ( purchasedList = true ) => {
  console.log('We are in updateList function');
  let allProductsInStock = productsWarehouse();

  // If this is first iteration assign the generated list, if not, 
  // it should already have the the new list of products from the previous iteration.
  if ( updatedProductsInStock !== 'undefined' && updatedProductsInStock.length === 0 ) {
    updatedProductsInStock = allProductsInStock;
  } 

  // We need these to make sure that the checked products were removed from and added to the correct lists.
  let currentList = purchasedList === true ? listOfPurchasedProducts(updatedProductsInStock) : listOfAvailableProducts(updatedProductsInStock),
      updatedPurchasedList = [],
      updatedAvailabelList = [];

  // All selected elements and their values.
  let selectedValues = getSelectedProducts();

  // Updating stock in accordance with purchased: true/false.
  updatedProductsInStock = updatingProductStock( currentList, selectedValues, updatedProductsInStock, purchasedList);
  console.log( 'updatingProductStock is not updating the availabel list true/false');


  // Re-generating lists from stock.
  updatedPurchasedList = listOfPurchasedProducts( updatedProductsInStock );
  updatedAvailabelList = listOfAvailableProducts( updatedProductsInStock );

  // Print new lists.
  printShoppingList( 'js-purchased-products', resultHtml( updatedPurchasedList ));
  printShoppingList( 'js-available-products', resultHtml( updatedAvailabelList ));
}

/**
 * Prepares the HTML responce to be published.
 * 
 * @param { array } listOfProducts An array to convert in HTML.
 * @returns { string } resultHtml The string to be published.
 */
 const resultHtml = ( listOfProducts ) => {
  let futureDomElement = `<div class="product__list-heading"><span></span><span>Product</span><span>Qty</span><span>Price</span><span>Total</span></div>`;

 listOfProducts.map( product => {
    futureDomElement += `<label class="product__label" for="${product.product_name}">`;
    futureDomElement += `<input type="checkbox"`;
    futureDomElement += ` id="${product.product_name}"`;
    futureDomElement += ` class="${product.purchased ? 'js-purchased-product' : 'js-available-product'}"`;
    futureDomElement += ` value="${product.product_name}"`;
    futureDomElement += ` name="${product.product_name}"`;
    futureDomElement += ` for="${product.product_name}"`; 
    futureDomElement += ` <span class="product__name">${product.icon} ${product.product_name.charAt(0).toUpperCase() + product.product_name.slice(1)}</span>`; 
    futureDomElement += ` <span class="product__quantity">${product.quantity}</span>`; 
    futureDomElement += ` <span class="product__price">${product.product_price}</span>`;
    futureDomElement += ` <span class="product__total">${product.total}</span>`; 
    futureDomElement += `</label>`;        
  });

  // listOfAvailableProducts = listOfProducts.filter( ( value ) => value.purchased === false );

  return futureDomElement;
}

/**
 * Prints the result.
 * 
 * @param { string } selector Selector class to input the result into.
 * @param { string } result The string that we want to show.
 *
 */
function printShoppingList ( selector, result ) {
  let listLocation = document.getElementsByClassName(selector);

  for (let i = 0; i < listLocation.length; i++) {
    listLocation[i].innerHTML = result;
    listLocation[i].style.visibility = 'visible';
  }
}

// Handle Add/Remove products to/from the list.
document.querySelector('#removeFromPurchased').addEventListener('click', () => { updateList(); } );
document.querySelector('#addToPurchased').addEventListener('click', () => { updateList( false ); } );

// Inint the function and construct the first load of product.
shoppingCartConstructor();
