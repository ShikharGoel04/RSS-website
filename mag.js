window.onload=function(){
    if(localStorage.getItem("access_token") === null)
    {
		window.location="index.html";

	}
	else if(localStorage.getItem("access_token"))
    {
		$(document).ready(function(){
        var bearer ='Bearer '+localStorage.getItem("access_token");
            console.log(bearer);
            fetch('https://cors-anywhere.herokuapp.com/https://rocky-bayou-35696.herokuapp.com/magazine/getMagazine',{
                method: 'GET',
                contentType: 'application/json',
                headers: {
                    'Authorization':"Bearer "+localStorage.getItem("access_token")
                }
          
        })
         .then((response) => response.json())
         .then((data) => {
            for(const i in data['magazine'])
            {
                // console.log(i , data['magazine'][i] );
                var html = '<div class="column"><h6 style="text-align: center;">%title%</h6><a  id = %id% onclick="reply_quick(this.id)" href="magazineview.html"><img src="%image%" alt="organiser" style="width:100%"></a><p style="text-align: center;" >%date%</p><h4 style="text-align: center;">%author%</h4></div>';
                var newhtml = html.replace('%id%',data['magazine'][i]['id']);
                newhtml = newhtml.replace('%title%',data['magazine'][i]['title']);
                newhtml = newhtml.replace('%image%',data['magazine'][i]['image']);
                newhtml = newhtml.replace('%date%',data['magazine'][i]['date']);
                newhtml = newhtml.replace('%author%',data['magazine'][i]['author']);
        
                document.querySelector('.row1').insertAdjacentHTML('beforeend' , newhtml);
                console.log(i);
            }
                    i++;
            
            })
            .catch((error) => {
                console.log("reset client error-------",error);
           });
        
        });
        }
            
        
        
        
    }

    

    var url = 'https://rocky-bayou-35696.herokuapp.com/magazine/getMagazine?format=json';
    
    function reply_quick(cid)
    {
        $.getJSON(url, function(data)
       {
           console.log(data);
        document.getElementById('test1').src =data['magazine'][cid]['data'];
        console.log(data['magazine'][cid]['data']);
       //  console.log(a);
        console.log('h1');
        console.log(cid);
        localStorage.setItem("cid",cid);
        });
    }


   