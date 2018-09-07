(function () {
    var input = $('#userInput');
    var submit = $('#submitTodo');
    var ul = $('#ul');
    var error = $('#error');

    function isInputValid() {
        return input.val().length > 0;
    }

    function hideError() {
        error.hide();
    }

    function displayError() {
        error.show();
    }

    function addTodo() {
        if (isInputValid()) {
            var li = $('<li class="list-group-item">' + input.val() + '</li>');
            ul.append(li);
            input.val('');
            hideError();
        } else {
            displayError();
        }
    }

    submit.click(addTodo);
})();