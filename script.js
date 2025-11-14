// script.js (更新後的版本)

document.addEventListener('DOMContentLoaded', () => {
    // 取得所有需要的 DOM 元素
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    const articleList = document.getElementById('article-list');
    const articleContentArea = document.getElementById('article-content-area');
    
    const vocabInput = document.getElementById('vocab-input');
    const vocabSearchBtn = document.getElementById('vocab-search-btn');
    const vocabResult = document.getElementById('vocab-result');
    
    const proverbGenerateBtn = document.getElementById('proverb-generate-btn');
    const proverbResult = document.getElementById('proverb-result');

    const myVocabList = document.getElementById('my-vocab-list');
    const myVocabControls = document.getElementById('my-vocab-controls');

    // ✨ 新增：測驗相關的 DOM 元素
    const startQuizBtn = document.getElementById('start-quiz-btn');
    let quizContainer = document.getElementById('quiz-container'); // Use let for reassignment

    // ✨ 新增：從 localStorage 載入已儲存的單字
    let savedWords = JSON.parse(localStorage.getItem('myVocabulary')) || {};
    // ✨ 新增：測驗狀態變數
    let quizWords = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let wrongAnswers = [];

    // --- 導覽列功能 ---
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(sec => sec.classList.remove('active'));

            // ✨ 新增：如果點擊的是「我的單字本」，就渲染列表
            if (button.id === 'nav-my-vocab') {
                endQuiz(); // 如果測驗正在進行，結束它
                renderMyVocab();
            }

            button.classList.add('active');
            const targetSectionId = button.id.replace('nav-', '') + '-section';
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    // --- 1. 英文短文專區 ---
    function loadArticles() {
        articleList.innerHTML = '';
        articles.forEach(article => {
            const button = document.createElement('button');
            button.className = 'article-title-btn';
            button.textContent = article.title;
            button.dataset.id = article.id;
            button.addEventListener('click', () => {
                const selectedArticle = articles.find(a => a.id == button.dataset.id);
                // ✨ 修改：在文章內容中加入發音按鈕
                articleContentArea.innerHTML = `
                    <h3>${selectedArticle.title}</h3>
                    <p>${selectedArticle.content}</p>
                    <button class="speak-article-btn" data-text="${selectedArticle.content}">🔊 朗讀整篇文章</button>
                `;
                // Attach event listener to the newly created speak button
                const speakArticleBtn = articleContentArea.querySelector('.speak-article-btn');
                if (speakArticleBtn) {
                    speakArticleBtn.addEventListener('click', (e) => {
                        const textToSpeak = e.currentTarget.dataset.text; // Use currentTarget to get the button's dataset
                        speakText(textToSpeak);
                    });
                }
            });
            articleList.appendChild(button);
        });
    }

    // --- 2. 英文單字查詢專區 ---

    /**
     * ✨ 新增：使用 Web Speech API 朗讀文字的函式
     * @param {string} text - 要朗讀的文字
     */
    function speakText(text) {
        // 檢查瀏覽器是否支援語音合成
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            // 如果正在朗讀，先取消
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
            utterance.lang = 'en-US'; // 設定語言為美式英文
            utterance.rate = 1.0;     // 語速 (預設 1)
            utterance.pitch = 1.0;    // 音高 (預設 1)
            window.speechSynthesis.speak(utterance);
        } else {
            alert('抱歉，您的瀏覽器不支援語音合成功能。');
        }
    }

    function searchVocabulary() {
        const word = vocabInput.value.trim().toLowerCase();
        if (word === '') {
            vocabResult.innerHTML = '<p>請輸入單字以查詢解釋。</p>';
            return;
        }
        
        if (vocabulary[word]) {
            // ✨ 修改：在結果中加入發音圖示和儲存按鈕
            const isSaved = savedWords.hasOwnProperty(word);
            vocabResult.innerHTML = `
                <p>
                    <strong>${word}:</strong> ${vocabulary[word]}
                    <span class="speaker-icon" data-word="${word}">🔊</span>
                    <button class="save-vocab-btn" data-word="${word}" ${isSaved ? 'disabled' : ''}>
                        ${isSaved ? '已儲存' : '儲存'}
                    </button>
                </p>
            `;
            
            // ✨ 修改：使用事件委派來處理結果區塊內的點擊
            vocabResult.addEventListener('click', handleResultClick);

        } else {
            vocabResult.innerHTML = `<p>抱歉，在我們的字典裡找不到 "${word}" 這個單字。</p>`;
        }
    }
    
    vocabSearchBtn.addEventListener('click', searchVocabulary);
    vocabInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchVocabulary();
        }
    });

    // ✨ 新增：處理查詢結果區域點擊的函式 (事件委派)
    function handleResultClick(e) {
        const target = e.target;
        const word = target.dataset.word;

        if (target.classList.contains('speaker-icon')) {
            speakText(word);
        }

        if (target.classList.contains('save-vocab-btn')) {
            saveWord(word);
            target.textContent = '已儲存';
            target.disabled = true;
        }
    }

    // ✨ 新增：儲存單字到 savedWords 和 localStorage
    function saveWord(word) {
        if (vocabulary[word] && !savedWords[word]) {
            savedWords[word] = vocabulary[word];
            localStorage.setItem('myVocabulary', JSON.stringify(savedWords));
        }
    }

    // --- 3. 英文諺語專區 ---
    function generateProverb() {
        const randomIndex = Math.floor(Math.random() * proverbs.length);
        const randomProverb = proverbs[randomIndex];
        // ✨ 修改：在諺語中加入發音圖示
        proverbResult.innerHTML = `
            <p>"${randomProverb}" <span class="speaker-icon" data-text="${randomProverb}">🔊</span></p>
        `;
        // Attach event listener to the newly created speaker icon
        const speakerIcon = proverbResult.querySelector('.speaker-icon');
        if (speakerIcon) {
            speakerIcon.addEventListener('click', (e) => {
                const textToSpeak = e.currentTarget.dataset.text; // Use currentTarget to get the span's dataset
                speakText(textToSpeak);
            });
        }
    }

    proverbGenerateBtn.addEventListener('click', generateProverb);

    // --- 4. 我的單字本專區 ---

    // ✨ 新增：渲染我的單字本列表
    function renderMyVocab() {
        myVocabList.innerHTML = ''; // 清空現有列表
        // ✨ 新增：顯示單字本列表和控制按鈕
        myVocabList.classList.remove('hidden');
        myVocabControls.classList.remove('hidden');

        const words = Object.keys(savedWords);

        if (words.length === 0) {
            myVocabList.innerHTML = '<p style="text-align: center;">你的單字本是空的，快去查詢並儲存單字吧！</p>';
            return;
        }

        // ✨ 新增：如果單字少於1個，禁用測驗按鈕
        startQuizBtn.disabled = words.length < 1;

        words.forEach(word => {
            const item = document.createElement('div');
            item.className = 'vocab-item';
            item.innerHTML = `
                <div class="vocab-item-content">
                    <strong>${word}:</strong> ${savedWords[word]}
                </div>
                <div class="vocab-item-actions">
                    <span class="speaker-icon" data-word="${word}">🔊</span>
                    <button class="delete-btn" data-word="${word}">🗑️</button>
                </div>
            `;
            myVocabList.appendChild(item);
        });
    }

    // ✨ 新增：為單字本列表加上事件委派，處理發音和刪除
    myVocabList.addEventListener('click', (e) => {
        const target = e.target;
        const word = target.dataset.word;

        if (target.classList.contains('speaker-icon')) {
            speakText(word);
        } else if (target.classList.contains('delete-btn')) {
            delete savedWords[word]; // 從物件中刪除
            localStorage.setItem('myVocabulary', JSON.stringify(savedWords)); // 更新 localStorage
            renderMyVocab(); // 重新渲染列表
        }
    });

    // --- 初始化頁面 ---
    loadArticles();

    // --- 5. 測驗功能 ---

    // ✨ 新增：開始測驗
    function startQuiz(wordsToTest) {
        if (!wordsToTest || wordsToTest.length < 1) {
            alert('你的單字本中至少要有 1 個單字才能開始測驗喔！');
            return;
        }

        // 隨機排序單字
        quizWords = [...wordsToTest].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        score = 0;
        wrongAnswers = []; // 為新的測驗重置錯題列表

        // 隱藏單字本列表，顯示測驗介面
        myVocabList.classList.add('hidden');
        myVocabControls.classList.add('hidden');
        quizContainer.classList.remove('hidden');

        // 顯示測驗的主要部分，隱藏總結按鈕
        toggleQuizElements(true);

        // ✨ 修改：在每次開始測驗時重新獲取元素
        const quizQuestionArea = quizContainer.querySelector('#quiz-question-area');
        const quizAnswerInput = quizContainer.querySelector('#quiz-answer-input');
        const quizSubmitBtn = quizContainer.querySelector('#quiz-submit-btn');
        const quizFeedback = quizContainer.querySelector('#quiz-feedback');
        const quizProgress = quizContainer.querySelector('#quiz-progress');


        showNextQuestion();
    }

    // ✨ 新增：顯示下一個問題
    function showNextQuestion() {
        if (currentQuestionIndex >= quizWords.length) {
            showQuizSummary();
            return;
        }

        // ✨ 修改：在每次顯示問題時重新獲取元素
        const quizQuestionArea = quizContainer.querySelector('#quiz-question-area');
        const quizAnswerInput = quizContainer.querySelector('#quiz-answer-input');
        const quizSubmitBtn = quizContainer.querySelector('#quiz-submit-btn');
        const quizFeedback = quizContainer.querySelector('#quiz-feedback');
        const quizProgress = quizContainer.querySelector('#quiz-progress');
        // 清空上一題的狀態
        quizAnswerInput.value = '';
        quizFeedback.innerHTML = '';
        quizFeedback.className = '';
        quizAnswerInput.disabled = false;
        quizSubmitBtn.disabled = false;
        quizAnswerInput.focus();

        // 顯示問題和進度
        const word = quizWords[currentQuestionIndex];
        const definition = savedWords[word];
        quizQuestionArea.textContent = definition;
        quizProgress.textContent = `第 ${currentQuestionIndex + 1} 題 / 共 ${quizWords.length} 題`;
    }

    // ✨ 新增：檢查答案
    function checkAnswer() {
        // ✨ 修改：在每次檢查答案時重新獲取元素
        const quizAnswerInput = quizContainer.querySelector('#quiz-answer-input');
        const quizSubmitBtn = quizContainer.querySelector('#quiz-submit-btn');
        const quizFeedback = quizContainer.querySelector('#quiz-feedback');

        const userAnswer = quizAnswerInput.value.trim().toLowerCase();
        const correctAnswer = quizWords[currentQuestionIndex].toLowerCase();

        quizAnswerInput.disabled = true;
        quizSubmitBtn.disabled = true;

        if (userAnswer === correctAnswer) {
            score++;
            quizFeedback.textContent = '🎉 答對了！';
            quizFeedback.className = 'feedback-correct';
        } else {
            quizFeedback.textContent = `😥 答錯了，正確答案是：${correctAnswer}`;
            quizFeedback.className = 'feedback-wrong';
            wrongAnswers.push(correctAnswer); // ✨ 新增：將錯題加入列表
        }

        // 顯示下一題或總結
        currentQuestionIndex++;
        setTimeout(() => {
            if (currentQuestionIndex < quizWords.length) {
                showNextQuestion();
            } else {
                showQuizSummary();
            }
        }, 2000); // 停留 2 秒顯示結果
    }

    // ✨ 新增：顯示測驗總結
    function showQuizSummary() {
        toggleQuizElements(false); // 隱藏測驗的主要部分

        const quizHeader = quizContainer.querySelector('#quiz-header');
        const summaryControls = quizContainer.querySelector('#quiz-summary-controls');

        quizHeader.innerHTML = `
            <h2>測驗結束！</h2>
            <div class="result-box">
                <p>你的成績是：</p>
                <p style="font-size: 2rem; font-weight: bold;">${score} / ${quizWords.length}</p>
            </div>
        `;

        summaryControls.innerHTML = `<button id="back-to-vocab-btn" class="quiz-btn">返回單字本</button>`;

        // 如果有錯題，才顯示重考按鈕
        if (wrongAnswers.length > 0) {
            summaryControls.innerHTML += `<button id="retake-wrong-btn" class="quiz-btn retake-btn">🔁 重考錯題 (${wrongAnswers.length})</button>`;
            const retakeBtn = document.getElementById('retake-wrong-btn');
            retakeBtn.addEventListener('click', () => {
                startQuiz(wrongAnswers); // 使用錯題列表開始新測驗
            });
        }

        summaryControls.classList.remove('hidden');

        const backBtn = document.getElementById('back-to-vocab-btn');
        backBtn.addEventListener('click', endQuiz);
    }

    // ✨ 新增：結束測驗並返回單字本
    function endQuiz() {
        quizContainer.classList.add('hidden');
        // 重置測驗介面，以便下次使用
        quizContainer.innerHTML = `
            <div id="quiz-header"><h3>單字測驗中...</h3><div id="quiz-progress"></div></div>
            <div id="quiz-question-area" class="result-box"></div>
            <div class="search-wrapper"><input type="text" id="quiz-answer-input" placeholder="請拼出單字..."><button id="quiz-submit-btn" class="quiz-btn">送出答案</button></div>
            <div id="quiz-feedback"></div>
            <div id="quiz-summary-controls" class="hidden"></div>
        `;
        // ✨ 修改：重新綁定事件
        rebindQuizEventListeners();
        renderMyVocab();
    }

    // ✨ 新增：一個函式來綁定測驗的主要事件
    function rebindQuizEventListeners() {
        const quizSubmitBtn = quizContainer.querySelector('#quiz-submit-btn');
        const quizAnswerInput = quizContainer.querySelector('#quiz-answer-input');
        if (quizSubmitBtn) {
            quizSubmitBtn.addEventListener('click', checkAnswer);
        }
        if (quizAnswerInput) {
            quizAnswerInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') checkAnswer();
            });
        }
    }

    // ✨ 新增：為測驗按鈕綁定事件
    startQuizBtn.addEventListener('click', () => startQuiz(Object.keys(savedWords)));
    rebindQuizEventListeners(); // 初始綁定

    // ✨ 新增：一個函式來切換測驗中和測驗結束的元素顯示
    function toggleQuizElements(showQuiz) {
        const elementsToToggle = [
            '#quiz-question-area',
            '.search-wrapper',
            '#quiz-feedback',
            '#quiz-progress'
        ];
        elementsToToggle.forEach(selector => {
            const el = quizContainer.querySelector(selector);
            if (el) el.classList.toggle('hidden', !showQuiz);
        });
        quizContainer.querySelector('#quiz-summary-controls').classList.toggle('hidden', showQuiz);
    }
});
