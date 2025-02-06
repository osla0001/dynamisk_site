const params = new URLSearchParams(window.location.search).get("productId");
let productId = params;
let productContainer = document.querySelector("#product_container");

console.log(params);

// fetch henter data fra databasen (api'et)
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  // konventerer til en gyldig json fil - så filen kan arbejdes med
  .then((response) => response.json())
  //   arbejder med dataerne,
  .then((data) => {
    // ` bruges, i stedet for gåseøjne, til at beskrive hvad der skal indsættes
    productContainer.innerHTML = `
    <div class="product_path">
      <p><a href="index.html">Home</a> > <a href="index.html">${data.category}</a> > <a href="brands.html">${data.brandname}</a> > ${data.productdisplayname}</p>
    </div>
    <section id="product_display">
      <div class="product_image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.articletype}" />
      </div>
      <div class="product_info">
        <div class="product_info_top">
          <h2>${data.productdisplayname}</h2>
          <h3>Product information</h3>
          <div class="product_row">
            <div class="product_brand">
              <h4>Brand</h4>
              <p>${data.brandname}</p>
            </div>
            <div class="product_color">
              <h4>Color</h4>
              <p>${data.colour1}</p>
            </div>
            <div class="product_number">
              <h4>Inventory Nr.</h4>
              <p>${data.id}</p>
            </div>
          </div>
          <div class="product_row">
            <div class="product_category">
              <h4>Category</h4>
              <p>${data.category}</p>
            </div>
            <div class="product_season">
              <h4>Season</h4>
              <p>${data.season}</p>
            </div>
            <div class="product_year">
              <h4>Year</h4>
              <p>${data.productionyear}</p>
            </div>
          </div>
          <div class="product_brand_info">
            <img src="${data.brandimage}" class="hidden ${data.brandimage && "visible"}"</img>
            <p class="hidden ${data.brandbio && "visible"}">${data.brandbio}</p>
          </div>
        </div>
        <div class="product_info_bottom">
          <div class="pricesize_container">
            <div class="price_container">
              <p class="price_text">Price:</p>
              <p class="price_old_display ${data.discount && "visible2"}"><span class="line">DKK ${data.price}</span>,-</p>
              <p class="price_display">DKK ${Math.floor(data.price * (1 - data.discount / 100))},-</p>
            </div>
            <div class="size_container">
              <div><p>Size:</p></div>
              <select name="size" id="size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <div class="add_to_basket ${data.soldout && "no_scale"}">
            <a href="" class="${data.soldout && "hidden2"}"><p>Add to basket</p></a>
            <p class="hidden2 ${data.soldout && "visible2"}">Sold Out</p>
          </div>
        </div>
      </div>
    </section>
    `;
  });
