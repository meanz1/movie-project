### 🌟 프로젝트 목적
강의를 참고해서 리액트 기능을 익히고, 도전해보고 싶은 기능을 추가해서 구현하는 개인 사이드 프로젝트

### 📍 주요 기능

### 1. 드롭박스로 원하는 평점 클릭해서, 그 평점에 맞는 영화 추출하기
![](https://velog.velcdn.com/images/zndnfjqbd/post/c0f55044-6efd-4665-b386-aa1482717159/image.gif)

**도전한 점 및 뿌듯한 점**
- 컴포넌트를 많이 나누어 사용했다.(배너 부분, 영화 카드 등)
- useEffect와 useState를 이용해서 minRate 상태가 변할 때 API요청을 해서 받아오게 만들었다.   
  (현재는 reducer+context 상태관리를 거쳐 Redux 라이브러리로 상태관리중)

### 2. 상세 페이지 컨텐츠 추가
![](https://velog.velcdn.com/images/zndnfjqbd/post/1a379434-ccaf-457f-9763-7efd31aaeaa6/image.gif)

**도전한 점 및 뿌듯한 점**
- Context API를 사용해서 전역 상태 관리를 했다.
- 파파고 API를 이용해서 번역 기능을 완성했다.
- CORS이슈를 서버 단에서 해결했다.

**아쉬운 점 및 개선할 점**
- 배포 사이트에서는 번역 기능 안되는 이슈해결
