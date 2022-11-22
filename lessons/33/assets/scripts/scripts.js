/**
 * Shopping cart.
 */

/* ---------- Prepare and print 2 lists of products. ----------- */

/**
 * Creates both lists that contain separate purchased and available products.
 */
const shoppingCartConstructor = () => {
  let smallerStock = productsWarehouse( 10 ),
      purchasedProductsList = listOfPurchasedProducts(productsWarehouse()),
      availableProductsList = listOfAvailableProducts(productsWarehouse());

  // Smaller list for main tasks.
  printShoppingList('js-stock', resultHtml(smallerStock));

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
 * @param { integer } capacity   How many products we want to show in the list from the warehouse. 
 * @returns { array }            List of products from warehouse.
 */
const productsWarehouse = ( capacity = 39 ) => {
  const productsInWarehouse = [ 
    productConstructor('apple', '🍎', 5, 2.2, true),
    productConstructor('pear', '🍐', 3, 2.5, true),
    productConstructor('orange', '🍊', 6, 1.5, true),
    productConstructor('lemon', '🍋', 2, 3.5),
    productConstructor('banana', '🍌', 6, 1.9),
    productConstructor('watermelon', '🍉', 1, 2),
    productConstructor('grapes', '🍇', 3, 3.5),
    productConstructor('strawbery', '🍓', 1, 5, true),
    productConstructor('cherries', '🍒', 2, 4.5),
    productConstructor('peach', '🍑', 7, 4.5),
    productConstructor('mango', '🥭', 3, 3.4),
    productConstructor('coconut', '🥥', 5, 5.3, true),
    productConstructor('kivi', '🥝', 6, 2.4),
    productConstructor('melon', '🍈', 2, 2.1, true),
    productConstructor('pineaple', '🍍', 3, 5,true),
    productConstructor('brocoli', '🥦', 4, 0.8, true),
    productConstructor('tomato', '🍅', 5, 1.4),
    productConstructor('cucumber', '🥒', 2, 3.6, true),
    productConstructor('chili', '🌶', 2, 3.2),
    productConstructor('garlic', '🧄', 2, 1.5, true),
    productConstructor('onion', '🧅', 5, 0.5),
    productConstructor('carrot', '🥕', 8, 0.5, true),
    productConstructor('corn', '🌽', 4, 1, true),
    productConstructor('milk', '🥛', 1, 1.2, true),
    productConstructor('potato', '🥔', 5, 0.2, true),
    productConstructor('bagel', '🥯', 2, 2.5),
    productConstructor('croissant', '🥐', 5, 0.49, true),
    productConstructor('bread', '🍞', 2, 3.5),
    productConstructor('chease', '🧀', 2, 6.7, true),
    productConstructor('egg', '🥚', 12, 0.3),
    productConstructor('bacon', '🥓', 5, 0.5, true),
    productConstructor('pizza', '🍕', 2, 10),
    productConstructor('waffle', '🧇', 5, 3),
    productConstructor('dumpling', '🥟', 20, 0.1),
    productConstructor('coockie', '🍪', 5, 0.2, true),
    productConstructor('chockolate', '🍫', 1, 3.3),
    productConstructor('honey', '🍯', 1, 20),
    productConstructor('donut', '🍩', 4, 1, true),
    productConstructor('peanuts', '🥜', 50, 0.05)
  ];
  
  let productsToShow = productsInWarehouse.slice( 0, capacity);

  return productsToShow;
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
 * Prepares the HTML responce to be published.
 * 
 * @param { array } listOfProducts An array to convert in HTML.
 * @returns { string } resultHtml The string to be published.
 */
 const resultHtml = ( listOfProducts, purchasedChecked = false ) => {
  let futureDomElement = `<div class="product__list-heading"><span></span><span>Product</span><span>Qty</span><span>Price</span><span>Total</span></div>`;

 listOfProducts.map( product => {
    futureDomElement += `<label class="product__label" for="${product.product_name}">`;
    futureDomElement += `<input type="checkbox"`;
    futureDomElement += purchasedChecked && product.purchased ? ` checked` : ``;
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
const printShoppingList = ( selector, result ) => {
  let listLocation = document.getElementsByClassName(selector);

  for (let i = 0; i < listLocation.length; i++) {
    listLocation[i].innerHTML = result;
    listLocation[i].style.visibility = 'visible';
  }
}

/**
 * Gets the value from input elements after some button is clicked.
 * 
 * @param { string } inputSelector Selector id of the input element to get the value from.
 * @param { string } result        The value from that input.
 *
 */
 const getInputValue = ( inputSelector ) => {
  const inputValue = document.getElementById(inputSelector).value;

  return inputValue;
}


/* ---------- Manipulations with proucts ----------- */
/**
 * Sort the array by purchased status.
 * Available first, purchased the last.
 * 
 * @param { array } productList   Of products.
 * @returns { array }             Sorted array.
 */
 const sortProducts = ( productList ) => {

  sortedList = productList.sort((a, b) => Number(a.purchased) - Number(b.purchased));

  return sortedList;
}

/**
 * Changes purchased status of product by name.
 * 
 * @param { array } productList    Of products.
 * @param { string } productName   The name of the product to be updated in the product list.
 * @returns { array }              Array with a newly added purchased product.
 */
 const addToPurchasedByName = ( productList, productName ) => {
  productName = productName.toLowerCase();
  let isFoundProduct =  productList.find(product => product.product_name === productName) !== undefined;

  if ( isFoundProduct ) {
    productList.find(product => product.product_name === productName).purchased = true;
  }

  return productList;
}

/**
 * Removes product by creating a new array by product name.
 * 
 * @param { array } productList    Of products.
 * @param { string } productName   The name of the product to be removed from the product list.
 * @returns { array }              Array without the removed product.
 */
 const removeByName = ( productList, productName ) => {
  productName = productName.toLowerCase();
  const productIndex = productList.findIndex(object => {
    return object.product_name === productName;
  });

  removeItemWithSlice = ( productList, index ) => {
    const firstArr = productList.slice(0, index);
    const secondArr = productList.slice(index + 1);
    return [...firstArr , ...secondArr]
  }

  if ( productIndex !== -1 ) {
    productList = removeItemWithSlice( productList, productIndex );
  }

  return productList;
}

/**
 * Calculates the total price of all the products in the list.
 * 
 * @param { array } productList   Of products.
 * @returns { integer }           Total price.
 */
 const calculateTotal = ( productList ) => {
  let totalPrice = 0;

  for ( let product of productList) {
    totalPrice = +product.total + totalPrice;
  }

  return totalPrice;
}

/**
 * Calculates the total price of the products by their purchase status.
 * 
 * @param { array } productList       Of products.
 * @param { boolean } isPurchased     If calculation is done for purchased products.
 * @returns { integer }               Total price.
 */
 const calculateTotalSeparately = ( productList, isPurchased = true ) => {
  let totalPrice = 0;

  for ( let product of productList) {
    if ( product.purchased === isPurchased ) {
      totalPrice = +product.total + totalPrice;
    }
  }

  return totalPrice;
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

  // Re-generating lists from stock.
  updatedPurchasedList = listOfPurchasedProducts( updatedProductsInStock );
  updatedAvailabelList = listOfAvailableProducts( updatedProductsInStock );

  // Print new lists.
  printShoppingList( 'js-purchased-products', resultHtml( updatedPurchasedList ));
  printShoppingList( 'js-available-products', resultHtml( updatedAvailabelList ));
}

/* ---------- Handlers ----------- */
const sortProductsHandler = () => {
  const sortedProducts = sortProducts( productsWarehouse( 10 ) );

  printShoppingList('js-stock', resultHtml( sortedProducts, true ));
 }

const addToPurchasedByNameHandler = () => {
 let valueFromTheField = getInputValue( 'addToPurchasedProduct' ),
     updatedList = addToPurchasedByName( productsWarehouse( 10 ), valueFromTheField );

  printShoppingList('js-stock', resultHtml(updatedList, true));
}

const removeByNameHandler = () => {
  let valueFromTheField = getInputValue( 'removeProductFromStock' ),
      updatedList = removeByName( productsWarehouse( 10 ), valueFromTheField );

   printShoppingList('js-stock', resultHtml(updatedList));
}

const addNewProductHandler = () => {
  // 1. Check if product exists and add the quantity in existing.
  // 2. Create new object in array.

  let valueFromTheField = getInputValue( 'removeProductFromStock' ),
      updatedList = removeByName( productsWarehouse( 10 ), valueFromTheField );

   printShoppingList('js-stock', resultHtml(updatedList));
}

const calculateTotalHandler = () => {
  const totalPrice = calculateTotal( productsWarehouse( 10 ) ),
        message = `The total price for all products is <b>${totalPrice}€</b>.`;

  printShoppingList('js-caclulate-total', message);
}

const calculateTotalSeparatelyHandler = ( calculatePurchased = true ) => {
  const totalOfPurchased = calculateTotalSeparately( productsWarehouse( 10 ) ),
        totalOfAvailable = calculateTotalSeparately( productsWarehouse( 10 ), false ),
        message = `The total price for all purchased products is <b>${totalOfPurchased}€</b>, and for all available products is <b>${totalOfAvailable}€</b>.`;

        printShoppingList('js-caclulate-total-separately', message);
}

const sortProductsAlphabeticallyHandler = ( ) => {
  
}


/* ---------- Listeners ----------- */
const sortedProducts = sortProducts( productsWarehouse( 10 ) );
document.querySelector('#sortProducts').addEventListener('click', () => { sortProductsHandler() } );

document.querySelector('#addToPurchasedByName').addEventListener('click', () => { addToPurchasedByNameHandler() } );

document.querySelector('#removeProduct').addEventListener('click', () => { removeByNameHandler() } );

document.querySelector('#caclulateTotal').addEventListener('click', () => { calculateTotalHandler() } );

document.querySelector('#caclulateTotalSepaarately').addEventListener('click', () => { calculateTotalSeparatelyHandler() } );

// Handle Add/Remove products to/from the list.
document.querySelector('#removeFromPurchased').addEventListener('click', () => { updateList(); } );
document.querySelector('#addToPurchased').addEventListener('click', () => { updateList( false ); } );

// Inint the function and construct the first load of product.
shoppingCartConstructor();
