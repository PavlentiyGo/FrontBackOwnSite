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
            description: "Это этот сайт, на нём расположены все мои проекты, сайт создан с помощью Bootstrap",
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
            const card = event.target.closest('.card');
            if (!card) return;

            const projectId = parseInt(card.dataset.projectIndex, 10);
            if (isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
                console.warn(`Некорректный индекс проекта: ${projectId}`);
                return;
            }

            const project = projects[projectId];
            console.log(`Открываем проект: ${project.title}`);
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
                if (project.links?.length) {
                    project.links.forEach(link => {
                        if (link.url) {
                            const a = document.createElement('a');
                            a.href = link.url;
                            a.className = 'btn btn-outline-primary me-2 mb-2';
                            a.textContent = link.text;
                            a.target = '_blank';
                            a.rel = 'noopener noreferrer';
                            modalLinksContainer.appendChild(a);
                        } else {
                            const span = document.createElement('span');
                            span.className = 'text-muted me-2 mb-2';
                            span.textContent = link.text;
                            modalLinksContainer.appendChild(span);
                        }
                    });
                } else {
                    modalLinksContainer.textContent = 'Ссылки отсутствуют.';
                }
            }
            const modal = document.getElementById('projectModal');
            if (modal) modal.classList.add('show');
        });
    }
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModal');
    const closeModalFooterBtn = document.getElementById('closeModalFooter');

const closeModal = () => {
    if (modal) modal.classList.remove('show');
};

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (closeModalFooterBtn) closeModalFooterBtn.addEventListener('click', closeModal);

    if (modal) {
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.style.display === 'block') closeModal();
        }
    });

});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const modalOkBtn = document.querySelector('#successModal .btn-primary');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (successModal) {
                successModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (modalOkBtn) {
        modalOkBtn.addEventListener('click', function() {
            
            if (successModal) {
                successModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    if (successModal) {
        successModal.addEventListener('click', function(e) {
            if (e.target === successModal) {
                successModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (successModal && successModal.classList.contains('show')) {
                successModal.classList.remove('show');
                document.body.style.overflow = ''; 
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const addEntryBtn = document.getElementById('add-entry-btn');
    const addDiaryEntryModal = document.getElementById('addDiaryEntryModal');
    const closeModalBtn = document.querySelector('#addDiaryEntryModal .btn-close');
    const cancelModalBtn = document.querySelector('#addDiaryEntryModal .btn-secondary');
    const saveNewEntryBtn = document.getElementById('saveNewEntryBtn');
    function openModal() {
        if (addDiaryEntryModal) {
            addDiaryEntryModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
    function closeModal() {
        if (addDiaryEntryModal) {
            addDiaryEntryModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    if (addEntryBtn) {
        addEntryBtn.addEventListener('click', openModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', closeModal);
    }

    if (addDiaryEntryModal) {
        addDiaryEntryModal.addEventListener('click', function(e) {
            if (e.target === addDiaryEntryModal) {
                closeModal();
            }
        });
    }
    if (saveNewEntryBtn) {
        saveNewEntryBtn.addEventListener('click', function() {
            const newEntryText = document.getElementById('newEntryText').value;
            const statusRadios = document.getElementsByName('entryStatus');
            let selectedStatus = 'completed'; 

            for (const radio of statusRadios) {
                if (radio.checked) {
                    selectedStatus = radio.value;
                    break;
                }
            }

            if (newEntryText.trim() !== '') {
                console.log('Добавлена запись:', newEntryText, 'Статус:', selectedStatus);
                closeModal();
                document.getElementById('newEntryText').value = '';
                document.getElementById('statusCompleted').checked = true;
            } else {
                alert('Пожалуйста, введите текст записи.');
            }
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (addDiaryEntryModal && addDiaryEntryModal.classList.contains('show')) {
                closeModal();
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                    }
                });
            });
        });
    }
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
            description: "Это этот сайт, на нём расположены все мои проекты, сайт создан с помощью Bootstrap",
            image: "../images/photo_2025-10-29_22-50-25.jpg",
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/FrontBackOwnSite" }
            ]
        }
    ];

    const container = document.getElementById("projects-container");
    if (container) {
        container.addEventListener("click", function (event) {
            const card = event.target.closest('.card');
            if (!card) return;
            let projectId = -1;
            for (let i = 0; i < projectCards.length; i++) {
                if (projectCards[i].contains(card)) {
                    const cardId = projectCards[i].id;
                    projectId = parseInt(cardId.replace('card', ''), 10) - 1;
                    break;
                }
            }

            if (projectId < 0 || projectId >= projects.length) {
                console.warn(`Некорректный индекс проекта: ${projectId}`);
                return;
            }

            const project = projects[projectId];
            console.log(`Открываем проект: ${project.title}`);
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
                if (project.links?.length) {
                    project.links.forEach(link => {
                        if (link.url) {
                            const a = document.createElement('a');
                            a.href = link.url;
                            a.className = 'btn btn-outline-primary me-2 mb-2';
                            a.textContent = link.text;
                            a.target = '_blank';
                            a.rel = 'noopener noreferrer';
                            modalLinksContainer.appendChild(a);
                        } else {
                            const span = document.createElement('span');
                            span.className = 'text-muted me-2 mb-2';
                            span.textContent = link.text;
                            modalLinksContainer.appendChild(span);
                        }
                    });
                } else {
                    modalLinksContainer.textContent = 'Ссылки отсутствуют.';
                }
            }
            const modal = document.getElementById('projectModal');
            if (modal) modal.classList.add('show');
        });
    }
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModal');
    const closeModalFooterBtn = document.getElementById('closeModalFooter');

    const closeModal = () => {
        if (modal) modal.classList.remove('show');
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (closeModalFooterBtn) closeModalFooterBtn.addEventListener('click', closeModal);

    if (modal) {
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('show')) closeModal();
        }
    });
});