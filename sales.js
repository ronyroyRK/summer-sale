document.getElementById('btn-submit').addEventListener('click',function(){
    const textField=document.getElementById('user-text');
    const text =textField.value;
    if(text==='SELL200'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})
