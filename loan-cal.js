const loanForm = document.getElementById('loan-form');
loanForm.addEventListener('submit' , function(e){

    document.getElementById('results').style.display = 'none';

 document.getElementById('loading').style.display = 'block';


 setTimeout(calculateResults, 2000)

    e.preventDefault();
});


function calculateResults() {
    
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const years = document.querySelector('#years');
    const totalInterest = document.querySelector('#total-interest');

   const principal = parseFloat(amount.value)
   const calculateInterest = parseFloat(interest.value) / 100 / 12;
   const calculatePayments = parseFloat(years.value) * 12;



   const x = Math.pow(1 + calculateInterest, calculatePayments);
   const monthly =(principal*x*calculateInterest)/(x-1);

if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);

    document.getElementById('results').style.display = 'block';

 document.getElementById('loading').style.display = 'none';
}else{
    showError('please check your number')
}



    e.preventDefault();
}


function showError(error) {

    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');


    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);


}

function clearError() {
    document.querySelector('.alert').remove();
}