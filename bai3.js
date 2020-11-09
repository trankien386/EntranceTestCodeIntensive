// Kết quả
let resultNumber = Math.floor(Math.random() * 100);

// Lấy số nhập vào từ người dùng và hiện kết quả
function getInput() {
		let userInput = Number(document.getElementById('input').value);
		alert(`Số bạn chọn là ${userInput}`);

		if (userInput === resultNumber) {
			alert('Bạn đã chúng số độc đắc!');
		} else {
			alert('Chúc bạn may mắn lần sau');
			alert(`Kết quả là ${resultNumber}`);
		}
}

