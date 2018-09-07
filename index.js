(function () {
    var input = $('#userInput');
    var submit = $('#submitTodo');
    var ul = $('#ul');

    function addTodo() {
        var li = document.createElement('li');
        var txt = document.createTextNode(input.val());
        li.append(txt);
        ul.append(li);
    }

    submit.click(addTodo);
})();