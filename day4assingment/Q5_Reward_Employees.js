let sales = Number(window.prompt("Enter the sales amount"))
let msg = "Commission Earned in Rupees = "
if (sales > 0 && sales <= 5000){
  console.log(msg,sales*2/100)
}
else if(sales > 5000 && sales <= 10000){
  console.log(msg,sales*5/100)
}
else if(sales > 10000 && sales <= 15000){
  console.log(msg,sales*7/100)
}
else{
  console.log(msg,slaes*10/100)
}