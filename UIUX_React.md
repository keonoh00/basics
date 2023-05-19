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
- Padding and Margin
- Text Styling
- Flexbox
- Styling Examples

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

- React 소개
- 프레임워크란?
- React 프로젝트 만들기
- State, Props, and Hooks
- Component 만들기

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
    <p style="color: red; font-size: 24px;">빨간 24픽셀 텍스트</p>
  </body>
</html>
```

</div>

<div>

### 결과물



</div>

</div>

---

## Embeded Styling

<div class="columns">

<div>

### 결과물

</div>

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



---

<h1 style="text-align: center; margin-top: 20%">Q&A</h1>

<p style="text-align: center; margin-top: 15%; font-size: 24px">해당 PPT는 <i>Marp</i>를 이용하여 HTML 및 마크다운 언어로 작성되었습니다</p>

</center>
</div>

---

<center>

<h1 style="margin-top: 20%">감사합니다!<h1>

</center>
