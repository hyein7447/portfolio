// 마우스 스타일 적용
const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

$('.wrap').fullpage({
    scrollBar:true, // 스크롤바 표시하기 (기본값false)
    scrollingSpeed:600, //스크롤바 전환속도 (기본값 1000)
    navigation:true, //우측 내비게이션 표시하기 (기본값 false)
    anchors: ['s1','s2','s3','s4','s5','s6','s7'],
    afterLoad:function(anchor,index){
        if (anchor == 's1'){
            $('.nav .menu_open .a').get(0).classList.add('active')
            $('.nav .menu_open .b').get(0).classList.remove('active')
            $('.nav .menu_open .c').get(0).classList.remove('active')
            $('.nav .menu_open .d').get(0).classList.remove('active')
            $('.nav .menu_open .e').get(0).classList.remove('active')
            $('.nav .menu_open .f').get(0).classList.remove('active')
            $('.nav .menu_open .g').get(0).classList.remove('active')
        }
        if(anchor == 's2'){
            $('.s2 .container p').get(0).classList.add('animate__fadeInUp')
            $('.nav .menu_open .b').get(0).classList.add('active')
            $('.nav .menu_open .a').get(0).classList.remove('active')
            $('.nav .menu_open .c').get(0).classList.remove('active')
            $('.nav .menu_open .d').get(0).classList.remove('active')
            $('.nav .menu_open .e').get(0).classList.remove('active')
            $('.nav .menu_open .f').get(0).classList.remove('active')
            $('.nav .menu_open .g').get(0).classList.remove('active')
            $('.s2 .container p').animate({
                opacity:1,
            },1500)
        }
        if(anchor == 's3'){
            $('.s3 .top .skill_contents').get(0).classList.add('animate__fadeInDown')
            $('.s3 .top .skill_contents').animate({
                opacity:1,
            },1200)
            setTimeout(function(){
                $('.s3 .bottom .skill_contents').get(0).classList.add('animate__fadeInDown')
                $('.s3 .bottom .skill_contents').animate({
                    opacity:1,
                })
            },800)
            $('.nav .menu_open .c').get(0).classList.add('active')
            $('.nav .menu_open .a').get(0).classList.remove('active')
            $('.nav .menu_open .b').get(0).classList.remove('active')
            $('.nav .menu_open .d').get(0).classList.remove('active')
            $('.nav .menu_open .e').get(0).classList.remove('active')
            $('.nav .menu_open .f').get(0).classList.remove('active')
            $('.nav .menu_open .g').get(0).classList.remove('active')
        }
        if(anchor == 's4'){
            $('.s4 .right').animate({
                opacity:1,
                top:50,
            },1200)
            $('.nav .menu_open .d').get(0).classList.add('active')
            $('.nav .menu_open .a').get(0).classList.remove('active')
            $('.nav .menu_open .b').get(0).classList.remove('active')
            $('.nav .menu_open .c').get(0).classList.remove('active')
            $('.nav .menu_open .e').get(0).classList.remove('active')
            $('.nav .menu_open .f').get(0).classList.remove('active')
            $('.nav .menu_open .g').get(0).classList.remove('active')
        }
        if(anchor == 's5'){
            $('.s5 .bg .color_bg').get(0).classList.add('scale')
            $('.nav .menu_open .e').get(0).classList.add('active')
            $('.nav .menu_open .a').get(0).classList.remove('active')
            $('.nav .menu_open .b').get(0).classList.remove('active')
            $('.nav .menu_open .c').get(0).classList.remove('active')
            $('.nav .menu_open .d').get(0).classList.remove('active')
            $('.nav .menu_open .f').get(0).classList.remove('active')
            $('.nav .menu_open .g').get(0).classList.remove('active')
        }
        if(anchor == 's6'){
            typing()
            $('.nav .menu_open .f').get(0).classList.add('active')
            $('.nav .menu_open .a').get(0).classList.remove('active')
            $('.nav .menu_open .b').get(0).classList.remove('active')
            $('.nav .menu_open .c').get(0).classList.remove('active')
            $('.nav .menu_open .d').get(0).classList.remove('active')
            $('.nav .menu_open .e').get(0).classList.remove('active')
            $('.nav .menu_open .g').get(0).classList.remove('active')
        }
        if(anchor == 's7'){
            typing()
            $('.nav .menu_open .g').get(0).classList.add('active')
            $('.nav .menu_open .a').get(0).classList.remove('active')
            $('.nav .menu_open .b').get(0).classList.remove('active')
            $('.nav .menu_open .c').get(0).classList.remove('active')
            $('.nav .menu_open .d').get(0).classList.remove('active')
            $('.nav .menu_open .e').get(0).classList.remove('active')
            $('.nav .menu_open .f').get(0).classList.remove('active')
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


//typing 함수
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



const menu = document.querySelectorAll('.menu_open a')

for(let a of menu){a.classList.remove('active')}
menu[0].classList.add('active')

menu.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        for(let a of menu){a.classList.remove('active')}
        menu[i].classList.add('active')
    })
})

