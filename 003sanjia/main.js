// JavaScript Document		var r;
		var comres;
		var score=0,allscore=0;
		function shitou(){
			document.getElementById("sanjia").style.backgroundImage="url(img/st.png)";
			pk("rock");
		}
		function jiandao(){
			document.getElementById("sanjia").style.backgroundImage="url(img/jd.png)";
			pk("scissors");
		}
		function bu(){
			document.getElementById("sanjia").style.backgroundImage="url(img/b.png)";
			pk("cloth");
		}
		
		function suiji(){
			if(r<1){
				document.getElementById("siri").style.backgroundImage="url(img/st1.png)";
				return comres="rock";
			}
			else if(r<2){
				document.getElementById("siri").style.backgroundImage="url(img/jd1.png)";
				return comres="scissors";
			}
			else {
				document.getElementById("siri").style.backgroundImage="url(img/b1.png)";
				return comres="cloth";
			}
		}
		
		function pk(mychoice){
			r =3*Math.random();
			comres = suiji();
			if(mychoice=="rock"){
				if(comres=="rock"){
					document.getElementById("result").innerHTML="平局";
				}
				else if(comres=="scissors"){
					document.getElementById("result").innerHTML="你赢了";
					score +=1;
				}
				else if(comres=="cloth"){
					document.getElementById("result").innerHTML="你输了";
					score -=1;
				}
			}
			else if(mychoice=="scissors"){
				if(comres=="rock"){
					document.getElementById("result").innerHTML="你输了";
					score -=1;
				}
				else if(comres=="scissors"){
					document.getElementById("result").innerHTML="平局";
				}
				else if(comres=="cloth"){
					document.getElementById("result").innerHTML="你赢了";
					score +=1;
				}
			}
			else if(mychoice=="cloth"){
				if(comres=="rock"){
					document.getElementById("result").innerHTML="你赢了";
					score +=1;
				}
				else if(comres=="scissors"){
					document.getElementById("result").innerHTML="你输了";
					score -=1;
				}
				else if(comres=="cloth"){
					document.getElementById("result").innerHTML="平局";
				}
			}
			if(score==2){
				score=0;
				allscore+=1;
			}
			else if(score==-2){
				score=0;
				allscore-=1;
			}
			document.getElementById("jifen").innerHTML="积分："+score+",总分:"+allscore;
			if(allscore==3){
				document.getElementById("jifen").innerHTML="厉害呀，通关了";
			}
			else if(allscore==-2){
				document.getElementById("jifen").innerHTML="a ou，you lose";
			}
		}