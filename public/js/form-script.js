'use strict'
if (document.querySelector('.contact-col')) {
    var form = {
        name:'Thiago',
        email: '',
        phone: '',
        perg1:'',
        perg2: '',
        perg3:'',
        perg4:'',
        description: ''
    }

    let button = document.querySelector('.button-form');

    button.addEventListener('click', () => {
        verifyInputsError();
    });

    function verifyInputsError() {
        let count = 0;
        let countInput = 0;

        document.querySelectorAll('.contact-col form input, .contact-col form select').forEach(item => {
            let id = item.id;

            if (id) {
              countInput++;
                if (item.value) {
                    document.getElementById(id).style = "";
                    document.getElementById('msg-'+id).style.visibility="hidden";
                    count++;
                } else {
                    document.getElementById(id).style.border = "1px solid red";
                    document.getElementById('msg-'+id).style.visibility="visible";
                }
            }
        });
      
        if(count === countInput){
            //button.type="submit";
            ajaxCreateContact();
        }
        ajaxCreateContact();
    }

    async function ajaxCreateContact(){

        var form = new FormData();
        form.append('name', 'Teste');


        var req = await fetch('http://localhost:4002/contato-add',{
            method:'POST',
            body: form

        }).then(response => {
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
        
    }
}