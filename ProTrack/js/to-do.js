$(document).ready(function () {

    // To-do
    if ($('#task-value').val() === '') {
        $("#add-task-btn").prop('disabled', true);
        $("#add-task-btn").removeClass("btn-primary");
        $("#add-task-btn").addClass("btn-secondary");
    }

    $("#task-value").on("keyup", function () {
        $("#add-task-btn").prop('disabled', false);
        $("#add-task-btn").removeClass("btn-secondary");
        $("#add-task-btn").addClass("btn-primary");

        if ($('#task-value').val() === '') {
            $("#add-task-btn").prop('disabled', true);
            $("#add-task-btn").removeClass("btn-primary");
            $("#add-task-btn").addClass("btn-secondary");
        }
    });

    // Click add to add a task
    $("#add-task-btn").on("click", function () {
        let inputValue = $('#task-value').val();

        addToDo(inputValue);
        resetToDo();
    });

    // Press enter to add a task
    $('#task-value').on("keypress", function (e) {
        if (e.keyCode === 13) {
            let inputValue = $('#task-value').val();

            addToDo(inputValue);
            resetToDo();
        }
    });

    $('#clear-value').on("click", function () {
        resetToDo();
    });
    // Create new task
    function addToDo(value) {
        if (value !== "") {
            let item = $(`<li class="to-do-item"></li>`);

            let textWrapper = $('<div id="textWrapper"></div>');
            let toDoValue = $(`<span id="to-do-value">${value}</span>`);
            let checkbox = $('<input type="checkbox" id="to-do-checkbox">');

            textWrapper.append(checkbox);
            textWrapper.append(toDoValue);

            item.append(textWrapper);

            let actionBtnWrapper = $('<div class="action-btn-wrapper"></div>');
            item.append(actionBtnWrapper);

            let editItem = $('<button class="btn btn-info" id="edit-to-do"><i class="far fa-edit" ></i></button>');
            actionBtnWrapper.append(editItem);

            let removeItem = $('<button class="btn btn-danger" id="delete-to-do"><i class="fas fa-trash"></i></button>');
            actionBtnWrapper.append(removeItem);

            $("#tasks").append(item);

            checkbox.change(function () {
                if (checkbox.is(":checked")) {
                    toDoValue.css('text-decoration', 'line-through');
                } else {
                    toDoValue.css('text-decoration', 'none');
                }
            });

            removeItem.on('click', function () {
                item.remove();
            });

            editItem.on('click', function () {
                $('#to-do-checkbox').remove();
                let editValue = $('#to-do-value').text();
                $('#to-do-value').remove();
                removeItem.remove();

                editItem.remove();

                let taskInputWrapper = $('<div class="add-task-input-wrapper"></div>')
                item.append(taskInputWrapper);

                let newInput = $('<input type="text" id="task-value" class="form-control">').val(editValue);
                taskInputWrapper.append(newInput);

                clearEdit = $('<i id="clear-value" class="fas fa-times">');
                taskInputWrapper.append(clearEdit);

                let actionBtnWrapper = $('<div class="action-btn-wrapper"></div>');
                item.append(actionBtnWrapper);

                addItem = $('<button class="btn btn-primary" id="add-new-edit">Save</button>');
                actionBtnWrapper.append(addItem);

                let cancelEdit = $('<button class="btn btn-success" id="cancel-edit">Cancel</button>');
                actionBtnWrapper.append(cancelEdit);

                cancelEdit.on("click", function () {
                    addToDo(newInput.val());
                    item.remove();
                });

                addItem.on("click", function () {
                    addToDo(newInput.val());
                    item.remove();
                });

                clearEdit.on("click", function () {
                    $(newInput).val("");
                });

            });
        }
    }

    function resetToDo() {
        $("#task-value").val("");

        $("#add-task-btn").prop('disabled', true);
        $("#add-task-btn").removeClass("btn-primary");
        $("#add-task-btn").addClass("btn-secondary");
    }
    // To-do end
});