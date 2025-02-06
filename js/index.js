let listContainer = document.querySelector("#categories");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (category) =>
        ` <a href="produktliste.html?category=${category.category}" class="undercategory">
          <p>${category.category}</p>
          <img src="../imgs/${category.category}.png" alt="${category.category}" />
        </a>
    `
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
