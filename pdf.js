//jsPDF.js
// save
const save = document.querySelector('.save');
save.addEventListener('click', ()=>{
    var  doc = new jsPDF(); 
    let source = $('.edit').contents().find('body').html();          
    var elementHandler = {  '#ignorePDF': function (element, renderer) {
    return true;
  }
};

var doc = new jsPDF();
doc.fromHTML(
  source, 15, 15,
  {
    'width': 180,
    'height': 200,    
    'elementHandlers': elementHandler,
  },function (dispose) {
    doc.save('info.pdf');
  });
});






      
