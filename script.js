// Функция для переключения между экранами
function switchScreen(screenId) {
    console.log('Switching to screen:', screenId);
    
    // Скрыть все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать выбранный экран
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log('Screen activated:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
    
    // Обновить навигацию
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Активировать соответствующий элемент навигации
    const navItem = document.querySelector(`[onclick="switchScreen('${screenId}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Прокрутить страницу наверх
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Установить активный экран по умолчанию
    const defaultScreen = 'dashboard';
    
    // Активировать экран по умолчанию
    document.getElementById(defaultScreen).classList.add('active');
    
    // Активировать соответствующий элемент навигации
    const defaultNavItem = document.querySelector(`[onclick="switchScreen('${defaultScreen}')"]`);
    if (defaultNavItem) {
        defaultNavItem.classList.add('active');
    }
    
    // Добавить обработчики для примеров промптов
    setupPromptChips();
    
    // Добавить обработчики для кнопок
    setupButtons();
    
    // Добавить обработчики для вкладок истории
    setupHistoryTabs();
    
    // Добавить обработчик для скрытия клавиатуры
    setupKeyboardDismiss();
});



// Настройка примеров промптов
function setupPromptChips() {
    const promptChips = document.querySelectorAll('.prompt-chip');
    
    promptChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const foodInput = document.querySelector('.food-input');
            if (foodInput) {
                foodInput.value = this.textContent;
                foodInput.focus();
            }
        });
    });
}

// Настройка кнопок
function setupButtons() {
    // Кнопка анализа еды
    const analyzeBtn = document.querySelector('.analyze-btn');
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', function() {
            const foodInput = document.querySelector('.food-input');
            if (foodInput && foodInput.value.trim()) {
                analyzeFood(foodInput.value);
            } else {
                alert('Пожалуйста, опишите, что вы съели');
            }
        });
    }
    
    // Кнопка добавления еды в журнал
    const addFoodBtn = document.querySelector('.add-food-btn');
    if (addFoodBtn) {
        addFoodBtn.addEventListener('click', function() {
            addFoodToJournal();
        });
    }
    
    // Кнопка микрофона
    const micBtn = document.querySelector('.mic-btn');
    if (micBtn) {
        micBtn.addEventListener('click', function() {
            // Здесь можно добавить логику для голосового ввода
            console.log('Voice input activated');
            alert('Голосовой ввод пока не поддерживается');
        });
    }
}

// Функция анализа еды (заглушка)
function analyzeFood(foodDescription) {
    console.log(`Analyzing food: ${foodDescription}`);
    
    // Здесь можно добавить реальную логику анализа еды
    // Например, API для получения информации о калориях
    
    // Показываем результаты (уже есть в HTML)
    const resultsPreview = document.querySelector('.results-preview');
    if (resultsPreview) {
        resultsPreview.style.display = 'block';
    }
}

// Функция добавления еды в журнал
function addFoodToJournal() {
    console.log('Adding food to journal');
    
    // Здесь можно добавить логику для сохранения в журнал
    // Например, сохранение в localStorage или отправка на сервер
    
    alert('Еда добавлена в журнал!');
    
    // Очистить поле ввода
    const foodInput = document.querySelector('.food-input');
    if (foodInput) {
        foodInput.value = '';
    }
}

// Функция для обновления прогресса калорий
function updateCalorieProgress(current, target) {
    const progressCircle = document.querySelector('.circle-progress');
    if (progressCircle) {
        const circumference = 472; // 2 * π * r (r = 75)
        const progress = Math.min(current / target, 1);
        const offset = circumference - (progress * circumference);
        progressCircle.style.strokeDashoffset = offset;
    }
    
    // Обновить текст
    const caloriesText = document.querySelector('.circle-text .calories');
    const totalText = document.querySelector('.circle-text .total');
    
    if (caloriesText) {
        caloriesText.textContent = current.toLocaleString();
    }
    
    if (totalText) {
        totalText.textContent = `из ${target.toLocaleString()} ккал`;
    }
}

// Функция для обновления макронутриентов
function updateMacros(carbs, protein, fat) {
    // Обновить значения
    const carbsValue = document.querySelector('.carbs .macro-value');
    const proteinValue = document.querySelector('.protein .macro-value');
    const fatValue = document.querySelector('.fat .macro-value');
    
    if (carbsValue) carbsValue.textContent = `${carbs}g / 250g`;
    if (proteinValue) proteinValue.textContent = `${protein}g / 120g`;
    if (fatValue) fatValue.textContent = `${fat}g / 70g`;
    
    // Обновить прогресс-бары
    const carbsProgress = document.querySelector('.carbs .macro-progress');
    const proteinProgress = document.querySelector('.protein .macro-progress');
    const fatProgress = document.querySelector('.fat .macro-progress');
    
    if (carbsProgress) carbsProgress.style.width = `${Math.min(carbs / 250 * 100, 100)}%`;
    if (proteinProgress) proteinProgress.style.width = `${Math.min(protein / 120 * 100, 100)}%`;
    if (fatProgress) fatProgress.style.width = `${Math.min(fat / 70 * 100, 100)}%`;
}

// Настройка вкладок истории
function setupHistoryTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Убрать активный класс у всех вкладок
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Добавить активный класс к текущей вкладке
            this.classList.add('active');
            
            // Здесь можно добавить логику для загрузки данных по выбранному периоду
            const period = this.textContent;
            console.log(`Selected period: ${period}`);
        });
    });
}

// Функция для скрытия клавиатуры при клике на пустое место
function setupKeyboardDismiss() {
    // Обработчик клика на весь документ
    document.addEventListener('click', function(e) {
        // Проверяем, является ли цель клика полем ввода
        const isInput = e.target.tagName === 'INPUT' || 
                       e.target.tagName === 'TEXTAREA' || 
                       e.target.classList.contains('food-input');
        
        // Если клик не по полю ввода, убираем фокус со всех полей
        if (!isInput) {
            // Убираем фокус со всех полей ввода
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input === document.activeElement) {
                    input.blur();
                }
            });
            
            // Дополнительно для мобильных устройств
            if (window.innerWidth <= 768) {
                // Принудительно скрываем клавиатуру на мобильных
                document.activeElement && document.activeElement.blur();
                
                // Альтернативный способ для iOS
                if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                    const inputs = document.querySelectorAll('input, textarea');
                    inputs.forEach(input => {
                        input.style.fontSize = '16px'; // iOS не показывает клавиатуру для полей с font-size < 16px
                        setTimeout(() => {
                            input.style.fontSize = ''; // Возвращаем исходный размер
                        }, 100);
                    });
                }
            }
        }
    });
    
    // Дополнительный обработчик для touch событий на мобильных
    document.addEventListener('touchend', function(e) {
        const isInput = e.target.tagName === 'INPUT' || 
                       e.target.tagName === 'TEXTAREA' || 
                       e.target.classList.contains('food-input');
        
        if (!isInput) {
            // Убираем фокус со всех полей при touch
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input === document.activeElement) {
                    input.blur();
                }
            });
        }
    });
}

// Пример использования функций обновления
// Можно вызывать эти функции при загрузке данных или изменении значений
// updateCalorieProgress(1847, 2100);
// updateMacros(162, 96, 33); 