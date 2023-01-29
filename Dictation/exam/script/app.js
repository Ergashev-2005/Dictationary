
let containerEl = document.querySelector(".about-text")
let searchInput = "bye"
function fetch__func(){
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
  .then((response) => response.json())
  .then((date) => renderData(date));
}

fetch__func()

let input = document.querySelector(".search")
input.addEventListener("keyup", e => {
  e.preventDefault()
  console.log(1);
  if (e.keyCode == 13) {
    searchInput = input.value
    fetch__func()
  }
})
function renderData(postData) { 
  console.log(postData);
  containerEl.innerHTML = "";
  postData.slice(0, 1).forEach((p) => {
    console.log(p.meanings[0].definitions);
    const postDiv = document.createElement("div");
    postDiv.className = "post-element";
    postDiv.innerHTML = `
      <div>
        <h1> ${p.word} -  ${p.phonetic}</h1>
      </div>
      <div>
      ${
        p.meanings[0].definitions.map(el => {
          return `<h1>${el.definition
          }</h1>
          ${el?.example ? `<p>${el?.example}</p>` : ""}
          `
        })
      }
      </div>
      
    `;
    let btn = document.createElement("button")
    containerEl.appendChild(postDiv);
  });
}
