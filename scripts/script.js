document.addEventListener('DOMContentLoaded', function () {

    
    const projects = [
        {
            title: "Личный сайт",
            description: "Первый сайт, созданный в рамках дисциплины Фронтэнд и Бекэнд разработка",
            image: "../images/photo_2025-10-29_23-04-11.jpg",
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/FrontBack" }
            ]
        },
        {
            title: "Todo-приложение",
            description: "Todo-приложение, созданное с помощью Js, позволяющее отслеживать задачи, которые уже выполнены или нужно выполнить",
            image: "../images/to_do.jpg",
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/FrontBack" } 
            ]
        },
        {
            title: "Интернет-магазин",
            description: "Пока что тут пусто, но уверен, что скоро эта вкладка обновится",
            image: "../images/photo_2025-10-29_23-11-48.jpg",
            links: [
                { text: "Репозиторий(пусто)", url: "" }
            ]
        },
        {
            title: "Портфолио",
            description: "Это этот сайт, на нём расположены все мои проекты, сайт создан с помощью Bootstap",
            image: "../images/photo_2025-10-29_22-50-25.jpg",
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/FrontBackOwnSite" }
            ]
        },
        {
            title: "Приложение интернет магазина",
            description: "Windows Forms приложение на C# для управления базой данных магазина с использованием PostgreSQL. Проект предоставляет полный функционал для работы с клиентами, товарами и заказами.",
            image: "../images/photo_2025-10-29_22-12-59.jpg",
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/BaseData" } 
            ]
        },
        {
            title: "Судоку на Qt",
            description: "Декстопное приложение судоку с использованием Qt",
            image: "../images/download.jpg",
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/BaseData" }
            ]
        },
        {
            title: "Рандомное приложение",
            description: "Я правда не придумал ещё одного проекта, но вы можете перейти по ссылке, чтобы посмотреть смешное видео",
            image: "../images/i.jpg",
            links: [
                { text: "Видео", url: "https://www.youtube.com/watch?v=oHg5SJYRHA0" }
            ]
        }
        
    ];
    const container = document.getElementById("projects-container");
    if (container) {
        container.addEventListener("click", function (event) {
        
            const card = event.target.closest('[id^="card"]');
            if (card) {
                const cardId = card.id;
                
                const projectId = parseInt(cardId.replace('card', ''), 10) - 1;

                if (!isNaN(projectId) && projectId >= 0 && projectId < projects.length) {
                    const project = projects[projectId];
                    console.log(`Открывается модальное окно для: ${project.title}`);

                    
                    const modalTitle = document.getElementById('projectModalLabel');
                    const modalImage = document.getElementById('modalImage');
                    const modalDescription = document.getElementById('modalDescription');
                    const modalLinksContainer = document.getElementById('modalLinks');

                    
                    if (modalTitle) modalTitle.textContent = project.title;
                    if (modalImage) {
                        modalImage.src = project.image;
                        modalImage.alt = project.title;
                    }
                    if (modalDescription) modalDescription.textContent = project.description;

                    
                    if (modalLinksContainer) {
                        modalLinksContainer.innerHTML = '';
                        if (project.links && project.links.length > 0) {
                            project.links.forEach(link => {
                                if (link.url) { 
                                    const linkElement = document.createElement('a');
                                    linkElement.href = link.url;
                                    linkElement.className = 'btn btn-outline-primary me-2 mb-2';
                                    linkElement.textContent = link.text;
                                    linkElement.target = '_blank';
                                    linkElement.rel = 'noopener noreferrer';
                                    modalLinksContainer.appendChild(linkElement);
                                } else {
                                    
                                    const textElement = document.createElement('span');
                                    textElement.className = 'text-muted me-2 mb-2';
                                    textElement.textContent = link.text;
                                    modalLinksContainer.appendChild(textElement);
                                }
                            });
                        } else {
                            modalLinksContainer.textContent = 'Ссылки отсутствуют.';
                        }
                    }

                    
                    const modalElement = document.getElementById('projectModal');
                    if (modalElement) {
                        const bsModal = new bootstrap.Modal(modalElement);
                        bsModal.show();
                    }
                } else {
                    console.error('Проект с ID не найден или ID некорректен:', projectId);
                }
            }
        });
    }

    
    const filterButtons = document.querySelectorAll('.filter-btn');

    function filterProjects(category) {
        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer) {
            
            const cards = projectsContainer.querySelectorAll('.project-card');
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || (cardCategory && cardCategory === category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    
    if (filterButtons.length > 0) {
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active');
        }
        filterProjects('all');
    }


    
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (name && email && message) {
                
                const successModalElement = document.getElementById('successModal');
                if (successModalElement) {
                    const bsSuccessModal = new bootstrap.Modal(successModalElement);
                    bsSuccessModal.show();

                    
                    form.reset();
                    
                }
            } else {
                alert('Пожалуйста, заполните все поля.');
            }
        });
    }
    const addEntryButton = document.getElementById('add-entry-btn');
    const diaryModalElement = document.getElementById('addDiaryEntryModal');
    const newEntryTextInput = document.getElementById('newEntryText');
    const saveEntryButton = document.getElementById('saveNewEntryBtn');
    const statusCompletedRadio = document.getElementById('statusCompleted');
    const statusInProgRadio = document.getElementById('statusInProg');

    if (addEntryButton && diaryModalElement && newEntryTextInput && saveEntryButton) {
        addEntryButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            console.log("Кнопка 'Добавить запись' нажата! Открываем модальное окно.");
            const bsModal = new bootstrap.Modal(diaryModalElement);
            bsModal.show();
            newEntryTextInput.value = '';
            if (statusCompletedRadio) statusCompletedRadio.checked = true;
            if (statusInProgRadio) statusInProgRadio.checked = false;
        });

        
        saveEntryButton.addEventListener('click', function(event) {
            event.preventDefault();

            const newEntryTextValue = newEntryTextInput.value.trim();
            let statusValue = 'completed';
            if (statusInProgRadio && statusInProgRadio.checked) {
                statusValue = 'in_progress';
            }

            if (newEntryTextValue) {
                console.log(`Добавляем новую запись: "${newEntryTextValue}", статус: "${statusValue}"`);

                
                const progressListContainer = document.querySelector('.mt-4.p-4.bg-white.border.rounded.shadow-sm');
                if (progressListContainer) {
                    
                    let list = progressListContainer.querySelector('#progress-list');
                    if (!list) {
                        
                         list = progressListContainer.querySelector('ul, ol');
                    }
                    if (!list) {
                        
                        list = document.createElement('ul');
                        list.id = 'progress-list';
                        list.className = 'list-unstyled mb-0'; 
                        progressListContainer.appendChild(list);
                    }
                    const newListItem = document.createElement('li');
                    newListItem.className = 'mb-2 d-flex align-items-center';


                    const span = document.createElement('span');
                    span.className = 'flex-grow-1 me-2';
                    span.textContent = newEntryTextValue;

                    let statusElement;
                    if (statusValue === 'completed') {
                        statusElement = document.createElement('i');
                        statusElement.className = 'bi bi-check-circle-fill text-success';
                        statusElement.title = 'Выполнено'; 
                    } else if (statusValue === 'in_progress') {
                        statusElement = document.createElement('span');
                        statusElement.className = 'badge bg-warning text-dark';
                        statusElement.textContent = 'in progress';
                    }

                    newListItem.appendChild(span);
                    if (statusElement) {
                        newListItem.appendChild(statusElement);
                    }
                    list.insertBefore(newListItem, list.firstChild);
                    const bsModalInstance = bootstrap.Modal.getInstance(diaryModalElement);
                    if (bsModalInstance) {
                        bsModalInstance.hide();
                    }
                } else {
                    console.error("Контейнер списка прогресса не найден.");
                }
            } else {
                 alert("Пожалуйста, введите текст записи.");
            }
        });
    }

});