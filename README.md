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