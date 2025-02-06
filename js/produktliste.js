let listContainer = document.querySelector("#accessories");
const category_list = new URLSearchParams(window.location.search).get("category");
const brand_list = new URLSearchParams(window.location.search).get("brandname");
const season_list = new URLSearchParams(window.location.search).get("season");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=200&${category_list ? `category=${category_list}` : brand_list ? `brandname=${brand_list}` : season_list ? `season=${season_list}` : ""}`)
  .then((response) => response.json())
  .then((data) => showList(data));

console.log(`${category_list} derfor ${brand_list}`);

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<div class="product_card">
          <a href="produkt.html?productId=${product.id}">
            <div class="overlay_container">
              <p class="discount_display ${product.discount && "visible"}">-${product.discount}%</p>
              <h4 class="sold_out_text ${product.soldout && "visible"}">Sold Out</h4>
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="T-Shirt" class="discount_image  ${product.soldout && "sold_filter"}" />
            </div>
            <div class="info_seperation">
              <div>
                <h2 class="title">${product.productdisplayname}</h2>
                <p class="category">${product.articletype} | ${product.brandname}</p>
              </div>
              <div class="price_and_info">
                <p class="price_before ${product.discount && "visible"}"><span class="prev">PREV. </span><span class="line">DKK ${product.price}</span>,-</p>
                <p class="price_after">DKK ${Math.floor(product.price * (1 - product.discount / 100))},-</p>
                <a href="produkt.html" class="read_more">Read more</a>
              </div>
            </div>
          </a>
        </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;

  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  const result = words.filter((word) => word.length > 6);

  console.log(result);
  // Expected output: Array ["exuberant", "destruction", "present"]
}

// let listContainer = document.querySelector("#accessories");

// fetch(`https://kea-alt-del.dk/t7/api/products/?limit=199`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

// function showList(products) {
//   console.log(products);
//   let markup = "";
//   products
//     .map((product) => {
//       markup += `<div class="product_card">
//        <a href="produkt.html">
//             <div class="overlay_container">
//               <p class="discount_display" style="display: none">-${product.discount}%</p>
//               <h4 class="sold_out_text" style="display: none">Sold</h4>
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="T-Shirt" class="discount_image" />
//             </div>
//       <div class="info_seperation">
//       <div>
//       <h2 class="title">${product.productdisplayname}</h2>
//       <p class="category">${product.articletype} | ${product.brandname}</p>
//    </div>
//                  <div class="price_and_info">
//                 <p class="price_before" style="display: none">FØR. DKK 1595,-</p>
//                 <p class="price_after">DKK ${product.price},-</p>
//       <a href="produkt.html" class="read_more">Read more</a>
//                   </div>
// </div>
//       </a>
//   </div>`;
//     })
//     .join("");
//   console.log(markup);
//   listContainer.innerHTML = markup;
// }
