OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "模型錯誤不詳",
    "Text generation" : "產生文字",
    "Image generation" : "圖像產生",
    "Audio transcription" : "音訊轉錄",
    "Unknown" : "不詳",
    "tokens" : "權杖",
    "images" : "圖像",
    "seconds" : "秒",
    "Unknown error while retrieving quota usage." : "擷取額度使用量時發生未知錯誤。",
    "Text generation quota exceeded" : "已超過影像產生額度",
    "Unknown text generation error" : "不詳的文字産生錯誤",
    "Could not read audio file." : "無法讀取音訊檔。",
    "Audio transcription quota exceeded" : "已超過音訊轉錄額度",
    "Unknown audio trancription error" : "不詳的音訊轉錄錯誤",
    "Image generation quota exceeded" : "已超過影像產生額度",
    "Unknown image generation error" : "不詳的影像產生錯誤",
    "Bad HTTP method" : "不正確的 HTTP 方法",
    "Bad credentials" : "錯誤的憑證",
    "API request error: " : "API 請求錯誤：",
    "Unknown API request error." : "不詳的 API 請求錯誤。",
    "Connected accounts" : "已連線的賬號",
    "OpenAI's Whisper Speech-To-Text" : "OpenAI 的 Whisper 語音轉文本",
    "LocalAI's Whisper Speech-To-Text" : "LocalAI 的 Whisper 語音轉文本",
    "OpenAI integration" : "OpenAI 整合",
    "LocalAI integration" : "LocalAI 整合",
    "Reformulate" : "重新表述",
    "Formulate text in a different way." : "以不同方法表述文字。",
    "OpenAI's DALL-E 2 Text-To-Image" : "OpenAI 的 DALL-E 2 文字轉影像",
    "LocalAI's stable diffusion Text-To-Image" : "LocalAI 的 Stable Diffusion 文字轉影像",
    "OpenAI and LocalAI integration" : "OpenAI 與 LocalAI 整合",
    "Integration of OpenAI and LocalAI services" : "OpenAI 與 LocalAI 服務的整合",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline and Reformulate (using any available language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance.\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via OpenAI API: 🔴\n\nNegative:\n* the software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be run on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via OpenAI API: 🔴\n\nNegative:\n* the software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be run on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via OpenAI API: 🔴\n\nNegative:\n* the software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be ran on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via OpenAI API: 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ 智慧型挑選器已從此應用程式中移除，因為它們已包含在[小幫手應用程式](https://apps.nextcloud.com/apps/assistant)中。\n\n此應用程式實作了\n\n* 文字產生提供者：免費提示詞、摘要、標題與重新表述（使用任何可用的語言模型）\n* 翻譯提供者（使用任何可用的語言模型）\n* 語音轉文字提供者（使用 Whisper）\n\n您也可以連線到自行架設的 [LocalAI](https://localai.io) 站台，而非連線到 OpenAI API。\n\n## 道德人工智慧評分\n### 透過 OpenAI API 使用 ChatGPT 產生文字的評分：🔴\n\n缺點：\n* 此模型的訓練與推理軟體都是專有的，限制了在本機執行或自行訓練的可能性\n* 訓練好的模型並未免費提供，因此模型無法在本機執行\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n\n### 透過 OpenAI API 使用 ChatGPT 翻譯的評分：🔴\n\n缺點：\n* 此模型的訓練與推理軟體都是專有的，限制了在本機執行或自行訓練的可能性\n* 訓練好的模型並未免費提供，因此模型無法在本機執行\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n### 透過 OpenAI API 使用 DALL·E 進行影像產生的評分：🔴\n\n缺點：\n* 此模型的訓練與推理軟體都是專有的，限制了在本機執行或自行訓練的可能性\n* 訓練好的模型並未免費提供，因此模型無法在本機執行\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n\n### 透過 OpenAI API 使用 Whisper 語音轉文字的評分：🟡\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n\n缺點：\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n### 透過 LocalAI 產生文字的評分：🟢\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n* 訓練資料免費提供，可以檢查或糾正偏差，或是最佳化效能與二氧化碳排放量。\n\n\n### 透過 LocalAI 使用 Stable Diffusion 產生影像的評分：🟡\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n\n缺點：\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n\n### 透過 LocalAI 使用 Whisper 語音轉文字的評分：🟡\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n\n缺點：\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n[在我們的部落格上](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)取得更多關於 Nextcloud 道德人工智慧評分的資訊。",
    "LocalAI URL (leave empty to use openai.com)" : "LocalAI URL（留空以使用 openai.com）",
    "example:" : "例子",
    "This should be the address of your LocalAI instance from the point of view of your Nextcloud server. This can be a local address with a port like http://localhost:8080" : "從 Nextcloud 伺服器的角度來看，這應該是 LocalAI 站台的地址。 這可以是類似 http://localhost:8080 的區域網路 URL",
    "Choose endpoint: " : "選擇端點：",
    "Chat completions" : "聊天補齊",
    "Completions" : "補齊",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "使用聊天端點可以改善「指令追蹤」微調模型的文字產生品質。",
    "Default completion model to use" : "默認使用的補齊模型",
    "More information about OpenAI models" : "關於 OpenAI 模型的更多資訊",
    "More information about LocalAI models" : "更多關於 LocalAI 模型的資訊",
    "Request timeout (seconds)" : "請求超時（秒）",
    "Authentication" : "驗證",
    "Authentication method" : "認證方式",
    "API key" : "API 密鑰",
    "Basic Authentication" : "基本驗證",
    "API key (optional with LocalAI)" : "API 密鑰（可選擇使用 LocalAI）",
    "your API key" : "您的 API 密鑰",
    "You can create an API key in your OpenAI account settings:" : "您可以在您的 OpenAI 賬戶設置中創建一個 API 密鑰：",
    "Username" : "用戶名稱",
    "your Basic Auth user" : "您的基本認證用戶",
    "Password" : "密碼",
    "your Basic Auth password" : "您的基本驗證密碼",
    "Usage limits" : "使用量限制",
    "Quota enforcement time period (days)" : "配額執行期限（天）",
    "Usage quotas per time period" : "每個時段的使用量配額",
    "Quota type" : "配額類型",
    "Per-user quota / period" : "每個用戶的配額/週期",
    "Current system-wide usage / period" : "在目前系統範圍內的使用量/週期",
    "A per-user limit for usage of this API type (0 for unlimited)" : "每個使用者使用此 API 類型的用量限制（0 為無限制）",
    "Max new tokens per request" : "每個請求的最大新權杖數",
    "Maximum number of new tokens generated for a single text generation prompt" : "單一文字產生提示產生的新權杖最大數量",
    "Select enabled features" : "選取已啟用的功能",
    "Translation provider (to translate Talk messages for example)" : "翻譯提供者（舉例來說，用來翻譯 Talk 中的訊息）",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "語音轉文字提供者（舉例來說，用來轉錄 Talk 的錄音）",
    "Failed to load quota info" : "載入配額資訊失敗",
    "OpenAI admin options saved" : "OpenAI 管理選項已儲存",
    "Failed to save OpenAI admin options" : "儲存 OpenAI 管理選項失敗",
    "Your administrator defined a custom service address" : "您的管理員定義了自訂的服務位置",
    "Leave the API key empty to use the one defined by administrators" : "將 API 金鑰留空以使用管理員定義的",
    "You can create a free API key in your OpenAI account settings:" : "您可以在您的 OpenAI 帳戶設置中創建一個免費的 API 密鑰：",
    "Leave the username and password empty to use the ones defined by your administrator" : "將使用者名稱與密碼留空以使用您的管理員定義的",
    "Usage quota info" : "使用量配額資訊",
    "Usage" : "使用量",
    "Specifying your own API key will allow unlimited usage" : "指定您自己的 API 金鑰可允許無限制的使用量",
    "OpenAI options saved" : "OpenAI 選項已儲存",
    "Failed to save OpenAI options" : "儲存 OpenAI 選項失敗"
},
"nplurals=1; plural=0;");
