let initTot;
let tip;
let total;
let splitVal;
const btn = document.getElementById('btn');



function GetValue() {
 initTot = parseInt(document.getElementById("initialTotal").value);//input value of total
 tip = parseInt(document.getElementById("tip").value);//input value of tip
 total=(initTot+(initTot*(tip/100)))//tip equals the number the input for tip divided by100 then multiply it to the total then add
 document.getElementById("finalCost").innerHTML = `Your bill total including the tip is: $${total}`;
 finalCost.style.color = "red";
}

function splitBill()
{
    splitVal=document.getElementById("ppl").value;
    document.getElementById("splitFin").innerHTML = `Each person owes: $${total/splitVal}`;
    splitFin.style.color = "red";
}

btn.addEventListener('click', () => {
    // 👇️ hide button
    btn.style.display = 'none';
  }
)
