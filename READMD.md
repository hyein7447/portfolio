# 포트폴리오 구성 참고
## 1. intro
* 간단한 인사말 또는 한마디 포부 등을 작성하면서 프로필에서
자세한 내용을 보여주기 전 나의 디자인 느낌 등을 가볍게 보여주는 표지.
* ex) 2024 PORTFOLIO, 나는 ~~~한 프론트엔드 웹 개발자입니다,
000 portfolio에 오신걸 환영합니다! /  자신을 표현할 수 있는 사진으로 대체하기도 함.
* SPA로 구성하기도 하고 2page를 만들어 intro 영역을 따로 분리하기도 함.
-----------------------------------
## 2. ProFile
* 사진(증명사진x) 또는 일러스트 (선택)
* 나의정보 (본인 gitHub주소, 생년월일(선택), 이메일, 전화번호, 주소(간략하게 ex)인천시 부평구, MBTI(선택), 취미 및 특기(직업에 관련되있으면
더욱 좋음, IT소식합하기 등), 자격증(웹 관련 및 그외 기타 포함, 언어 등), 경력 및 학력(선택), 공모전 활동 정보 및 수상 정보
(선택))
* 사용 가능한 스킬 나열 (photoshop, illustarator,figma, html, css, javascript, react, jquery, api, git, github, nodejs, netlify, php,
sass)
* 스킬의 사용 가능한 퍼센트(x), 프로그램 아래로 내가 그 프로그램을 이용해서 무엇을 만들 수 있는지 설명 작성하기 2줄 이상
-----------------------------------
## 포트폴리오 작업물 소개
* 포트폴리오 결과 미리보기 (핸드폰, 태블릿, 테스크탑 목업 등 활용)
* 포트폴리오 작품 제목
* 작업 완성까지 걸린 시작 및 일지 ex) 1/20~1/30 (30시간)
* 작업한 페이지 소개
    - index.html(메인-들어가는 기능 등 추가 소개)
    - intro.html(브랜드연혁(경로포함)-설명 설명)...
* 사용한 스킬 ex) html5, css3, javascript(ES6버전 이상), figma 등등..
    - 스킬은 해당 아이콘으로 표현하거나, 타이핑만으로만 표현하거나 둘중하나
* 포트폴리오 기획서 (페르소나, 스타일가이드, 기존 사이트에서 어떤 동적 기능을 개선하였는지 등 figma ppt 링크로 이동하게 적용)
* 개인작업물인지 팀작업물인지 ex)개인 100% , ex) 팀3명에서 어떤 페이지의 기능을 맡았는지 상세 설명
-----------------------------------
## header, footer (선택)
* header 영역을 이용한 각 프로필, 포트폴리오로 바로 이동 할 수 있는 링크 제공
* footer 영역 활용 모든 프로젝트 보여주고 나서 감사합니다! 인사말을 띄우거나 마지막으로 메일, 연락처 등을
다시한번 어필하고 종료 문구 제공 


        h1 {
            font-size: 5rem; font-weight: 700;
            background: linear-gradient(to right, aqua, lime, pink, aqua);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 400%;
            animation: text_bg 10s linear infinite
        }
        @keyframes text_bg {
            0% {background-position-x:100% ;}
            100% {background-position-x:400% ;}
        }