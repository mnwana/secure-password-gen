function getKeyPhrases(inputText) {
  fetch("https://apis.paralleldots.com/v4/keywords", {
    method: "POST",
    headers: {
      text: "For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.",
      api_key: "g1b7WeGKJb4ehWUa31WpCWrabIzNLzmNK7eNCbYB78w",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((error) => console.log("system error"));
}

getKeyPhrases("hello");
