const JustifyContentImgURL =
  "https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8yNjQ2MTgtYzdjMTc1MTdhYWM2ZjM4MS5wbmc?x-oss-process=image/format,png"

const SummaryContentIMGURL =
  "https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8yNjQ2MTgtZWEwOWJlYTVkNzM1NjllMC5wbmc?x-oss-process=image/format,png"

export function loadIMG() {
  var imgElement = document.getElementById('JustifyContentImg')
  imgElement.src = JustifyContentImgURL;
}

export function loadSummaryIMG() {
  var imgElement1 = document.getElementById('SummaryIMG')
  var imgElement2 = document.getElementById('SummaryIMG1')
  console.log('loadSummaryIMG:',SummaryContentIMGURL);
  imgElement1.src = SummaryContentIMGURL;
  imgElement2.src = SummaryContentIMGURL;
}
