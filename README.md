# 포트폴리오 사이트 만들기 프로젝트

이 튜토리얼은 하나의 웹사이트를 여러 가지 프레임워크를 사용하여 만드는 방법에 대해 소개합니다.
웹 개발자들은 종종 다양한 프레임워크를 이용하여 작업하게 됩니다.
이 과정에서 여러 가지 프레임워크들을 어떻게 적용하는지 알아보고,
각 프레임워크들의 장단점을 비교 분석하며 학습하게 됩니다.

1. [vite](https://github.com/webstoryboy/port2023-vite)를 이용하여 사이트를 제작합니다.
2. [react.js](https://github.com/webstoryboy/port2023-react)를 이용하여 사이트를 제작합니다.
3. [vue.js](https://github.com/webstoryboy/port2023-vue)를 이용하여 사이트를 제작합니다.
4. [next.js](https://github.com/webstoryboy/port2023-next)를 이용하여 사이트를 제작합니다.

이 튜토리얼은 포트폴리오 컨셉의 사이트를 4가지 버전으로 반복하여 만들어 보면서, 프론트앤드 개발의 시발점이 될 수 있는 튜토리업입니다.
자바스크립트 프레임워크를 통해 사이트를 효율적으로 만들어 보는 방법을 익힙니다.
깊이 배우기 보다는 다양한 방법을 사용하여 흐름과 감각을 익히기 위한 튜토리얼입니다.

## 완성작 보기

미리보기 :

## 사용 스택
## ☠ 현재 작업중 Repository 👻

- 🐥 DX-Cloud    /  [미리보기](https://dx-cloud.vercel.app/) <br>  /  ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript) ![Devextreme](https://img.shields.io/badge/-Devextreme-FF00FF?style=flat-rounded&logo=DevExtreme&logoColor=white)![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-black?style=flat-square&logo=TailwindCSS) <br> / DevExtreme위주의 간단한 웹페이지  [작업중...](https://github.com/damoayo/DX-Cloud)
- 🐥 music_box    /    [미리보기](https://) <br>  /  ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)![Next JS](https://img.shields.io/badge/-Next-black?style=flat-square&logo=next.js&logoColor=white)![zustand](https://img.shields.io/badge/-zustand-slategrey?style=flat-rounded&logo=zustand)  ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-black?style=flat-square&logo=TailwindCSS)![shadcn](https://img.shields.io/badge/-shadcn-royalblue?style=flat-rounded&logo=shadcn)&nbsp;![radixUI](https://img.shields.io/badge/-radixUI-coral?style=flat-rounded&logo=radixUI&logoColor=white) <br> / NextJS(버전14) 위주의 YoutubeMusic 웹사이트 [작업중...](https://github.com/damoayo/music_box)
- 🐥 mamapaiBooks    /    [미리보기](https://)  <br> /  ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)![Next JS](https://img.shields.io/badge/-Next-black?style=flat-square&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-black?style=flat-square&logo=TailwindCSS) <br> / NextJS(버전15) 위주의 서적 정보 제공 및 후기 작성과 공유를 위한 모바일 웹 플랫폼 [작업중...](https://github.com/damoayo/mamapaiBooks)
![Vite](https://img.shields.io/badge/-Vite-black?style=flat-square&logo=Vite&logoColor=white)
![Gsap](https://img.shields.io/badge/-Gsap-black?style=flat-square&logo=Gsap)
![Lenis](https://img.shields.io/badge/-Lenis-black?style=flat-square&logo=Lenis&logoColor=white)
![Netlify](https://img.shields.io/badge/-Netlify-black?style=flat-square&logo=Netlify)

- vite(https://ko.vitejs.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행

- vite를 설치합니다. `npm create vite@latest`
- gsap를 설치합니다. `npm install gsap`
- lenis를 설치합니다. `npm install @studio-freight/lenis`
- vite를 설치 후 환경 설정을 합니다. `vite.config.js`파일을 만들고 다음과 같이 작성합니다.

```javascript
export default {
  root: "src",
  build: {
    outDir: "../public",
  },
};
```
