const slogans = [
  "歡迎來到 AutoBrand 識車系統",
  "請上傳汽車照片 讓我們幫您辨識廠牌",
  "一拍即知 這台車是誰",
  "AI 小幫手 讓你秒懂車款資訊",
  "拍張照 車輛身分馬上現形",
  "不懂車沒關係 我來幫你辨識 ",
  "車款辨識神器 讓你當路上車神",
  "你的 AI 汽車知識庫 小幫手上線",
  "從照片到答案 只要幾秒鐘",
  "AI 智能判斷 讓車輛不再是謎"
];

document.addEventListener('DOMContentLoaded', function () {
  const sloganDiv = document.getElementById('slogan');
  let currentSloganIndex = Math.floor(Math.random() * slogans.length);

  if (sloganDiv) {
    sloganDiv.textContent = slogans[currentSloganIndex];
    sloganDiv.classList.add('fade-in');

    function displayNextSlogan() {
      sloganDiv.classList.remove('fade-in');
      sloganDiv.classList.add('fade-out');

      setTimeout(() => {
        currentSloganIndex = Math.floor(Math.random() * slogans.length);
        sloganDiv.textContent = slogans[currentSloganIndex];
        sloganDiv.classList.remove('fade-out');
        sloganDiv.classList.add('fade-in');
      }, 1000);
    }

    setInterval(displayNextSlogan, 5000);
  }
});

// 檔案上傳邏輯
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById("fileInput");
    const uploadLabel = document.getElementById("uploadLabel");
    const scanButton = document.getElementById("scanButton");
    const uploadForm = document.getElementById("uploadForm");

    if (fileInput && uploadLabel && scanButton && uploadForm) {
        uploadLabel.onclick = function (e) {
            e.preventDefault();
            fileInput.click();
        };

        fileInput.addEventListener("change", function () {
            if (fileInput.files.length > 0) {
                uploadLabel.style.display = "none";
                scanButton.style.display = "inline-flex"; // 顯示掃描按鈕
            } else {
                uploadLabel.style.display = "inline-flex";
                scanButton.style.display = "none"; // 隱藏掃描按鈕
            }
        });

        scanButton.addEventListener("click", function () {
            const file = fileInput.files[0];
            if (!file) {
                alert("請先選擇一張圖片！");
                return;
            }

            // 提交表單到後端
            uploadForm.submit();
        });
    }
});

// 彈出視窗邏輯
function showModal(message) {
    const modal = document.getElementById('resultModal');
    const resultText = document.getElementById('resultModalContent');
    resultText.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

// 漢堡選單邏輯
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navMenu ul');
const navLinks = document.querySelectorAll('#navMenu ul li a');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
}