let listContainer = document.querySelector("#brands");

fetch(`https://kea-alt-del.dk/t7/api/brands`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (brand) =>
        ` <a href="produktliste.html?brandname=${brand.brandname}" class="brand_list">
          <p>${brand.brandname}</p>
        </a>
    `
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
