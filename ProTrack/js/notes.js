$(document).ready(function () {
    // Notes
    $('.add-note-btn').on("click", function () {
        let textareaValue = $('.textarea-form').val();

        addNote(textareaValue);
        resetNote();
    });

    //Color select

    // Create new note

    function addNote(value) {
        if (value !== "") {

            let note = $(`<div class="note-value"></div>`);
            let noteText = $(`<p class="note-text">${value}</p>`);

            note.append(noteText);

            let colors = ["#6495ED", "#B4CDCD", "#90EE90", "#EEEE00", "#FF7256","#CD9B9B"];
            let colorPick = colors[Math.floor(Math.random() * colors.length)];

            note.css("background", colorPick);
            
            let removeNote = $('<button class="btn btn-info delete-note-btn"><i class="fas fa-trash"></i></button>');

            note.append(removeNote);
            $(".note-list").append(note);

            let editNote = $('<button class="btn btn-info edit-note-btn"><i class="far fa-edit"></i></button>');
            note.append(editNote);

            removeNote.on('click', function () {
                note.remove()
                noteText.remove();
            });

            editNote.on("click", function () {
                let editNoteValue = noteText.text();
                noteText.remove();
                removeNote.remove();

                editNote.remove();
                let newNote = $('<textarea  id="task-value" class="textarea-form"></textarea>').val(editNoteValue);
                note.append(newNote);
                newNote.css("background", colorPick);


                addNewNote = $('<button id="add-new-edit" class="btn btn-primary">Save</button>');
                note.append(addNewNote);

                let cancelEditNote = $('<button id="cancel-edit" class="btn btn-success">Cancel</button>');
                note.append(cancelEditNote);

                cancelEditNote.on("click", function () {
                    addNote(newNote.val());
                    note.remove();
                });

                addNewNote.on("click", function () {
                    addNote(newNote.val());
                    note.remove();
                });

                newNote.on("keypress", function (e) {
                    if (e.keyCode === 13) {
                        addNote(newNote.val());
                        note.remove();
                    }
                });
            });


        }
    }

    function resetNote() {
        $(".textarea-form").val("");
    }

});