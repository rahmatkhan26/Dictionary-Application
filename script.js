const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
const sound = document.getElementById("sound");

btn.addEventListener("click", () => {
  let inpword = document.getElementById("inp-word").value;
  fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      result.innerHTML = ` <div class="word">
                <h3>${inpword}</h3>
                <button onclick ="playSound()">
                <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>//${data[0].phonetic}//</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}

            </p>
            <p class="word-example">
              ${data[0].meanings[0].definitions[0].example}
            </p>

        `;

      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
      console.log(sound);
    })
    .catch(() => {
      result.innerHTML = `<h2 class="error">Couldn't find the word</h2>`;
    });
});

function playSound() {
  sound.play();
}
