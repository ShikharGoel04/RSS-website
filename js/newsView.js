window.onload=function(){
if(localStorage.getItem("index") === null)
{
    window.location="news.html";
}
else if(localStorage.getItem("index"))
{
    var i=localStorage.getItem("index");

    $(document).ready(function(){
        var bearer = "Bearer " + localStorage.getItem("access_token");
        var b=baseUrl();
           fetch(b+'news/getNews?format=json',{
               method: 'GET',
               headers:{
                   Authorization:bearer
               }
         
       })
        .then((response) => response.json())
        .then((data) => {
           
            console.log(i , data['news'][i] );
            console.log(data['news'][i]['title']);
            var disp='<div class="my-2 py-3 border mt-3 row justify-content-between"><div class="col-sm-5 mx-2"><a onclick="newsview(%i%)" href="#" style="color:black"><img class="imgg responsive" style="margin-bottom:10px;" src=%imgsrc% height="300px" width="350px"></div><div class="col-sm-6 mx-2 "><h2 class="mt-0 fontt break">%title%</h2><h5 class="text-muted">by %author% %date%</h5><p class="content" style="color:#222224;">%content%</p></a></div></div>';
            //var newhtml = html.replace('%id%',data['news'][i]['id']);
            var newhtml = disp.replace('%title%',data['news'][i]['title']);
            newhtml = newhtml.replace('%content%',data['news'][i]['content']);
            newhtml = newhtml.replace('%i%',i);
            newhtml=newhtml.replace('%imgsrc%',data['news'][i]['image']);
            newhtml=newhtml.replace('%data%',data);
            newhtml = newhtml.replace('%date%',data['news'][i]['date']);
            newhtml = newhtml.replace('%author%',data['news'][i]['author']);
            document.querySelector('.news-a').insertAdjacentHTML('beforeend' , newhtml);
           
            setTimeout(3000);
                  
           
           })
           .catch((error) => {
               console.log("reset client error-------",error);
          });
       
       });


}

}
function newsview(i)
        {
            
          localStorage.setItem("index",i);
        }
