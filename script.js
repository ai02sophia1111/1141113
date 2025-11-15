// script.js (更新後的版本)

// ✨ 新增：請在此處貼上您從 NewsAPI.org 獲取的金鑰
const NEWS_API_KEY = '2a82a5962928447c9a3ce89bdfe3086f';

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

    // ✨ 新增：新聞搜尋相關的 DOM 元素
    const newsSearchControls = document.getElementById('news-search-controls');
    const newsKeywordInput = document.getElementById('news-keyword-input');
    const newsSearchBtn = document.getElementById('news-search-btn');
    const paginationControls = document.getElementById('pagination-controls');

    // ✨ 新增：文法相關的 DOM 元素
    const grammarList = document.getElementById('grammar-list');
    const grammarContentArea = document.getElementById('grammar-content-area');

    // ✨ 新增：每日單字相關的 DOM 元素
    const dailyWordsContainer = document.getElementById('daily-words-container');
    const dailyWordThemeSelect = document.getElementById('daily-word-theme');

    // ✨ 新增：學習設定相關的 DOM 元素
    const userLevelSelect = document.getElementById('user-level-select');
    const settingsFeedback = document.getElementById('settings-feedback');
    const autoSaveToggle = document.getElementById('auto-save-toggle');

    // ✨ 新增：測驗相關的 DOM 元素
    const quizTypeSelect = document.getElementById('quiz-type'); // 新增：測驗題型選擇
    const quizWordCountInput = document.getElementById('quiz-word-count'); // 新增：測驗數量輸入框
    const startQuizBtn = document.getElementById('start-quiz-btn');
    let quizContainer = document.getElementById('quiz-container'); // Use let for reassignment

    // ✨ 新增：從 localStorage 載入已儲存的單字
    let savedWords = JSON.parse(localStorage.getItem('myVocabulary')) || {};
    // ✨ 新增：從 localStorage 載入使用者等級設定
    let userLevel = localStorage.getItem('userLearningLevel') || 'all';
    // ✨ 新增：從 localStorage 載入自動儲存設定 (修正)
    let autoSaveEnabled = JSON.parse(localStorage.getItem('autoSaveEnabled')) || false;
    // ✨ 新增：從 localStorage 載入上次搜尋的新聞關鍵字
    let lastNewsKeyword = localStorage.getItem('lastNewsKeyword') || 'animal OR wildlife';
    // ✨ 新增：從 localStorage 載入已讀新聞
    let readNewsArticles = new Set(JSON.parse(localStorage.getItem('readNewsArticles')) || []);
    // ✨ 新增：新聞分頁狀態
    let newsCurrentPage = 1;
    // ✨ 新增：測驗狀態變數
    let currentQuizType = 'def-to-eng';
    let quizWords = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let wrongAnswers = [];

    // --- 導覽列功能 ---
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(sec => sec.classList.remove('active'));

            // ✨ 新增：如果點擊的是「英文短文」，就根據使用者設定的等級載入文章
            if (button.id === 'nav-articles') {
                loadArticles(userLevel);
            }

            // ✨ 新增：如果點擊的是「我的單字本」，就渲染列表
            if (button.id === 'nav-my-vocab') {
                endQuiz(); // 如果測驗正在進行，結束它
                renderMyVocab();
            }
            // ✨ 新增：如果點擊的是「每日單字」，就產生列表
            if (button.id === 'nav-daily-words') {
                initializeDailyWords();
            }
            // ✨ 新增：如果點擊的是「英文文法」，就載入列表
            if (button.id === 'nav-grammar') {
                loadGrammarRules();
            }

            button.classList.add('active');
            const targetSectionId = button.id.replace('nav-', '') + '-section';
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    // --- 1. 英文短文專區 ---
    function loadArticles(levelFilter) {
        articleList.innerHTML = '';
        articleContentArea.innerHTML = '<p>請從左側選擇一篇文章來閱讀。</p>'; // 重置內容區

        const filteredArticles = articles.filter(article => {
            if (levelFilter === 'all') {
                return true;
            }
            return article.level === levelFilter;
        });

        // ✨ 新增：根據載入的等級，更新篩選按鈕的 active 狀態
        const articleFilterButtons = document.querySelectorAll('#article-filter-controls .filter-btn');
        articleFilterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === levelFilter);
        });

        if (filteredArticles.length === 0) {
            articleList.innerHTML = '<p>這個等級沒有文章喔！</p>';
            return;
        }

        filteredArticles.forEach(article => {
            const button = document.createElement('button');
            button.className = 'article-title-btn';
            button.textContent = article.title;
            button.dataset.id = article.id;
            // ✨ 新增：根據等級加上小標籤
            if (article.level) {
                button.innerHTML += ` <span class="level-tag level-${article.level}">${article.level}</span>`;
            }
            button.addEventListener('click', () => {
                // ✨ 新增：進入閱讀模式
                articleContentArea.parentElement.classList.add('reading-view');

                // ✨ 新增：建立並插入「返回列表」按鈕
                const backBtn = document.createElement('button');
                backBtn.className = 'back-to-list-btn';
                backBtn.textContent = '← 返回列表';
                backBtn.onclick = () => {
                    articleContentArea.parentElement.classList.remove('reading-view');
                    articleContentArea.innerHTML = '<p>請從左側選擇一篇文章來閱讀。</p>';
                };

                const selectedArticle = articles.find(a => a.id == button.dataset.id);
                // ✨ 修改：在文章內容中加入發音按鈕
                // ✨ 新增：將文章內容的每個單字都包在 <span> 中
                const contentWithSpans = selectedArticle.content
                    .split(/(\s+)/) // 按空白字元分割，並保留空白
                    .map(part => {
                        if (part.trim() === '') return part; // 如果是空白，直接返回
                        // 清理單字，移除標點符號
                        const cleanWord = part.replace(/[.,!?;:"']/g, '');
                        return `<span class="word-span" data-word="${cleanWord}">${part}</span>`;
                    }).join('');

                articleContentArea.innerHTML = `
                    <h3>${selectedArticle.title}</h3>
                    <p>${contentWithSpans}</p>
                    <button class="speak-article-btn" data-text="${selectedArticle.content}">🔊 朗讀整篇文章</button>
                    ${selectedArticle.quiz ? '<div class="article-quiz-wrapper"></div>' : ''}
                `;
                articleContentArea.prepend(backBtn); // 將返回按鈕加到最前面

                // Attach event listener to the newly created speak button
                const speakArticleBtn = articleContentArea.querySelector('.speak-article-btn');
                if (speakArticleBtn) {
                    speakArticleBtn.addEventListener('click', (e) => {
                        const textToSpeak = e.currentTarget.dataset.text; // Use currentTarget to get the button's dataset
                        speakText(textToSpeak);
                    });
                }

                // ✨ 新增：如果文章有測驗，就顯示「開始測驗」按鈕
                if (selectedArticle.quiz) {
                    const quizWrapper = articleContentArea.querySelector('.article-quiz-wrapper');
                    const startQuizBtn = document.createElement('button');
                    startQuizBtn.textContent = '📖 讀後小測驗';
                    startQuizBtn.className = 'show-quiz-btn'; // 重用文法測驗的按鈕樣式
                    startQuizBtn.addEventListener('click', () => {
                        renderGrammarQuiz(selectedArticle, quizWrapper); // 重用文法測驗的渲染函式
                        startQuizBtn.style.display = 'none'; // 點擊後隱藏按鈕
                    });
                    quizWrapper.appendChild(startQuizBtn);
                }
            });
            articleList.appendChild(button);
        });
    }

    // ✨ 新增：為文章內容區加上事件委派，處理單字點擊
    articleContentArea.addEventListener('click', (e) => {
        if (e.target.classList.contains('word-span')) {
            const word = e.target.dataset.word;
            if (word) {
                showDictionaryModal(word);
            }
        }
    });

    // ✨ 新增：為文章篩選器按鈕加上事件
    const articleFilterButtons = document.querySelectorAll('#article-filter-controls .filter-btn');
    articleFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            articleFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const level = button.dataset.level;

            // ✨ 新增：根據選擇的分類，顯示或隱藏新聞搜尋框
            newsSearchControls.classList.toggle('hidden', level !== 'news');
            paginationControls.innerHTML = ''; // 切換時清空分頁按鈕

            // ✨ 修改：根據按鈕類型決定載入本地文章或 API 新聞
            if (level === 'news') {
                newsKeywordInput.value = lastNewsKeyword; // 載入上次搜尋的關鍵字
                loadNewsArticles(lastNewsKeyword, 1); // 總是從第一頁開始
            } else {
                loadArticles(level);
            }
        });
    });

    // ✨ 新增：為新聞搜尋按鈕加上事件
    newsSearchBtn.addEventListener('click', () => {
        const query = newsKeywordInput.value.trim();
        if (query) {
            lastNewsKeyword = query;
            localStorage.setItem('lastNewsKeyword', query); // 儲存這次的搜尋
            loadNewsArticles(query, 1); // 搜尋時總是從第一頁開始
        }
    });

    // ✨ 新增：從 News API 載入新聞文章的函式
    async function loadNewsArticles(query, page = 1) {
        articleList.innerHTML = '<p>正在載入新聞...</p>';
        articleContentArea.innerHTML = '<p>請從左側選擇一篇文章來閱讀。</p>';
        paginationControls.innerHTML = ''; // 載入時清空分頁
        newsCurrentPage = page;

        if (NEWS_API_KEY === 'YOUR_NEWS_API_KEY') {
            articleList.innerHTML = '<p style="color: red;">請先在 script.js 中設定您的 News API 金鑰！</p>';
            return;
        }

        const url = `https://newsapi.org/v2/everything?q=(${query})&language=en&sortBy=publishedAt&pageSize=20&page=${page}&apiKey=${NEWS_API_KEY}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // NewsAPI 免費版最多只能存取前 100 筆結果
            const totalAvailableResults = Math.min(data.totalResults, 100);

            if (data.articles.length === 0 || totalAvailableResults === 0) {
                articleList.innerHTML = '<p>抱歉，找不到相關新聞。</p>';
                return;
            }

            articleList.innerHTML = ''; // 清空載入訊息
            data.articles.forEach((article, index) => {
                if (!article.title || !article.content) return; // 過濾掉沒有標題或內容的文章

                const button = document.createElement('button');
                button.className = 'article-title-btn';
                button.innerHTML = `${article.title} <span class="level-tag level-advanced">新聞</span>`;

                // ✨ 新增：檢查文章是否已讀，並加上樣式
                if (readNewsArticles.has(article.url)) {
                    button.classList.add('read');
                }

                button.addEventListener('click', () => {
                    // ✨ 新增：點擊後標示為已讀
                    readNewsArticles.add(article.url);
                    localStorage.setItem('readNewsArticles', JSON.stringify(Array.from(readNewsArticles)));
                    button.classList.add('read');

                    // ✨ 新增：進入閱讀模式
                    articleContentArea.parentElement.classList.add('reading-view');

                    // ✨ 新增：建立並插入「返回列表」按鈕
                    const backBtn = document.createElement('button');
                    backBtn.className = 'back-to-list-btn';
                    backBtn.textContent = '← 返回列表';
                    backBtn.onclick = () => {
                        articleContentArea.parentElement.classList.remove('reading-view');
                        articleContentArea.innerHTML = '<p>請從左側選擇一篇文章來閱讀。</p>';
                    };

                    const contentWithSpans = article.content
                        .split(/(\s+)/)
                        .map(part => {
                            if (part.trim() === '') return part;
                            const cleanWord = part.replace(/[.,!?;:"']/g, '');
                            return `<span class="word-span" data-word="${cleanWord}">${part}</span>`;
                        }).join('');

                    articleContentArea.innerHTML = `
                        <h3>${article.title}</h3>
                        <p class="article-meta">來源: ${article.source.name} | 發布於: ${new Date(article.publishedAt).toLocaleDateString()}</p>
                        <p>${contentWithSpans}</p>
                        <a href="${article.url}" target="_blank" class="read-more-link">閱讀原文</a>
                    `;
                    articleContentArea.prepend(backBtn); // 將返回按鈕加到最前面
                });
                articleList.appendChild(button);
            });

            // ✨ 新增：渲染分頁控制項
            renderNewsPagination(totalAvailableResults);

        } catch (error) {
            console.error("Error fetching news:", error);
            articleList.innerHTML = '<p style="color: red;">載入新聞時發生錯誤，請檢查主控台訊息。</p>';
        }
    }

    // ✨ 新增：渲染新聞分頁控制項的函式
    function renderNewsPagination(totalResults) {
        const pageSize = 20;
        const totalPages = Math.ceil(totalResults / pageSize);

        if (totalPages <= 1) {
            paginationControls.innerHTML = '';
            return;
        }

        const prevBtn = document.createElement('button');
        prevBtn.textContent = '上一頁';
        prevBtn.className = 'pagination-btn';
        prevBtn.disabled = newsCurrentPage === 1;
        prevBtn.addEventListener('click', () => loadNewsArticles(lastNewsKeyword, newsCurrentPage - 1));

        const nextBtn = document.createElement('button');
        nextBtn.textContent = '下一頁';
        nextBtn.className = 'pagination-btn';
        nextBtn.disabled = newsCurrentPage >= totalPages;
        nextBtn.addEventListener('click', () => loadNewsArticles(lastNewsKeyword, newsCurrentPage + 1));

        const pageInfo = document.createElement('span');
        pageInfo.textContent = `第 ${newsCurrentPage} / ${totalPages} 頁`;

        paginationControls.append(prevBtn, pageInfo, nextBtn);
    }

    // --- 新增：學習設定專區 ---
    function loadUserSettings() {
        userLevelSelect.value = userLevel;
        autoSaveToggle.checked = autoSaveEnabled;
    }

    function saveUserSettings() {
        // 儲存等級設定
        userLevel = userLevelSelect.value;
        localStorage.setItem('userLearningLevel', userLevel);

        // 儲存自動儲存設定 (修正)
        autoSaveEnabled = autoSaveToggle.checked;
        localStorage.setItem('autoSaveEnabled', JSON.stringify(autoSaveEnabled));

        // 顯示儲存成功訊息
        settingsFeedback.classList.remove('hidden');
        setTimeout(() => {
            settingsFeedback.classList.add('hidden');
        }, 2000);
    }

    // ✨ 修改：儲存設定後，也要觸發每日單字的更新
    userLevelSelect.addEventListener('change', () => {
        saveUserSettings();
        generateDailyWords();
    });

    // ✨ 新增：為自動儲存開關加上事件監聽 (修正)
    autoSaveToggle.addEventListener('change', saveUserSettings);



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

    // ✨ 新增：顯示彈出式字典視窗的函式
    async function showDictionaryModal(word) {
        // 創建 modal 元素
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <button class="modal-close-btn">&times;</button>
                <div id="modal-vocab-result" class="result-box">
                    <p>正在查詢 "${word}"...</p>
                </div>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        // 顯示 modal
        setTimeout(() => modalOverlay.classList.add('visible'), 10);

        // 關閉 modal 的事件
        const closeModal = () => {
            modalOverlay.classList.remove('visible');
            setTimeout(() => modalOverlay.remove(), 300);
        };
        modalOverlay.querySelector('.modal-close-btn').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // 填充查詢結果
        vocabInput.value = word; // 將單字填入主查詢框，以便 searchVocabulary 函式使用
        await searchVocabulary(); // 呼叫現有的查詢函式
        const modalResultContainer = document.getElementById('modal-vocab-result');
        modalResultContainer.innerHTML = vocabResult.innerHTML; // 將結果複製到 modal 中

        // ✨ 修正：為彈出視窗的內容也加上事件委派，使其按鈕可以運作
        modalResultContainer.addEventListener('click', handleResultClick);

    }

    // ✨ 修改：將 searchVocabulary 改為 async 函式以使用 await
    async function searchVocabulary() {
        const word = vocabInput.value.trim().toLowerCase();
        if (word === '') {
            vocabResult.innerHTML = '<p>請輸入單字以查詢解釋。</p>';
            return;
        }

        // 顯示讀取中訊息
        vocabResult.innerHTML = `<p>正在查詢 "${word}"...</p>`;

        try {
            // ✨ 修改：使用 Promise.all 同時發送兩個 API 請求
            const [dictResponse, transResponse] = await Promise.all([
                fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`),
                fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|zh-TW`) // 新增：請求中文翻譯
            ]);

            // 如果 API 找不到該單字 (回傳 404 Not Found)
            if (!dictResponse.ok) {
                throw new Error('Word not found');
            }

            // ✨ 修改：解析兩個 API 的回應
            const dictData = await dictResponse.json();
            const transData = await transResponse.json();

            // --- 從 API 回應中提取所需資訊 ---
            const entry = dictData[0]; // API 可能回傳多個結果，我們先用第一個
            const chineseTranslation = transData.responseData.translatedText; // 提取中文翻譯
            const phonetic = entry.phonetic || (entry.phonetics.find(p => p.text)?.text) || ''; // 找一個可用的音標
            const audioUrl = entry.phonetics.find(p => p.audio)?.audio || ''; // 找一個可用的發音檔

            // ✨ 新增：建立一個函式來產生詳細定義的 HTML
            const createMeaningsHtml = (meanings) => {
                return meanings.map(meaning => `
                    <div class="meaning-block">
                        <h4 class="part-of-speech" style="text-align: left;">${meaning.partOfSpeech}</h4>
                        <ol class="definitions-list" style="text-align: left;">
                            ${meaning.definitions.map(def => `
                                <li>
                                    <p class="definition">${def.definition}</p>
                                    ${def.example ? `<p class="example">e.g. <em>"${def.example}"</em></p>` : ''}
                                </li>
                            `).join('')}
                        </ol>
                        ${meaning.synonyms && meaning.synonyms.length > 0 ? `
                            <div class="synonyms" style="text-align: left;">
                                <h5>Synonyms</h5>
                                <p>${meaning.synonyms.join(', ')}</p>
                            </div>` : ''}
                        ${meaning.antonyms && meaning.antonyms.length > 0 ? `
                            <div class="antonyms" style="text-align: left;">
                                <h5>Antonyms</h5>
                                <p>${meaning.antonyms.join(', ')}</p>
                            </div>` : ''}
                    </div>
                `).join('');
            };

            const meaningsHtml = createMeaningsHtml(entry.meanings);

            // ✨ 修改：組合要儲存的定義字串，只儲存第一個定義以保持簡潔
            const firstMeaning = entry.meanings[0];
            const firstDefinition = firstMeaning.definitions[0].definition;
            const fullDefinition = `<strong>${chineseTranslation}</strong> (${firstMeaning.partOfSpeech}) ${firstDefinition}`;

            const isSaved = savedWords.hasOwnProperty(word);

            // ✨ 修改：更新 UI，顯示包含多個定義和例句的完整結果
            vocabResult.innerHTML = `
                <div class="result-header">
                    <strong>${entry.word}</strong> <span class="phonetic">${phonetic}</span>
                    <p class="translation"><strong>${chineseTranslation}</strong></p>
                </div>
                <div class="meanings-container">${meaningsHtml}</div>
                <div class="result-actions">
                    ${audioUrl ? `<button class="speaker-icon" data-audio="${audioUrl}">🔊</button>` : `<span class="speaker-icon" data-word="${word}">🔊</span>`}
                    <button class="save-vocab-btn" data-word="${word}" data-definition='${fullDefinition}' ${isSaved ? 'disabled' : ''}>
                        ${isSaved ? '已儲存' : '儲存'}
                    </button>
                </div>
            `;

            // ✨ 修改：使用事件委派來處理結果區塊內的點擊
            vocabResult.addEventListener('click', handleResultClick);

            // ✨ 新增：如果啟用自動儲存，則直接儲存單字 (修正)
            if (autoSaveEnabled && !isSaved) {
                saveWord(word, fullDefinition);
                // 更新按鈕狀態
                vocabResult.querySelector('.save-vocab-btn').textContent = '已儲存';
                vocabResult.querySelector('.save-vocab-btn').disabled = true;
            }
        } catch (error) {
            // 如果發生錯誤 (例如網路問題、找不到單字、API 錯誤)，顯示錯誤訊息
            vocabResult.innerHTML = `<p>抱歉，找不到關於 "${word}" 的解釋。請檢查拼字或嘗試其他單字。</p>`;
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
        
        // 處理 API 提供的發音檔
        if (target.classList.contains('speaker-icon') && target.dataset.audio) {
            new Audio(target.dataset.audio).play();
            return; // 結束函式避免觸發下面的 speakText
        }
        // 處理備用的 TTS 發音
        if (target.classList.contains('speaker-icon')) {
            speakText(word);
        }

        if (target.classList.contains('save-vocab-btn')) {
            const definition = target.dataset.definition; // 從按鈕的 data-definition 屬性獲取定義
            saveWord(word, definition); // 將單字和定義一起傳入
            target.textContent = '已儲存';
            target.disabled = true;
        }
    }

    // ✨ 修改：儲存單字和其定義到 savedWords 和 localStorage
    function saveWord(word, definition) {
        if (word && definition && !savedWords[word]) {
            savedWords[word] = definition;
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

    // --- 新增：英文文法專區 ---
    function loadGrammarRules() {
        grammarList.innerHTML = '';
        grammarRules.forEach(rule => {
            const button = document.createElement('button');
            button.className = 'article-title-btn'; // 重用文章列表的按鈕樣式
            button.textContent = rule.title;
            button.dataset.id = rule.id;
            button.addEventListener('click', () => {
                const selectedRule = grammarRules.find(r => r.id == button.dataset.id);
                
                // 將範例陣列轉換成 <li> 列表
                const examplesHtml = selectedRule.examples.map(ex => `<li>${ex}</li>`).join('');

                grammarContentArea.innerHTML = `
                    <h3>${selectedRule.title}</h3>
                    <p>${selectedRule.explanation.replace(/\n/g, '<br>')}</p>
                    <h4>範例：</h4>
                    <ul class="grammar-examples">${examplesHtml}</ul>
                    ${selectedRule.quiz ? `<button class="show-quiz-btn" data-rule-id="${selectedRule.id}">開始小練習</button>` : ''}
                    <div class="grammar-quiz-container"></div>
                `;

                // 為新產生的「開始練習」按鈕加上事件監聽
                const showQuizBtn = grammarContentArea.querySelector('.show-quiz-btn');
                if (showQuizBtn) {
                    showQuizBtn.addEventListener('click', (e) => {
                        const ruleId = e.target.dataset.ruleId;
                        const rule = grammarRules.find(r => r.id == ruleId);
                        const quizContainer = grammarContentArea.querySelector('.grammar-quiz-container');
                        renderGrammarQuiz(rule, quizContainer);
                        e.target.style.display = 'none'; // 點擊後隱藏按鈕
                    });
                }
            });
            grammarList.appendChild(button);
        });
    }

    // ✨ 新增：渲染文法練習題的函式
    function renderGrammarQuiz(rule, container) {
        const quizData = rule.quiz[0]; // 暫時只用第一題
        if (!quizData) return;

        const optionsHtml = quizData.options.map(opt => 
            `<button class="grammar-option-btn" data-answer="${opt}">${opt}</button>`
        ).join('');

        container.innerHTML = `
            <div class="grammar-quiz-question">${quizData.question.replace('___', '_____')}</div>
            <div class="grammar-quiz-options">${optionsHtml}</div>
            <div class="quiz-feedback"></div>
        `;

        const optionButtons = container.querySelectorAll('.grammar-option-btn');
        const feedbackEl = container.querySelector('.quiz-feedback');

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const userAnswer = button.dataset.answer;
                optionButtons.forEach(btn => {
                    btn.disabled = true; // 禁用所有選項
                    if (btn.dataset.answer === quizData.answer) {
                        btn.classList.add('correct-option'); // 標示正確答案
                    }
                });

                if (userAnswer === quizData.answer) {
                    feedbackEl.textContent = '🎉 答對了！';
                    feedbackEl.className = 'quiz-feedback feedback-correct';
                } else {
                    button.classList.add('wrong-option'); // 標示使用者選錯的答案
                    // ✨ 修改：在回饋中加入「再試一次」按鈕
                    feedbackEl.innerHTML = `😥 答錯了！ <button class="retry-quiz-btn">再試一次</button>`;
                    feedbackEl.className = 'quiz-feedback feedback-wrong';

                    // 為新產生的重試按鈕加上事件
                    const retryBtn = feedbackEl.querySelector('.retry-quiz-btn');
                    if (retryBtn) {
                        retryBtn.addEventListener('click', () => renderGrammarQuiz(rule, container));
                    }
                }
            });
        });
    }


    // --- 新增：每日單字功能 ---
    function initializeDailyWords() {
        // 填充主題下拉選單
        dailyWordThemeSelect.innerHTML = '<option value="all">所有主題 (隨機)</option>';
        Object.keys(themedVocabulary).forEach(theme => {
            const option = document.createElement('option');
            option.value = theme;
            option.textContent = theme;
            dailyWordThemeSelect.appendChild(option);
        });

        // 首次載入時產生單字
        generateDailyWords();
    }

    function generateDailyWords() {
        dailyWordsContainer.innerHTML = ''; // 清空容器

        // 1. 根據主題選擇單字來源
        const selectedTheme = dailyWordThemeSelect.value;
        let vocabSource = (selectedTheme === 'all') 
            ? Object.values(themedVocabulary).reduce((acc, theme) => ({ ...acc, ...theme }), {})
            : themedVocabulary[selectedTheme];

        // 2. ✨ 新增：根據使用者等級篩選單字
        let wordList = Object.keys(vocabSource);
        if (userLevel !== 'all') {
            wordList = wordList.filter(word => vocabSource[word].level === userLevel);
        }

        const wordCount = 6;

        if (wordList.length < wordCount) {
            dailyWordsContainer.innerHTML = `<p style="text-align: center;">符合您設定的等級和主題的單字不足 ${wordCount} 個喔！</p>`;
            return;
        }

        // 2. 使用日期作為種子，產生一個"偽隨機"但每天固定的起始索引
        const date = new Date();
        // ✨ 優化：使用 年+月+日 的組合來產生更隨機的種子，避免每年重複
        const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();

        const range = wordList.length - wordCount + 1;
        const startIndex = seed % range;

        // 3. 從起始索引選取 6 個單字
        const dailyWords = wordList.slice(startIndex, startIndex + wordCount);

        // 4. 產生單字卡片並渲染到畫面上
        dailyWords.forEach(word => {
            const definition = vocabSource[word].definition; // ✨ 修改：從物件中取得定義
            const card = document.createElement('div');
            card.className = 'daily-word-card';
            card.innerHTML = `
                <div class="daily-word-header">
                    <h3>${word}</h3>
                    <span class="speaker-icon" data-word="${word}">🔊</span>
                </div>
                <p class="daily-word-definition">${definition}</p>
            `;
            dailyWordsContainer.appendChild(card);
        });
    }

    // ✨ 新增：當主題改變時，重新產生每日單字
    dailyWordThemeSelect.addEventListener('change', generateDailyWords);
    // ✨ 新增：當使用者等級改變時，也重新產生每日單字
    userLevelSelect.addEventListener('change', generateDailyWords);


    // ✨ 新增：為每日單字容器加上事件委派，處理發音
    dailyWordsContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('speaker-icon')) {
            const word = target.dataset.word;
            if (word) {
                speakText(word);
            }
        }
    });


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
            myVocabControls.classList.add('hidden'); // ✨ 修改：沒有單字時也隱藏控制項
            return;
        }

        // ✨ 修改：更新測驗數量輸入框的最大值，並禁用測驗按鈕（如果需要）
        const canStartEngToChi = words.length >= 4; // 看英文選中文至少需要4個單字
        quizTypeSelect.querySelector('option[value="eng-to-chi"]').disabled = !canStartEngToChi;
        startQuizBtn.disabled = words.length < 1; // 如果單字少於1個，禁用測驗按鈕

        quizWordCountInput.max = words.length;
        if (parseInt(quizWordCountInput.value) > words.length) {
            quizWordCountInput.value = words.length;
        }

        words.forEach(word => {
            const item = document.createElement('div');
            item.className = 'vocab-item';
            item.innerHTML = `
                <div class="vocab-item-content">
                    <strong>${word}:</strong> ${savedWords[word]} <!-- savedWords[word] 現在包含 HTML 標籤 -->
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
    loadArticles(userLevel); // ✨ 修改：頁面載入時，根據使用者等級載入文章
    loadUserSettings();
    // loadGrammarRules(); // 可選擇是否一開始就載入

    // --- 5. 測驗功能 ---

    // ✨ 新增：開始測驗
    function startQuiz(wordsToTest, quizType) {
        currentQuizType = quizType; // 儲存當前的測驗類型

        if (currentQuizType === 'eng-to-chi' && wordsToTest.length < 4) {
            alert('「看英文選中文」題型至少需要 4 個單字才能產生選項喔！');
            return;
        }
        if (wordsToTest.length < 1) {
            alert('你的單字本是空的，無法開始測驗！');
            return;
        }

        // 隨機排序單字
        quizWords = [...wordsToTest].sort(() => 0.5 - Math.random());
        currentQuestionIndex = 0;
        score = 0;
        wrongAnswers = []; // 為新的測驗重置錯題列表

        // 隱藏單字本列表，顯示測驗介面
        myVocabList.classList.add('hidden');
        myVocabControls.classList.add('hidden');
        quizContainer.classList.remove('hidden');

        // 顯示測驗的主要部分，隱藏總結按鈕
        toggleQuizElements(true);

        showNextQuestion();
    }

    function showNextQuestion() { // ✨ 修改：顯示下一個問題的總管函式
        if (currentQuestionIndex >= quizWords.length) {
            showQuizSummary();
            return;
        }

        // ✨ 修改：在每次顯示問題時重新獲取元素
        const quizQuestionArea = quizContainer.querySelector('#quiz-question-area');
        const quizProgress = quizContainer.querySelector('#quiz-progress');
        quizProgress.textContent = `第 ${currentQuestionIndex + 1} 題 / 共 ${quizWords.length} 題`;

        if (currentQuizType === 'def-to-eng') {
            showDefToEngQuestion(quizQuestionArea);
        } else if (currentQuizType === 'eng-to-chi') {
            showEngToChiQuestion(quizQuestionArea);
        }
    }

    // ✨ 新增：從定義字串中提取中文翻譯
    function getChineseTranslation(definition) {
        const match = definition.match(/<strong>(.*?)<\/strong>/);
        return match ? match[1] : '（無中文翻譯）';
    }

    // ✨ 新增：顯示「看英文選中文」問題
    function showEngToChiQuestion(quizQuestionArea) {
        const word = quizWords[currentQuestionIndex];
        const correctAnswer = getChineseTranslation(savedWords[word]);

        // 產生三個錯誤選項
        const allWords = Object.keys(savedWords);
        const wrongOptions = allWords
            .filter(w => w !== word) // 排除正確答案
            .sort(() => 0.5 - Math.random()) // 隨機排序
            .slice(0, 3) // 取三個
            .map(w => getChineseTranslation(savedWords[w])); // 取得它們的中文

        const options = [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());

        // 產生問題和選項按鈕的 HTML
        quizQuestionArea.innerHTML = `
            <p class="quiz-eng-word">${word}</p>
            <div class="quiz-options-grid">
                ${options.map(opt => `<button class="quiz-option-btn" data-answer="${opt}">${opt}</button>`).join('')}
            </div>
        `;

        // 為選項按鈕綁定事件
        const optionButtons = quizQuestionArea.querySelectorAll('.quiz-option-btn');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const userAnswer = button.dataset.answer;
                checkAnswer(userAnswer);
            });
        });
    }

    // ✨ 新增：顯示「看解釋拼單字」問題
    function showDefToEngQuestion(quizQuestionArea) {
        const quizAnswerInput = quizContainer.querySelector('#quiz-answer-input');
        const quizSubmitBtn = quizContainer.querySelector('#quiz-submit-btn');
        const quizFeedback = quizContainer.querySelector('#quiz-feedback');

        // 清空上一題的狀態
        quizAnswerInput.value = '';
        quizFeedback.innerHTML = '';
        quizFeedback.className = '';
        quizAnswerInput.disabled = false;
        quizSubmitBtn.disabled = false;
        quizAnswerInput.focus();

        // 顯示問題
        const word = quizWords[currentQuestionIndex];
        const definition = savedWords[word];
        quizQuestionArea.innerHTML = definition; // 直接使用 innerHTML 來解析 strong 標籤
    }

    // ✨ 修改：檢查答案函式，使其能處理兩種題型
    function checkAnswer(userAnswer) {
        const correctAnswer = (currentQuizType === 'def-to-eng')
            ? quizWords[currentQuestionIndex].toLowerCase()
            : getChineseTranslation(savedWords[quizWords[currentQuestionIndex]]);

        if (currentQuizType === 'def-to-eng') {
            const quizAnswerInput = quizContainer.querySelector('#quiz-answer-input');
            const quizSubmitBtn = quizContainer.querySelector('#quiz-submit-btn');
            userAnswer = quizAnswerInput.value.trim().toLowerCase();
            quizAnswerInput.disabled = true;
            quizSubmitBtn.disabled = true;
        } else {
            // 禁用所有選項按鈕
            const optionButtons = quizContainer.querySelectorAll('.quiz-option-btn');
            optionButtons.forEach(btn => {
                btn.disabled = true;
                // 標示出正確和錯誤的選項
                if (btn.dataset.answer === correctAnswer) {
                    btn.classList.add('correct-option');
                } else if (btn.dataset.answer === userAnswer) {
                    btn.classList.add('wrong-option');
                }
            });
        }

        const quizFeedback = quizContainer.querySelector('#quiz-feedback');

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            quizFeedback.textContent = '🎉 答對了！';
            quizFeedback.className = 'feedback-correct';
        } else {
            const wrongAnswerText = (currentQuizType === 'def-to-eng') ? `，正確答案是：${correctAnswer}` : '';
            quizFeedback.textContent = `😥 答錯了${wrongAnswerText}`;
            quizFeedback.className = 'feedback-wrong';
            wrongAnswers.push(quizWords[currentQuestionIndex]); // ✨ 修改：將錯的「英文單字」加入列表，而非答案
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
                startQuiz(wrongAnswers, currentQuizType); // 使用錯題列表開始新測驗
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
            <div id="quiz-header"><h3 id="quiz-title">單字測驗中...</h3><div id="quiz-progress"></div></div>
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
            quizAnswerInput.addEventListener('keyup', (e) => { // ✨ 修改：只有在拼字模式下才監聽 Enter
                if (e.key === 'Enter' && currentQuizType === 'def-to-eng') {
                    checkAnswer();
                }
            });
        }
    }

    // ✨ 新增：為測驗按鈕綁定事件
    startQuizBtn.addEventListener('click', () => {
        const allWords = Object.keys(savedWords);
        const quizType = quizTypeSelect.value;
        const count = parseInt(quizWordCountInput.value, 10);

        if (isNaN(count) || count <= 0) {
            alert('請輸入一個有效的測驗數量！');
            return;
        }

        if (count > allWords.length) {
            alert(`測驗數量 (${count}) 超過單字本總數 (${allWords.length})。\n將以全部單字 (${allWords.length}) 進行測驗。`);
            startQuiz(allWords, quizType);
            return;
        }

        // 從所有單字中隨機選取指定數量的單字來測驗
        const wordsToTest = allWords.sort(() => 0.5 - Math.random()).slice(0, count);
        startQuiz(wordsToTest, quizType);
    });
    rebindQuizEventListeners(); // 初始綁定

    // ✨ 新增：一個函式來切換測驗中和測驗結束的元素顯示
    function toggleQuizElements(showQuiz) {
        const elementsToToggle = [
            '#quiz-question-area',
            '#quiz-feedback',
            '#quiz-progress'
        ];
        elementsToToggle.forEach(selector => {
            const el = quizContainer.querySelector(selector);
            if (el) el.classList.remove('hidden');
        });

        // 根據題型顯示/隱藏拼字輸入框
        const searchWrapper = quizContainer.querySelector('.search-wrapper');
        searchWrapper.classList.toggle('hidden', currentQuizType !== 'def-to-eng');

        quizContainer.querySelector('#quiz-summary-controls').classList.toggle('hidden', showQuiz);
    }
    loadGrammarRules();
    initializeDailyWords(); // ✨ 修改：頁面載入時初始化每日單字功能
});