const link_icon = document.querySelectorAll('.link_icon a')

link_icon[1].addEventListener('click',()=>{
    event.preventDefault();
})
link_icon[2].addEventListener('click',()=>{
    event.preventDefault();
})


const view = document.querySelector('.page1 .inner a')
const view2 = document.querySelector('.page2 .inner a')
const view3 = document.querySelector('.banner .inner a')
const view4 = document.querySelector('.poster1 .inner a')
const view5 = document.querySelector('.poster2 .inner a')

const page1_pop = document.querySelector('.page1_pop')
const page2_pop = document.querySelector('.page2_pop')
const banner_pop = document.querySelector('.banner_pop')
const poster1_pop = document.querySelector('.poster1_pop')
const poster2_pop = document.querySelector('.poster2_pop')

const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')

const inner1 = document.querySelector('.page1 .inner')
const inner2 = document.querySelector('.page2 .inner')

const body = document.querySelector('body, html')
console.log(page1,inner1)

page1_pop.style.display = 'none'
page2_pop.style.display = 'none'
banner_pop.style.display = 'none'
poster1_pop.style.display = 'none'
poster2_pop.style.display = 'none'

view.addEventListener('click', function() {
    page1_pop.style.display = 'flex'
    body.style.overflow = 'hidden'
    event.preventDefault();
})

page1_pop.addEventListener('click', function() {
    page1_pop.style.display = 'none'
    body.style.overflow = 'auto'
    event.preventDefault();
})
view2.addEventListener('click', function() {
    page2_pop.style.display = 'flex'
    body.style.overflow = 'hidden'
    event.preventDefault();
})

page2_pop.addEventListener('click', function() {
    page2_pop.style.display = 'none'
    body.style.overflow = 'auto'
    event.preventDefault();
})

view3.addEventListener('click', function() {
    banner_pop.style.display = 'flex'
    body.style.overflow = 'hidden'
    event.preventDefault();
})

banner_pop.addEventListener('click', function() {
    banner_pop.style.display = 'none'
    body.style.overflow = 'auto'
    event.preventDefault();
})

view4.addEventListener('click', function() {
    poster1_pop.style.display = 'flex'
    body.style.overflow = 'hidden'
    event.preventDefault();
})

poster1_pop.addEventListener('click', function() {
    poster1_pop.style.display = 'none'
    body.style.overflow = 'auto'
    event.preventDefault();
})

view5.addEventListener('click', function() {
    poster2_pop.style.display = 'flex'
    body.style.overflow = 'hidden'
    event.preventDefault();
})

poster2_pop.addEventListener('click', function() {
    poster2_pop.style.display = 'none'
    body.style.overflow = 'auto'
    event.preventDefault();
})




$('.inner a').click(function(event) {
    $.fn.fullpage.setAllowScrolling(false); // fullpage 스크롤 비활성화
    event.preventDefault(); // 기본 동작 방지
});

$('.page1_pop').click(function(event) {
    if (event.target === this) {
        $.fn.fullpage.setAllowScrolling(true); // fullpage 스크롤 활성화
    }
    event.preventDefault(); // 기본 동작 방지
});
