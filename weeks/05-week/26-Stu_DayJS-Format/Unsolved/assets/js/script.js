// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var grad = dayjs('2011-06-15');
$('#1a').text(grad.format('MMM, D YYYY'));

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayWeek = dayjs('2027-01-01').format('[It will be] dddd');
$('#2a').text(dayWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
var now = dayjs();
$('#3a').text(now.format('h:mm:ss'));

// TODO: 4. What is the current Unix timestamp?
var unixNow = dayjs().unix();
$('#4a').text(unixNow);

console.log(unixNow);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixDate = dayjs.unix(1318781876);
$('#5a').text(unixDate.format('MMM, D YYYY, hh:mm:ss a'));


// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
var dateInQ = dayjs('2027-05-04');
var today = dayjs();

var days = dateInQ.diff(today, 'days');

$('#6a').text(days);
