1. POST /users/login에 성공한 경우 

  refresh access Token 을 발급해줍니다.
  
2. GET /check/:userId

  userId를 params로 받음. 
  왜? 디비에 접근해서 refreshToken을 검증하기 위해서

3. POST /users/logout

  logout 시 refreshToken : null로 초기화
  cookie 삭제

4. 코드 리팩토링과 logout을 진행할 예정.
  
  리팩토링 board models과 user models 합치기
  refreshToken에 user정보를 담아야 하는 것인지