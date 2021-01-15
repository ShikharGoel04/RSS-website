function showButton(){
	document.getElementById("button").style.display='block';
	document.getElementById("otp1").style.display='block';

  }
  
 
  function hideButton(){
	document.getElementById("otp").style.display='none';
  }
function authenticate()
{
	var phoneno = /^\d{10}$/;
	var phone=document.getElementById("phone");
	phone.disabled = true; 
	const ph=phone.value;

	if(!ph.match(phoneno))
	{
		alert("Enter valid 10 digit phone number");	
	}
	else
	{
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
	}

	function otp()
	{
		
		var otp1=document.getElementById("otp1");
		var phone=document.getElementById("phone");
		
		var status;
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
		console.log(responseJson);
		console.log(responseJson.body);
		const token=btoa(responseJson.access_token);
		 console.log(token);
		 
		 window.localStorage.setItem("access_token", responseJson.access_token);
		 
		})
	 .catch((error) => {
		 console.log("reset client error-------",error);
		//  if(status==403)
		//  {
		// 	 alert("enter correct OTP");
		//  }

	});
	$('#myModal').modal('hide');
	
	}
	
	
	
	function vid()
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

	function magazine()
	{
		var access_token=localStorage.getItem("access_token");
		console.log(access_token);
		if(access_token)
		{
			window.location="magazine.html";
		}
		else
		{
			alert("Please login first");
		}
		
		
	}

	function news()
	{
		var access_token=localStorage.getItem("access_token");
		console.log(access_token);
		if(access_token)
		{
			window.location="news.html";
		}
		else
		{
			alert("Please login first");
		}
		
		
	}

