const localSave = document.querySelector('.local-save');

localSave.addEventListener('click', ()=>{
    localStorage.setItem('key', JSON.stringify($('.edit').contents().find('body').html()));
});


window.addEventListener('DOMContentLoaded', ()=>{
    $('.edit').contents().find('body').append(JSON.parse(localStorage.getItem("key")));
});
