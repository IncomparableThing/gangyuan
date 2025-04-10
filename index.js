var welcomesecDoc=document.querySelector('#welcomesec');
window.onload=function(){
    getWindowHeight();
    console.log(welcomesecDoc.computedStyleMap);
    
}
window.onresize=getWindowHeight();


// 获取窗口高度
function getWindowHeight(){
    const winHeight=window.innerHeight;
    const pageHeight=document.documentElement.scrollHeight;
    console.log("窗口高度"+winHeight);
    console.log("页面高度"+pageHeight);
}


// 设置菜单栏的隐藏和显示
var nonnavDoc=document.querySelector('.nonnav');
document.querySelector('.nonnav').addEventListener('mouseover',function(){
    nonnavDoc.style.display='block';
})

document.querySelector('.nonnav').addEventListener('mouseout',function(){
    nonnavDoc.style.display='none';
})

document.querySelector('.yuangang').addEventListener('click',function(){
    if(nonnavDoc.style.display==='block'){
        nonnavDoc.style.display='none';
    }else{
        nonnavDoc.style.display='block';
    }
})

// 轮播图
var bg1=document.querySelector('#bg1');
var bg2=document.querySelector('#bg2');

setInterval(function(){
    if(bg1.style.display==='block'){
        bg1.style.display='none';
        bg2.style.display='block';
    }else{
        bg1.style.display='block';
        bg2.style.display='none';
    }
},5000);











// window.onload=function(){
//     var lbtDom=document.querySelector('.lbt');
//     var bg1Dom=document.getElementById("#bg1");
//     var bg2Dom=document.querySelector("#bg2");

    // console.log(bg1Dom)


    // lbtDom.onclick=function(){
    //     if(bg2Dom.display=''){
    //         bg2Dom.display=block;
    //         bg1Dom.display=none;
    //     }else{
    //         bg1Dom.display=block;
    //         bg2Dom.display=none;
    //     }
    // }
// }