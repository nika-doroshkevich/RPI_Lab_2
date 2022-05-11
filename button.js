
document.addEventListener('DOMContentLoaded',()=>
{

    let buttonOpenModal1 =document.getElementsByClassName('open-button');
    for (let button of buttonOpenModal1) {
        button.onclick = function (e) {
            e.preventDefault();
            isMenuShow = sessionStorage.getItem("someVarKey");
            if (isMenuShow!=1) {
                modalOverlay.classList.add('modal-overlay');
                modal1.classList.add('modal_active');

            }else
            {
                modalOverlay.classList.add('modal-overlay');
                modal4.classList.add('modal_active');
                setTimeout(function() {
                    modal4.classList.remove('modal_active');
                    modalOverlay.classList.remove('modal-overlay');
                }, 5000)
            }
        }


    }

    let modal1=document.getElementById('modal1');
    let modal3=document.getElementById('modal3');
    let modal4=document.getElementById('modal4');
    let closeButton=document.getElementById('close-button');
    let modalOverlay = document.getElementById('oo');
    let in_1 = document.getElementById("input_1");
    let in_2 = document.getElementById("input_2");
    let in_3 = document.getElementById("input_3");
    let btn = document.getElementById("send");
    const check = () => btn.disabled = in_2.validity.typeMismatch ||  in_1.value.length < 2 || in_2.value.length < 3  || in_3.value.length != 18;
    var isMenuShow = 2
    closeButton.onclick=function (){
        modal1.classList.remove('modal_active');
        modalOverlay.classList.remove('modal-overlay');
    }
    in_1.addEventListener('input', check);
    in_2.addEventListener('input', check);
    in_3.addEventListener('input', check);
    check();


    const applicantForm = document.getElementById('mars-once')
    applicantForm.addEventListener('submit', handleFormSubmit)
    async function handleFormSubmit(event) {
        event.preventDefault()
        isMenuShow = 1
        sessionStorage.setItem("someVarKey", isMenuShow)
        modal3.classList.add('modal_active');
        modal1.classList.remove('modal_active');
        setTimeout(function() {
            modal3.classList.remove('modal_active');
            modalOverlay.classList.remove('modal-overlay');
        }, 5000)
    }

});


