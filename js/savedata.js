function saveNotesToLocalStorage() {
    let notes = Array.from(document.querySelectorAll('.notes__note')).map(note => {
        let content = document.querySelector(`[data-target="${note.dataset.path}"]`)
        return {
            counter: note.dataset.path,
            noteTitle: note.querySelector('.title-note__span').textContent,
            noteDate: note.querySelector(".note-created__date").textContent,
            notePrior: note.querySelector(".priority__body").value,
            contentFont: content.querySelector(`.font-select`).value,
            contentFontSize: content.querySelector(`.size-select`).value,
            contentText: content.querySelector(".content__text").value,
            tasksMass: Array.from(content.querySelectorAll('.task-item')).map(taskItem => {
                return {
                    text: taskItem.querySelector('.task-item__p').textContent,
                    checked: taskItem.querySelector('.task-item__input').checked,
                    taskDate: taskItem.querySelector('.task__date').textContent,
                    taskPrior: taskItem.querySelector(".priority__body").value
                };
            })
        }
    })
    localStorage.setItem('notes', JSON.stringify(notes))
}