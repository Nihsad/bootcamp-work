// TODO: What does 'this' refer to?
// this instance of 'this' refers to the browser window.
console.log(this);

// TODO: What does 'this' refer to?
// this instance of 'this' still refers to the object window, but it includes a text string as part of the function.
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// this will log the age of the child, plus 10 years due to the included function. so, 20.
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// this will log the investment growth! so, 5000 * 1.15, which has a result of 5750.
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
