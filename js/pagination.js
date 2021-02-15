function pagination(count)
{
    var curr=localStorage.getItem("curr");
    console.log(curr);
    var tpages=(count%4==0)?Math.floor(count/4):Math.floor(count/4)+1;
    if(tpages<=5)
    {
        var i;
        
        var disp;
        for(i=1;i<=tpages;i++)
        {
            disp='<li class="page-item"><a class="page-link" id=%idd% onclick="pageNumber(%page1%)" href="news.html">%page%</a></li>';
            var html=disp.replace('%page1%',i);
            var html1=html.replace('%page%',i);
            var html2=html1.replace('%idd%',i);
            document.querySelector('.page').insertAdjacentHTML("beforeend",html2);
        }
        if(tpages>=1)
        {
            active1(curr);
        }
      
        
    }
    else
    {
        
        if(curr<=3)
        {
            for(i=1;i<=5;i++)
            {
                disp='<li class="page-item"><a class="page-link" id=%idd% onclick="pageNumber(%page1%)" href="news.html">%page%</a></li>';
               var html=disp.replace('%page1%',i);
               var html1=html.replace('%page%',i);
               var html2=html1.replace('%idd%',i);
               document.querySelector('.page').insertAdjacentHTML("beforeend",html2);
            }
            active1(curr);
            
        }
        else if((tpages-curr)<2)
        {
            var j=tpages-4;
            for(j;j<=tpages;j++)
            {
                disp='<li class="page-item"><a class="page-link" id=%idd% onclick="pageNumber(%page1%)" href="news.html">%page%</a></li>';
                var html=disp.replace('%page1%',j);
                var html1=html.replace('%page%',j);
                var html2=html1.replace('%idd%',j);
                document.querySelector('.page').insertAdjacentHTML("beforeend",html2);
            }
            active1(curr);
        }
        else{
            var initial=curr-2;
            console.log("initial");
            console.log(initial);
            console.log(curr);
            var end1=parseInt(curr)+2;
            console.log(end1);
            for(initial;initial<=end1;initial++)
            {
                disp='<li class="page-item"><a class="page-link" id=%idd% onclick="pageNumber(%page1%)" href="news.html">%page%</a></li>';
                var html=disp.replace('%page1%',initial);
                var html1=html.replace('%page%',initial);
                var html2=html1.replace('%idd%',initial);
                document.querySelector('.page').insertAdjacentHTML("beforeend",html2);
            }
            active1(curr);
        }

    }
    console.log(tpages);
}

function pageNumber(i)
{
    var tmp=i*4-4;
    window.localStorage.setItem("curr",i);
    window.localStorage.setItem("start",tmp);
}

function active1(curr)
{
    document.getElementById(curr).style.backgroundColor="#ED6206";
    document.getElementById(curr).style.color="#fff";
   
}

