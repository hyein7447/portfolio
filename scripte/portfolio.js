// 마우스 스타일 적용
const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

$ ('.wrap').fullpage({
    scrollBar:true, // 스크롤바 표시하기 (기본값false)
    scrollingSpeed:600, //스크롤바 전환속도 (기본값 1000)
    navigation:true, //우측 내비게이션 표시하기 (기본값 false)
    anchors: ['s1','s2','s3','s4','s5','s6'],
    afterLoad:function(anchor,index){
        if(anchor == 's4'){
            $('.s4 .right').animate({
                opacity:1,
                top:50,
            },1500)
        }
        if(anchor == 's5'){
            $('.s5 .bg .color_bg').get(0).classList.add('scale')
        }
    }
})

const menu_open_a = document.querySelectorAll('.menu_open a')
const section = document.querySelectorAll('.section')
menu_open_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        $.fn.fullpage.moveTo(i + 1);
    })
})

const content = "성장해 나가는 프론트엔드 개발자 김혜인의 포트폴리오였습니다.\n 끝까지 봐주셔서 감사합니다 :)";
const text = document.querySelector(".typing");
text.textContent = "";
let txtIdx = 0;
function typing(){
    let txt = content[txtIdx++];
    if (txt == undefined) return;
    text.innerHTML += txt === "\n" ? "<br/>": txt;
    if (txtIdx > content.length) {
        txtIdx = 0;
    }else{
        setTimeout(typing, 80)
    }
}
typing();

const s6 = document.querySelector('.s6')
console.log(s6.offsetTop)


window.addEventListener('scroll',()=>{
    if(s6.offsetTop) {
        typing();
    }
})