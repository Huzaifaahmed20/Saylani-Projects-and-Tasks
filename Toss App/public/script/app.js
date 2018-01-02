var input = prompt("Enter Head or Tail");

var num = Math.random()*2+1;
num = Math.floor(num);
document.getElementById("toss").innerHTML = num;

if (input === num)
{
    document.write(input);
    document.write("Congratulations ! You Won the Toss");
}
else 
{
    document.write("You Loss");
}
