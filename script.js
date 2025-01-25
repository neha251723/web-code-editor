function run(){
    let htmlc= document.getElementById("html-code").value;
    let cssc= document.getElementById("css-code").value;
    let jsc= document.getElementById("js-code").value;
    let output= document.getElementById("output");  

    output.contentDocument.body.innerHTML = htmlc += `<style>${cssc}</style>`;
    output.contentWindow.eval(jsc);

}