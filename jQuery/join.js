$(document).ready(function(){
    $("#join").submit(function(){
        var u_id = $("input[name='u_id']").val();
        var u_pw = $("input[name='u_pw']").val();
        var u_pw2 = $("input[name='u_pw2']").val();
        var addr = $("input[name='addr']").val();
        var email = $("input[name='email']").val();
        var gender = $("input[name='gender']");
        var hobby = $("input[name='hobby']");
       
        if(!u_id){
            alert("아이디를 입력하시오");
            $("input[name='u_id']").focus();
            return false;
        }
        if(!u_pw){
            alert("비밀번호를 입력하시오");
            $("input[name='u_pw']").focus();
            return false;
        }
        if(u_pw != u_pw2){
            alert("비밀번호와 비밀번호 확인이 일치하지 않음");
            $("input[name='u_pw2']").focus();
            return false;
        }
        if(!addr){
            alert("주소를 입력하시오");
            $("input[name='addr']").focus();
            return false;
        }
        
        if(!email){
            alert("이메일을 입력하시오");
            $("input[name='email']").focus();
            return false;
        }
        
        if(!gender.is(":checked")){
            alert("성별을 체크하시오");
            $("input[name='gender']:eq(0)").focus();
            return false;
        }
        
        if(!hobby.is(":checked")){
            alert("취미를 하나 이상 체크하시오");
            $("input[name='hobby']:eq(0)").focus();
            return false;
        }
        
        gender = $("input[name='gender']:checked").val();

        var resHobby = $("input[name='hobby']:checked"); 
        // 취미는 한개이상 선택 할 수 있음.

        var selHobby = "";
        resHobby.each(function(){
            selHobby += $(this).val() + "★";
        });

        var job = $("select[name='job']>option:selected").index();
        if(job<1){
            alert("직업을 선택하시오");
            $("select[name='job']").focus();
            return false;
        }
        

        var resjob = $("select[name='job']>option:selected").val();


        var printRes = "";

        printRes += "<h2>회원가입 완료 되었습니다.</h2>";
        printRes += "<ul><li>아이디: " + u_id + "</li>";
        printRes += "<li>비밀번호: " + u_pw + "</li>";
        printRes += "<li>비밀번호확인: " + u_pw2 + "</li>";
        printRes += "<li>주소: " + addr + "</li>";
        printRes += "<li>성별: " + gender + "</li>";
        printRes += "<li>이메일: " + email + "</li>";
        printRes += "<li>취미: " + selHobby + "</li>";
        printRes += "<li>직업: " + resjob + "</li></ul>";
        
        $("body").html(printRes);
        

            return false;  // 아닌 값으로 조건을 걸어서 사용 할 것

    });
});