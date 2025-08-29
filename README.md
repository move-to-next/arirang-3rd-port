# arirang-3rd-port
## 작업개요
### 주제 - 과거부터 현재까지의 역사를 이어온 아리랑을 소개
### 작업기여도 - 기존사이트 없이 아리랑 주제 하나만으로 로고,패턴,웹디자인,퍼블리싱 100%
## 작업현황
- 08.22 - 아리랑 정보 수집 및 사이트 구조 설정.
- 08.23 - 로고 제작 및 스타일 가이드 완료.
- 08.24 - 웹디자인 시작.
- 08.25 - 웹디자인 완료.
- 08.26 - 사이트맵 및 클래스명 설정완료.
- 08.27 - 퍼블리싱 시작.
- 링크 - https://www.figma.com/design/8GkK8SQLHUdvKUoNZXek4T/%EC%95%84%EB%A6%AC%EB%9E%91-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&p=f&t=AxTzAt81XCNaC2x2-0

## 특이사항
- 이번 프로젝트는 @import 대신 @use를 사용할 생각.
- 추후 Dart Sass 3.0.0 릴리스 되면 @import가 삭제될 수 있음.(@use, @forward 규칙사용 권장)
- @import는 변수/함수등이 전역으로 섞여서 어떤파일의 어떤변수인지 출처를 파악하기 어렵지만
- @use..as를 사용하여 네임스페이스의 충돌을 방지하고 명확하게 변수를 가져올수있어 코드가독성과 유지보수가 쉽다.
### 사용예시
@use "variables" as vars; // variables.scss라는 파일을 vars라는 네임스페이스로 가져옴.
@use "common"; // common.scss라는 파일을 가져오고 파일자체가 네임스페이스가 된다.

@use "variables" as vars;
color: vars.$black;

@use "common";
@include common.button-style; (common.scss에 있는 믹스인 가져옴.)
color: common.$black; (common.scss에 있는 변수 가져옴.)