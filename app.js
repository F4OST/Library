function add() {
  const mainContainer = document.querySelector("#mainContainer");
  const mainContent = document.querySelector("#mainContent");
  const formContainer = document.querySelector("#formContainer");
  mainContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.id === "addButton") {
      formContainer.style.display = "block";
      formContainer.style.animation = "slide-top-animation 0.5s ease";
    } else if (clickedElement.id === "saveButton") {
      const textInputs = Array.from(document.querySelectorAll("input"));
      if (textInputs.some((input) => input.value.trim() === "")) {
        console.log("(:");
      } else {
        const bookContainer = document.createElement("div");
        const span = document.createElement("span");
        bookContainer.classList.add("book");

        for (const [index, item] of textInputs.entries()) {
          if (item.value.trim() !== "") {
            const paragraph = document.createElement("p");

            paragraph.textContent =
              index === 0 ? item.value.toUpperCase() : item.value;
            if (item.getAttribute("data-title") === "title") {
              paragraph.id = "title";
            } else if (item.getAttribute("data-author") === "author") {
              paragraph.id = "author";
            } else if (item.getAttribute("data-page") === "page") {
              paragraph.id = "page";
            }

            bookContainer.append(paragraph, span);
            item.value = "";
          }

          mainContent.appendChild(bookContainer);
        }
        formContainer.style.display = "none";
      }
    }
  });
}
add();
function deleteBook() {
  const deleteButton = document.querySelector("#deleteButton");
  const mainContent = document.querySelector("#mainContent");
  let deleteMode = false;

  mainContent.addEventListener("click", (e) => {
    if (deleteMode) {
      const targetE = e.target.closest("div");
      if (targetE !== mainContent) {
        targetE.remove();
      }
    }
  });

  deleteButton.addEventListener("click", () => {
    deleteMode = !deleteMode;
    const books = document.querySelectorAll(".book");
    for (const book of books) {
      if (deleteMode) {
        deleteButton.textContent = "Turn Off Delete";
        console.log(books);
        book.style.animation = "shake 0.50s infinite";
      } else {
        deleteButton.textContent = "Delete";
        book.style.animation = "none";
      }
    }
  });
}
deleteBook();
