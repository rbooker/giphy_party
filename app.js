console.log("Let's get this party started!");
function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomId = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomId].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $("#gif-area").append($newCol);
    }
  }

$("#getgiphy").on("submit", async function(evt) {
    evt.preventDefault();
    
    let gifType = $("#giftype").val();
    $("#giftype").val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: gifType,
      api_key: "jxIIDkdL64zjJq774ndr7WDTNwg4u0vW"
    }
    });
    addGif(response.data);
});

$("#remove").on("click", function() {
    $("#gif-area").empty();
  });

