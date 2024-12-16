    content.addEventListener("click", (e) => {
        saveNotesToLocalStorage()
        const elem = e.target
        if (elem.previousElementSibling) {
            elem.previousElementSibling.addEventListener("input", () => {
                elem.previousElementSibling.classList.remove('error');
            });
        }
        if(elem.dataset.btn !== undefined) {
            let taskText = elem.previousElementSibling.value
            if (taskText !== "") {
                let contentElement = elem.closest('.content__child');
                if(contentElement) {
                    let tasksList = contentElement.querySelector('.content__tasksList');
                    let currentDate = new Date();
                    let formattedDate = currentDate.toLocaleString();
                    tasksList.insertAdjacentHTML("beforeend", 
                        `<div class="task-item">
                            <div class="task-item__cont">
                                <input class="task-item__input" type="checkbox"> 
                                <div>
                                    <input class="task-item__inputText" type="text"> 
                                    <p class="task-item__p">${taskText}</p>
                                </div>
                                <span class="task__date">${formattedDate}</span>
                            </div>
                            <div class="task-item__imgs imgs">
                                <svg class="imgs-notes__rename" data-rename version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.337 490.337" style="enable-background:new 0 0 490.337 490.337;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M229.9,145.379l-47.5,47.5c-17.5,17.5-35.1,35-52.5,52.7c-4.1,4.2-7.2,9.8-8.4,15.3c-6.3,28.9-12.4,57.8-18.5,86.7 l-3.4,16c-1.6,7.8,0.5,15.6,5.8,20.9c4.1,4.1,9.8,6.4,15.8,6.4c1.7,0,3.4-0.2,5.1-0.5l17.6-3.7c28-5.9,56.1-11.9,84.1-17.7 c6.5-1.4,12-4.3,16.7-9c78.6-78.7,157.2-157.3,235.8-235.8c5.8-5.8,9-12.7,9.8-21.2c0.1-1.4,0-2.8-0.3-4.1c-0.5-2-0.9-4.1-1.4-6.1 c-1.1-5.1-2.3-10.9-4.7-16.5l0,0c-14.7-33.6-39.1-57.6-72.5-71.1c-6.7-2.7-13.8-3.6-20-4.4l-1.7-0.2c-9-1.1-17.2,1.9-24.3,9.1 C320.4,54.879,275.1,100.179,229.9,145.379z M386.4,24.679c0.2,0,0.3,0,0.5,0l1.7,0.2c5.2,0.6,10,1.2,13.8,2.8 c27.2,11,47.2,30.6,59.3,58.2c1.4,3.2,2.3,7.3,3.2,11.6c0.3,1.6,0.7,3.2,1,4.8c-0.4,1.8-1.1,3-2.5,4.3 c-78.7,78.5-157.3,157.2-235.9,235.8c-1.3,1.3-2.5,1.9-4.3,2.3c-28.1,5.9-56.1,11.8-84.2,17.7l-14.8,3.1l2.8-13.1 c6.1-28.8,12.2-57.7,18.4-86.5c0.2-0.9,1-2.3,1.9-3.3c17.4-17.6,34.8-35.1,52.3-52.5l47.5-47.5c45.3-45.3,90.6-90.6,135.8-136 C384.8,24.979,385.7,24.679,386.4,24.679z" fill="black"></path>
                                            <path d="M38.9,109.379h174.6c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H38.9c-21.5,0-38.9,17.5-38.9,38.9v327.4 c0,21.5,17.5,38.9,38.9,38.9h327.3c21.5,0,38.9-17.5,38.9-38.9v-167.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v167.5 c0,7.9-6.5,14.4-14.4,14.4H38.9c-7.9,0-14.4-6.5-14.4-14.4v-327.3C24.5,115.879,31,109.379,38.9,109.379z" fill="black"></path>
                                        </g>
                                    </g>
                                </svg>

                                <svg class="imgs-notes__garbage" data-garbage version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34.499 34.499" style="enable-background:new 0 0 34.499 34.499;" xml:space="preserve">
                                    <g data-garbage>
                                        <g data-garbage>
                                            <path data-garbage fill="black" d="M25.8,6.84H8.699c-0.983,0-1.784,0.8-1.784,1.784v24.091c0,0.984,0.801,1.784,1.784,1.784h17.102 c0.982,0,1.783-0.8,1.783-1.784V8.624C27.585,7.64,26.784,6.84,25.8,6.84z M13.012,31.524c0,0.328-0.267,0.595-0.595,0.595H9.889 c-0.327,0-0.594-0.267-0.594-0.595V9.813c0-0.327,0.267-0.595,0.594-0.595h2.528c0.328,0,0.595,0.268,0.595,0.595V31.524z M19.108,31.524c0,0.328-0.268,0.595-0.595,0.595h-2.527c-0.328,0-0.595-0.267-0.595-0.595V9.813c0-0.327,0.267-0.595,0.595-0.595 h2.527c0.328,0,0.595,0.268,0.595,0.595V31.524z M25.205,31.524c0,0.328-0.267,0.595-0.594,0.595h-2.528 c-0.328,0-0.595-0.267-0.595-0.595V9.813c0-0.327,0.267-0.595,0.595-0.595h2.528c0.327,0,0.594,0.268,0.594,0.595V31.524z"></path>
                                            <path data-garbage fill="black" d="M8.253,5.501h17.696c0.657,0,1.188-0.532,1.188-1.189s-0.531-1.189-1.188-1.189H21.29V1.189 C21.29,0.533,20.757,0,20.101,0h-6.047c-0.656,0-1.189,0.533-1.189,1.189v1.934h-4.61c-0.655,0-1.189,0.532-1.189,1.189 C7.063,4.969,7.597,5.501,8.253,5.501z M15.242,2.379h3.668v0.743h-3.668C15.242,3.122,15.242,2.379,15.242,2.379z"></path>
                                        </g>
                                    </g>
                                </svg>

                                <svg class="task-item__imgs_prioriry" data-prior version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g data-prior>
                                        <g data-prior>
                                            <g data-prior>
                                                <path d="M224,18.344v96h288v-96H224z M480,82.344H256v-32h224V82.344z" fill="black"></path>
                                                <path d="M224,466.344h288v-96H224V466.344z M256,402.344h224v32H256V402.344z" fill="black"></path>
                                                <path d="M224,290.344h288v-96H224V290.344z M256,226.344h224v32H256V226.344z" fill="black"></path>
                                                <rect x="160" y="50.344" width="32" height="32" fill="black"></rect>
                                                <path d="M112,82.344h16v-32h-16c-6.21,0.02-12.407,0.556-18.528,1.6l5.216,31.552C103.087,82.754,107.539,82.368,112,82.344z" fill="black"></path>
                                                <path d="M100.688,365.656l36.688,36.688H112c-44.161-0.053-79.947-35.839-80-80v-160c-0.016-29.253,15.937-56.182,41.6-70.224 L58.24,64.04C22.315,83.697-0.018,121.393,0,162.344v160c0.071,61.827,50.173,111.929,112,112h25.376l-36.688,36.688 l22.624,22.624l75.312-75.312l-75.312-75.312L100.688,365.656z" fill="black"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                                <select class="priority__body">
                                    <option value="without">Без приоритета</option>
                                    <option value="high">Высокий</option>
                                    <option value="medium">Средний</option>
                                    <option value="low">Низкий</option>
                                </select>
                            </div>
                        </div>`
                    );
                    const criteria = contentElement.querySelector('.content__sort').value;
                    
                    sortTasks(tasksList, criteria);
                    
                    elem.previousElementSibling.value = "";
                    const tasksItems = tasksList.querySelectorAll('.priority__body');
                    tasksItems.forEach((elem) => {
                        const taskPr = elem.closest(".task-item");
                        elem.addEventListener("change", function() {
                            priorityTask(taskPr, this.value);
                        })
                    })


                    const tasks = tasksList.querySelectorAll('.task-item__input');

                    tasks.forEach(task => {
                        task.addEventListener("change", () => {
                            const taskText = task.nextElementSibling.querySelector('.task-item__p')
                            const taskInput = taskText.previousElementSibling
                            if (task.checked === true) {
                                taskText.classList.add('task-active')
                                taskInput.classList.add('task-active')
                            } else {
                                taskText.classList.remove('task-active')
                                taskInput.classList.remove('task-active')
                            }
                        });
                    });
                }
                toggleSortVisibility(contentElement);
            } else {
                elem.previousElementSibling.classList.add('error')
            }
        }
        else if (elem.dataset.inp !== undefined) {
            elem.classList.add("act")
        }
        
        else if (elem.dataset.garbage !== undefined) {
            let contentElement = elem.closest('.content__child');
            let taskElement = elem.closest('.task-item');
            
            taskElement.classList.add('slide-out-left');
            setTimeout(() => {
                taskElement.remove();
                toggleSortVisibility(contentElement);
            }, 400);
           
        }
        else if (elem.dataset.rename !== undefined) {
            e.stopPropagation()
            let taskElement = elem.closest('.task-item');
            let taskP =  taskElement.querySelector('p');
            let inputText =  taskElement.querySelector('.task-item__inputText');
            
            taskP.style.display = "none";
            inputText.classList.add("task-input-active");
            inputText.value = taskP.textContent;
            inputText.focus();

            inputText.addEventListener('input', () => {
                updateInputWidth(inputText)
                saveNotesToLocalStorage();
            });
  
            updateInputWidth(inputText);
        } else if (elem.dataset.prior !== undefined) {
            closeAction(e);
            e.stopPropagation();
            let taskElement = elem.closest('.task-item');
            let priority = taskElement.querySelector(".priority__body");
            let imgs = taskElement.querySelector(".task-item__imgs");

            if (!imgs.classList.contains('active__imgs')) {
                imgs.classList.add("active__imgs")
                priority.style.display = "block";
                priority.classList.add('active-prior')
            } else {
                imgs.classList.remove("active__imgs")
                priority.style.display = "none";
                priority.classList.remove('active-prior')
            }

        }
        saveNotesToLocalStorage();
    })

    function updateInputWidth(input) {
        const textWidthSpan = document.querySelector('.task-item__textWidth');
        textWidthSpan.textContent = input.value || input.placeholder;
    
        const style = getComputedStyle(input);
        textWidthSpan.style.font = style.font;
        textWidthSpan.style.fontSize = style.fontSize;
        textWidthSpan.style.fontWeight = style.fontWeight;
        textWidthSpan.style.fontFamily = style.fontFamily;
        textWidthSpan.style.letterSpacing = style.letterSpacing;
        
        input.style.width = textWidthSpan.offsetWidth + "px";
    }

    function priorityTask(noteChild, value) {
        let imgs = noteChild.querySelector(".imgs")
        let prior = imgs.querySelector(".priority__body")
        let changeItem =  noteChild.querySelector(".task-item__cont")
        let inputText = noteChild.querySelector(".task-item__inputText")

        if(value === "high") {
            changeItem.style.backgroundColor = "red";
            changeItem.style.color = "white";
            inputText.style.backgroundColor = "red";
            inputText.style.color = "white";
        } else if (value === "medium") {
            changeItem.style.color = "black";
            changeItem.style.backgroundColor = "yellow";
            inputText.style.backgroundColor = "yellow";
            inputText.style.color = "black";
        } else if (value === "low") {
            changeItem.style.color = "black";
            changeItem.style.backgroundColor = "rgb(0, 0, 0, 0.1)";
            inputText.style.backgroundColor = "#E5E5E5";
            inputText.style.color = "black";
        } else {
            changeItem.style.color = "black";
            changeItem.style.background = "none";
            inputText.style.backgroundColor = "white";
            inputText.style.color = "black";
        }
        
        prior.style.display = "none"
        imgs.classList.remove("active__imgs")
        saveNotesToLocalStorage()
    }

