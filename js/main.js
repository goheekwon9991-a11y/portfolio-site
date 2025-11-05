
const controller = new ScrollMagic.Controller()
const spyEls = document.querySelectorAll('section.scroll-spy') //NodeList

// console.log(spyEls)

//반복처리 함수, js는
spyEls.forEach(function(spyEl){ //인자: 객체, 인덱스
  // console.log(spyEl)
  // console.log(index)
  new ScrollMagic.Scene({
    triggerElement: spyEl, //감시할 장면 추가 및 옵션 지정
    triggerHook: 0.5 //화면의 50% 지점에서 보여짐 여부 감시(0~1지정)
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show클래스 추가 메소드
    .addTo(controller) // 컨트롤러에 장면을 할당(필수!, 없으면 라이브러리 미작동)
})


const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', //수평슬라이드(기본값)
  loop: true, //Slide 반복재생 여부
  // autoplay: {
  //   delay: 5000
  // },

  // If we need pagination
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  }
});

// 모달창 띄우기
const imageModal = document.querySelector("#imageModal");
const imageModalContent = document.querySelector("#modal-content");
const imageModalBtnList = document.querySelectorAll(".btn-modal-image");
const imageCloseBtn = document.querySelector("#imageModal .btn-close");
const imageEl = imageModal.querySelector("img")

imageModalBtnList.forEach(function(imageModalBtn){
  imageModalBtn.addEventListener('click',function(){ //함수는 이벤트 핸들러 명명
    imageModal.style.display = "flex";
    imageEl.src = this.dataset.imgSrc;
  })
})

imageCloseBtn.addEventListener('click',function(){
  imageModal.style.display = "none";
})

//esc keyboardEvent
document.addEventListener('keydown',function(event){
  if(imageModal.style.display === 'flex' && event.key === 'Escape'){
    imageModal.style.display = 'none'
  }
})

//모달창 외부 클릭시 모달창 닫기
imageModal.addEventListener('click',function(event){
  //event.currenttarget은 실제 이벤트가 바인딩 된 요소. this와 동일한 요소
  //event.target은 실제 이벤트가 발생한 요소
  if(imageModal.style.display === 'flex' && event.target === event.currentTarget){
    imageModal.style.display = 'none'
  }
})

//캡처링: 내부 p태그 클릭시 doc부터p태그까지 클릭 이벤트 발생
//버블링: 내부 p태그 클릭시 p태그부터 doc까지 클릭 이벤트 발생


//현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


//페이지 최상단으로 이동
const toTopEl = document.querySelector('#toTop');


const animateSpanLi = document.querySelectorAll('.visual .inner span')

//페이지 스크롤 이벤트 감지를 추가

window.addEventListener('scroll',function(){
  if(this.scrollY > 500){
    toTopEl.style.opacity = 1;
    toTopEl.style.transform = "translateX(0)";
    classListRemove(animateSpanLi,'animate-flash')
  }else{
    toTopEl.style.opacity = 0;
    toTopEl.style.transform = "translateX(100px)";
    classListAdd(animateSpanLi,'animate-flash')
  }
})

window.onload = function(){
  classListAdd(animateSpanLi,'animate-flash')
}
//classList에서 className 제거
function classListRemove(objLi,className){
  objLi.forEach(el => {
    el.classList.remove(className)
  });
}

//classList에서 className 추가
function classListAdd(objLi,className){
  objLi.forEach(el => {
    el.classList.add(className)
  });
}