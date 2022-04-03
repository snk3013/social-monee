# SocialMonee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# SocialMonee
이 프로젝트는 
* Angular CLI 버전 13.3.1
* typescript 버전 4.6.3
* node.js 버전 16.14.2
* npm 버전 8.5.0
로 생성되었습니다.

## 개발 서버
ng serve 명령어로 개발 서버용으로 실행 합니다. 
http://localhost:4200/. 
소스 파일을 변경하면 응용 프로그램이 자동으로 다시 로드됩니다.

## 요구사항에 따른 문제해결 전략
Facebook Feed처럼 글을 올리고 그 글에 댓글을 달아 사용자간 소통이 가능한 소셜피드 서비스를 구현하고자 한다.

1) 사용자는 첫 진입 시 ID/Password를 입력하여 접속할 수 있다
  - ID: admin / Password: 1234로 로그인 가능하다.
  - 로그인 성공시 알림과 함께 글을 올릴 수 있는 컴포넌트(app-dashboard)가 보여지고 로그인 컴포넌트(app-login)가 사라진다.(true/false 처리)
  - ID나 Password가 틀렸을 경우 loginForm 위로 안내 문구가 나온다.

2) 피드화면 상단에 글을 입력하고 포스트 할 수 있다.
   글 입력 부분 아래는 작성한 글의 카드가 나열된다.
  - 글을 올릴 수 있는 컴포넌트(app-dashboard)의 글 작성란에 작성하고 공유하기 버튼을 누르면 아래로 작성된 글 카드가 나열된다.
  - 글작성란에 글을 적지 않고 공유하기를 누르면 경고 알람이 뜬다.(글카드가 생성되지 않는다.)
  - 나열 순서는 최신 작성된 글 카드가 제일 위로 올라온다.
  - 우측 상단 삭제 버튼을 누르면 해당 글 카드가 삭제된다. 

3) 각 글카드에는 댓글을 달 수 있다.
   글카드에는 글과 댓글 수가 표기되고 카드 하단에 댓글이 나열된다.
  - 각 글카드에 댓글 수가 표시되어 있으며 해당 댓글수를 누르면 댓글을 작성할 수 있는 창이 뜬다.
  - 댓글에 내용을 적지 않고 댓글달기를 누르면 경고 알람이 뜬다.(댓글이 생성되지 않는다.)
  - 댓글 나열 순서는 최신 작성된 댓글이 제일 위로 올라온다. 
