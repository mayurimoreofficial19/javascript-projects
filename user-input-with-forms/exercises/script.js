//Code Your Solution Below
<script>
        document
          .getElementById("testForm")
          .addEventListener("submit", function (event) {
            event.preventDefault();

            const testName = document.getElementById("testName").value;
            console.log("Submitted testName:", testName);
          });
      </script>
      