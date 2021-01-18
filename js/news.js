
window.onload=function(){
    document.getElementById("loader").style.display='block';
    var b=baseUrl();
        if(localStorage.getItem("access_token") === null)
        {
            window.location="index.html";
    
        }
        else if(localStorage.getItem("access_token"))
        {
            $(document).ready(function(){
             var bearer = "Bearer " + localStorage.getItem("access_token");
                fetch(b+'news/getNews?format=json',{
                    method: 'GET',
                    headers:{
                        Authorization:bearer
                    }
              
            })
             .then((response) => response.json())
             .then((data) => {
                for(const i in data['news'])
                {
                    console.log(i , data['news'][i] );
                    console.log(data['news'][i]['title']);
                    var disp='<div class="mb-5 border-bottom mt-3 row justify-content-between"><div class="col-sm-4 mx-2"><img class="imgg responsive" style="margin-bottom:10px;" src=%imgsrc% height="250px" width="350px"></div><div class="col-sm-7 mx-2 "><h2 class="mt-0 fontt">%title%</h2><h5 class="text-muted">by %author% %date%</h5><p class="content" style="color:#222224;">%content%</p></div></div>';
                    //var newhtml = html.replace('%id%',data['news'][i]['id']);
                    var newhtml = disp.replace('%title%',data['news'][i]['title']);
                    newhtml = newhtml.replace('%content%',data['news'][i]['content']);
                    newhtml=newhtml.replace('%imgsrc%',data['news'][i]['image']);
                    console.log(data['news'][i]['imageUrl']);
                    newhtml = newhtml.replace('%date%',data['news'][i]['date']);
                    newhtml = newhtml.replace('%author%',data['news'][i]['author']);
                    document.querySelector('.news-add').insertAdjacentHTML('beforeend' , newhtml);
                    setTimeout(3000);
                }
                i++;
                
                })
                .catch((error) => {
                    console.log("reset client error-------",error);
               });
            
            });
            setTimeout(function(){
                document.getElementById("loader").style.display='none';
            }, 3000)
        
            }
                
            
            
            
        }
    

    