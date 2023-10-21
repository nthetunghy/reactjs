
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [dataLogin , setDataLogin] = useState({
    userName: null ,
    passWord: null,
  })
  const handleChangeInput = (event) =>{
    setDataLogin((pre)=>{
      return {
        ...pre,
      [event.target.name] : event.target.value
      }
    })
  }
  const handleLogin = ()=>{

    fetch("http://localhost:8080/users",{
      method : "GET",
      headers:{
        "Content-Type":"application/json",
      },
    }).then((res)=>{
      return res.json();
    })
    .then((data)=>{
      let checkAccount = false;
      for(let value of data){
        if(value.userName == dataLogin.userName){
          checkAccount = true;
          if(value.password === dataLogin.passWord){
            localStorage.setItem("token",value.token);
            navigate("/dashboard")
          }else{
            console.log("tt mk khong chính xác");
          }
        }
        
      }
      if(!checkAccount){
        alert("khong co tai khoan")
      }
    })
  }
  return <div className="login_container">
   <div>
   <div>
      <input type="text"  placeholder="Tài khoản..." name="userName" onChange={(e)=> handleChangeInput(e)}/>
    </div>
    <div>
      <input type="password" placeholder="mật khẩu" name="passWord" onChange={(e)=> handleChangeInput(e)}/>
    </div>
    <div>
      <a onClick={handleLogin}>Đăng nhập</a>
    </div>
  </div>
   </div>
};

export default Login;
