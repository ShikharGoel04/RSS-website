window.onload=function(){
    $(document).ready(function(){


    var bearer = 'Bearer ' + localStorage.getItem("access_token");
    fetch('https://secret-mesa-20529.herokuapp.com/videos/getVideos',{
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
                var disp='<div class="mb-5"><div class="col-sm-3"><iframe id="ytplayer" class="responsive-iframe" type="text/html" width="350px" height="250px"src="https://www.youtube.com/embed/%videoid%?autoplay=0&origin=http://example.com"frameborder="0"></iframe></div><div class="col-sm-2"></div><div class="col-sm-7"><h4>%title%</h4><p>%description%</p></div></div>';
                //var newhtml = html.replace('%id%',data['news'][i]['id']);
                var newhtml = disp.replace('%videoid%',data['videos'][i]['videoId']);
                newhtml = newhtml.replace('%title%',data['videos'][i]['title']);
                newhtml = newhtml.replace('%description%',data['videos'][i]['description']);
                document.querySelector('.news-add').insertAdjacentHTML('beforeend' , newhtml);
                setTimeout(3000);
            }
            i++;
    
    })
    .catch((error) => {
        console.log("reset client error-------",error);
   });

});
}
    


