// INCLUDE FILES
// 이벤트 리스너 - 페이지 로드 완료 감지
window.addEventListener('load', async function(){
    // CSS 선택자 - 특정 속성을 가진 요소들 찾기
    const allIncludes = document.querySelectorAll('[data-include-path]');
    // 반복문 - 찾은 요소들을 하나씩 찾기
    for(const el of allIncludes){
        // 데이터 속성 - HTML요소에서 파일 경로 읽어오기
        const includePath = el.dataset.includePath;
        // 조건문 - 경로가 있는지 확인
        if(includePath){
            // 예외처리 - 에러 발생 대비
            try {
                // 네트워크 요청 - 외부 파일 가져오기
                const html = await fetch(includePath);
                // 텍스트 반환 - 응답을 HTML 문자열로 변환
                const includeText = await html.text();
                // DOM 조작 - 기존 요소를 새 내용으로 교체
                el.outerHTML = includeText;
            } catch (error) {
                // 실패시 콘솔에 메시지 출력
                console.error('인클루드 로드 실패', error);
            }
        }
    }
})

// SWIPER JS
const swiperSlider = new Swiper('.slide-banner', {
  loop: true,
  autoplay: true,
  speed: 500,
  scrollbar:false,
  Infinity: true,
  navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
  },
  effect:'fade'
});