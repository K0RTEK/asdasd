function calculateResult() {

    document.addEventListener('routeLengthCalculated', function (e) {
        let kilometerCost = document.getElementById('cargoQuantity').value;
        let weight = document.getElementById('tariff').value;
        let finalCost = e.detail * kilometerCost
        let finalTons = e.detail * weight
        let finalOneCost = kilometerCost / weight
        let resultHtml = `<div class="column"><strong>Расстояние:</strong><br>${e.detail.toFixed(2)}<br></div>
                                 <div class="column"><strong>Общая стоимость перевозки:</strong><br>${finalCost.toFixed(2)}<br></div>
                                 <div class="column"><strong>Тоннокилометров всего:</strong><br>${finalTons.toFixed(2)}<br></div>
                                 <div class="column"><strong>Стоимость 1 тоннокилометра:</strong><br>${finalOneCost.toFixed(2)}<br></div>`
        let email = `
            <button type="submit" class="btn btn-primary" id="calculate-values" name="calculate">Отправить на почту</button>
        `
        $("#send_email").html(email);
        $("#result_calc").html(resultHtml);

    });
}

$("#calculateButton").click(function (event) {
    event.preventDefault();
    calculateResult();
});