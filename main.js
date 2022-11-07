// Bài 1
function result() {
  var exemScore1 = document.getElementById("exemScore1").value * 1;
  var exemScore2 = document.getElementById("exemScore2").value * 1;
  var exemScore3 = document.getElementById("exemScore3").value * 1;
  var point = document.getElementById("point").value * 1;
  var zone = document.getElementById("zone").value;
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var people = document.getElementById("people").value;
  var people1 = document.getElementById("people1").value;
  var people2 = document.getElementById("people2").value;
  var people3 = document.getElementById("people3").value;
  var total = 0;
  var point = document.getElementById("point").value * 1;
  var x;
  var y;
  var result = "";
  if (people == people1) {
    x = 2.5;
  } else if (people == people2) {
    x = 1.5;
  } else if (people == people3) {
    x = 1;
  }
  if (zone == a) {
    y = 2;
  } else if (zone == b) {
    y = 1;
  } else if (zone == c) {
    y = 0.5;
  }
  total = exemScore1 + exemScore2 + exemScore3 + x + y;
  if (exemScore1 === 0 || exemScore2 === 0 || exemScore3 === 0) {
    result = "Bạn đã rớt. Vì có môn thi 0 điểm";
  } else if (total >= point) {
    result = "Điểm của bạn là " + total + ". Bạn đã đậu";
  } else {
    result = "Điểm của bạn là " + total + ". Bạn đã rớt";
  }
  document.getElementById("info").innerHTML = result;
}

// BÀI 2

function electricityBill() {
  var name = document.getElementById("name").value;
  var electricity = document.getElementById("electricity").value * 1;
  var money;
  var total;
  var result = "";
  if (electricity > 0 && electricity <= 50) {
    money = 500 * electricity;
  } else if (electricity > 50 && electricity <= 100) {
    money = 500 * 50 + 650 * (electricity - 50);
  } else if (electricity > 100 && electricity <= 200) {
    money = 500 * 50 + 650 * 50 + 850 * (electricity - 150);
  } else if (electricity > 200 && electricity <= 350) {
    500 * 50 + 650 * 50 + 850 * 100 + 1100 * (electricity - 200);
  } else {
    money =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (electricity - 350);
  }
  total = money;
  result = "Giá tiền điện của " + name + " là " + total;
  document.getElementById("info1").innerHTML = result;
}

// Bài 3
function totalIncome() {
  var fullName = document.getElementById("fullName").value;
  var salaryOfYear = document.getElementById("salaryOfYear").value * 1;
  var numberOfPeople = document.getElementById("numberOfPeople").value * 1;
  var money;
  var total;
  var result = "";
  money = salaryOfYear - 4e6 - numberOfPeople * 16e5;
  if (money <= 6e7) {
    total = money * 0.05;
  } else if (money > 6e7 && money <= 12e7) {
    total = 6e7 * 0.05 + (money - 6e7) * 0.1;
  } else if (money > 12e7 && money <= 21e7) {
    total = 6e7 * 0.05 + 6e7 * 0.1 + (money - 12e7) * 0.15;
  } else if (money > 21e7 && money <= 384e6) {
    total = 6e7 * 0.05 + 6e7 * 0.1 + 12e7 * 0.15 + (money - 21e7) * 0.2;
  } else if (money > 384e7 && money <= 624e7) {
    total =
      6e7 * 0.05 +
      6e7 * 0.1 +
      12e7 * 0.15 +
      21e7 * 0.2 +
      (money - 384e7) * 0.25;
  } else if (money > 624e6 && money <= 96e7) {
    total =
      6e7 * 0.05 +
      6e7 * 0.1 +
      12e7 * 0.15 +
      21e7 * 0.2 +
      384e7 * 0.25 +
      (money - 624e6) * 0.3;
  } else if (money > 96e7) {
    total =
      6e7 * 0.05 +
      6e7 * 0.1 +
      12e7 * 0.15 +
      21e7 * 0.2 +
      384e7 * 0.25 +
      624e6 * 0.3 +
      (money - 96e7) * 0.35;
  }
  result = "Thuế thu nhập cá nhận của " + fullName + " là " + total;
  document.getElementById("info2").innerHTML = result;
}

// BÀI 4
function price() {
  var infomation = document.getElementById("infomation").value;
  var company = document.getElementById("company").value;
  var guest = document.getElementById("guest").value;
  var guestCode = document.getElementById("guestCode").value;
  var connectionNumber = document.getElementById("connectionNumber").value * 1;
  var premiumChannel = document.getElementById("premiumChannel").value * 1;
  var serviceCharge = 0;
  var channelRental = 0;
  var billFee;
  var total;
  var result;
  total = billFee + serviceCharge + channelRental;
  if (infomation == company) {
    billFee = 15;
    channelRental = premiumChannel * 50;
    if (connectionNumber <= 10) {
      serviceCharge = 75;
    } else if (connectionNumber > 10) {
      serviceCharge = 75 + (connectionNumber - 10) * 5;
    }
    total = billFee + serviceCharge + channelRental;
  } else if ((infomation = guest && connectionNumber == 0)) {
    billFee = 4.5;
    serviceCharge = 20.5;
    channelRental = premiumChannel * 7.5;
    total = billFee + serviceCharge + channelRental;
  }
  result = "Mã khách hàng: " + guestCode + ". Tiền cáp: $" + total;
  document.getElementById("info3").innerHTML = result;
}
