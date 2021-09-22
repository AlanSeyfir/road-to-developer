let shareButton = document.getElementById('shareBtn');


shareButton.addEventListener('click', function(){
    let shareInfo = document.getElementById('hoverInfo');

    if (shareInfo.style.display === 'flex') {
        shareInfo.style.display = 'none';
        console.log('se fue');
    }else{
        shareInfo.style.display = 'flex'
        console.log('volvio');
    }
    
});



