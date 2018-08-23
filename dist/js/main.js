require.config({
	paths:{
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		
	}
	
	
})	
require(['jquery','cookie'],function($,cookie){
	$(function(){
		
		$.ajax({
			
			url:"data/img.json",
			//dataTpe:"json",
			
			success:function(arr){
				
				for(var i=0;i<arr.length;i++){
					$(`<a href="javascript:;">${arr[i].name}</a>`).appendTo($('.menu-con'))
						
				
				}
				
		$('#menu').on('mouseenter','a',function(){
			$('#menu-b').html("");
			var index = $(this).index();
			var str = arr[index].men;
			for(var i=0;i<str.length;i++){
				$(`<div id='menu-h'><img src="${str[i].src}" alt="" />
								<span>${str[i].title}</span></div>`).appendTo($('#menu-b'));
			};
			
			$('#menu-b').stop().animate({height:'260px',opacity:0.8},500,function(){
			
			
			
			
			
			$('#menu').on('mouseenter','#menu-b',function(){
			$('#menu-b').stop().animate({height:'260px',opacity:0.8},500);	
		});
			});
				
				
		});
		$('#menu').on('mouseleave','a',function(){
			$('#menu-b').stop().animate({height:'0',opacity:0},500);	
		})
		
		
		
		$('#menu').on('mouseleave','#menu-b',function(){
			$('#menu-b').stop().animate({height:'0',opacity:0},500);
		})
				
			}
			
			
		})

		
		
			
	/*sowing*/
		$.ajax({
			url:"data/carousel.json",
			async:"false",
			success:function(arr){
				for(var i=0;i<arr.length;i++){
					$(`<li><img src="${arr[i].src}"/></li>`).appendTo($("#top"));
					$(`<span>${arr[i].title}</span>`).appendTo($('#box-con'))
				}
			}
			})
				
				
			var index = 0;
			var zIndex = 3;
			var timer = null;
			autoplay();
			var obtnl = document.getElementById('left');
			var obtnr = document.getElementById('right');	
			var oul = document.getElementById('top');
			var oli = oul.getElementsByTagName('li');
			var obox = document.getElementById("box-con");
			var ospan = obox.getElementsByTagName('span');
			obtnl.onclick = function(){
				index--;
				
			if(index==-1){
				index =oli.length-1;
			
			}
			oli[index].style.zIndex = zIndex++;
			for(var i=0;i<oli.length;i++){
					oli[i].style.opacity=0;
				}
			oli[index].style.opacity = 1;
			for(var i=0;i<ospan.length;i++){
					ospan[i].style.border=0;
					ospan[i].style.color= '#9f9898';
					
				}
			ospan[index].style.borderTop ="1px solid black";
			ospan[index].style.color = 'black'; 
		}	
			
		obtnr.onclick = function(){
				index++;
				
			if(index==oli.length){
				index =0;
				
			}
			oli[index].style.zIndex = zIndex++;
			for(var i=0;i<oli.length;i++){
					oli[i].style.opacity=0;
				}
			oli[index].style.opacity = 1;
			for(var i=0;i<ospan.length;i++){
					ospan[i].style.border=0;
					ospan[i].style.color= '#9f9898';
					
				}
			ospan[index].style.borderTop ="1px solid black";
			ospan[index].style.color = 'black'; 
			
		}
		oul.onmouseover=function () {
			clearInterval(timer);
		}
		
		oul.onmouseout=function () {
			autoplay();
		}
		/*alert(this);
		for(var i=0;i<ospan.length;i++){
				
			ospan[i].onmouseover=function(){
				alert(this);
				this.style.borderTop ='1px solid black';
				this.style.color='black';
				// border-top:1px solid black;
            	//color:black;
			}
		}*/
		$("#box-con").on('mouseenter','span',function(){
			$('#box-con span').css({color:'#9f9898',border:0});
			
			$(this).css({
				borderTop:'1px solid black',
				color:'black'
			})
			clearInterval(timer);
		})
		$("#box-con").on('mouseenter','span',function(){
			autoplay();
		})

		
		
		
		
		
		
		
		function autoplay(){
			clearInterval(timer);
			
			timer=setInterval(function(){
			index++;
			/*count = index;*/
			if(index==oli.length){
				index =0;
				/*count = index;*/
			}
			oli[index].style.zIndex = zIndex++;
			for(var i=0;i<oli.length;i++){
					oli[i].style.opacity=0;
				}
			oli[index].style.opacity = 1;
			for(var i=0;i<ospan.length;i++){
					ospan[i].style.border=0;
					ospan[i].style.color= '#9f9898';
					
				}
			ospan[index].style.borderTop ="1px solid black";
			ospan[index].style.color = 'black'; 

			 //当前显示色块添加show类
			//console.log(count);
			},3000)
			
		}	
		$.ajax({
			
			url:"data/banner.json",
			success:function(arr){
				for(var i=0;i<arr.length;i++){
					$(`<a href='javascript:;'><img src="${arr[i].src}"/></a>`).appendTo($("#img"));
					
				}
			}
		})
			
		$.ajax({
			
			url:"data/images.json",
			success:function(arr){
			for(var i=0;i<arr.length;i++){
				$(`<div id='one'>
							<a href="javascript:;">${arr[i].title}</a>
							<a href="javascript:;"><img src="${arr[i].src}"/></a>`).appendTo($("#center"))
				}
			}
		});
		$.ajax({
			
			url:"data/imgsrc.json",
			success:function(arr){
				var str=arr[0].man;
				
				for(var i=0;i<str.length;i++){
					$(`<div id='bot'>
							<img src="${str[i].src}" alt="" />
							<a href="javascript:;">${str[i].title}</a>
							<h4>${str[i].price}</h4>
						</div>`).appendTo($('#bottom'));
				}
				$(`<div id='btf'><a href="javascript:;">${arr[0].name}</a></div>`).appendTo('#bottom')
				
			}
		});	
		$.ajax({
			
			url:"data/shoes.json",
			success:function(arr){
				for(var i=0;i<arr.length;i++){
					$(`<div id='con'>
							<img src="${arr[i].src}" alt="" />
								
							<a href="javascript:;">${arr[i].title}</a>
							<h4>${arr[i].price}</h4>
						</div>`).appendTo($('#new-cen'));
				}
			}
		});
		$.ajax({
			
			url:"data/street.json",
			success:function(arr){
				
				for(var i=0;i<arr.length;i++){
				$(`<div id='str-f'>
						<img src="${arr[i].src}" alt="" />
						<div></div>
						<h1>${arr[i].title}</h1>
						<p>${arr[i].conent}</p>
						<a href="javascript:;">查看更多</a>
					</div>`).appendTo($('#str-c'));
				}
			}
		});		
		$.ajax({
			
			url:"data/tide.json",
			success:function(arr){
				for(var i=0;i<arr.length;i++){
				$(`<div id='Dz-f'>
						<img src="${arr[i].src}" alt="" />
						<div></div>
						<h1>${arr[i].title}</h1>
						<p>${arr[i].conent}</p>
						<a href="javascript:;">查看更多</a>
					</div>`).appendTo($('#Dz-c'));
				}
			}
		});	
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
})	
	
	
	
	
	
	
	
	

