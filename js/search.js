var inputField = document.querySelector("#searchBox");
inputField.addEventListener("input", adjustWidth);
function SearchQuery(val) {
    document.getElementById("searchButton").href = "https://www.imdb.com/find/?q=" + val;
}
function buttonClick() {
    document.getElementById("searchBox").value = "";
}
