/*
* @Author: dapang
* @Date:   2018-07-22 12:38:43
* @Last Modified by:   dapang
* @Last Modified time: 2018-07-22 14:07:40
*/
window.onload=function(){
	let aside=document.getElementsByClassName("aside")[0];
	let chas=aside.getElementsByClassName("cha");
	let asideBox=document.getElementsByClassName("asideBox");
	console.log(chas);
	for(let i=0;i<chas.length;i++){
		chas[i].onmouseenter=function(){
			for(let j=0;j<chas.length;j++){
				asideBox[j].style.display="none";
			}
			asideBox[i].style.display="block";
            asideBox[i].style.border="2px solid #333 ";
		}
		chas[i].onmouseleave=function(){
			asideBox[i].style.display="none";
            asideBox[i].style.border="none ";
		}
	}

    let banner=document.getElementsByClassName("banner")[0];
    let warper=banner.getElementsByClassName("warper")[0];
    let a=warper.getElementsByTagName("a");
    let left=banner.getElementsByClassName("prev")[0];
    let right=banner.getElementsByClassName("next")[0];
    console.log(a);
    let t=setInterval(move,2000);
    let num=0;
    function move() {
		num++;
		if(num==a.length-2){
			num=0;
		}
		for(let i=0;i<a.length-2;i++){
            a[i].style.zIndex=5;
		}
        a[num].style.zIndex=10;
    }
    banner.onmouseenter=function () {
		clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,1000);
    }
	right.onclick=function () {
		move();
    }
    function move1() {
		num--;
		if(num<0){
			num=a.length-3;
		}
		for(let j=0;j<a.length;j++){
			a[j].style.zIndex=5;
		}
		a[num].style.zIndex=10;
    }
    left.onclick=function () {
		move1();
    }
}