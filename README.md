## **나만의 Pokemon Dex 만들기**

## 필수 기능(총 6개)

### 1. **Git 브랜치 전략 사용**
- **구현**: prop-drilling, context, redux-toolkits 브랜치를 두어 프로젝트 관리

### 2. **페이지 라우팅 구현**
- **구현**: react-router-dom을 사용하여 home, dex, detail 페이지 라우팅 구현

### 3. **도감 페이지 구성**
- **구현**: Dashboard, PokemonCard, PokemonList 컴포넌트를 사용하여 도감 페이지 구현

### 4. **디테일 페이지 구현**
- **구현**: queryString을 통해 id를 전달하여 해당 포켓몬의 디테일 페이지 구현

### 5. **알림 기능 구현**
- **구현**: 초기에 alert로 구현 후 도전 기능의 toast 라이브러리를 사용하여 구현하는 것으로 변경

### 6. styled-components로 **스타일링 설정**
- **구현**: styled-components를 사용하여 global style, component style을 지정

## 도전 기능(총 4개)

### 1. **Redux Toolkit으로 리팩터링하기**
- **구현**: redux-toolkits 브랜치에 작업 완료

### 2. **디테일 페이지에 '추가' 버튼 추가하기**
- **구현**: app 컴포넌트에 선택된 포켓몬을 저장하여 디테일 페이지에서도 추가, 삭제가 가능하도록 구현

### 3. **리스트 페이지의 데이터를 유지시키기**
- **구현**: prop-drilling, context에서는 localStorage를 사용 redux-toolkits에서는 persist-redux를 사용하여 구현

### 4. **UI 라이브러리 활용하기**
- **구현**: react-toastify를 사용하여 토스트 화면 구현

---

## 구현 결과
### 메인 페이지
![스크린샷 2025-05-24 225820](https://github.com/user-attachments/assets/6cb484a8-5132-4a9c-ae47-1f5cf0b37103)

### 도감 페이지
![스크린샷 2025-05-24 225834](https://github.com/user-attachments/assets/eee56abe-f0c2-44f3-ac09-e7d6775eace0)

### 디테일 페이지
![스크린샷 2025-05-24 225857](https://github.com/user-attachments/assets/6e4a74f9-81a5-4a11-9a02-e6e6203b9f27)


