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
                var disp='<div class="mb-5 container1"><iframe id="ytplayer" class="responsive-iframe" type="text/html" width="640" height="360"src="https://www.youtube.com/embed/%videoid%?autoplay=0&origin=http://example.com"frameborder="0"></iframe></div>';
                //var newhtml = html.replace('%id%',data['news'][i]['id']);
                var newhtml = disp.replace('%videoid%',data['videos'][i]['videoId']);
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
    


