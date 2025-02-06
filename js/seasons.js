let listContainer = document.querySelector("#seasons");

fetch(`https://kea-alt-del.dk/t7/api/seasons`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (season) =>
        ` <a href="produktliste.html?season=${season.season}" class="season_list">
          <p>${season.season}</p>
        </a>
    `
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
