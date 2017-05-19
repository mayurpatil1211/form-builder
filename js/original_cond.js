'use strict';
$(document).ready(function() {

    var conditional_one = $('#conditional_one_select');
    var conditional_two = $('#conditional_two_select');
    // console.log(conditional_one);

    $(conditional_one).on('change', function() {
        var divConditionalOne = $(document.createElement('div')).css({
            padding: '3px',
            width: 'auto',
            background: '#fff'
        });
        $(divConditionalOne).addClass("sub_que_one_div");
        var conditional_que_type_one = $('#conditional_one_select').val();
        console.log(conditional_que_type_one);


        if (conditional_que_type_one == 'radio' || conditional_que_type_one == 'checkbox' || conditional_que_type_one == 'select') {
            $(divConditionalOne).append('<label class="form-label">Add Option Here</label>');
            $(divConditionalOne).append('<input type="text" class="sub_que_one_box"/>');
            $(divConditionalOne).append('<button type="button" class="btn btn-primary" id="add_more_sub_option_one">ADD</button>');
            $(divConditionalOne).append('<button type="button" class="btn btn-danger" id="remove_sub_option_one">Remove</button>');
            $(divConditionalOne).appendTo("#conditional_sub_que_one");

            $('#add_more_sub_option_one').unbind().click(function(e) {
                e.preventDefault();
                // $('.sub_que_one_box').clone().insertAfter('.sub_que_one_box')
                var addNewQuestionBox = $('.sub_que_one_box').appendTo('.sub_que_one_div').last();
                console.log(addNewQuestionBox);
                $(addNewQuestionBox).clone().insertAfter(".sub_que_one_box:last").val('');
            })




            $("#remove_sub_option_one").unbind().click(function(e) {
                e.preventDefault();
                var count = $('.sub_que_one_box').length
                if (count > 1) {
                    $(".sub_que_one_box").last().remove();
                }
            });



        } else if (conditional_que_type_one == 'text' || conditional_que_type_one == 'email' || conditional_que_type_one == 'date' || conditional_que_type_one == 'textarea' || conditional_que_type_one == 'tel') {
            $(".sub_que_one_div").remove();
        }




    });

    $(conditional_two).on('change', function() {
        var conditional_que_type_two = $('#conditional_two_select').val();


        var divConditionalTwo = $(document.createElement('div')).css({
            padding: '3px',
            width: 'auto',
            background: '#fff'
        });
        $(divConditionalTwo).addClass("sub_que_two_div");
        var conditional_que_type_two = $('#conditional_two_select').val();
        console.log(conditional_que_type_two);


        if (conditional_que_type_two == 'radio' || conditional_que_type_two == 'checkbox' || conditional_que_type_two == 'select') {
            $(divConditionalTwo).append('<label class="form-label">Add Option Here</label>');
            $(divConditionalTwo).append('<input type="text" class="sub_que_two_box"/>');
            $(divConditionalTwo).append('<button type="button" class="btn btn-primary" id="add_more_sub_option_two">ADD</button>');
            $(divConditionalTwo).append('<button type="button" class="btn btn-danger" id="remove_sub_option_two">Remove</button>');
            $(divConditionalTwo).appendTo("#conditional_sub_que_two");

            $('#add_more_sub_option_two').unbind().click(function(e) {
                e.preventDefault();
                // $('.sub_que_one_box').clone().insertAfter('.sub_que_one_box')
                var addNewQuestionBox = $('.sub_que_two_box').appendTo('.sub_que_two_div').last();
                console.log(addNewQuestionBox);
                $(addNewQuestionBox).clone().insertAfter(".sub_que_two_box:last").val('');
            })




            $("#remove_sub_option_two").unbind().click(function(e) {
                e.preventDefault();
                var count = $('.sub_que_two_box').length
                if (count > 1) {
                    $(".sub_que_two_box").last().remove();
                }
            });

        } else if (conditional_que_type_two == 'text' || conditional_que_type_two == 'email' || conditional_que_type_two == 'date' || conditional_que_type_two == 'textarea' || conditional_que_type_two == 'tel') {
            $(".sub_que_two_div").remove();
        }



    })




    $('#conditional_save_all').click(function(e) {
        e.preventDefault();
        var conditional_main_question = $('#conditional_question').val();
        var conditional_option_one = $('.conditional_rdo_one').val();
        var conditional_option_two = $('.conditional_rdo_two').val();

        var conditionalBlock = $(document.createElement('div')).css({
            padding: '10px',
            width: 'auto',
            background: '#fff'
        });
        $(conditionalBlock).addClass("default");
        $(conditionalBlock).appendTo('#sortable');


        var conditional_sub_que_two_block = $(document.createElement('div')).css({
            padding: '10px',
            width: 'auto',
            background: '#fff'
        });


        if (conditional_main_question == '' || conditional_option_one == '' || conditional_option_two == '') {

            alert('please fill all fields');



        } else {

            var label = "<label class = " + "form-label control-label" + "> </lable>";
            var newLabel = $(label).append(conditional_main_question);
            $(conditionalBlock).append(newLabel);




            var checksOne = $('.make_conditional_one');
            var checksTwo = $('.make_conditional_two');


            $("<input/>", {
                type: "radio",
                class: "conditional_option_one",
                value: conditional_option_one,
                name: 'conditional_questions'
            }).appendTo(conditionalBlock);

            $(conditionalBlock).append(conditional_option_one);



            $("<input/>", {
                type: "radio",
                class: "conditional_option_two",
                value: conditional_option_two,
                name: 'conditional_questions'
            }).appendTo(conditionalBlock);

            $(conditionalBlock).append(conditional_option_two);




            if ($('.make_conditional_one').is(":checked")) {
                // console.log($(this).parent());
                $(this).attr("checked");

                var conditional_sub_que_one_block = $(document.createElement('div')).css({
                    padding: '10px',
                    width: 'auto',
                    background: '#fff'
                });
                console.log("1 is checked");
                $(conditional_sub_que_one_block).addClass("sub_que_block_one");




                var conditional_one_question = $('#conditional_one_question').val();

                console.log(conditional_one_question, 'coq');

                var conditional_one_select = $('#conditional_one_select').val();

                if (conditional_one_question == '') {
                    alert('Please fill the details')
                } else {
                    var label_que_one = "<label class ='form-label txt-label'></lable>";

                    var new_label_conditional_one = $(label_que_one).append(conditional_one_question);


                    $(conditional_sub_que_one_block).append(new_label_conditional_one);




                    $("<textarea/>", {
                        class: 'conditional_one_ans',
                        value: 'nothing',
                        name: 'conditional_questions'
                    }).appendTo(conditional_sub_que_one_block);

                    $(conditionalBlock).append(conditional_sub_que_one_block);
                    $(".sub_que_block_one").hide();


                    $('.conditional_option_one').change(function() {

                        if ($(this).is(':checked')) {
                            $('.sub_que_block_two').hide();
                            $('.sub_que_block_one').show();
                        } else {
                            $('.sub_que_block_one').hide();
                        }


                    })




                }


            }



            if ($('.make_conditional_two').is(":checked")) {
                // console.log($(this).parent());
                $(this).attr("checked");

                var conditional_sub_que_two_block = $(document.createElement('div')).css({
                    padding: '10px',
                    width: 'auto',
                    background: '#fff'
                });
                console.log("1 is checked");
                $(conditional_sub_que_two_block).addClass("sub_que_block_two");




                var conditional_two_question = $('#conditional_two_question').val();

                console.log(conditional_two_question, 'coq');

                var conditional_two_select = $('#conditional_two_select').val();

                if (conditional_two_question == '') {
                    alert('Please fill the details')
                } else {
                    var label_que_two = "<label class ='form-label txt-label'></lable>";

                    var new_label_conditional_two = $(label_que_two).append(conditional_two_question);


                    $(conditional_sub_que_two_block).append(new_label_conditional_two);




                    $("<textarea/>", {
                        class: 'conditional_one_ans',
                        value: 'nothing',
                        name: 'conditional_questions'
                    }).appendTo(conditional_sub_que_two_block);


                    $(conditionalBlock).append(conditional_sub_que_two_block);


                    $(conditionalBlock).append(conditional_sub_que_two_block);
                    $(".sub_que_block_two").hide();

                    $('.conditional_option_two').click(function() {
                        if ($('.conditional_option_two').is(':checked')) {
                            $('.sub_que_block_one').hide();
                            $(".sub_que_block_two").show();
                        } else {
                            $(".sub_que_block_two").hide();
                        }

                    })
                }
            }
        }
    })
})