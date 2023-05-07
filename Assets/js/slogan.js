window.onload = function() {
  setTimeout(function() {
    document.getElementById("overlay").classList.add("show");
  }, 1000); // 1秒后弹窗跳出
}

document.getElementById("close").onclick = function() {
  document.getElementById("overlay").classList.remove("show");
}
function closePopup() {
  document.getElementById("overlay").style.display = "none";
}
function closePopup() {
  document.getElementById("overlay").classList.remove("show");
}