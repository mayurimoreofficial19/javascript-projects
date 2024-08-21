//TODO: Add Your Code Below

window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      console.log(json);
      const container = document.getElementById("container");

      let sortedData = json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);
      console.log(sortedData);

      for (let index = 0; index < json.length; index++) {
        let activeClass = "";
        if (json[index].active === true) {
          activeClass = "active";
        }
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>ID : ${[index + 1]}</h3>
                 <h3>${json[index].firstName} ${json[index].lastName}</h3>
                <ul>
                     <li>Hours in space: ${json[index].hoursInSpace}</li>
                     <li class=${activeClass}>Active : ${
          json[index].active
        }</li>
                     <li>Skills : ${json[index].skills.join(", ")}</li>
                </ul>
             </div>
            <img class="avatar" src=${json[index].picture}>
        </div>`;
      }
    });
  });
});
