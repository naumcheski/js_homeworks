//1. Write a JavaScript conditional statement to sort three numbers. Print the result.

//2.Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

a=5;
b=-2;
c=7;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}


// For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening)

function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Добро утро!";
    } else if (time < 20) {
      greeting = "Добар ден!";
    } else {
      greeting = "Добра вечер!";
    }
    document.getElementById("demo").innerHTML = greeting;
  }
  
  //For a given month, print out in which season it belongs.


  function getSeason() {
    month = document.forms.date.month.value;
    season = '';
    switch(month) {
        case '12':
        case '1':
        case '2':
            season = 'Зима';
        break;
        case '3':
        case '4':
        case '5':
            season = 'Пролет';
        break;
        case '6':
        case '7':
        case '8':
            season = 'Лето';
        break;
        case '9':
        case '10': 
        case '11':
            season = 'Есен';
        break;
    }
    alert(season);
}