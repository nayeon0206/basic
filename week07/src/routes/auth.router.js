// src/routes/auth.router.js

// 회원가입
router.post('/signup', async (req, res) => {
    // 회원가입 로직
    // 실제 로직은 작성하지 않습니다.
    res.send("회원가입 엔드포인트");
   })
   
   // 로그인
   router.post('/login', async (req, res) => {
    // 로그인 로직 
    // 실제 로직은 작성하지 않습니다.
    res.send("로그인 엔드포인트");
   })
   
   // 로그아웃
   router.post('/logout', (req, res) => {
     // 회원가입 로직 
     // 실제 로직은 작성하지 않습니다.
     res.send("로그아웃 엔드포인트");
   })