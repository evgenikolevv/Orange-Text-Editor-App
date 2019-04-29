
save.addEventListener('click', ()=>{
    let  doc = new jsPDF(); 
    let myFrame =$('.edit').contents().find('body').html();
    console.log(myFrame); 
    doc.fromHTML( myFrame, 0.5, 0.5,{
       
    });
    doc.save('info');
});
