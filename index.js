(function () {
    var input = $('#userInput');
    var submit = $('#submitTodo');
    var ul = $('#ul');

    function addTodo() {
        var li = $('<li class="list-group-item">' + input.val() + '</li>');
        ul.append(li);
    }

    submit.click(addTodo);
})();