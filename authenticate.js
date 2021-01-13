function showButton(){
	document.getElementById("button").style.display='block';
	document.getElementById("otp1").style.display='block';

  }
  
 
  function hideButton(){
	document.getElementById("otp").style.display='none';
  }
function authenticate()
{
	var phone=document.getElementById("phone");
	const ph=phone.value;
	console.log(ph);
	//e.preventDefault();
	fetch('https://rocky-bayou-35696.herokuapp.com/profile/register',{
		method: 'POST',
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
    username:ph,
    phone:ph,
  }),
   credentials: "same-origin"
})
 .then((response) => response.json())
 .then((responseJson) => {
     console.log(responseJson);
	
 })
 .catch((error) => {
     console.log("reset client error-------",error);
});
showButton();
hideButton();
		
	}
	
	
	function video()
	{
		var access_token=localStorage.getItem("access_token");
		console.log(access_token);
		if(access_token)
		{
			window.location="video.html";
		}
		else
		{
			alert("Please login first");
		}
		
		
	}

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
$('#myModal').modal('hide');

}
