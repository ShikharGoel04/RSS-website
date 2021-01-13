function otp()
{
    var otp1=document.getElementById("otp1");
    var phone=document.getElementById("phone");
	//e.preventDefault();
	fetch('https://rocky-bayou-35696.herokuapp.com/profile/login',{
		method: 'POST',
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
    username: phone.value,
    password: otp1.value
  }),
   credentials: "same-origin"
})
 .then((response) => response.json())
 .then((responseJson) => {
     console.log(responseJson.access_token);
	 window.localStorage.setItem("access_token", responseJson.access_token);
 })
 .catch((error) => {
     console.log("reset client error-------",error);
});
}
