'use strict';

const img = document.querySelector('.img');
const imageTagList = document.querySelectorAll('article img');
    
    for(var i=0;i<imageTagList.length;i++){
        imageTagList[i].addEventListener('click',function(){
            console.log(imageTagList[i]);
            var modal = document.getElementById('img-modal');
            var content = document.getElementById('img-modal-content');
            modal.style.display='block';
            content.src = this.src;
        });
    }

       
    /* close 버튼 클릭시*/
    img.addEventListener('blur', function() {
        
    })
    
    function imgModalClose(){
        var modal = document.getElementById('img-modal');
        var content = document.getElementById('img-modal-content');
        modal.style.display="none";
        content.src = '';
    }