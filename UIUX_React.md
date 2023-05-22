---
marp: true
theme: gaia
paginate: true
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 1rem;
  }
---



# UI/UX 프로그래밍 - React Tutorial

발표자: 김건오

---

## Outline (1)

<div class="columns">

<div>

### HTML

- HTML 이란?
- HTML 문서 구조, 태그와 요소

</div>

<div>

### CSS

- CSS 란?
- Inline, Internal, and External Stylesheets
- Selectors
- 자주 사용하는 스타일링
- Tips

</div>

</div>

---

## Outline (2)

<div class="columns">

<div>

### JavaScript

- JavaScript 개요
- 변수 및 연산자
- 조건문과 반복문
- 함수 (ES6 기반)

</div>

<div>

### React.js

- React 소개 & 프레임워크란?
- React 프로젝트 만들기
- State, Props, and Hooks
- Todo App 만들기

</div>

---

## HTML 이란?

- HTML - Hyper Text Markup Language
  - 웹사이트를 구성하는 Markup Language

- Markup Language
  - 문서의 구조요 내용을 구분하고 구성할 수 있게 해주는 언어

---

## HTML 문서구조, 구성요소, 태그

<div class="columns">

<div>

오른쪽 코드 결과물 삽입

</div>

<div>

```html
<!DOCTYPE html> <!-- 선언문 -->
<html> <!-- HTML 시작 -->
  <head> <!-- 머리글 시작 -->
    <title>웹페이지 제목</title>
  </head> <!-- 머리글 끝 -->
  <body> <!-- 본문 -->
    <div id="root">
      <h1>Header 1</h1>
      <p>
        텍스트는 p 태그
        <b>볼드체는 b 태그</b>
        <i>Italic은 i 태그</i>
      </p>
      <a href="https://www.google.com">링크는 a + href</a>
      <img src="https://picsum.photos/200/300" />
      <p>리스트는 ul과 li 태그</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  </body> <!-- 본문 끝 -->
</html>
```

</div>

</div>

---

## CSS 란?

- 웹페이지의 디자인과 레이아웃을 지정하는 StyleSheet 언어
  - [파일이름].css 확장자명을 갖는다.
- CSS의 중요성
  - 시각적인 디자인
  - 일관성 유지
  - 유지보수의 용이성
  - 반응형 디자인
- 3가지 CSS 적용방법: Inline, Embeded, External

---

## Inline Styling

<div class="columns">

<div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>웹페이지 제목</title>
  </head>
  <body>
    <p style="color: red; font-size: 24px;">
      빨간 24픽셀 텍스트
    </p>
  </body>
</html>
```

</div>

<div>

![Inline Styling Example](./assets/InlineStylingExample.png "Inline Styling Example")

</div>

</div>

---

## Embeded Styling

<div class="columns">

<div>

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Embedded Styling 예시 -->
    <style>
      p {
        /* 모든 <p> 태그를 파란색으로 변경 */
        color: blue;
      }
    </style>
    <!-- Embedded Styling 예시 끝 -->
  </head>
  <body>
    <p>텍스트</p>
  </body>
</html>
```

</div>

<div>

![Embedded Styling Example](./assets/EmbeddedStylingExample.png "Embedded Styling Example")

</div>

</div>

---

## External Styling

<div class="columns">

<div>

<h4>index.html</h4>

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./styles.css">
    <title>웹페이지 제목</title>
  </head>
  <body>
    <p>텍스트</p>
    <p>다른 텍스트</p>
  </body>
</html>
```

</div>

<div>

<h4>index.css</h4>

```css
.text {
  font-size: 24px;
  color: black;
}

.another-text {
  font-size: 36px;
  color: purple;
}
```

</div>

</div>

---

## External Styling

![External Styling Example](./assets/ExternalStylingExample.png "External Styling Example")

---

## CSS Selector

- 모든 텍스트가 같은 색, 같은 크기, 같은 위치에 있으면 재미없는 웹사이트
- HTML Attribute를 이용하여 구분
  - 각각의 태그에 이름을 붙여주는 법
  - `class`, `id`, `type` 를 사용할 수 있다.
- HTML에 attribute를 우선 선언하고 CSS에서 스타일을 설정

---

## `class`, `id`, `type` Attribute 사용법

<div class="columns">

<div>

### HTML

```html
<div class="this-is-class">
  <p id="this-is-id">Random</p>
  <p type="this-is-type">Hello</p>
</div>
```

</div>

<div>

### CSS

```css
```

</div>

</div>

---

## 자주 사용하는 스타일링

<div class="columns">

<div>

- 크기는 `width`와 `height`
- 여백은 `padding` 혹은 `margin`
- 정렬은 `justify-content`와 `align-content`
- 색상관련은 `color`, `font-color`, `background-color`
- 가로정렬을 원할때는 `flex-direction: row`, 기본값은 `column`

</div>

<div>

![width:500px](./assets/margin-padding.png "Example Styling")

</div>
</div>

---

## Tips

- UI 구현에서 가장 중요한 것은 네모를 그리는 것
- 재활용 가능한 컴포넌트를 만들어서 사용하는 것이 편리
- `flex`를 이용하여 레이아웃을 구성하는 것이 편리

---

## JavaScript 개요

<div class="columns">

<div>

- JavaScript는 웹 브라우저에서 실행되는 언어로 웹페이지를 동적으로 만들기 위해 사용하는 언어
- 페이지 이동, 프레임 관리, 히스토리 관리 등 다양한 기능 수행
- 일반적으로 `css`처럼 `html` 파일 내부에 작성 혹은 `js` 파일로 작성 후 링크

</div>

<div>

- `<head>` 태그 내부에 작성
  - 웹브라우저가 HTML을 `<head>`부터 읽기 때문에 `<body>` 태그보다 먼저 실행

```html
<head>
  <!-- 내부 작성법 -->
  <script>
    // JavaScript 코드 작성
  </script>
  <script src="./index.js"></script> <!-- js 파일 링크 -->
</head>
```

</div>

</div>

---

## 변수 선언 및 연산자

<div class="columns">

<div>

```javascript
let a = 1; // 변수
const b = 2; // 상수
var c = 3; // ES6 이전에 사용하던 변수 선언 방식
```

</div>

<div style="margin-bottom:10px">

```javascript
a + b; // 3
a - b; // -1
a * b; // 2
a / b; // 0.5
a % b; // 1
a ** b; // 1
a++; // 2
a--; // 1
a += b; // 3
a -= b; // 1
a *= b; // 2
a /= b; // 1
a %= b; // 1
a **= b; // 1
```

</div>

</div>

---

## 조건문과 반복문

<div class="columns">

<div>

```javascript
if (a > b) {
  console.log("a가 b보다 큽니다.");
} else if (a < b) {
  console.log("a가 b보다 작습니다.");
} else {
  console.log("a와 b가 같습니다.");
}
```

</div>

<div>

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (a < b) {
  console.log("a가 b보다 작습니다.");
  a++;
}
```

</div>

</div>

---

## 함수

```javascript
function add(a, b) {
  return a + b;
}

// es6 이후
const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;
```

---

<h1 style="text-align: center; margin-top: 20%">Q&A</h1>

<p style="text-align: center; margin-top: 15%; font-size: 24px">해당 PPT는 <i>Marp</i>를 이용하여 HTML 및 마크다운 언어로 작성되었습니다</p>

</center>
</div>

---

<center>

<h1 style="margin-top: 20%">감사합니다!<h1>

</center>
