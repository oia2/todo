    let plus = document.querySelector(".notes__plus");
    let noteList = document.querySelector(".notes__list");
    let content = document.querySelector(".content");
    let isAscending = true;

    let counter = 0;

    document.addEventListener("DOMContentLoaded", function() {
        JSON.parse(localStorage.getItem('notes'))
        
        if(JSON.parse(localStorage.getItem('notes')).length !== 0)
        {
            JSON.parse(localStorage.getItem('notes')).forEach((note) => {
                noteList.insertAdjacentHTML("beforeend", 
                    ` <div class="notes__note" data-path="${note.counter}">
                        <svg class="note-notes__img" viewBox="-78 -18 560 560.00187" xmlns="http://www.w3.org/2000/svg"><path d="m260.722656 3.878906-.128906-.125c-2.355469-2.429687-5.605469-3.7890622-8.996094-3.74999975-.417968-.01953125-.839844.01953125-1.25.12890575h-191.953125c-34.503906.007813-62.46875 27.976563-62.484375 62.484376v399.898437c.015625 34.503906 27.980469 62.472656 62.484375 62.484375h278.308594c34.503906-.011719 62.472656-27.980469 62.484375-62.484375v-315.175781c-.023438-3.308594-1.320312-6.484375-3.625-8.867188zm3.371094 38.742188 92.726562 92.476562h-55.234374c-20.679688-.0625-37.433594-16.8125-37.492188-37.488281zm72.734375 457.261718h-278.433594c-20.679687-.058593-37.425781-16.8125-37.492187-37.492187v-399.902344c.066406-20.675781 16.8125-37.429687 37.492187-37.488281h180.707031v72.609375c.011719 34.5 27.980469 62.46875 62.484376 62.484375h72.609374v302.296875c.039063 20.671875-16.695312 37.464844-37.367187 37.492187zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="m76.015625 241.195312h135.09375c6.898437 0 12.5-5.59375 12.5-12.496093 0-6.902344-5.601563-12.496094-12.5-12.496094h-135.09375c-6.902344 0-12.496094 5.59375-12.496094 12.496094 0 6.902343 5.59375 12.496093 12.496094 12.496093zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="m319.207031 310.679688h-243.191406c-6.902344 0-12.496094 5.59375-12.496094 12.496093 0 6.898438 5.59375 12.496094 12.496094 12.496094h243.191406c6.898438 0 12.5-5.597656 12.5-12.496094 0-6.902343-5.601562-12.496093-12.5-12.496093zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="m319.207031 405.28125h-243.191406c-6.902344 0-12.496094 5.59375-12.496094 12.496094s5.59375 12.496094 12.496094 12.496094h243.191406c6.898438 0 12.5-5.59375 12.5-12.496094s-5.601562-12.496094-12.5-12.496094zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path></svg>
                            <div class="note-notes__title">
                                <span class="title-note__span">${note.noteTitle}</span>
                                <input class="title-note__input" type="text" placeholder="Untitled">
                                <span class="note-created__date">${note.noteDate}</span>
                            </div>
                        <div class="notes__imgs imgs">
                            <svg class="imgs-notes__rename" data-rename version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.337 490.337" style="enable-background:new 0 0 490.337 490.337;" xml:space="preserve"><g><g><path d="M229.9,145.379l-47.5,47.5c-17.5,17.5-35.1,35-52.5,52.7c-4.1,4.2-7.2,9.8-8.4,15.3c-6.3,28.9-12.4,57.8-18.5,86.7 l-3.4,16c-1.6,7.8,0.5,15.6,5.8,20.9c4.1,4.1,9.8,6.4,15.8,6.4c1.7,0,3.4-0.2,5.1-0.5l17.6-3.7c28-5.9,56.1-11.9,84.1-17.7 c6.5-1.4,12-4.3,16.7-9c78.6-78.7,157.2-157.3,235.8-235.8c5.8-5.8,9-12.7,9.8-21.2c0.1-1.4,0-2.8-0.3-4.1c-0.5-2-0.9-4.1-1.4-6.1 c-1.1-5.1-2.3-10.9-4.7-16.5l0,0c-14.7-33.6-39.1-57.6-72.5-71.1c-6.7-2.7-13.8-3.6-20-4.4l-1.7-0.2c-9-1.1-17.2,1.9-24.3,9.1 C320.4,54.879,275.1,100.179,229.9,145.379z M386.4,24.679c0.2,0,0.3,0,0.5,0l1.7,0.2c5.2,0.6,10,1.2,13.8,2.8 c27.2,11,47.2,30.6,59.3,58.2c1.4,3.2,2.3,7.3,3.2,11.6c0.3,1.6,0.7,3.2,1,4.8c-0.4,1.8-1.1,3-2.5,4.3 c-78.7,78.5-157.3,157.2-235.9,235.8c-1.3,1.3-2.5,1.9-4.3,2.3c-28.1,5.9-56.1,11.8-84.2,17.7l-14.8,3.1l2.8-13.1 c6.1-28.8,12.2-57.7,18.4-86.5c0.2-0.9,1-2.3,1.9-3.3c17.4-17.6,34.8-35.1,52.3-52.5l47.5-47.5c45.3-45.3,90.6-90.6,135.8-136 C384.8,24.979,385.7,24.679,386.4,24.679z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="M38.9,109.379h174.6c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H38.9c-21.5,0-38.9,17.5-38.9,38.9v327.4 c0,21.5,17.5,38.9,38.9,38.9h327.3c21.5,0,38.9-17.5,38.9-38.9v-167.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v167.5 c0,7.9-6.5,14.4-14.4,14.4H38.9c-7.9,0-14.4-6.5-14.4-14.4v-327.3C24.5,115.879,31,109.379,38.9,109.379z" fill="#000000" style="fill: rgb(145, 145, 142);"></path></g></g></svg>
                            <svg class="imgs-notes__garbage"  data-garbage version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34.499 34.499" style="enable-background:new 0 0 34.499 34.499;" xml:space="preserve"><g data-garbage><g data-garbage><path data-garbage style="fill: rgb(145, 145, 142);" d="M25.8,6.84H8.699c-0.983,0-1.784,0.8-1.784,1.784v24.091c0,0.984,0.801,1.784,1.784,1.784h17.102 c0.982,0,1.783-0.8,1.783-1.784V8.624C27.585,7.64,26.784,6.84,25.8,6.84z M13.012,31.524c0,0.328-0.267,0.595-0.595,0.595H9.889 c-0.327,0-0.594-0.267-0.594-0.595V9.813c0-0.327,0.267-0.595,0.594-0.595h2.528c0.328,0,0.595,0.268,0.595,0.595V31.524z M19.108,31.524c0,0.328-0.268,0.595-0.595,0.595h-2.527c-0.328,0-0.595-0.267-0.595-0.595V9.813c0-0.327,0.267-0.595,0.595-0.595 h2.527c0.328,0,0.595,0.268,0.595,0.595V31.524z M25.205,31.524c0,0.328-0.267,0.595-0.594,0.595h-2.528 c-0.328,0-0.595-0.267-0.595-0.595V9.813c0-0.327,0.267-0.595,0.595-0.595h2.528c0.327,0,0.594,0.268,0.594,0.595V31.524z" fill="#010002"></path><path data-garbage style="fill: rgb(145, 145, 142);" d="M8.253,5.501h17.696c0.657,0,1.188-0.532,1.188-1.189s-0.531-1.189-1.188-1.189H21.29V1.189 C21.29,0.533,20.757,0,20.101,0h-6.047c-0.656,0-1.189,0.533-1.189,1.189v1.934h-4.61c-0.655,0-1.189,0.532-1.189,1.189 C7.063,4.969,7.597,5.501,8.253,5.501z M15.242,2.379h3.668v0.743h-3.668C15.242,3.122,15.242,2.379,15.242,2.379z" fill="#010002"></path></g></g></svg>
                            <svg class="imgs-notes__priority" data-prior version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g data-prior><g data-prior><g data-prior><path d="M224,18.344v96h288v-96H224z M480,82.344H256v-32h224V82.344z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="M224,466.344h288v-96H224V466.344z M256,402.344h224v32H256V402.344z" fill="#000000" style="fill: rgb(145, 145, 142);" data-prior></path><path data-prior d="M224,290.344h288v-96H224V290.344z M256,226.344h224v32H256V226.344z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><rect x="160" y="50.344" width="32" height="32" fill="#000000" style="fill: rgb(145, 145, 142);"></rect><path d="M112,82.344h16v-32h-16c-6.21,0.02-12.407,0.556-18.528,1.6l5.216,31.552C103.087,82.754,107.539,82.368,112,82.344z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="M100.688,365.656l36.688,36.688H112c-44.161-0.053-79.947-35.839-80-80v-160c-0.016-29.253,15.937-56.182,41.6-70.224 L58.24,64.04C22.315,83.697-0.018,121.393,0,162.344v160c0.071,61.827,50.173,111.929,112,112h25.376l-36.688,36.688 l22.624,22.624l75.312-75.312l-75.312-75.312L100.688,365.656z" fill="#000000" style="fill: rgb(145, 145, 142);"></path></g></g></g></svg>
                                <select class="priority__body">
                                    <option value="without" ${note.notePrior === 'without' ? 'selected' : ''}>Без приоритета</option>
                                    <option value="high" ${note.notePrior === 'high' ? 'selected' : ''}>Высокий</option>
                                    <option value="medium" ${note.notePrior === 'medium' ? 'selected' : ''}>Средний</option>
                                    <option value="low" ${note.notePrior === 'low' ? 'selected' : ''}>Низкий</option>
                                </select>
                        </div>    
                    </div>`);
            
                content.insertAdjacentHTML("beforeend", 
                    `
                        <div class="content__child" data-target="${note.counter}">
                            <div class="content__top">
                                <input type="text" class="content__title" placeholder="Untitled" ${note.noteTitle !== "Untitled" ? `value="${note.noteTitle}"` : ""} data-inp/>
                                <div class="fontsettings">
                                    <div class="fontsettings__elem">
                                        <label class="fontsettings__elem-label">Шрифт: </label>
                                        <select class="fontsettings__elem-select font-select" value="${note.contentFont}">
                                            <option value="PT Sans">PT Sans</option>
                                            <option value="Arial">Arial</option>
                                            <option value="Times New Roman">Times New Roman</option>
                                            <option value="Courier New">Courier New</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Verdana">Verdana</option>
                                        </select>
                                    </div>
                                    <div class="fontsettings__elem">
                                        <label class="fontsettings__elem-label">Размер текста: </label>
                                        <select class="fontsettings__elem-select size-select" value="${note.contentFontSize}">
                                            <option value="12px">12px</option>
                                            <option value="14px">14px</option>
                                            <option selected="selected" value="16px">16px</option>
                                            <option value="18px">18px</option>
                                            <option value="20px">20px</option>
                                            <option value="24px">24px</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="content__tasks">
                                    <input class="tasks-content__input" type="text" placeholder="Наша задача...">
                                    <button class="tasks-content__button" data-btn>Добавить задачу</button>
                                </div>
                            </div>
                            <div class="content__body">
                                 <div class="content__sort"> 
                                        <select class="sort__select">
                                            <option disabled selected hidden>Сортировать по...</option>
                                            <option value="priority" >По приоритету</option>
                                            <option value="name">По названию</option>
                                            <option value="date">По дате</option>
                                        </select>
                                        <img class="sort__img" src="./img/arrow_rme421fno09l.svg" alt="">
                                    </div>
                                <div class="content__tasksList">
                                    ${note.tasksMass.map(task => `
                                        <div class="task-item">
                                            <div class="task-item__cont">
                                                <input class="task-item__input" type="checkbox" ${task.checked ? "checked" : ""}>
                                                <div>
                                                    <input class="task-item__inputText" type="text">
                                                    <p class="task-item__p ${task.checked ? "task-active" : ""}">${task.text}</p>
                                                </div>
                                                <span class="task__date">${task.taskDate}</span>
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
                                                    <option value="without" ${task.taskPrior === 'without' ? 'selected' : ''}>Без приоритета</option>
                                                    <option value="high" ${task.taskPrior === 'high' ? 'selected' : ''}>Высокий</option>
                                                    <option value="medium" ${task.taskPrior === 'medium' ? 'selected' : ''}>Средний</option>
                                                    <option value="low" ${task.taskPrior === 'low' ? 'selected' : ''}>Низкий</option>
                                                </select>
                                            </div>
                                        </div>
                                `).join('')}
                                </div>
                                <textarea class="content__text" placeholder="Write...">${note.contentText}</textarea>
                            </div>
                        </div>
                    `
                );
                const newNoteElement = document.querySelector(`[data-path="${note.counter}"]`);
                const newContElement = document.querySelector(`[data-target="${note.counter}"]`);

                const contentChild = document.querySelector(`[data-target="${note.counter}"]`);
                const tasksList = contentChild.querySelector(".content__tasksList");
                
                const tasks = tasksList.querySelectorAll('.task-item__input');
                contentChild.querySelector(`.content__sort`).addEventListener('change', (e) => {
                    const criteria = e.target.value;
                    const tasksList = e.target.closest('.content__child').querySelector('.content__tasksList');
                    sortTasks(tasksList, criteria);
                })
                contentChild.querySelector('.sort__img').addEventListener('click', () => {
                    const tasksList = contentChild.querySelector('.content__tasksList');
                    const criteria = contentChild.querySelector('.sort__select').value;
                
                    isAscending = !isAscending;
                    sortTasks(tasksList, criteria, isAscending);
                });

                let i = 0;
                newContElement.querySelectorAll(".priority__body").forEach(elem => {
                    const taskPr = elem.closest(".task-item");
                    priorityTask(taskPr, note.tasksMass[i].taskPrior);
                    i++;
                    elem.addEventListener("change", function() {
                        priorityTask(taskPr, this.value);
                    })
                })

                const prioritySelect = newNoteElement.querySelector('.priority__body');
                priority(newNoteElement, note.notePrior);
                prioritySelect.addEventListener("change", function() {
                  
                    priority(newNoteElement, this.value);
                });

                
                tasks.forEach(task => {
                    task.addEventListener("change", () => {
                        const taskText = task.nextElementSibling.querySelector('.task-item__p');
                        const taskInput = taskText.previousElementSibling;
                        if (task.checked) {
                            taskText.classList.add('task-active');
                            taskInput.classList.add('task-active');
                        } else {
                            taskText.classList.remove('task-active');
                            taskInput.classList.remove('task-active');
                        }
                    });
                });

                const fontSelect = contentChild.querySelector(".font-select");
                const sizeSelect = contentChild.querySelector(".size-select");
        
                fontSelect.value = note.contentFont;
                sizeSelect.value = note.contentFontSize;

                tasksList.querySelectorAll('.task-item__inputText, .task-item__p').forEach(taskElement => {
                    taskElement.style.fontFamily = fontSelect.value
                    taskElement.style.fontSize = sizeSelect.value
                });
                
                let textArea = contentChild.querySelector(".content__text");
                textArea.style.fontFamily = fontSelect.value;
                textArea.style.fontSize = sizeSelect.value;
                
                syncInputFields(note.counter);
                addFontSettingsListeners(note.counter); 
            })
            counter = +JSON.parse(localStorage.getItem('notes'))[JSON.parse(localStorage.getItem('notes')).length - 1].counter + 1;
        }
        
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
        notes.forEach(note => {
            const contentElement = document.querySelector(`[data-target="${note.counter}"]`);
            toggleSortVisibility(contentElement);
        });
    });

    plus.addEventListener("click", () => {
        let currentDate = new Date();
        let formattedDate = currentDate.toLocaleString();

        noteList.insertAdjacentHTML("beforeend", 
        ` <div class="notes__note" data-path="${counter}">
                <svg class="note-notes__img" viewBox="-78 -18 560 560.00187" xmlns="http://www.w3.org/2000/svg"><path d="m260.722656 3.878906-.128906-.125c-2.355469-2.429687-5.605469-3.7890622-8.996094-3.74999975-.417968-.01953125-.839844.01953125-1.25.12890575h-191.953125c-34.503906.007813-62.46875 27.976563-62.484375 62.484376v399.898437c.015625 34.503906 27.980469 62.472656 62.484375 62.484375h278.308594c34.503906-.011719 62.472656-27.980469 62.484375-62.484375v-315.175781c-.023438-3.308594-1.320312-6.484375-3.625-8.867188zm3.371094 38.742188 92.726562 92.476562h-55.234374c-20.679688-.0625-37.433594-16.8125-37.492188-37.488281zm72.734375 457.261718h-278.433594c-20.679687-.058593-37.425781-16.8125-37.492187-37.492187v-399.902344c.066406-20.675781 16.8125-37.429687 37.492187-37.488281h180.707031v72.609375c.011719 34.5 27.980469 62.46875 62.484376 62.484375h72.609374v302.296875c.039063 20.671875-16.695312 37.464844-37.367187 37.492187zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="m76.015625 241.195312h135.09375c6.898437 0 12.5-5.59375 12.5-12.496093 0-6.902344-5.601563-12.496094-12.5-12.496094h-135.09375c-6.902344 0-12.496094 5.59375-12.496094 12.496094 0 6.902343 5.59375 12.496093 12.496094 12.496093zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="m319.207031 310.679688h-243.191406c-6.902344 0-12.496094 5.59375-12.496094 12.496093 0 6.898438 5.59375 12.496094 12.496094 12.496094h243.191406c6.898438 0 12.5-5.597656 12.5-12.496094 0-6.902343-5.601562-12.496093-12.5-12.496093zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="m319.207031 405.28125h-243.191406c-6.902344 0-12.496094 5.59375-12.496094 12.496094s5.59375 12.496094 12.496094 12.496094h243.191406c6.898438 0 12.5-5.59375 12.5-12.496094s-5.601562-12.496094-12.5-12.496094zm0 0" fill="#000000" style="fill: rgb(145, 145, 142);"></path></svg>
                    <div class="note-notes__title">
                        <span class="title-note__span">Untitled</span>
                        <input class="title-note__input" type="text" placeholder="Untitled">
                        <span class="note-created__date">${formattedDate}</span>
                    </div>
                <div class="notes__imgs imgs">
                    <svg class="imgs-notes__rename" data-rename version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.337 490.337" style="enable-background:new 0 0 490.337 490.337;" xml:space="preserve"><g><g><path d="M229.9,145.379l-47.5,47.5c-17.5,17.5-35.1,35-52.5,52.7c-4.1,4.2-7.2,9.8-8.4,15.3c-6.3,28.9-12.4,57.8-18.5,86.7 l-3.4,16c-1.6,7.8,0.5,15.6,5.8,20.9c4.1,4.1,9.8,6.4,15.8,6.4c1.7,0,3.4-0.2,5.1-0.5l17.6-3.7c28-5.9,56.1-11.9,84.1-17.7 c6.5-1.4,12-4.3,16.7-9c78.6-78.7,157.2-157.3,235.8-235.8c5.8-5.8,9-12.7,9.8-21.2c0.1-1.4,0-2.8-0.3-4.1c-0.5-2-0.9-4.1-1.4-6.1 c-1.1-5.1-2.3-10.9-4.7-16.5l0,0c-14.7-33.6-39.1-57.6-72.5-71.1c-6.7-2.7-13.8-3.6-20-4.4l-1.7-0.2c-9-1.1-17.2,1.9-24.3,9.1 C320.4,54.879,275.1,100.179,229.9,145.379z M386.4,24.679c0.2,0,0.3,0,0.5,0l1.7,0.2c5.2,0.6,10,1.2,13.8,2.8 c27.2,11,47.2,30.6,59.3,58.2c1.4,3.2,2.3,7.3,3.2,11.6c0.3,1.6,0.7,3.2,1,4.8c-0.4,1.8-1.1,3-2.5,4.3 c-78.7,78.5-157.3,157.2-235.9,235.8c-1.3,1.3-2.5,1.9-4.3,2.3c-28.1,5.9-56.1,11.8-84.2,17.7l-14.8,3.1l2.8-13.1 c6.1-28.8,12.2-57.7,18.4-86.5c0.2-0.9,1-2.3,1.9-3.3c17.4-17.6,34.8-35.1,52.3-52.5l47.5-47.5c45.3-45.3,90.6-90.6,135.8-136 C384.8,24.979,385.7,24.679,386.4,24.679z" style="fill: rgb(145, 145, 142);"></path><path d="M38.9,109.379h174.6c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H38.9c-21.5,0-38.9,17.5-38.9,38.9v327.4 c0,21.5,17.5,38.9,38.9,38.9h327.3c21.5,0,38.9-17.5,38.9-38.9v-167.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v167.5 c0,7.9-6.5,14.4-14.4,14.4H38.9c-7.9,0-14.4-6.5-14.4-14.4v-327.3C24.5,115.879,31,109.379,38.9,109.379z" style="fill: rgb(145, 145, 142);"></path></g></g></svg>
                    <svg class="imgs-notes__garbage"  data-garbage version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34.499 34.499" style="enable-background:new 0 0 34.499 34.499;" xml:space="preserve"><g data-garbage><g data-garbage><path data-garbage style="fill: rgb(145, 145, 142);" d="M25.8,6.84H8.699c-0.983,0-1.784,0.8-1.784,1.784v24.091c0,0.984,0.801,1.784,1.784,1.784h17.102 c0.982,0,1.783-0.8,1.783-1.784V8.624C27.585,7.64,26.784,6.84,25.8,6.84z M13.012,31.524c0,0.328-0.267,0.595-0.595,0.595H9.889 c-0.327,0-0.594-0.267-0.594-0.595V9.813c0-0.327,0.267-0.595,0.594-0.595h2.528c0.328,0,0.595,0.268,0.595,0.595V31.524z M19.108,31.524c0,0.328-0.268,0.595-0.595,0.595h-2.527c-0.328,0-0.595-0.267-0.595-0.595V9.813c0-0.327,0.267-0.595,0.595-0.595 h2.527c0.328,0,0.595,0.268,0.595,0.595V31.524z M25.205,31.524c0,0.328-0.267,0.595-0.594,0.595h-2.528 c-0.328,0-0.595-0.267-0.595-0.595V9.813c0-0.327,0.267-0.595,0.595-0.595h2.528c0.327,0,0.594,0.268,0.594,0.595V31.524z" fill="#010002"></path><path data-garbage style="fill: rgb(145, 145, 142);" d="M8.253,5.501h17.696c0.657,0,1.188-0.532,1.188-1.189s-0.531-1.189-1.188-1.189H21.29V1.189 C21.29,0.533,20.757,0,20.101,0h-6.047c-0.656,0-1.189,0.533-1.189,1.189v1.934h-4.61c-0.655,0-1.189,0.532-1.189,1.189 C7.063,4.969,7.597,5.501,8.253,5.501z M15.242,2.379h3.668v0.743h-3.668C15.242,3.122,15.242,2.379,15.242,2.379z" fill="#010002"></path></g></g></svg>
                    <svg class="imgs-notes__priority" data-prior version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g data-prior><g data-prior><g data-prior><path d="M224,18.344v96h288v-96H224z M480,82.344H256v-32h224V82.344z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="M224,466.344h288v-96H224V466.344z M256,402.344h224v32H256V402.344z" fill="#000000" style="fill: rgb(145, 145, 142);" data-prior></path><path data-prior d="M224,290.344h288v-96H224V290.344z M256,226.344h224v32H256V226.344z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><rect x="160" y="50.344" width="32" height="32" fill="#000000" style="fill: rgb(145, 145, 142);"></rect><path d="M112,82.344h16v-32h-16c-6.21,0.02-12.407,0.556-18.528,1.6l5.216,31.552C103.087,82.754,107.539,82.368,112,82.344z" fill="#000000" style="fill: rgb(145, 145, 142);"></path><path d="M100.688,365.656l36.688,36.688H112c-44.161-0.053-79.947-35.839-80-80v-160c-0.016-29.253,15.937-56.182,41.6-70.224 L58.24,64.04C22.315,83.697-0.018,121.393,0,162.344v160c0.071,61.827,50.173,111.929,112,112h25.376l-36.688,36.688 l22.624,22.624l75.312-75.312l-75.312-75.312L100.688,365.656z" fill="#000000" style="fill: rgb(145, 145, 142);"></path></g></g></g></svg>
                        <select class="priority__body">
                            <option value="without">Без приоритета</option>
                            <option value="high">Высокий</option>
                            <option value="medium">Средний</option>
                            <option value="low">Низкий</option>
                        </select>
                </div>    
            </div>`);

        content.insertAdjacentHTML("beforeend", 
            `
                <div class="content__child" data-target="${counter}">
                    <div class="content__top">
                        <input type="text" class="content__title" placeholder="Untitled" data-inp/>
                        <div class="fontsettings">
                            <div class="fontsettings__elem">
                                <label class="fontsettings__elem-label">Шрифт: </label>
                                <select class="fontsettings__elem-select font-select">
                                    <option value="PT Sans">PT Sans</option>
                                    <option value="Arial">Arial</option>
                                    <option value="Times New Roman">Times New Roman</option>
                                    <option value="Courier New">Courier New</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Verdana">Verdana</option>
                                </select>
                            </div>
                            <div class="fontsettings__elem">
                                <label class="fontsettings__elem-label">Размер текста: </label>
                                <select class="fontsettings__elem-select size-select" >
                                    <option value="12px">12px</option>
                                    <option value="14px">14px</option>
                                    <option selected="selected" value="16px">16px</option>
                                    <option value="18px">18px</option>
                                    <option value="20px">20px</option>
                                    <option value="24px">24px</option>
                                </select>
                            </div>
                        </div>
                        <div class="content__tasks">
                            <input class="tasks-content__input" type="text" placeholder="Наша задача...">
                            <button class="tasks-content__button" data-btn>Добавить задачу</button>
                        </div>
                    </div>
                    <div class="content__body">
                       <div class="content__sort"> 
                            <select class="sort__select">
                                <option disabled selected hidden>Сортировать по...</option>
                                <option value="priority" >По приоритету</option>
                                <option value="name">По названию</option>
                                <option value="date">По дате</option>
                            </select>
                            <img class="sort__img" src="./img/arrow_rme421fno09l.svg" alt="">
                       </div>

                        
                        <div class="content__tasksList"></div>
                        <textarea class="content__text" placeholder="Write..."></textarea>
                    </div>
                </div>
            `
        );

        const newNoteElement = document.querySelector(`[data-path="${counter}"]`);
        const contentChild = document.querySelector(`[data-target="${counter}"]`);

        contentChild.querySelector(`.content__sort`).addEventListener('change', (e) => {
            const criteria = e.target.value;
            const tasksList = e.target.closest('.content__child').querySelector('.content__tasksList');
            sortTasks(tasksList, criteria);
        })

        contentChild.querySelector('.sort__img').addEventListener('click', () => {
            const tasksList = contentChild.querySelector('.content__tasksList');
            const criteria = contentChild.querySelector('.sort__select').value;
        
            
            sortTasks(tasksList, criteria, isAscending);
            isAscending = !isAscending;
        });

        const prioritySelect = newNoteElement.querySelector('.priority__body');
        
        prioritySelect.addEventListener("change", function() {
            priority(newNoteElement, this.value);
        });

        syncInputFields(counter);
        addFontSettingsListeners(counter); 
        counter++;
        saveNotesToLocalStorage();
    });

    function syncInputFields(counter) {
        let noteElement = document.querySelector(`[data-path="${counter}"]`);
        let contentChild = document.querySelector(`[data-target="${counter}"]`);

        let noteInput = noteElement.querySelector(".title-note__input");
        let contentInput = contentChild.querySelector(".content__title");


        noteInput.addEventListener("input", () => {
            contentInput.value = noteInput.value || "Untitled";
            saveNotesToLocalStorage();
        });

        contentInput.addEventListener("input", () => {
            noteInput.value = contentInput.value || "Untitled";
            let titleSpan = noteElement.querySelector(".title-note__span");
            titleSpan.textContent = noteInput.value || "Untitled";
            saveNotesToLocalStorage();
        });
    }

    noteList.addEventListener("click", function (event) {
        const elem = event.target;
        let noteElement = elem.closest('.notes__note');
        if (noteElement) {
            let notePath = noteElement.dataset.path;
            let contentChild = document.querySelector(`[data-target="${notePath}"]`);
            if (elem.dataset.garbage !== undefined) {
                noteElement.classList.add('slide-out-left');
                setTimeout(() => {
                    noteElement.remove();
                    
                }, 400);
                
            } else if (elem.dataset.rename !== undefined) {
                closeAction(event);
                event.stopPropagation();

                let titleSpan = noteElement.querySelector('.title-note__span');
                let titleInput = noteElement.querySelector('.title-note__input');
                titleInput.addEventListener("keydown", (e) => {
                    if(e.key === "Enter") {
                        inputValues(titleInput);
                    }
                });
                titleSpan.style.display = "none";
                titleInput.classList.add("title-active");
                titleInput.focus();
            } else if (elem.dataset.prior !== undefined) {
                closeAction(event);
                event.stopPropagation();
                let priority = noteElement.querySelector(".priority__body");
                let imgs = noteElement.querySelector(".notes__imgs");
                
                if (!imgs.classList.contains('active__imgs')) {
                    imgs.classList.add("active__imgs")
                    priority.style.display = "block";
                    priority.classList.add('active-prior')
                } else {
                    imgs.classList.remove("active__imgs")
                    priority.style.display = "none";
                    priority.classList.remove('active-prior')
                }
                
            } else  {
                if (!contentChild.classList.contains('open')) {
                    document.querySelectorAll(".content__child").forEach(e => {
                        e.classList.remove('active');
                        e.classList.remove('open');
                    });
                    contentChild.classList.add('active');
                    contentChild.classList.add('open');
                } else {
                    contentChild.classList.remove('active');
                    contentChild.classList.remove('open');
                }
            }
            saveNotesToLocalStorage();
        }
    });

    function inputValues(activeInput) {
        let noteElement = activeInput.closest('.notes__note');
        let notePath = noteElement.dataset.path;
        let contentChild = document.querySelector(`[data-target="${notePath}"]`);
        let contentChildInput = contentChild.querySelector(".content__title");
        const titleSpan = activeInput.previousElementSibling;
        titleSpan.textContent = activeInput.value || "Untitled";
        contentChildInput.value = activeInput.value || "Untitled";
        activeInput.classList.remove('title-active');
        titleSpan.style.display = "inline";
    }

    document.addEventListener("click", (e) => {
        let activeInput = document.querySelector(".title-active");
        let activeBigInput = document.querySelector(".act");

        if(activeInput && !activeInput.contains(e.target)) {
            inputValues(activeInput);
        }
        if(activeBigInput && !activeBigInput.contains(e.target)) {
            let noteElement = activeBigInput.closest('.content__child');
            let notePath = noteElement.dataset.target;
            let contentChild = document.querySelector(`[data-path="${notePath}"]`);
            let contentChildInput = contentChild.querySelector(".title-note__input");
            const titleSpan = contentChildInput.previousElementSibling;
            titleSpan.textContent = activeBigInput.value || "Untitled";
            contentChildInput.value = activeBigInput.value || "Untitled";
            activeBigInput.classList.remove('act');
        }
        closeAction(e);
        saveNotesToLocalStorage();
    });


    function addFontSettingsListeners(counter) {
        let contentChild = document.querySelector(`[data-target="${counter}"]`);
        let textArea = contentChild.querySelector(".content__text");
        let tasksList = contentChild.querySelector(".content__tasksList");
        
        let fontSelect = contentChild.querySelector(".font-select");
        fontSelect.addEventListener("change", () => {
            textArea.style.fontFamily = fontSelect.value;
            
            tasksList.querySelectorAll('.task-item__inputText, .task-item__p').forEach(taskElement => {
                taskElement.style.fontFamily = fontSelect.value;
            });
        });

        let sizeSelect = contentChild.querySelector(".size-select");
        sizeSelect.addEventListener("change", () => {
            textArea.style.fontSize = sizeSelect.value;
            
            tasksList.querySelectorAll('.task-item__inputText, .task-item__p').forEach(taskElement => {
                taskElement.style.fontSize = sizeSelect.value;
            });
        });

        textArea.addEventListener("input", () => {
            saveNotesToLocalStorage();
        });
    }

    function priority(noteChild, value) {
        let imgs = noteChild.querySelector(".imgs")
        let prior = imgs.querySelector(".priority__body")
        let noteInput = noteChild.querySelector(".title-note__input")
        if(value === "high") {
            noteChild.style.backgroundColor = "red";
            noteChild.style.color = "white";
            noteInput.style.color = "white";
            noteChild.querySelectorAll("path").forEach(elem => {
                elem.style.fill = "white";
            })
        } else if (value === "medium") {
            noteChild.style.color = "black";
            noteChild.style.backgroundColor = "yellow";
            noteInput.style.color = "black";
            noteChild.querySelectorAll("path").forEach(elem => {
                elem.style.fill = "rgb(145, 145, 142)";
            })
        } else if (value === "low") {
            noteChild.style.color = "black";
            noteChild.style.backgroundColor = "rgb(0, 0, 0, 0.1)";
            noteInput.style.color = "black";
            noteChild.querySelectorAll("path").forEach(elem => {
                elem.style.fill = "rgb(145, 145, 142)";
            })
        } else {
            noteChild.style.color = "black";
            noteInput.style.color = "black";
            noteChild.style.background = "none";
            noteChild.querySelectorAll("path").forEach(elem => {
                elem.style.fill = "rgb(145, 145, 142)";
            })
        }
        
        prior.style.display = "none"
        imgs.classList.remove("active__imgs")
        saveNotesToLocalStorage()
    }


    function closeAction(e) {
        let activeInput = document.querySelector(".title-active");
        let activePrior = document.querySelector(".active-prior");
        let activeTaskIput = document.querySelector(".task-input-active");

        if(activeInput && !activeInput.contains(e.target)) {
            inputValues(activeInput);
        }
        if (activeTaskIput && !activeTaskIput.contains(e.target)) {
            let taskP = activeTaskIput.nextElementSibling

            taskP.textContent = activeTaskIput.value || "Untask"

            taskP.style.display = "block"
            activeTaskIput.classList.remove("task-input-active")
        }

        if(activePrior && !activePrior.contains(e.target)) {
            let imgs = activePrior.closest('.imgs')

            imgs.classList.remove("active__imgs")
            activePrior.style.display = "none"
            activePrior.classList.remove("active-prior")
        }
    }

 
    function sortTasks(tasksList, criteria, ascending = true) {
        const tasksArray = Array.from(tasksList.children);
    
        tasksArray.forEach(task => task.style.transition = "transform 0.3s ease");
    
        tasksArray.sort((a, b) => {
            let comparison = 0;
    
            if (criteria === "priority") {
                const priorityA = getPriorityValue(a.querySelector('.priority__body').value);
                const priorityB = getPriorityValue(b.querySelector('.priority__body').value);
                comparison = priorityA - priorityB;
            } else if (criteria === "name") {
                comparison = a.querySelector('.task-item__p').textContent.localeCompare(b.querySelector('.task-item__p').textContent);
            } else if (criteria === "date") {
                comparison = new Date(a.querySelector('.task__date').textContent) - new Date(b.querySelector('.task__date').textContent);
            }
    
            return ascending ? comparison : -comparison;
        });
    
        tasksArray.forEach((task, index) => {
            task.style.transform = `translateY(${index * 6}px)`; 
            tasksList.appendChild(task);
        });
    
        setTimeout(() => {
            tasksArray.forEach(task => task.style.transform = "");
        }, 300);
    }
    

    function getPriorityValue(priority) {
        switch (priority) {
            case 'high': return 1;
            case 'medium': return 2;
            case 'low': return 3;
            case 'without': return 4;
            default: return 5;
        }
    }

    function toggleSortVisibility(contentElement) {
        const tasksList = contentElement.querySelector('.content__tasksList');
        const sortDropdown = contentElement.querySelector('.content__sort');
        if (tasksList && tasksList.children.length > 0) {
            sortDropdown.style.display = 'flex';
        } else {
            sortDropdown.style.display = 'none';
        }
    }
    
   