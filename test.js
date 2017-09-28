
var timer = document.getElementById("timer");
var timeRemaining = 60;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;


var calculateScore = function() {
	var paraSubmitted = textArea.value;
	var submittedWords = paraSubmitted.split(" ");
	var wordCount = submittedWords.length;

	var testWords = testPara.innerHTML.split(" ");
	console.log(testWords);

	return wordCount;
};


var generatePassage = function(){

	paraContainer.style.display = "inline-block";
	textArea.style.display = "inline-block";
	// var passages = [passage1];
	// testPara.innerHTML = passages[Math.floor(Math.random()*10/2)];
	testPara.innerHTML = passage1;
};

var displayTime = function () {

	var getTime = setInterval(function() {
		timeRemaining--;
		timer.innerHTML = "Time Remaining: " + timeRemaining + "s";

		console.log(timeRemaining);

		if(timeRemaining == 0){

			clearInterval(getTime);

			var wrapper = document.getElementById("wrapper");
			wrapper.remove();

			timer.remove();

			document.body.appendChild(newTestWindow);
			document.getElementById("finalScore").innerHTML = "Your speed: " + calculateScore() + " words per minute.";
			newTestWindow.style.display = "block";
		}
	}, 1000);

	textArea.removeEventListener("keydown", displayTime);
};

var test = function() {

	startWindow.style.display = "none";

	timer.innerHTML = "Time Remaining: 60s";
	timer.style.display = "block";

	textArea.addEventListener("keydown", displayTime);

	generatePassage();

};

startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});

var passage1 = `Mưa trôi cả bầu trời nắng, trượt theo những nỗi buồn<br />
Thấm ướt lệ sầu môi đắng vì đánh mất hy vọng<br />
Lần đầu gặp nhau dưới mưa, trái tim rộn ràng bởi ánh nhìn<br />
Tình cảm dầm mưa thấm lâu, em nào ngờ...<br />
<br />
Mình hợp nhau đến như vậy thế nhưng... không phải là yêu!<br />
Và em muốn hỏi anh rằng "chúng ta là thế nào?"<br />
Rồi... lặng người đến vô tận, trách sao được sự tàn nhẫn<br />
Anh trót vô tình.. thương em như- là- em- gái...<br />
<br />
Chorus:<br />
Đừng lo lắng về em khi mà em... vẫn còn yêu anh<br />
Càng xa lánh, càng trống vắng... tim cứ đau và nhớ lắm...<br />
Đành phải buông hết tất cả thôi, nụ cười mỉm sau bờ môi<br />
Ấm áp dịu dàng vai anh, em đã bao lần yên giấc...<br />
<br />
Nhìn trên cao khoảng Trời yêu mà em lỡ dành cho anh,<br />
Giờ mây đen quyện thành bão, giông tố đang dần kéo đến<br />
Chồi non háo hức đang đợi mưa, rất giống em ngày xưa<br />
Mưa trôi để lại ngây thơ, trong giấc mơ buốt lạnh<br />
<br />
(Nhớ nhưng chẳng thể ở bên<br />
Hết nước mắt lòng buồn tênh<br />
You can not feel my love...)<br />
<br />
Tựa như yêu nhưng... đến khi ai đó chối từ<br />
Trời đất như rung chuyển một người... vỡ mộng.`;
