/*웹서버에서 데이터베이스를 연동한 프로그램작성*/
var http=require("http");//기본형
var express=require("express");
var ejs=require("ejs");//동적 html 생성 모듈
var fs=require("fs");//파일 읽어들이는 모듈

var app= express();//모듈 생성

//express 모듈의 최대 장점-> 각종 미들웨어라 불리는 기능들을 지원
//미들웨어 사용시 use()로 호출
//정적 파일들을 일일이 라우팅 시킬 필요가없다
app.use(express.static(__dirname));

//리스트 요청받기
app.use("/list", function(request, response){
	fs.readFile("list.ejs","utf-8",function(error,data){
		if(error){
			console.log("읽기 실패", error);
		}
		response.writeHead(200,{"Content-Type":"text/html"});
		response.end(ejs.render(data));
	});
});

var server= http.createServer(app); //서버 객체 생성



server.listen(8888, function(){
	console.log("웹 서버 가동중");	
});//서버 가동