console.log('Loaded!');

//Change the text of main div 

var element=document.getElementById('main-text');

element.innerHTML = 'New Value';

//To change the element on click

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
	marginLeft=marginLeft+1
	img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
 var interval=setInterval(moveRight,50);
};
 


