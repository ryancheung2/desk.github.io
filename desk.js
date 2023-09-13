var h = document.querySelector('.home-button');


/* used to close the tab after something has been entered */
/*var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    console.log("Closing Window...");
    close();
  }
});*/

window.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    console.log("Shortcut: [Desk]]")
    window.open("file:///Users/RyanC/Library/CloudStorage/OneDrive-Personal/HTML/desk/desk.html");
    close();
  }
  if (event.key === "s") {
    console.log("Shortcut: [Desk - Schedule]]")
    window.open("file:///Users/RyanC/Library/CloudStorage/OneDrive-Personal/HTML/desk/schedule.html");
    close();
  }
});

function close_window(){
    console.log("closing window...");
    close();
}

/*document.addEventListener('keydown', function(Enter) {
    console.log("closing window...");
    close();
  });*/