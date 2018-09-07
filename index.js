(function () {
    var input = $('#userInput');
    var submit = $('#submitTodo');
    var ul = $('#ul');
    var error = $('#error');
    submit.click(addTodo);

    function resetInput() {
        input.val('');
    }

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

        function toogleTodo() {
            if (!li.hasClass('done')) {
                li.addClass('done');
            } else {
                li.removeClass('done');
            }
        }

        function deleteTodo() {
            li.remove();
        }

        if (isInputValid()) {
            var li = $('<li class="list-group-item">' + input.val() + '</li>');
            li.click(toogleTodo);

            var btn = $('<button class="btn btn-light">X</button>');
            li.append(btn);
            btn.click(deleteTodo);

            ul.append(li);


            resetInput();
            hideError();
        } else {
            displayError();
        }
    }
})();