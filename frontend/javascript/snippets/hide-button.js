      // Add event listener to the body for double click
      document.body.addEventListener("dblclick", function () {
        // Toggle the visibility of all buttons
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          button.style.display = button.style.display === "none" ? "inline-block" : "none";
        });
      });