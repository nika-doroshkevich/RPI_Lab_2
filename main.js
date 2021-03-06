function openModal() {
    var modal = document.getElementById("video-modal");
    var iframe = document.getElementById("video");

    // Display window & autoplay
    modal.style.display = "block";
    iframe.src ="https://www.youtube.com/embed/2HScn9vpnuA";
}

function closeModal(event) {
    var modal = document.getElementById("video-modal");
    var iframe = document.getElementById("video");

    if (event.target !== iframe) {
        // Hide window & remove source (including autoplaying)
        modal.style.display = "none";
        iframe.src = "";
    }
}


var accmain = document.getElementsByName('accmain');
var tl = document.getElementsByName('titlmmm');
var nameimg = document.getElementsByName('nameimg');
var text = document.getElementsByName('textacc');

var actual = sessionStorage.getItem("now_opened");

if (actual == null){
    open_actual(0);
} else {
    open_actual(actual);
}

for (i = 0; i < accmain.length; i++) {
         accmain[i].addEventListener('click', myfunc);
    }

    function myfunc() {
        var itemClass1 = this.className;
        
        for (i = 0; i < accmain.length; i++) {
            accmain[i].className = 'AccordCl';
            nameimg[i].className = 'img_pl';
            tl[i].className = 'TitleHeading';
            text[i].className = 'accord_text_none';
        }

        if (itemClass1 == 'AccordCl') {
            this.className = 'AccordOp';

            for (i = 0; i < accmain.length; i++) {
                if (nameimg[i].parentNode.parentNode.className == 'AccordOp'){
                    nameimg[i].className = 'img_pldis';
                    tl[i].className = 'TitleHeadingOp';
                    text[i].className = 'accord_text_abl';
                    sessionStorage.setItem('now_opened', i);
                }                
            }
        }        
    }

    function open_actual(i) {
        accmain[i].className = 'AccordOp';
        nameimg[i].className = 'img_pldis';
        tl[i].className = 'TitleHeadingOp';
        text[i].className = 'accord_text_abl';
    }