let _btn = document.getElementsByTagName('button');
let _body = document.querySelector('body'); 
let mainTit = document.querySelector('h1>a');
let navList = document.querySelectorAll('li>a');
let _li = document.querySelectorAll('li');
let _txt = document.querySelector('p');
let _hr = document.querySelector('hr');


for(let idx=0; idx<_btn.length; idx++){
    _btn[idx].addEventListener('mouseover', (event)=>{
        event.target.style.opacity = 1;
    });
    _btn[idx].addEventListener('mouseout', (event)=>{
        event.target.style.opacity = 0.3;
    });
}


_btn[0].addEventListener('click', ()=>{
    _body.style.backgroundColor = 'black';
    mainTit.style.color = '#f99';
    _txt.style.color = '#fff';
    _hr.style.backgroundColor = '#fff';
    for(let idx=0; idx<navList.length; idx++){
        navList[idx].style.color = '#aaf';
        _li[idx].style.color = '#aaf';
    }   
    
})

_btn[1].addEventListener('click', ()=>{
    _body.style.backgroundColor = 'white';
    mainTit.style.color = 'darkred';
    _txt.style.color = '#000';
    _hr.style.backgroundColor = '#000';
    for(let idx=0; idx<navList.length; idx++){
        navList[idx].style.color = '#00f';
        _li[idx].style.color = '#00f';
    }   
})
        
