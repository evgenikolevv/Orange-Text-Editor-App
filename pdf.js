//jsPDF

// save
save.addEventListener('click', ()=>{
    var  doc = new jsPDF(); 
    let source = $('.edit').contents().find('body').html(); 
              
    var elementHandler = {  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
    
doc.fromHTML(
    source, 
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });
   
    
    
    //doc.output("test");
    doc.save('info');
 
});
