
function newsHome(){
    
      
        var i = 0;
        console.log("hi");
        if(i===0)
        {
        var url ='https://secret-mesa-20529.herokuapp.com/news/getNews?format=json';
        $.getJSON(url, function(data)
        {
            // console.log(data);
            for(const i in data['news'])
            {
                console.log(i , data['news'][i] );
                console.log(data['news'][i]['title']);
                var disp='<div class="mb-5 border-bottom mt-3"><div class="col-sm-3"><img class="border border-secondary responsive" style="margin-bottom:10px;" src=%imgsrc% height="200px" width="350px"></div><div class="col-sm-1"></div><div class="col-sm-8"><h2 class="mt-0 fontt">%title%</h2><h5 class="text-muted">by %author% %date%</h5><p class="content" style="color:#222224;">%content%</p></div></div>';
                //var newhtml = html.replace('%id%',data['news'][i]['id']);
                var newhtml = disp.replace('%title%',data['news'][i]['title']);
                newhtml = newhtml.replace('%content%',data['news'][i]['content']);
                newhtml=newhtml.replace('%imgsrc%',data['news'][i]['imageUrl']);
                console.log(data['news'][i]['imageUrl']);
                newhtml = newhtml.replace('%date%',data['news'][i]['date']);
                newhtml = newhtml.replace('%author%',data['news'][i]['author']);
                document.querySelector('.news-add').insertAdjacentHTML('beforeend' , newhtml);
                setTimeout(3000);
            }
            i++;
        }); 

        }
                setTimeout(function(){
            document.getElementById("loader").style.display='none';
        }, 1500)
    
    
   
    }

    