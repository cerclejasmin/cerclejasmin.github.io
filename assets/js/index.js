// 检测设备类型
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isSmallScreen = window.innerWidth < 1200;

//  如果是手机设备或屏幕尺寸小于1200，进行跳转
if (isMobile && isSmallScreen) {
  window.location.href = 'mobile/index.html';
}

window.onload = function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      let headerContainer = document.getElementById('header-container');
      headerContainer.innerHTML = data;
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      let footerContainer = document.getElementById('footer-container');
      footerContainer.innerHTML = data;
    });
};
