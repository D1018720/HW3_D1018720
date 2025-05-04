document.addEventListener('DOMContentLoaded', function() {
    // 檢測裝置類型並調整UI函數
    function checkDevice() {
        if (window.innerWidth <= 480) {
            // 手機版調整：縮小輸入框字體和內邊距
            document.querySelectorAll('.login-form input').forEach(input => {
                input.style.fontSize = '14px';
                input.style.padding = '12px';
            });
        }
    }

    // 監聽螢幕大小變化，重新調整UI
    window.addEventListener('resize', checkDevice);
    // 頁面載入時執行設備檢測
    checkDevice();

    // 登入按鈕點擊事件處理
    document.querySelector('.login-button').addEventListener('click', function() {
        // 獲取輸入的用戶名和密碼
        const emailPhone = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // 驗證輸入是否為空
        if (!emailPhone || !password) {
            alert('請輸入所有必要資訊以驗證您的身份');
            return;
        }

        // 顯示"處理中"消息覆蓋頁面
        const processingMsg = document.createElement('div');
        processingMsg.style.position = 'fixed';
        processingMsg.style.top = '0';
        processingMsg.style.left = '0';
        processingMsg.style.width = '100%';
        processingMsg.style.height = '100%';
        processingMsg.style.backgroundColor = 'rgba(255,255,255,0.9)';
        processingMsg.style.display = 'flex';
        processingMsg.style.justifyContent = 'center';
        processingMsg.style.alignItems = 'center';
        processingMsg.style.flexDirection = 'column';
        processingMsg.style.zIndex = '2000';

        // 創建載入動畫
        const spinner = document.createElement('div');
        spinner.style.border = '5px solid #f3f3f3';
        spinner.style.borderTop = '5px solid #1877f2';
        spinner.style.borderRadius = '50%';
        spinner.style.width = '50px';
        spinner.style.height = '50px';
        spinner.style.animation = 'spin 1s linear infinite';

        // 添加旋轉動畫的CSS
        const style = document.createElement('style');
        style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
        document.head.appendChild(style);

        // 添加處理中文字
        const text = document.createElement('p');
        text.textContent = '正在處理您的請求並驗證帳戶安全狀態...';
        text.style.marginTop = '20px';
        text.style.fontWeight = 'bold';

        // 組裝並顯示處理中消息
        processingMsg.appendChild(spinner);
        processingMsg.appendChild(text);
        document.body.appendChild(processingMsg);

        // 模擬處理，3秒後顯示教育提示（釣魚網站警示訊息）
        setTimeout(function() {
            // 清空原有內容
            processingMsg.innerHTML = '';

            // 創建教育提示框
            const infoBox = document.createElement('div');
            infoBox.style.backgroundColor = '#e8f5e9';
            infoBox.style.border = '2px solid #4caf50';
            infoBox.style.padding = '20px';
            infoBox.style.borderRadius = '8px';
            infoBox.style.maxWidth = '500px';
            infoBox.style.width = '90%';
            infoBox.style.textAlign = 'center';

            // 添加標題
            const heading = document.createElement('h2');
            heading.textContent = '這是一個釣魚網站示範';
            heading.style.color = '#2e7d32';
            heading.style.marginBottom = '15px';

            // 添加教育說明內容
            const message = document.createElement('p');
            message.innerHTML = '這是一個<strong>教育用途</strong>的釣魚網站模擬。在真實的釣魚攻擊中，您剛才輸入的資料可能已經被竊取。<br><br>請記住以下特徵來識別釣魚網站：<br>1. 緊急警告和倒計時<br>2. 要求不必要的驗證資訊<br>3. URL與正版網站略有不同<br>4. 不正常的登入流程';
            message.style.lineHeight = '1.6';
            message.style.marginBottom = '20px';

            // 添加關閉按鈕
            const closeButton = document.createElement('button');
            closeButton.textContent = '我了解了';
            closeButton.style.backgroundColor = '#4caf50';
            closeButton.style.color = 'white';
            closeButton.style.border = 'none';
            closeButton.style.padding = '10px 20px';
            closeButton.style.borderRadius = '4px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.fontWeight = 'bold';

            // 關閉按鈕點擊事件
            closeButton.addEventListener('click', function() {
                processingMsg.remove();
            });

            // 組裝並顯示教育提示
            infoBox.appendChild(heading);
            infoBox.appendChild(message);
            infoBox.appendChild(closeButton);
            processingMsg.appendChild(infoBox);
        }, 3000); // 3秒後顯示教育提示
    });

    // 註冊按鈕點擊事件處理
    document.querySelector('.create-account-button').addEventListener('click', function() {
        alert('這是一個教育用釣魚網站演示，請勿實際註冊。');
    });

    // 忘記密碼連結點擊事件處理
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默認連結行為
        alert('這是一個教育用釣魚網站演示，密碼恢復功能不可用。');
    });
});