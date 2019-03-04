//@ts-check
const root = document.getElementById("root");

/**
 * Display the following data: Merchant logo, Merchant name, Product
name, Product price (and currency) and Product affiliate link.
 * 
*/

const TemplateTitle = () => {
  return `
    <ul class={header}>
        <li class='data-area logo_url'>Logo</li>
        <li class='data-area name'>Merchant}</li>
        <li class='data-area product'>Product name</li>
        <li class='data-area'>Price</li>
        <li class='data-area review_link'>Product affiliate link</li>
    </ul>
    `;
};

root.innerHTML = TemplateTitle();
/**
 *
 * @param {object} product
 */

const tubularTemplate = product => {
  let articleHolder = document.createElement("div");
  articleHolder.className = "article";
  articleHolder.innerHTML = `
    <ul id='${product.id}'>        
            <li class='data-area logo_url'><img src='${
              product.merchant.logo_url
            }' alt='avatar'/></li>
                  <li class='data-area name'>${product.merchant.name}</li>
                  <li class='data-area product'>${
                    product.offer.display_name
                  }</li>
                  <li class='data-area'>${product.offer.currency_symbol} ${
    product.offer.price
  }</li>        
                  <li class='data-area review_link'>
                  <a href='${product.offer.link}'>${
    product.offer.merchant_link_text
  }</a></li>
              </ul>  
    
    `;

  return articleHolder;
};

/**
 *
 * @param {object} data
 */
const dataFetched = data => {
  const offers = data.widget.data.offers;
  for (let product of offers) {
    root.appendChild(tubularTemplate(product));
  }
};

/**
 *
 * @param {string} url
 */
const fetchData = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      return dataFetched(data);
    });
};

fetchData(
  "http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air"
);
