     //  var conditional_one = $('#conditional_one_select');
     //          var conditional_two = $('#conditional_two_select');
     //          // console.log(conditional_one);

     //          $(conditional_one).on('change', function() {
     //              $(".sub_que_one_div").remove();
     //              var divConditionalOne = $(document.createElement('div')).css({
     //                  padding: '3px',
     //                  width: 'auto',
     //                  background: '#fff'
     //              });
     //              $(divConditionalOne).addClass("sub_que_one_div");
     //              var conditional_que_type_one = $('#conditional_one_select').val();
     //              console.log(conditional_que_type_one);


     //              if (conditional_que_type_one == 'radio' || conditional_que_type_one == 'checkbox' || conditional_que_type_one == 'select') {
     //                  $(divConditionalOne).append('<label class="form-label">Add Option Here</label>');
     //                  $(divConditionalOne).append('<input type="text" class="sub_que_one_box"/>');
     //                  $(divConditionalOne).append('<button type="button" class="btn btn-primary" id="add_more_sub_option_one">ADD</button>');
     //                  $(divConditionalOne).append('<button type="button" class="btn btn-danger" id="remove_sub_option_one">Remove</button>');
     //                  $(divConditionalOne).appendTo("#conditional_sub_que_one");

     //                  $('#add_more_sub_option_one').unbind().click(function(e) {
     //                      e.preventDefault();
     //                      // $('.sub_que_one_box').clone().insertAfter('.sub_que_one_box')
     //                      var addNewQuestionBox = $('.sub_que_one_box').appendTo('.sub_que_one_div').last();
     //                      console.log(addNewQuestionBox);
     //                      $(addNewQuestionBox).clone().insertAfter(".sub_que_one_box:last").val('');
     //                  })




     //                  $("#remove_sub_option_one").unbind().click(function(e) {
     //                      e.preventDefault();
     //                      var count = $('.sub_que_one_box').length
     //                      if (count > 1) {
     //                          $(".sub_que_one_box").last().remove();
     //                      }
     //                  });



     //              } else if (conditional_que_type_one == 'text' || conditional_que_type_one == 'email' || conditional_que_type_one == 'date' || conditional_que_type_one == 'textarea' || conditional_que_type_one == 'tel') {
     //                  $(".sub_que_one_div").remove();
     //              }




     //          });

     //          $(conditional_two).on('change', function() {
     //              $(".sub_que_two_div").remove();
     //              var conditional_que_type_two = $('#conditional_two_select').val();


     //              var divConditionalTwo = $(document.createElement('div')).css({
     //                  padding: '3px',
     //                  width: 'auto',
     //                  background: '#fff'
     //              });
     //              $(divConditionalTwo).addClass("sub_que_two_div");
     //              var conditional_que_type_two = $('#conditional_two_select').val();
     //              console.log(conditional_que_type_two);


     //              if (conditional_que_type_two == 'radio' || conditional_que_type_two == 'checkbox' || conditional_que_type_two == 'select') {
     //                  $(divConditionalTwo).append('<label class="form-label">Add Option Here</label>');
     //                  $(divConditionalTwo).append('<input type="text" class="sub_que_two_box"/>');
     //                  $(divConditionalTwo).append('<button type="button" class="btn btn-primary" id="add_more_sub_option_two">ADD</button>');
     //                  $(divConditionalTwo).append('<button type="button" class="btn btn-danger" id="remove_sub_option_two">Remove</button>');
     //                  $(divConditionalTwo).appendTo("#conditional_sub_que_two");

     //                  $('#add_more_sub_option_two').unbind().click(function(e) {
     //                      e.preventDefault();
     //                      // $('.sub_que_one_box').clone().insertAfter('.sub_que_one_box')
     //                      var addNewQuestionBox = $('.sub_que_two_box').appendTo('.sub_que_two_div').last();
     //                      console.log(addNewQuestionBox);
     //                      $(addNewQuestionBox).clone().insertAfter(".sub_que_two_box:last").val('');
     //                  })




     //                  $("#remove_sub_option_two").unbind().click(function(e) {
     //                      e.preventDefault();
     //                      var count = $('.sub_que_two_box').length
     //                      if (count > 1) {
     //                          $(".sub_que_two_box").last().remove();
     //                      }
     //                  });

     //              } else if (conditional_que_type_two == 'text' || conditional_que_type_two == 'email' || conditional_que_type_two == 'date' || conditional_que_type_two == 'textarea' || conditional_que_type_two == 'tel') {
     //                  $(".sub_que_two_div").remove();
     //              }



     //          })




     //          $('#conditional_save_all').click(function(e) {
     //              e.preventDefault();
     //              var conditional_obj = {};
     //              var conditional_main_question = $('#conditional_question').val();
     //              var conditional_option_one = $('.conditional_rdo_one').val();
     //              var conditional_option_two = $('.conditional_rdo_two').val();

     //              var conditionalBlock = $(document.createElement('div')).css({
     //                  padding: '10px',
     //                  width: 'auto',
     //                  background: '#fff'
     //              });
     //              $(conditionalBlock).addClass("default");
     //              $(conditionalBlock).appendTo('#sortable');


     //              var conditional_sub_que_two_block = $(document.createElement('div')).css({
     //                  padding: '10px',
     //                  width: 'auto',
     //                  background: '#fff'
     //              });


     //              if (conditional_main_question == '' || conditional_option_one == '' || conditional_option_two == '') {

     //                  alert('please fill all fields');



     //              } else {

     //              	    var conditional_option_one = $('.conditional_rdo_one').val();
     //             		var conditional_option_two = $('.conditional_rdo_two').val();

     //                  var label = "<label class = " + "form-label control-label" + "> </lable>";
     //                  var newLabel = $(label).append(conditional_main_question);
     //                  $(conditionalBlock).append(newLabel);

     //                  conditional_obj['question'] = conditional_main_question;
     //                  conditional_obj['category'] = 'conditional_category';
     //                  conditional_obj['choices'] = [];
     //                  // var choices = [];


     //                  var checksOne = $('.make_conditional_one');
     //                  var checksTwo = $('.make_conditional_two');

                     
     //                  $("<input/>", {
     //                      type: "radio",
     //                      class: "conditional_option_one",
     //                      value: conditional_option_one,
     //                      name: 'conditional_questions'
     //                  }).appendTo(conditionalBlock);

     //                  var optionOne = [];
     //                  (optionOne).push(conditional_option_one);

     //                  $(conditionalBlock).append(conditional_option_one);



                      	

     //                  $("<input/>", {
     //                      type: "radio",
     //                      class: "conditional_option_two",
     //                      value: conditional_option_two,
     //                      name: 'conditional_questions'
     //                  }).appendTo(conditionalBlock);

     //                var optionTwo = [];
					// (optionTwo).push(conditional_option_two);

     //                  $(conditionalBlock).append(conditional_option_two);




     //                  if ($('.make_conditional_one').is(":checked")) {
     //                      // console.log($(this).parent());
     //                      $(this).attr("checked");

     //                      var conditional_sub_que_one_block = $(document.createElement('div')).css({
     //                          padding: '10px',
     //                          width: 'auto',
     //                          background: '#fff'
     //                      });
     //                      console.log("1 is checked");
     //                      $(conditional_sub_que_one_block).addClass("sub_que_block_one");


                          



     //                      var conditional_one_question = $('#conditional_one_question').val();

     //                      console.log(conditional_one_question);

     //                      var conditional_one_select = $('#conditional_one_select').val();

     //                      if (conditional_one_question == '') {
     //                          alert('Please fill the details')
     //                      } else {
     //                          var label_que_one = "<label class ='form-label txt-label'></lable>";

     //                          var new_label_conditional_one = $(label_que_one).append(conditional_one_question);
     //                          var optionOneCondn = {};

     //                          optionOneCondn['question'] = conditional_one_question;

     //                          $(conditional_sub_que_one_block).append(new_label_conditional_one);




     //                          var typenameOne = $('#conditional_one_select').val();
     //                          switch (typenameOne) {
     //                              case 'text':
     //                                  $("<input/>", {
     //                                      type: "text",
     //                                      value: conditional_one_question,
     //                                      id: 'conditional_one_question'
     //                                  }).appendTo(conditional_sub_que_one_block);
     //                                  optionOneCondn['type'] = 'text';
     //                                  optionOne.push(optionOneCondn);
     //                                   conditional_obj['choices'].push(optionOne);
     //                                  // console.log(conditional_obj);
     //                                  break;

     //                              case 'tel':
     //                                  $("<input/>", {
     //                                      type: "tel",
     //                                      id: 'phone',
     //                                      class: 'from control',
     //                                      name: 'tel'
     //                                  }).appendTo(conditional_sub_que_one_block);

     //                                  $("#phone").intlTelInput({
     //                                      utilsScript: "build/js/utils.js"
     //                                  });
     //                                  optionOneCondn['type'] = 'tel';
     //                                  optionOne.push(optionOneCondn);
     //                                   conditional_obj['choices'].push(optionOne);
     //                                  break;

     //                              case 'textarea':
     //                                  $("<textarea/>", {
     //                                      id: 'conditional_one_question',
     //                                  }).appendTo(conditional_sub_que_one_block);
     //                                  optionOneCondn['type'] = 'textarea';
     //                                   optionOne.push(optionOneCondn);
     //                                   conditional_obj['choices'].push(optionOne);
     //                                  console.log(conditional_obj);
     //                                  break;

     //                              case 'radio':

     //                                  var item = $('.sub_que_one_div').find('.sub_que_one_box');


     //                                  optionOneCondn['type'] = 'radio';
     //                                  var optionOneValues = [];
     //                                  $.each(item, function(item, index) {
     //                                      // console.log(customId);
     //                                      var value = $('.sub_que_one_box').val();
     //                                      var radioVal = this.radio_question;

     //                                      $("<input/>", {
     //                                          type: "radio",
     //                                          value: this.value,
     //                                          id: 'customId',
     //                                          name: 'radio',
     //                                          class: "radio radio-inline custom_radio",
     //                                      }).appendTo(conditional_sub_que_one_block);

     //                                      (optionOneValues).push(this.value)


     //                                      $(conditional_sub_que_one_block).append(this.value);
                                        


     //                                  });

     //                                  optionOneCondn["values"] = [];
     //                                  for (var i = 0; i < optionOneValues.length; i++) {
     //                                      // var value = (options[i]);
     //                                      optionOneCondn["values"].push(optionOneValues[i]);
     //                                  }
     //                                  optionOne.push(optionOneCondn);
     //                                  conditional_obj['choices'].push(optionOne);
     //                                  console.log(conditional_obj)

     //                                  break;

     //                              case 'checkbox':

     //                                  var item = $('.sub_que_one_div').find('.sub_que_one_box');


     //                                   optionOneCondn['type'] = 'checkbox';
     //                                   var optionOneValues = [];
     //                                  $.each(item, function(item, index) {
     //                                      // console.log(customId);
     //                                      var value = $('.sub_que_one_box').val();
     //                                      var radioVal = this.radio_question;

     //                                      $("<input/>", {
     //                                          type: "checkbox",
     //                                          value: this.value,
     //                                          id: 'customId',
     //                                          name: 'radio',
     //                                          class: "checkbox checkbox-inline custom_checkbox",
     //                                      }).appendTo(conditional_sub_que_one_block);
     //                                      (optionOneValues).push(this.value)
     //                                      $(conditional_sub_que_one_block).append(this.value);
     //                                  });

     //                                  optionOneCondn["values"] = [];
     //                                  for (var i = 0; i < optionOneValues.length; i++) {
     //                                      // var value = (options[i]);
     //                                      optionOneCondn["values"].push(optionOneValues[i]);
     //                                  }
     //                                 optionOne.push(optionOneCondn);
     //                                  conditional_obj['choices'].push(optionOne);
     //                                  console.log(conditional_obj);

     //                                  break;


     //                              case 'date':
                                      
     //                                  $("<input/>", {
     //                                      type: 'text',
     //                                      class: 'btn btn-default',
     //                                      id: 'calendar',
     //                                      name: 'calender',
     //                                      placeholder: 'DD-MM-YYYY'
     //                                  }).appendTo(conditional_sub_que_one_block);

     //                                  $('#calendar').dcalendarpicker({
     //                                      format: 'dd-MMM-yyyy'
     //                                  });
                                      
                                      
     //                                    optionOneCondn['type'] = 'date';
     //                                  optionOne.push(optionOneCondn);
     //                                   conditional_obj['choices'].push(optionOne);
     //                                   console.log(conditional_obj);

     //                                  break;

     //                              case 'email':

     //                                  $("<input/>", {
     //                                      type: 'email',
     //                                      class: 'form-group',
     //                                      id: 'conditional_email',
     //                                      name: 'email'
     //                                  }).appendTo(conditional_sub_que_one_block);
     //                                  optionOneCondn['type'] = 'email';
     //                                  optionOne.push(optionOneCondn);
     //                                  conditional_obj['choices'].push(optionOne);
     //                                  console.log(conditional_obj);
     //                                  break;


     //                              case 'select':

     //                                  var item = $('.sub_que_one_div').find('.sub_que_one_box');

     //                                  optionOneCondn['type'] = 'select';
     //                                  var optionOneValues = [];

     //                                  var selectOne = $('<select id="conditional_one_select" name="select_conditional" class="select_classes" style="width:auto;"/>');

     //                                  $.each(item, function(item, index) {
     //                                      // console.log(customId);
     //                                      var value = $('.sub_que_one_box').val();
     //                                      var radioVal = this.radio_question;

     //                                      var output = $("<option/>", {
     //                                          value: this.value,
     //                                          text: this.value,
     //                                          id: 'customId',
     //                                          class: "options"
     //                                      }).appendTo(selectOne);

     //                                      (optionOneValues).push(this.value)
     //                                  });


     //                                  optionOneCondn["values"] = [];
     //                                  for (var i = 0; i < optionOneValues.length; i++) {
     //                                      // var value = (options[i]);
     //                                     optionOneCondn["values"].push(optionOneValues[i]);
     //                                  }
     //                                  optionOne.push(optionOneCondn);
     //                                 conditional_obj['choices'].push(optionOne);
     //                                  console.log(conditional_obj);


     //                                  $(conditional_sub_que_one_block).append(selectOne);
     //                                  break;

     //                          }


     //                          $(conditionalBlock).append(conditional_sub_que_one_block);
     //                          $(".sub_que_block_one").hide();


     //                          $('.conditional_option_one').change(function() {

     //                              if ($(this).is(':checked')) {
     //                                  $('.sub_que_block_two').hide();
     //                                  $('.sub_que_block_one').show();
     //                              } else {
     //                                  $('.sub_que_block_one').hide();
     //                              }


     //                          })
     //                      }

                          	
     //                  }
					// 	conditional_obj['choices'].push(optionone);


     //                  if ($('.make_conditional_two').is(":checked")) {
     //                      // console.log($(this).parent());
     //                      $(this).attr("checked");

     //                      var conditional_sub_que_two_block = $(document.createElement('div')).css({
     //                          padding: '10px',
     //                          width: 'auto',
     //                          background: '#fff'
     //                      });
     //                      console.log("1 is checked");
     //                      $(conditional_sub_que_two_block).addClass("sub_que_block_two");

     //                      var conditional_two_question = $('#conditional_two_question').val();

     //                      var optionTwo = [];

     //                      console.log(conditional_two_question);
     //                      optionTwo['question'] = conditional_two_question;

     //                      var conditional_two_select = $('#conditional_two_select').val();

     //                      if (conditional_two_question == '') {
     //                          alert('Please fill the details')
     //                      } else {
     //                          var label_que_two = "<label class ='form-label txt-label'></lable>";

     //                          var new_label_conditional_two = $(label_que_two).append(conditional_two_question);

     //                            var optionTwoCondn = {};

     //                          $(conditional_sub_que_two_block).append(new_label_conditional_two);


     //                          var typenameTwo = $('#conditional_one_select').val();
     //                          switch (typenameTwo) {
     //                              case 'text':
     //                                  $("<input/>", {
     //                                      type: "text",
     //                                      value: conditional_two_question,
     //                                      id: 'conditional_one_question'
     //                                  }).appendTo(conditional_sub_que_two_block);
     //                                  optionTwoCondn['type'] = 'text';
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);
     //                                  break;

     //                              case 'tel':
     //                                  $("<input/>", {
     //                                      type: "tel",
     //                                      id: 'phone',
     //                                      class: 'from control',
     //                                      name: 'tel'
     //                                  }).appendTo(conditional_sub_que_two_block);

     //                                  $("#phone").intlTelInput({
     //                                      utilsScript: "build/js/utils.js"
     //                                  });
     //                                  optionTwoCondn['type'] = 'tel';
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);

     //                                  break;

     //                              case 'textarea':
     //                                  $("<textarea/>", {
     //                                      id: 'conditional_one_question',
     //                                  }).appendTo(conditional_sub_que_two_block);
     //                                  optionTwoCondn['type'] = 'textarea';
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);
     //                                  break;

     //                              case 'radio':

     //                                  var itemTwo = $('.sub_que_two_div').find('.sub_que_two_box');

     //                                  optionTwoCondn['type'] = 'radio';
     //                                  var optionTwoValues = [];

     //                                  $.each(itemTwo, function(itemTwo, index) {
     //                                      // console.log(customId);
     //                                      var value = $('.sub_que_two_box').val();
     //                                      var radioVal = this.radio_question;

     //                                      $("<input/>", {
     //                                          type: "radio",
     //                                          value: this.value,
     //                                          id: 'customId',
     //                                          name: 'radio',
     //                                          class: "radio radio-inline custom_radio",
     //                                      }).appendTo(conditional_sub_que_two_block);

     //                                      (optionTwoValues).push(this.value)


     //                                      $(conditional_sub_que_two_block).append(this.value);

     //                                  });

     //                                  optionTwoCondn["values"] = [];
     //                                  for (var i = 0; i < optionTwoValues.length; i++) {
     //                                      // var value = (options[i]);
     //                                      optionTwoCondn["values"].push(optionTwoValues[i]);
     //                                  }

     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);
     //                                  console.log(conditional_obj)
     //                                  break;



     //                              case 'checkbox':

     //                                  var item = $('.sub_que_two_div').find('.sub_que_two_box');


     //                                  optionTwoCondn['type'] = 'checkbox';
     //                                  var optionTwoValues = [];
     //                                  $.each(item, function(item, index) {
     //                                      // console.log(customId);
     //                                      var value = $('.sub_que_two_box').val();
     //                                      var radioVal = this.radio_question;

     //                                      $("<input/>", {
     //                                          type: "checkbox",
     //                                          value: this.value,
     //                                          id: 'customId',
     //                                          name: 'radio',
     //                                          class: "checkbox checkbox-inline custom_checkbox",
     //                                      }).appendTo(conditional_sub_que_two_block);
     //                                      (optionTwoValues).push(this.value)
     //                                      $(conditional_sub_que_two_block).append(this.value);
     //                                  });
     //                                  optionTwoCondn["values"] = [];
     //                                  for (var i = 0; i < optionTwoValues.length; i++) {
     //                                      // var value = (options[i]);
     //                                      optionTwoCondn["values"].push(optionTwoValues[i]);
     //                                  }
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);
     //                                  console.log(conditional_obj);
     //                                  break;

     //                              case 'date':
     //                                  $("<input/>", {
     //                                      type: 'text',
     //                                      class: 'btn btn-default',
     //                                      id: 'datepicker',
     //                                      name: 'calender',
     //                                      placeholder: 'DD-MM-YYYY'
     //                                  }).appendTo(conditional_sub_que_two_block);

     //                                  $('#datepicker').dcalendarpicker({
     //                                      format: 'dd-MMM-yyyy'
     //                                  });
     //                                  optionTwoCondn['type'] = 'date';
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);
     //                                  console.log(conditional_obj);
     //                                  break;

     //                              case 'email':

     //                                  $("<input/>", {
     //                                      type: 'email',
     //                                      class: 'form-group',
     //                                      id: 'conditional_email',
     //                                      name: 'email'
     //                                  }).appendTo(conditional_sub_que_two_block);
     //                                  optionTwoCondn['type'] = 'email';
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);

     //                                  break;

     //                              case 'select':

     //                                  var item = $('.sub_que_two_div').find('.sub_que_two_box');

     //                                  optionTwoCondn['type'] = 'select';
     //                                  var optionTwoValues = [];

     //                                  var selectTwo = $('<select id="conditional_two_select" name="select_conditional_two" class="select_classes" style="width:auto;"/>');

     //                                  $.each(item, function(item, index) {
     //                                      // console.log(customId);
     //                                      var value = $('.sub_que_two_box').val();


     //                                      var output = $("<option/>", {
     //                                          value: this.value,
     //                                          text: this.value,
     //                                          id: 'customId',
     //                                          class: "options"
     //                                      }).appendTo(selectTwo);

     //                                      (optionTwoValues).push(this.value)

     //                                  });

     //                                  optionTwoCondn["values"] = [];
     //                                  for (var i = 0; i < optionTwoValues.length; i++) {
     //                                      // var value = (options[i]);
     //                                      optionTwoCondn["values"].push(optionTwoValues[i]);
     //                                  }
     //                                  optionTwo.push(optionTwoCondn);
     //                                  conditional_obj['choices'].push(optionTwo);
     //                                  console.log(conditional_obj);

     //                                  $(conditional_sub_que_two_block).append(selectTwo);

     //                                  break;
     //                          }



     //                          $(conditionalBlock).append(conditional_sub_que_two_block);
     //                          $(".sub_que_block_two").hide();

     //                          $('.conditional_option_two').click(function() {
     //                              if ($('.conditional_option_two').is(':checked')) {
     //                                  $(".sub_que_block_one").hide();
     //                                  $(".sub_que_block_two").show();
     //                              } else {
     //                                  $(".sub_que_block_two").hide();
     //                              }

     //                          })
     //                      }

     //                             conditional_obj['choices'].push(optionTwo);
     //                  }
     //              }

     //              mainObj["inputs"].push(conditional_obj);
     //              console.log(mainObj);

     //              $('#conditional_one').hide();
     //              $('#conditional_two').hide();
     //              $('form :input').val("");
     //          })



     //    