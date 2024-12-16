const searchInput = document.querySelector("[data-search]");
const notesList = document.querySelector(".notes__list");

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const notes = document.querySelectorAll(".notes__note");
    let notesFound = false;

    notes.forEach(note => {
        const isVisible = note.querySelector(".title-note__span").textContent.toLowerCase().includes(value) ||
                          note.querySelector(".note-created__date").textContent.toLowerCase().includes(value);
        note.classList.toggle("hide", !isVisible);
        if (isVisible) notesFound = true;
    });

    let noNotesMessage = document.querySelector(".no-notes-message");
    if (!notesFound) {
        if (!noNotesMessage) {
            noNotesMessage = document.createElement("p");
            noNotesMessage.classList.add("no-notes-message");
            noNotesMessage.textContent = "No notes found";
            notesList.appendChild(noNotesMessage);
        }
    } else if (noNotesMessage) {
        noNotesMessage.remove();
    }
});
