window.onload=function(){
    $(document).ready(function(){
            var i = 0;
            console.log("hi");
            if(i===0)
            {
            var url = 'https://secret-mesa-20529.herokuapp.com/magazine/getMagazine?format=json';
            $.getJSON(url, function(data)
            {
                console.log(data);
                for(const i in data['magazine'])
                {
                    console.log(i , data['magazine'][i] );
                    var html = '<div class="column"><h6 style="text-align: center;">%title%</h6><a  id = %id% onclick="reply_quick(this.id)" href="magazineview.html"><img src="%img-src%" alt="organiser" style="width:100%"></a><p style="text-align: center;" >%date%</p><h4 style="text-align: center;">%author%</h4></div>';
                    var newhtml = html.replace('%id%',data['magazine'][i]['id']);
                    newhtml = newhtml.replace('%title%',data['magazine'][i]['title']);
                    newhtml = newhtml.replace('%img-src%',data['magazine'][i]['imageUrl']);
                    newhtml = newhtml.replace('%date%',data['magazine'][i]['date']);
                    newhtml = newhtml.replace('%author%',data['magazine'][i]['author']);
    
                    document.querySelector('.row1').insertAdjacentHTML('beforeend' , newhtml);
                    console.log(i);
                    // setTimeout(3000);
                }
                i++;
            }); 
            }
    
    });
    }