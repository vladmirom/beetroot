/**
 * Shopping cart.
 */

/**
 * Creates the main list of products.
 */
const shoppingCartConstructor = () => {
  let smallerStock = productsWarehouse( 15 );

  printShoppingList('js-stock', resultHtml(smallerStock));
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
const productConstructor = ( productName, quantity, productPrice, productIcon = '🙃', purchased = false ) => {
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
    productConstructor('apple', 5, 2.2, '🍎', true),
    productConstructor('pear', 3, 2.5, '🍐', true),
    productConstructor('orange', 6, 1.5, '🍊', true),
    productConstructor('lemon', 2, 3.5, '🍋'),
    productConstructor('banana', 6, 1.9, '🍌'),
    productConstructor('watermelon', 1, 2, '🍉'),
    productConstructor('grapes', 3, 3.5, '🍇'),
    productConstructor('strawbery', 1, 5, '🍓', true),
    productConstructor('cherries', 2, 4.5, '🍒'),
    productConstructor('peach', 7, 4.5, '🍑'),
    productConstructor('mango', 3, 3.4, '🥭'),
    productConstructor('coconut', 5, 5.3, '🥥', true),
    productConstructor('kivi', 6, 2.4, '🥝'),
    productConstructor('melon', 2, 2.1, '🍈', true),
    productConstructor('pineaple', 3, 5, '🍍', true),
    productConstructor('brocoli', 4, 0.8, '🥦', true),
    productConstructor('tomato', 5, 1.4, '🍅'),
    productConstructor('cucumber', '🥒', 2, 3.6, '🥒', true),
    productConstructor('chili', 2, 3.2, '🌶'),
    productConstructor('garlic', 2, 1.5, '🧄', true),
    productConstructor('onion', 5, 0.5, '🧅'),
    productConstructor('carrot', 8, 0.5, '🥕', true),
    productConstructor('corn', 4, 1, '🌽', true),
    productConstructor('milk', 1, 1.2, '🥛', true),
    productConstructor('potato', 5, 0.2, '🥔', true),
    productConstructor('bagel', 2, 2.5, '🥯'),
    productConstructor('croissant', 5, 0.49, '🥐', true),
    productConstructor('bread', 2, 3.5, '🍞'),
    productConstructor('chease', 2, 6.7, '🧀', true),
    productConstructor('egg', 12, 0.3, '🥚'),
    productConstructor('bacon', 5, 0.5, '🥓', true),
    productConstructor('pizza', 2, 10, '🍕'),
    productConstructor('waffle', 5, 3, '🧇'),
    productConstructor('dumpling', 20, 0.1, '🥟'),
    productConstructor('coockie', 5, 0.2, '🍪', true),
    productConstructor('chockolate', 1, 3.3, '🍫'),
    productConstructor('honey', 1, 20, '🍯'),
    productConstructor('donut', 4, 1, '🍩', true),
    productConstructor('peanuts', 50, 0.05, '🥜')
  ];
  
  let productsToShow = productsInWarehouse.slice( 0, capacity);

  return productsToShow;
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
 * @param { array } productList     Of products.
 * @param { boolean } byPrice       If we want to sort by price value.
 * @param { boolean } productList   If we want to sort in ascending order. False === descending order.
 * @returns { array }               Sorted array.
 */
 const sortProducts = ( productList, byPrice = false, asc = true ) => {
  let sortedList = [];

  if ( byPrice ) {
    if (asc) {
      sortedList = productList.sort((a, b) => Number( a.total ) - Number( b.total ));
    } else {
      sortedList = productList.sort((a, b) => Number( b.total ) - Number( a.total ));
    }
  } else {
    sortedList = productList.sort((a, b) => Number( a.purchased ) - Number( b.purchased ));
  }

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
 * Updates the current product or adds a new product to the list by product name.
 * 
 * @param { array } productList    Of products.
 * @param { string } productName   The name of the product to be updated or added in the product list.
 * @returns { array }              Array with updated or newly added product.
 */
 const addNewProductByName = ( productList, productName, productQuantity, productPrice ) => {
  productName = productName.toLowerCase();
  let foundProduct = productList.find(product => product.product_name === productName),
      isFoundProduct =  foundProduct !== undefined;

  if ( isFoundProduct ) {
    let originalQuantiry = foundProduct.quantity;
    foundProduct.quantity = originalQuantiry + productQuantity;
    foundProduct.total = (foundProduct.quantity * foundProduct.product_price).toFixed(2);
  } else {
    productList[ productList.length - 1 ] = productConstructor( productName, productQuantity, productPrice );
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

  return totalPrice.toFixed(2);
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

  return totalPrice.toFixed(2);
}

/* ---------- Handlers ----------- */
const sortProductsHandler = () => {
  const sortedProducts = sortProducts( productsWarehouse( 15 ) );

  printShoppingList('js-stock', resultHtml( sortedProducts, true ));
 }

const addToPurchasedByNameHandler = () => {
 let valueFromTheField = getInputValue( 'addToPurchasedProduct' ),
     updatedList = addToPurchasedByName( productsWarehouse( 15 ), valueFromTheField );

  printShoppingList('js-stock', resultHtml(updatedList, true));
}

const removeByNameHandler = () => {
  let valueFromTheField = getInputValue( 'removeProductFromStock' ),
      updatedList = removeByName( productsWarehouse( 15 ), valueFromTheField );

   printShoppingList('js-stock', resultHtml(updatedList));
}

const addNewProductHandler = () => {
  let productName = getInputValue( 'newProductName' ),
      quantity = +getInputValue( 'newProductQuantity' ),
      productPrice = +getInputValue( 'newProductPrice' );

  let updatedList = addNewProductByName( productsWarehouse( 15 ), productName, quantity, productPrice );
   
  printShoppingList('js-stock', resultHtml(updatedList));
}

const calculateTotalHandler = () => {
  const totalPrice = calculateTotal( productsWarehouse( 15 ) ),
        message = `The total price for all products is <b>${totalPrice}€</b>.`;

  printShoppingList('js-caclulate-total', message);
}

const calculateTotalSeparatelyHandler = ( calculatePurchased = true ) => {
  const totalOfPurchased = calculateTotalSeparately( productsWarehouse( 15 ) ),
        totalOfAvailable = calculateTotalSeparately( productsWarehouse( 15 ), false ),
        message = `The total price for all purchased products is <b>${totalOfPurchased}€</b>, and for all available products is <b>${totalOfAvailable}€</b>.`;

        printShoppingList('js-caclulate-total-separately', message);
}

const sortProductsAlphabeticallyHandler = ( sortInASC = true ) => {
  const sortedProducts = sortProducts( productsWarehouse( 15 ), true, sortInASC );

  printShoppingList('js-stock', resultHtml( sortedProducts ));
}

/* ---------- Listeners ----------- */
document.querySelector('#sortProducts').addEventListener('click', () => { sortProductsHandler() } );

document.querySelector('#addToPurchasedByName').addEventListener('click', () => { addToPurchasedByNameHandler() } );

document.querySelector('#removeProduct').addEventListener('click', () => { removeByNameHandler() } );

document.querySelector('#addNewProduct').addEventListener('click', () => { addNewProductHandler() } );

document.querySelector('#caclulateTotal').addEventListener('click', () => { calculateTotalHandler() } );

document.querySelector('#caclulateTotalSepaarately').addEventListener('click', () => { calculateTotalSeparatelyHandler() } );

document.querySelector('#showAsc').addEventListener('click', () => { sortProductsAlphabeticallyHandler() } );
document.querySelector('#showDesc').addEventListener('click', () => { sortProductsAlphabeticallyHandler( false ) } );

// Inint the function and construct the first load of product.
shoppingCartConstructor();
