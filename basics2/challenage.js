var john = {
  firstName: 'Jonh',
  lastName:'Smith',
  bills:[124,48,268,180,42],
  calculateTip:function () {
    this.tips = [];
    this.totalAmountPaid = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage,
      bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if(bill >= 50 && bill < 200){
        percentage = 0.15;
      }else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.totalAmountPaid[i] = bill + bill * percentage;
    }
  }
};

var mark = {
  firstName: 'Mark',
  lastName:'Miller',
  bills:[77,475,110,45],
  calculateTip:function () {
    this.tips = [];
    this.totalAmountPaid = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage,
      bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if(bill >= 100 && bill < 300){
        percentage = 0.1;
      }else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.totalAmountPaid[i] = bill + bill * percentage;
    }
  }
};

function calculateAvg(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calculateTip();
mark.calculateTip();

john.average = calculateAvg(john.tips);
mark.average = calculateAvg(mark.tips);

console.log(john);
console.log(mark);

if (john.average > mark.average) {
  console.log(john.firstName + 'family pays higher tips , with average of $ '+ john.average);
} else {
  console.log(mark.firstName + 'family pays higher tips , with average of $ '+ mark.average);  
}
