# JWT-TEST

1. api 설계
 
 [user]

 1. 회원 목록 조회 => GET /user/
    
    SUCCESS
      유저 객체 반환
    
    ERROR 
      목록이 없을 시 204 반환.
 
 2. 특정 회원 조회 => GET /user/:id
    
    SUCCESS
      유저 객체 반환
    
    ERROR
      찾으려는 목록이 없을시 404 반환.
 
 3. 회원 등록 => POST /user
     
    SUCCESS
    
    ERROR
      userId가 중복이라면 409 반환 

    추가 예정 : 
 
 4. 회원 삭제 => DELETE /user/:id
     
    SUCCESS
      유저 객체 반환
    
    ERROR
      삭제하려는 목록이 없을시 404 반환.
 
 5. 회원 수정 => PUT/user/:id
    
    SUCCESS
      유저 객체 반환
    
    ERROR
      찾으려는 목록이 없을시 404 반환.
 
 [board]

  1. 게시판 목록 조회 => GET /board
    
    SUCCESS
      게시판 객체 반환
    
    ERROR 
      목록이 없을 시 204 반환.
 
 2. 특정 게시판 목록 조회 => GET /board/:id
    
    SUCCESS
      게시판 객체 반환
    
    ERROR
      찾으려는 목록이 없을시 404 반환.
 
 3. 게시판 작성 => POST /board
     
    SUCCESS
    
    ERROR
      

    추가 예정 : 
 
 4. 게시판 삭제 => DELETE /board/:id
     
    SUCCESS
      게시판 객체 반환
    
    ERROR
      삭제하려는 목록이 없을시 404 반환.
 
 5. 게시판 수정 => PUT/board/:id
    
    SUCCESS
      게시판 객체 반환
    
    ERROR
      찾으려는 목록이 없을시 404 반환.


3. express-validator를 통해 유효성 검사 및 리팩토링
