// function showMore(title){
//     //removes the link
//     document.getElementById('link').remove();
//     //shows the #more
//     document.getElementById(title).style.display = "block";
// }
function hideLoader() {
    $('#loading').hide();
}
window.onload=function(){
   
    if(localStorage.getItem("access_token") === null)
    {
		window.location="index.html";

	}
	else if(localStorage.getItem("access_token"))
    {
		$(document).ready(function(){
         var bearer = "Bearer " + localStorage.getItem("access_token");
         var b=baseUrl();
            fetch(b+'profile/profile',{
                method: 'GET',
                headers:{
                    Authorization:bearer
                }
          
        })
         .then((response) => response.json())
         .then((data) => {
          
                        var phone=data['user']['phone'];
                        var email=data['user']['email'];
                        var orgSub=data['user']['is_orgSubscribed'];
                        var panSub=data['user']['is_pncSubscribed'];
                        var startDate=data['user']['subscription_start'];
                        var endDate=data['user']['subscription_end'];
                        console.log(phone);
                        console.log(orgSub);
                        // var disp;
                        // console.log(i , data['user'][i] );
                        // console.log(data['user'][i]['title']);
                        // var description=data['user'][i]['description'];
                        // var trimmedString = description.substring(0, 1000);
                        // var descLength=description.length;
                        // // if(descLength>1000)
                        // // {
                        // //   disp='<div class="mb-5 border-bottom mt-3"><div class="col-sm-3"><iframe id="ytplayer" class="responsive-iframe " type="text/html" width="350px" height="250px"src="https://www.youtube.com/embed/%videoid%?autoplay=0&origin=http://example.com"frameborder="0"></iframe></div><div class="col-sm-1"></div><div class="col-sm-8"><h4 class="fontt">%title%</h4><p class="content">%description% . . .<div id=%title% style="display:none;"><p>%desc%</p></div></p></div><a href="javascript:showMore(%title%)" id="link">Read More >></a></div>';
                        // // }
                        // // else
                        // // {
                        //     disp='<div class="row mt-3 mb-5 border-bottom"><div class="col-sm-4"><iframe id="ytplayer" class=" responsive" type="text/html" width="350px" height="250px"src="https://www.youtube.com/embed/%videoid%?autoplay=0&origin=http://example.com" modestbranding="1" frameborder="0" allowfullscreen ></iframe></div><div class="col-sm-8"><h5 class="fontt mt-0 mx-2">%title%</h5><p class="content mx-2">%description%</p></div></div>'
                        // // }
                        // //var newhtml = html.replace('%id%',data['news'][i]['id']);
                        // var newhtml = disp.replace('%videoid%',data['user'][i]['videoId']);
                        // newhtml = newhtml.replace('%title%',data['user'][i]['title']);
                        // newhtml = newhtml.replace('%description%',trimmedString);
                        // // newhtml = newhtml.replace('%desc%',description);
                        // document.querySelector('.vid-add').insertAdjacentHTML('beforeend' , newhtml);
                        // setTimeout(3000);
                  
            
            })
            .catch((error) => {
                console.log("reset client error-------",error);
           });
        
        });
       
    
        }
       
        
        
        
    }
