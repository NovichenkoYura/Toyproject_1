var req = new XMLHttpRequest();
//GET, POST
req.open(
  "GET",
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
  false
);
req.send();
const response = JSON.parse(req.responseText);
const select = document.getElementById("currency__choice");
response.forEach((element) => {
  const newOption = document.createElement("option");
  newOption.value = element.txt;
  newOption.label = element.txt + " " + element.cc;
  select.append(newOption);
});

function calculateCurrency() {
  //получить данные с ввода (количество валюты) (не забыть .value)
  const currencyInput = document.getElementById("currency__input").value;

  //это значение курса
  const currencyText = document.getElementById("currency__choice").value;
  const rate = response.find((element) => element.txt === currencyText).rate;
  //получить (курс * количество)
  const result = currencyInput * rate;

  document.getElementById("currency_result").value = result;
}

const selectRev = document.getElementById("currency_rev__choice");
response.forEach((element) => {
  const newOption = document.createElement("option");
  newOption.value = element.txt;
  newOption.label = element.txt;
  selectRev.append(newOption);
});

function calculateHrivna() {
  //получить данные с ввода (количество валюты) (не забыть .value)
  const currencyInputRev = document.getElementById("currency_rev__input").value;

  //это значение курса
  const currencyTextRev = document.getElementById("currency_rev__choice").value;
  const rateRev = response.find(
    (element) => element.txt === currencyTextRev
  ).rate;
  //получить (курс * количество)
  const resultRev = currencyInputRev / rateRev;

  document.getElementById("currency_rev_result").value = resultRev;
}
