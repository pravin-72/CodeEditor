function run(){
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value +"<style>" + cssCode.value + "</style>";

    output.contentWindow.eval(jsCode.value);

}

document.getElementsByClassName('copyButton')[0].addEventListener('click', function() {
    var textToCopy = document.querySelector('textToCopy');
    textToCopy.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
});
