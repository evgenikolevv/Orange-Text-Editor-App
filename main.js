 window.addEventListener('load',()=>{
    var editor = edit.document;
    editor.designMode = "on";

    
 
 

 const styleText = document.querySelector('#style-text');

 // style the fonts
 const fonts = document.querySelectorAll('select.font-change > option');
    for (let i = 0; i < fonts.length; i++){
        fonts[i].style.fontFamily = fonts[i].value;
}


//constants of buttons
const Bold = document.querySelector('.bold');
const Italic = document.querySelector('.italic');
const underline = document.querySelector('.underline');
const unorderedList = document.querySelector('.unordered-list');
const orderedList = document.querySelector('.ordered-list');
const alignLeft = document.querySelector('.align-left');
const alignCenter = document.querySelector('.align-center');
const alignRight = document.querySelector('.align-right');
const link = document.querySelector('.link');
const insertImage = document.querySelector('.image-file');
const highLight = document.querySelector('.highlight');
const fontColor = document.querySelector('.font-color');
const fontChange = document.querySelector('.font-change');
const fontSize = document.querySelector('.font-size');
const save = document.querySelector('.save');
const watch = document.querySelector('.watch');

Bold.addEventListener('click', function(){
    editor.execCommand('Bold', false,null);
    changeColor('.bold');
});

Italic.addEventListener('click', function(){
    editor.execCommand('Italic', false,null);
    changeColor('.italic');
});

underline.addEventListener('click', function(){
    editor.execCommand('Underline', false,null);
    changeColor('.underline');
});

unorderedList.addEventListener('click',function(){
    editor.execCommand('InsertUnorderedList', false,"newOL");
    changeColor('.unordered-list');
});


orderedList.addEventListener('click',function(){
    editor.execCommand('InsertOrderedList', false,"newOL" + Math.round(Math.random() * 1000));
    changeColor('.ordered-list');
});

alignLeft.addEventListener('click',function(){
    editor.execCommand('justifyLeft', false, null);
    changeColor('.align-left');
});

alignCenter.addEventListener('click',function(){
    editor.execCommand('justifyCenter', false, null);
    changeColor('.align-center');
});

alignRight.addEventListener('click',function(){
    editor.execCommand('justifyRight', false, null);
    changeColor('.align-right');
});

link.addEventListener('click', function(){
    let url = prompt("Enter a URL", "http://");
    editor.execCommand('CreateLink', false, url);
    changeColor('.link');
});

insertImage.addEventListener('click', function(){
    let url = prompt("Enter a URL", "http://");
    editor.execCommand('InsertImage',"" , url);
    url = "" + "ID=myGif border-radius:50%";
    
    changeColor('.image-file');
});

highLight.addEventListener('change', function(e){
    editor.execCommand('hiliteColor',false, e.target.value);
});


fontColor.addEventListener('change', function(e){
    editor.execCommand('ForeColor', false, e.target.value);
});

fontChange.addEventListener('change',function(e){
    editor.execCommand('FontName', false ,e.target.value);
});

fontSize.addEventListener('change',function(e){
    editor.execCommand('FontSize', false ,e.target.value);
});



watch.addEventListener('click',function(){
    
        if (editor.documentElement.contentEditable === false || editor.designMode === "off") {
            editor.body.contentEditable='true';
            editor.designMode='on';

        } else if (editor.documentElement.contentEditable === true || editor.designMode === "on") {
            editor.body.contentEditable='false';
            editor.designMode='off';
        }
    });



// change color of clicked buttons
function changeColor(e){
    let element = document.querySelector(e);
    element.classList.add('clicked');
    setTimeout(function(){
    element.classList.remove('clicked'); }, 500);
}


});
