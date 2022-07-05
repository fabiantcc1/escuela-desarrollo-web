const tableCurrency = document.getElementById('tableCurrency');
const tableComission = document.getElementById('tableComission');
const tablesArrowLeft = document.getElementById('tablesArrowLeft');
const tablesArrowRight = document.getElementById('tablesArrowRight');

function showTable(){
    tableCurrency.classList.toggle("hidden");
    tableComission.classList.toggle("hidden");

    tablesArrowLeft.classList.toggle("invisible");
    tablesArrowRight.classList.toggle("invisible");
}
