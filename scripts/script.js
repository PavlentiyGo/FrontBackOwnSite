// Ждем, пока DOM будет полностью загружен
document.addEventListener('DOMContentLoaded', function () {

    // --- Данные о проектах ---
    // Важно: убедитесь, что индекс массива соответствует ID карточки (например, card1 -> projects[0])
    // Пути к изображениям указаны относительно файла pages/projects.html
    const projects = [
        {
            title: "Личный сайт",
            description: "Описание проекта Личный сайт. Расскажите о его целях, использованных технологиях, особенностях дизайна и функциональности.",
            image: "../images/photo_2025-10-27_13-02-31.jpg", // Путь к изображению (относительно pages/)
            links: [ // Массив ссылок (может быть пустым)
                
                { text: "Репозиторий", url: "https://github.com/username/project1" } // Исправлен пробел в URL
            ]
        },
        {
            title: "Todo-приложение",
            description: "Описание проекта Todo-приложение. Опишите, как оно работает, какие функции реализованы, какие навыки показывает.",
            image: "../images/photo_2025-10-27_09-06-29.jpg", // Путь к изображению (относительно pages/)
            links: [
                { text: "Посмотреть демо", url: "https://example.com/demo2" }, // Исправлен пробел в URL
                { text: "Репозиторий", url: "https://github.com/username/project2" } // Исправлен пробел в URL
            ]
        },
        {
            title: "Интернет-магазин",
            description: "Описание проекта Интернет-магазин. Расскажите о стеке технологий, архитектуре, реализованных фичах (например, корзина, фильтры).",
            image: "../images/photo_2025-10-27_13-39-40.jpg", // Путь к изображению (относительно pages/)
            links: [
                { text: "Репозиторий", url: "https://github.com/username/project3" } // Исправлен пробел в URL
            ]
        },
        {
            title: "Портфолио",
            description: "Описание проекта Портфолио. Объясните, какова его цель, какие навыки он демонстрирует, как реализована адаптивность и навигация.",
            image: "../images/photo_2025-10-29_22-50-25.jpg", // Путь к изображению (относительно pages/)
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/FrontBackOwnSite" } // Пример ссылки на ваш GitHub
            ]
        },
        {
            title: "Приложение интернет магазина",
            description: "Декстопное приложение на С# с использованием PostgreSQL. Windows Forms приложение для управления базой данных магазина с использованием PostgreSQL. Проект предоставляет полный функционал для работы с клиентами, товарами и заказами.",
            image: "../images/photo_2025-10-29_22-12-59.jpg", // Путь к изображению (относительно pages/)
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/BaseData" } // Пример ссылки на ваш GitHub
            ]
        },
        {
            title: "Судоку на Qt",
            description: "Декстопное приложение судоку с использованием Qt",
            image: "../images/download.jpg", // Путь к изображению (относительно pages/)
            links: [
                { text: "Репозиторий", url: "https://github.com/PavlentiyGo/BaseData" } // Пример ссылки на ваш GitHub
            ]
        },
        {
            title: "Рандомное приложение",
            description: "Я правда не придумал ещё одного проекта, но вы можете перейти по ссылке, чтобы посмотреть смешное видео",
            image: "../images/i.jpg", // Путь к изображению (относительно pages/)
            links: [
                { text: "Видео", url: "https://www.youtube.com/watch?v=oHg5SJYRHA0" } // Пример ссылки на ваш GitHub
            ]
        }
    ];

    // --- Обработка кликов по карточкам проектов (по ID) ---
    const container = document.getElementById("projects-container");
    if (container) {
        container.addEventListener("click", function (event) {
            // Находим ближайший родительский элемент с id, начинающимся на "card"
            const card = event.target.closest('[id^="card"]');
            if (card) {
                const cardId = card.id;
                // Извлекаем номер из ID (например, "card1" -> 1, затем индекс 0)
                const projectId = parseInt(cardId.replace('card', ''), 10) - 1;

                if (!isNaN(projectId) && projectId >= 0 && projectId < projects.length) {
                    const project = projects[projectId];
                    console.log(`Открывается модальное окно для: ${project.title}`); // Логика в консоль (опционально)

                    // Находим элементы модального окна
                    const modalTitle = document.getElementById('projectModalLabel');
                    const modalImage = document.getElementById('modalImage');
                    const modalDescription = document.getElementById('modalDescription');
                    const modalLinksContainer = document.getElementById('modalLinks');

                    // Заполняем модальное окно данными проекта
                    if (modalTitle) modalTitle.textContent = project.title;
                    if (modalImage) {
                        modalImage.src = project.image;
                        modalImage.alt = project.title; // Хорошая практика - альтернативный текст
                    }
                    if (modalDescription) modalDescription.textContent = project.description;

                    // Очищаем и заполняем контейнер для ссылок
                    if (modalLinksContainer) {
                        modalLinksContainer.innerHTML = ''; // Очищаем предыдущие ссылки
                        if (project.links && project.links.length > 0) {
                            project.links.forEach(link => {
                                const linkElement = document.createElement('a');
                                linkElement.href = link.url;
                                linkElement.className = 'btn btn-outline-primary me-2 mb-2'; // Классы для стилизации кнопки
                                linkElement.textContent = link.text;
                                linkElement.target = '_blank'; // Открывать в новой вкладке
                                modalLinksContainer.appendChild(linkElement);
                            });
                        } else {
                            // Если ссылок нет, можно добавить текст или оставить пустым
                            modalLinksContainer.textContent = 'Ссылки отсутствуют.';
                        }
                    }

                    // Показываем модальное окно Bootstrap
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

    // --- Обработка фильтрации карточек проектов ---
    const filterButtons = document.querySelectorAll('.filter-btn');

    function filterProjects(category) {
        const projectsContainer = document.getElementById('projects-container'); // Используем локально
        if (projectsContainer) {
            // Предполагается, что у карточек есть класс project-card и атрибут data-category
            const cards = projectsContainer.querySelectorAll('.project-card');
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
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

    // По умолчанию показываем все проекты и выделяем кнопку 'Все'
    if (filterButtons.length > 0) {
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active');
        }
        filterProjects('all');
    }

    // --- Обработка отправки формы контактов ---
    // Обратите внимание: на странице pages/projects.html, скорее всего, нет формы с id 'contactForm'.
    // Если форма есть только на другой странице (например, contacts.html), этот блок можно удалить из этого файла.
    const form = document.getElementById('contactForm');

    if (form) { // Условие проверит, существует ли форма на текущей странице
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (name && email && message) {
                // alert('Сообщение отправлено!'); // <-- Закомментировано или удалено
                // form.reset(); // <-- Можно оставить, если нужно очистить форму после отправки

                // Показываем модальное окно Bootstrap
                const successModalElement = document.getElementById('successModal');
                if (successModalElement) {
                    const bsSuccessModal = new bootstrap.Modal(successModalElement);
                    bsSuccessModal.show();
                }
            } else {
                alert('Пожалуйста, заполните все поля.');
            }
        });
    }
});