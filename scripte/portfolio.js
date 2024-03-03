// 마우스 스타일 적용
const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

$ ('.wrap').fullpage({
    scrollBar:true, // 스크롤바 표시하기 (기본값false)
    scrollingSpeed:1000, //스크롤바 전환속도 (기본값 1000)

/*     menu:'menu_open', //상단 메뉴 클릭 시 해당 메뉴 위치로 이동
    anchors:['a','b','c','d'], //메뉴a #이름과 일치시킨 이름작성
    // 현재 anchors 명칭은 a,b,c,d
    afterLoad:function(anchor, index){
        console.log(anchor, index)
        if(anchor == 'b'){// 앵커의 위치가 b와 같으면
            $('.s2').get(0).classList.add('bg')
        }else{
            $('.s2').get(0).classList.remove('bg')
        }
    } */
})

const menu_open_a = document.querySelectorAll('.menu_open a')
const section = document.querySelectorAll('.section')
menu_open_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        $.fn.fullpage.moveTo(i + 1);
    })
})

/* const content = "Support 하는것을 좋아하는 ISFJ로써 \n 소통하는 팀분위기를 만들어갑니다.";
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
typing(); */


// 스킬 아이콘 효과

const item = document.querySelectorAll('.s3 .container .item')
const desc = document.querySelectorAll('.item .desc')
console.log(item,desc)



/*     t.addEventListener('click',()=>{
        desc[i].style.display = 'block'
    }) */


/* const item_all = document.querySelectorAll('.s3 .item')
const desc_all = document.querySelectorAll('.s3 .desc')
console.log (item_all, desc_all)

const hide = ()=>{for(let h of desc_all){h.style.display='none'}}
hide()

item_all.forEach((t,i)=> {
    t.addEventListener('mouseover',()=>{
        hide()
        desc_all[i].style.display = 'block'
        item_all[i].classList.add('hover')
    })
}) */