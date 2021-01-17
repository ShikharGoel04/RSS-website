window.onload=function(){
    if(localStorage.getItem("access_token") === null)
    {
		window.location="index.html";

	}
	else if(localStorage.getItem("access_token"))
    {
		$(document).ready(function(){




            var bearer = 'Bearer ' + localStorage.getItem("access_token");
            fetch('https://cors-anywhere.herokuapp.com/https://rocky-bayou-35696.herokuapp.com/videos/getVideos',{
                method: 'GET',
                headers:{
                    Authorization:bearer
                }
          
        })
         .then((response) => response.json())
         .then((data) => {
            for(const i in data['videos'])
                    {
                        console.log(i , data['videos'][i] );
                        console.log(data['videos'][i]['title']);
                        var disp='<div class="mb-5 border-bottom mt-3"><div class="col-sm-3"><iframe id="ytplayer" class="responsive-iframe " type="text/html" width="350px" height="250px"src="https://www.youtube.com/embed/%videoid%?autoplay=0&origin=http://example.com"frameborder="0"></iframe></div><div class="col-sm-1"></div><div class="col-sm-8"><h4 class="fontt">%title%</h4><p class="content">%description%</p></div></div>';
                        //var newhtml = html.replace('%id%',data['news'][i]['id']);
                        var newhtml = disp.replace('%videoid%',data['videos'][i]['videoId']);
                        newhtml = newhtml.replace('%title%',data['videos'][i]['title']);
                        newhtml = newhtml.replace('%description%',data['videos'][i]['description']);
                        document.querySelector('.vid-add').insertAdjacentHTML('beforeend' , newhtml);
                        setTimeout(3000);
                    }
                    i++;
            
            })
            .catch((error) => {
                console.log("reset client error-------",error);
           });
        
        });
        }
            
        
        
        
    }
