function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }

  let elementText = htmlElement.innerText;
  letinputElement = document.createElement('input')
}

document.querySelector('#copy-text-btn').onclick =
function () {
  copyText(document.querySelector('#text'));
}
