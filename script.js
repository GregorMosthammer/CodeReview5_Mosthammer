var app = {
    total: 0,
    incomeTotal: 0,
    expensesTotal: 0,
    incomeList: [],
    expensesList: [],
    addItem: function(item) {
        if (item.value > 0) {
            this.incomeList.push(item);
        } else if (item.value < 0) {
            this.expensesList.push(item);
        }
    },
    sumTotals: function() {
        this.incomeTotal=0;
        this.expensesTotal=0;
        for (var i = 0;i < this.incomeList.length;i++) {
            this.incomeTotal += this.incomeList[i].value;
        }
        for (var i = 0;i < this.expensesList.length;i++) {
            this.expensesTotal += this.expensesList[i].value;
        }
        this.total = this.expensesTotal + this.incomeTotal;
    }
};
$(function() {
    $('#budget-form').submit(function(event) {
        event.preventDefault();
        var descriptionField = $('#actionInput');
        var valueField = $('#valueInput');
        var item = {
            description: descriptionField.val(),
            value: Number(valueField.val())
        }
        app.addItem(item);
        app.sumTotals();
        $('#total').text(app.total);
        $('#income').text(app.incomeTotal);
        $('#expenses').text(app.expensesTotal);
        // TODO: turn list into table
        if (item.value > 0) {
            $('#income-list').append('<li>' + item.description + ' $' + item.value + '</li>')
        } else {
            $('#expenses-list').append('<li>' + item.description + ' $' + item.value + '</li>')
        }
    });
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $(".background").offset().top
    }, 2000);
});