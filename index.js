(function () {
    var input = $('#userInput');
    var submit = $('#submitTodo');

    function displayInConsole() {
        console.log(input.val());
    }

    console.log(submit);

    submit.click(displayInConsole);
})();