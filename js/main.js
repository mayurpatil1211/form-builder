      'use strict';
      $(document).ready(function() {
          $('.select_settings').hide();

          var mainObj = {};
          mainObj["inputs"] = [];

          let formParent = document.getElementsByClassName('main_page');
          let form = `<form id="sortable" class="form-group"></form>`;



          $(formParent).sortable({
              placeholder: "ui-state-highlight"
          }).append(form);

          $('.select_element_li').on('click', function() {
              $('.select_element_li').removeClass('active');
              $(this).addClass('active');
              var currentId = $(this).find('span').attr('id');
              console.log(currentId);
              $('.select_settings').hide();

              $('#' + currentId + '_settings').show();


              // Add Input select settings options
              $('#input_select_settings_btn').unbind().click(function(e) {
                  e.preventDefault();

                  var addSelectSettingsOption = $('.addNewOption').appendTo('#option_group').last();
                  console.log(addSelectSettingsOption);

                  $(addSelectSettingsOption).clone().insertAfter(addSelectSettingsOption).val('');
              });



              $('#input_checkbox_settings_btn').unbind().click(function(e) {
                  e.preventDefault();

                  var addCheckBox = $('.addNewCheckBox').appendTo('#checkGroup').last();
                  console.log(addCheckBox);

                  $(addCheckBox).clone().insertAfter(addCheckBox).val('');
              });


              $('#input_radio_settings_btn').unbind().click(function(e) {
                  e.preventDefault();
                  var addRadioButton = $('.addNewRadio:last').appendTo('#radio_group').last();
                  console.log(addRadioButton);
                  $(addRadioButton).clone().insertAfter(".newTextBoxes:last").val('');
              });


              $('#input_matrix_settings_btn').unbind().click(function(e) {
                  e.preventDefault();

                  var addMatrixOption = $('.addNewmatrixOption').appendTo('#matrixGroup').last();
                  console.log(addMatrixOption);

                  $(addMatrixOption).clone().insertAfter(".newMatrixBoxes:last").val('');
              });




              //////////////////////////////////////////////conditional////////////////////////////////////////////////////////

              var checksOne = $('.make_conditional_one');
              $("#conditional_one").hide();
              $("#conditional_two").hide();

              $(checksOne).on('change', function() {

                  if ($(this).is(":checked")) {
                      // console.log($(this).parent());
                      $(this).attr("checked");

                      $("#conditional_one").show();


                  }
                  if (!$(this).is(":checked")) {
                      $("#conditional_one").hide();
                  }

              });

              var checksTwo = $('.make_conditional_two');
              $(checksTwo).on('change', function() {

                  if ($(this).is(":checked")) {
                      // console.log($(this).parent());
                      $(this).attr("checked");

                      $("#conditional_two").show();

                  }
                  if (!$(this).is(":checked")) {
                      $("#conditional_two").hide();
                  }

              });
              //////////////////////////////////////////////////////////conditional ends/////////////////////////////////////////////




              /////////////////////////////////////////////////////////text Starts///////////////////////////////////////////////////

              $('#txt_save_all').unbind().click(function(e) {
                  e.preventDefault();
                  var textObj = {};
                  var count = 0;

                  var required = function(e) {
                      return $('#text_required').is(":checked");
                  }


                  var question = $('#text_question').val();
                  var name = $('#text_name').val();
                  var placeholder = $('#text_placeholder').val();
                  var type = $('#text_select').val();
                  var category = $('#category_select_text').val();

                  textObj["question"] = question;
                  textObj["type"] = type;
                  textObj["placeholder"] = placeholder;
                  textObj["category"] = category;


                  if (question == '' | name == '' | type == -1 | category == -1) {
                      alert('Please fill all details')
                  } else {


                      if (type == "tel") {

                          count += 1;
                          var countTel = "tel-" + count;


                          var output = $("<input/>", {
                              type: type,
                              class: 'form-control',
                              id: 'phone',
                              name: 'tel',
                              required: (required())
                          });

                          // console.log(output[0].outerHTML);


                          var divSubmit = $(document.createElement('div')).css({
                              padding: '10px',
                              width: 'auto',
                              background: '#fff'
                          });
                          $(divSubmit).addClass("default");
                          $(divSubmit).appendTo('#sortable');
                          var label = "<label class = " + "form-label txt-label" + "></lable>";
                          var newLabel = $(label).append(question);
                          $(divSubmit).append(newLabel);
                          // console.log(category);
                          $(output).appendTo(divSubmit);
                          $("#phone").intlTelInput({

                              utilsScript: "build/js/utils.js"
                          });

                      } else {


                          count += 1;
                          var countType = type + '-' + count;

                          var output = $("<input/>", {
                              type: type,
                              class: 'form-control',
                              id: countType,
                              name: type,
                              placeholder: placeholder,
                              required: (required())
                          });

                          var divSubmit = $(document.createElement('div')).css({
                              padding: '10px',
                              width: 'auto',
                              background: '#fff'
                          });
                          $(divSubmit).addClass("default");
                          $(divSubmit).appendTo('#sortable');
                          var label = "<label class = " + "form-label txt-label" + "></lable>";
                          var newLabel = $(label).append(question);
                          $(divSubmit).append(newLabel);
                          // console.log(category);
                          $(output).appendTo(divSubmit);
                      }

                      mainObj["inputs"].push(textObj);
                      console.log(JSON.stringify(mainObj));
                      $('form :input').val("");

                  }

              })

              //////////////////////////////////////////////////////////Text Ends/////////////////////////////////////////////////////


              ///////////////////////////////////////////////////////////Radio Starts/////////////////////////////////////////////////

              $('#radio_save_all').unbind().click(function(e) {
                  e.preventDefault();
                  var required = function(e) {
                      return $('#radio_required').is(":checked");
                  }


                  var question = $('#radio_label').val();
                  var name = $('#radio_name').val();
                  var category = $('#category_select_radio').val();

                  if (question == '' | name == '' | category == -1) {
                      alert('Please Fill all details');
                  } else {

                      var radioObj = {};
                      radioObj["question"] = question;
                      radioObj["type"] = "radio";
                      radioObj["category"] = category;

                      var divRadio = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divRadio).addClass("default");
                      $(divRadio).appendTo('#sortable');
                      var label = "<label class = " + "form-label control-label" + "> </lable>";
                      var newLabel = $(label).append(question);
                      $(divRadio).append(newLabel);

                      var item = $('#radio_group').find('.addNewRadio');
                      var count = 0;
                      var radioValues = [];
                      $.each(item, function(item, index) {

                          if (count <= 100) {
                              count += 1;
                              var customId = "radio-" + count;
                              // console.log(customId);
                              var value = $('.addNewRadio').val();
                              var radioVal = this.value;

                              $("<input/>", {
                                  type: "radio",
                                  value: this.value,
                                  id: customId,
                                  name: 'radio',
                                  class: "radio radio-inline custom_radio",
                              }).appendTo(divRadio);

                              radioValues.push(this.value);


                              $(divRadio).append(this.value);
                          }

                      });

                      radioObj['values'] = [];

                      for (var i = 0; i < radioValues.length; i++) {
                          var value = (radioValues[i]);
                          radioObj["values"].push(radioValues[i]);
                      }



                      console.log(radioObj);
                      mainObj["inputs"].push(radioObj);
                      console.log(mainObj);

                      var count = $('.addNewRadio').length
                      if (count > 1) {
                          $(".addNewRadio").last().remove();
                      }

                      $('form :input').val("");
                  }
              })

              //////////////////////////////////////////////////Radio Ends///////////////////////////////////////////////////////




              //////////////////////////////////////////////////Dropdown starts//////////////////////////////////////////////////
              $('#select_save_all').click(function(e) {
                  e.preventDefault();

                  var count = 0;
                  var required = function(e) {
                      return $('#select_required').is(":checked");
                  }

                  var dropdown = function(e) {
                      if ($('#select_dropdown').val() == "multiple") {
                          return true;
                      } else {
                          return false;
                      }
                  }
                  var question = $('#select_question').val();
                  var category = $('#category_select_option').val();
                  if (question == '') {
                      alert('Please Fill all The details');
                  } else {

                      var selectObj = {};
                      selectObj["question"] = question;
                      selectObj["category"] = category;
                      selectObj["type"] = "select";
                      count += 1;

                      var options = [];

                      var divSelect = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divSelect).addClass("default");
                      $(divSelect).appendTo('#sortable');
                      var label = "<label class = " + "form-label control-label" + "> </lable>";
                      var newLabel = $(label).append(question);
                      $(divSelect).append(newLabel);
                      var select_classes = "selectpicker .btn-default .btn-select-light";
                      var multiple = dropdown();


                      var total = $("select").size() + 1;
                      var countSelect = 'select-' + count;

                      var s = $("<select id=\"" + countSelect + "\" name=\"" + total + "\" class=\"" + select_classes + "\"/>");

                      var item = $('#option_group').find('.addNewOption');
                      $.each(item, function(item, index) {
                          var value = $('.addNewOption').val();


                          $("<option />", {
                              value: this.value,
                              text: this.value,
                              name: 'options'
                          }).appendTo(s);


                          (options).push(this.value);

                      });
                      $(s).appendTo("divSelect");
                      $(s).appendTo(divSelect);


                      $("#divSelect").html('');
                  }

                  var count = $('.addNewOption').length
                  if (count > 1) {
                      $(".addNewOption").last().remove();
                  }


                  selectObj["values"] = [];
                  for (var i = 0; i < options.length; i++) {
                      // var value = (options[i]);
                      selectObj["values"].push(options[i]);
                  }


                  console.log(selectObj);

                  mainObj["inputs"].push(selectObj);
                  console.log(mainObj);


                  $('form :input').val("");

              })

            //////////////////////////////////////////////////////////Dropdown Ends//////////////////////////////////////////



            //////////////////////////////////////////////////////////checkbox starts///////////////////////////////////////
              $('#check_save_all').click(function(e) {
                  e.preventDefault();
                  var count = 0;
                  var required = function(e) {
                      return $('#checkbox_required').is(":checked");
                  }
                  var question = $('#checkbox_label').val();
                  var category = $('#category_select_check').val();

                  if (question == '') {
                      alert('please fill the all info');
                  } else {
                      var checkObj = {};
                      checkObj["question"] = question;
                      checkObj["type"] = "checkbox";
                      checkObj["category"] = category;

                      var checkValues = [];

                      var divCheck = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divCheck).addClass("default");
                      $(divCheck).appendTo('#sortable');
                      var label = "<label class = " + "form-label txt-label" + "></lable><br/>";
                      var newLabel = $(label).append(question);
                      $(divCheck).append(newLabel);



                      var item = $('#checkGroup').find('.addNewCheckBox');
                      $.each(item, function(item, index) {
                          var value = $('.addNewCheckBox').val();
                          count += 1;
                          var countCheckbox = "checkbox" + count;

                          $("<input/>", {
                              type: "checkbox",
                              id: countCheckbox,
                              value: this.value,
                              name: 'checkbox',
                              required: (required())
                          }).appendTo(divCheck);

                          checkValues.push(this.value);


                          $(divCheck).append(this.value);




                      });
                      var count = $('.addNewCheckBox').length
                      if (count > 1) {
                          $(".addNewCheckBox").last().remove();
                      }
                      checkObj['values'] = []
                      for (var i = 0; i < checkValues.length; i++) {
                          var value = (checkValues[i]);
                          checkObj["values"].push(checkValues[i]);
                      }
                      // console.log(checkValues);
                      mainObj["inputs"].push(checkObj);
                      console.log(mainObj);

                      $('form :input').val("");

                  }

              });

              ////////////////////////////////////////////////////////checkbox ends///////////////////////////////////////////////



              ///////////////////////////////////////////////////////TextArea Starts//////////////////////////////////////////////
              $('#txtarea_save_all').unbind().click(function(e) {
                  e.preventDefault();
                  var required = function(e) {
                      return $('#txt_ares_req').val();

                  }

                  var rows = function(e) {
                      if ($('#txt_area_rows').val() == '') {
                          return false;
                      } else {
                          return $('#txt_area_rows').val();
                      }
                  }

                  var cols = function(e) {
                      if ($('#txt_area_cols').val() == '') {
                          return false;
                      } else {
                          return $('#txt_area_cols').val();
                      }
                  }

                  var question = $('#txt_area_question').val();
                  var category = $('#category_select_textarea').val();



                  var placeholder = $('#txt_area_placeholder').val();

                  if (question == '') {
                      alert('Please Fill All the details');
                  } else {

                      var txtAreaObj = {};
                      txtAreaObj["question_text"] = question;
                      txtAreaObj["category"] = category;
                      txtAreaObj["type"] = "text-area";

                      var output = $("<textarea/>", {
                          rows: (rows()),
                          // cols : (cols()),
                          // class: 'form-control',
                          placeholder: placeholder,
                          name: 'textarea',
                          required: (required())
                      });

                      mainObj["inputs"].push(txtAreaObj);
                      console.log(mainObj);



                      var divTextArea = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divTextArea).addClass("default");
                      $(divTextArea).appendTo('#sortable');
                      var label = "<label class = " + "form-label txtarea-label" + "></lable>";
                      var newLabel = $(label).append(question);
                      $(divTextArea).append(newLabel);

                      $(output).appendTo(divTextArea);
                      $('form :input').val("");

                  }


              });
              ////////////////////////////////////////////////////////textarea ends/////////////////////////////////////////////////



              //////////////////////////////////////////////////////Time starts/////////////////////////////////////////////////////
              $('#save_time').unbind().click(function(e) {
                  e.preventDefault();
                  var timeObj = {};

                  var required = function(e) {
                      return $('#time_required').is(":checked");
                  }


                  var question = $('#time_question').val();
                  var category = $('#category_select_time').val();
                  if (question == '') {
                      alert('Please fill all details')
                  } else {


                      timeObj["question_text"] = question;
                      timeObj["category"] = category;

                      // var json = JSON.stringify(myObj);



                      var output = $("<input/>", {
                          type: "time",
                          class: 'form-control time',
                          id: "time",
                          name: 'time',
                          required: (required())
                      });


                      mainObj["inputs"].push(timeObj);
                      console.log(mainObj);

                      var divSubmit = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divSubmit).addClass("default");
                      $(divSubmit).appendTo('#sortable');
                      var label = "<label class = " + "form-label txt-label" + "></lable>";
                      var newLabel = $(label).append(question);
                      $(divSubmit).append(newLabel);
                      // console.log(category);
                      $(output).appendTo(divSubmit);
                      $('form :input').val("");
                  }

              });
              ///////////////////////////////////////////////////////////Time Ends//////////////////////////////////////////////////


              //////////////////////////////////////////////////////////Range Starts////////////////////////////////////////////////
              $('#save_range').unbind().click(function(e) {
                  e.preventDefault();
                  var rangeObj = {};

                  var required = function(e) {
                      return $('#range_required').is(":checked");
                  }


                  var question = $('#range_question').val();
                  var category = $('#category_select_range').val();
                  var startValue = $('#range_start').val();
                  var endValue = $('#range_end').val();
                  var rangeStep = $('#range_steps').val();
                  if (question == '' | startValue == '' | endValue == '') {
                      alert('Please fill all details')
                  } else {

                      rangeObj["question_text"] = question;
                      rangeObj["category"] = category;
                      rangeObj["startValue"] = startValue;
                      rangeObj["endValue"] = endValue;
                      rangeObj["rangeStep"] = rangeStep;



                      var output = $("<input/>", {
                          type: "range",
                          class: 'form-control range',
                          id: "range",
                          min: startValue,
                          name: 'range',
                          max: endValue,
                          step: rangeStep,
                          required: (required()),
                          onchange: "showValue(this.value)"
                      });

                      mainObj["inputs"].push(rangeObj);
                      console.log(mainObj);

                      var divSubmit = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divSubmit).addClass("default");
                      $(divSubmit).appendTo('#sortable');
                      var label = "<label class = " + "form-label txt-label" + "></lable>";
                      var span = "<span id= " + "print_range" + "></span>";
                      var newLabel = $(label).append(question);
                      $(divSubmit).append(newLabel);
                      $(output).appendTo(divSubmit);
                      $(span).appendTo(divSubmit);
                      $('form :input').val("");
                  }

              })
              //////////////////////////////////////////////////////////Range Ends//////////////////////////////////////////////////////


              //////////////////////////////////////////////////////////file Starts/////////////////////////////////////////////////////
              $('#save_file').unbind().click(function(e) {
                  e.preventDefault();
                  var fileObj = {};

                  var required = function(e) {
                      return $('#file_required').is(":checked");
                  }


                  var question = $('#file_question').val();
                  var category = $('#category_select_file').val();

                  if (question == '') {
                      alert('Please fill all details')
                  } else {

                      fileObj["type"] = "input-file"
                      fileObj["question"] = question;
                      fileObj["category"] = category;
                      // var json = JSON.stringify(myObj);



                      var output = $("<input/>", {
                          type: "file",
                          class: 'btn btn-default input_file',
                          id: "file",
                          name: 'file',
                          required: (required()),
                      });



                      mainObj["inputs"].push(fileObj);
                      console.log(mainObj);


                      var divSubmit = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divSubmit).addClass("default");
                      $(divSubmit).appendTo('#sortable');
                      var label = "<label class = " + "form-label txt-label" + "></lable>";
                      // var span = "<span id= "+"print_range"+"></span>";
                      var newLabel = $(label).append(question);
                      $(divSubmit).append(newLabel);
                      // console.log(category);
                      $(output).appendTo(divSubmit);
                      // $(span).appendTo(divSubmit);
                      $('form :input').val("");
                  }

              })
              ///////////////////////////////////////////////////////////File ends/////////////////////////////////////////////////




              //////////////////////////////////////////////////////////calendar///////////////////////////////////////////////////

              $('#save_calendar').unbind().click(function(e) {
                  e.preventDefault();
                  var calendarObj = {};

                  var required = function(e) {
                      return $('#calendar_required').is(":checked");
                  }


                  var question = $('#calendar_question').val();
                  var category = $('#category_select_calendar').val();

                  if (question == '') {
                      alert('Please fill all details')
                  } else {

                      calendarObj["question"] = question;
                      calendarObj["category"] = category;
                      calendarObj["type"] = "calendar";

                      // var json = JSON.stringify(myObj);



                      var output = $("<input/>", {
                          type: 'text',
                          class: 'btn btn-default',
                          id: 'datepicker',
                          name: 'calender',
                          required: (required())
                      });

                      mainObj["inputs"].push(calendarObj);
                      console.log(JSON.stringify(mainObj));


                      var divSubmit = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divSubmit).addClass("default");
                      $(divSubmit).appendTo('#sortable');
                      var label = "<label class = " + "form-label txt-label" + "></lable>";
                      // var span = "<span id= "+"print_range"+"></span>";
                      var newLabel = $(label).append(question);
                      $(divSubmit).append(newLabel);
                      // console.log(category);
                      $(output).appendTo(divSubmit);
                      $('#datepicker').dcalendarpicker({
                          format: 'dd-MMM-yyyy'
                      });
                      // $(span).appendTo(divSubmit);
                      $('form :input').val("");
                  }

              })
          ///////////////////////////////////////////////////calendar end//////////////////////////////////////////////


          /////////////////////////////////////////////////////////Matrix////////////////////////////////////////////////////

              $('#matrix_save_all').click(function(e) {
                  e.preventDefault();
                  var required = function(e) {
                      return $('#matrix_required').is(":checked");
                  }
                  var question = $('#matrix_label').val();
                  var category = $('#category_select_matrix').val();

                  if (question == '') {
                      alert('please fill the all info');
                  } else {


                      var divCheck = $(document.createElement('div')).css({
                          padding: '10px',
                          width: 'auto',
                          background: '#fff'
                      });
                      $(divCheck).addClass("default");
                      $(divCheck).appendTo('#sortable');
                      var label = "<label class = " + "form-label txt-label" + "></lable><br/>";
                      var newLabel = $(label).append(question);
                      $(divCheck).append(newLabel);



                      var item = $('#matrixGroup').find('.addNewmatrixOption');
                      $.each(item, function(item, index) {
                          var value = $('.addNewmatrixOption').val();


                          $("<input/>", {
                              type: "checkbox",
                              value: this.value,
                              required: (required())
                          }).appendTo(divCheck);

                          $(divCheck).append(this.value);
                          console.log(this.value);


                          console.log(category);



                      });
                      var count = $('.addNewmatrixOption').length
                      if (count > 1) {
                          $(".addNewmatrixOption").last().remove();
                      }

                      $('form :input').val("");

                  }

              });
              //////////////////////////////////////////////////matrix end///////////////////////////////////////////////////////



              //////////////////////////////////////////////// conditional///////////////////////////////////////////////////////



              var conditional_one = $('#conditional_one_select');
              var conditional_two = $('#conditional_two_select');
              // console.log(conditional_one);

              $(conditional_one).on('change', function() {
                  $(".sub_que_one_div").remove();
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
                  $(".sub_que_two_div").remove();
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
                  var conditional_obj = {};
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

                      conditional_obj['question'] = conditional_main_question;
                      conditional_obj['category'] = 'conditional_category';
                      conditional_obj['choices'] = [];
                      // var choices = [];


                      var checksOne = $('.make_conditional_one');
                      var checksTwo = $('.make_conditional_two');


                      $("<input/>", {
                          type: "radio",
                          class: "conditional_option_one",
                          value: conditional_option_one,
                          name: 'conditional_questions'
                      }).appendTo(conditionalBlock);

                      var optionOne = [];
                          (optionOne).push(conditional_option_one);

                      $(conditionalBlock).append(conditional_option_one);



                      $("<input/>", {
                          type: "radio",
                          class: "conditional_option_two",
                          value: conditional_option_two,
                          name: 'conditional_questions'
                      }).appendTo(conditionalBlock);

                       var optionTwo = [];
                       (optionTwo).push(conditional_option_two);

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

                          console.log(conditional_one_question);

                          var conditional_one_select = $('#conditional_one_select').val();

                          if (conditional_one_question == '') {
                              alert('Please fill the details')
                          } else {
                              var label_que_one = "<label class ='form-label txt-label'></lable>";

                              var new_label_conditional_one = $(label_que_one).append(conditional_one_question);
                              var optionOneCondn = {};

                              optionOneCondn['question'] = conditional_one_question;

                              $(conditional_sub_que_one_block).append(new_label_conditional_one);




                              var typenameOne = $('#conditional_one_select').val();
                              switch (typenameOne) {
                                  case 'text':
                                      $("<input/>", {
                                          type: "text",
                                          value: conditional_one_question,
                                          id: 'conditional_one_question'
                                      }).appendTo(conditional_sub_que_one_block);
                                      optionOneCondn['type'] = 'text';
                                      optionOne.push(optionOneCondn);
                                      
                                      // console.log(conditional_obj);
                                      break;

                                  case 'tel':
                                      $("<input/>", {
                                          type: "tel",
                                          id: 'phone',
                                          class: 'from control',
                                          name: 'tel'
                                      }).appendTo(conditional_sub_que_one_block);

                                      $("#phone").intlTelInput({
                                          utilsScript: "build/js/utils.js"
                                      });
                                      optionOneCondn['type'] = 'tel';
                                      optionOne.push(optionOneCondn);
                                       
                                      break;

                                  case 'textarea':
                                      $("<textarea/>", {
                                          id: 'conditional_one_question',
                                      }).appendTo(conditional_sub_que_one_block);
                                      optionOneCondn['type'] = 'textarea';
                                       optionOne.push(optionOneCondn);
                                      
                                      break;

                                  case 'radio':

                                      var item = $('.sub_que_one_div').find('.sub_que_one_box');


                                      optionOneCondn['type'] = 'radio';
                                      var optionOneValues = [];
                                      $.each(item, function(item, index) {
                                          // console.log(customId);
                                          var value = $('.sub_que_one_box').val();
                                          var radioVal = this.radio_question;

                                          $("<input/>", {
                                              type: "radio",
                                              value: this.value,
                                              id: 'customId',
                                              name: 'radio',
                                              class: "radio radio-inline custom_radio",
                                          }).appendTo(conditional_sub_que_one_block);

                                          (optionOneValues).push(this.value)


                                          $(conditional_sub_que_one_block).append(this.value);
                                        


                                      });

                                      optionOneCondn["values"] = [];
                                      for (var i = 0; i < optionOneValues.length; i++) {
                                          // var value = (options[i]);
                                          optionOneCondn["values"].push(optionOneValues[i]);
                                      }
                                      optionOne.push(optionOneCondn);
                                      
                                      console.log(conditional_obj)

                                      break;

                                  case 'checkbox':

                                      var item = $('.sub_que_one_div').find('.sub_que_one_box');


                                       optionOneCondn['type'] = 'checkbox';
                                       var optionOneValues = [];
                                      $.each(item, function(item, index) {
                                          // console.log(customId);
                                          var value = $('.sub_que_one_box').val();
                                          var radioVal = this.radio_question;

                                          $("<input/>", {
                                              type: "checkbox",
                                              value: this.value,
                                              id: 'customId',
                                              name: 'radio',
                                              class: "checkbox checkbox-inline custom_checkbox",
                                          }).appendTo(conditional_sub_que_one_block);
                                          (optionOneValues).push(this.value)
                                          $(conditional_sub_que_one_block).append(this.value);
                                      });

                                      optionOneCondn["values"] = [];
                                      for (var i = 0; i < optionOneValues.length; i++) {
                                          // var value = (options[i]);
                                          optionOneCondn["values"].push(optionOneValues[i]);
                                      }
                                     optionOne.push(optionOneCondn);
                                      

                                      break;


                                  case 'date':
                                      
                                      $("<input/>", {
                                          type: 'text',
                                          class: 'btn btn-default',
                                          id: 'calendar',
                                          name: 'calender',
                                          placeholder: 'DD-MM-YYYY'
                                      }).appendTo(conditional_sub_que_one_block);

                                      $('#calendar').dcalendarpicker({
                                          format: 'dd-MMM-yyyy'
                                      });
                                      
                                      
                                        optionOneCondn['type'] = 'date';
                                      optionOne.push(optionOneCondn);
                                       console.log(conditional_obj);

                                      break;

                                  case 'email':

                                      $("<input/>", {
                                          type: 'email',
                                          class: 'form-group',
                                          id: 'conditional_email',
                                          name: 'email'
                                      }).appendTo(conditional_sub_que_one_block);
                                      optionOneCondn['type'] = 'email';
                                      optionOne.push(optionOneCondn);
                                      break;


                                  case 'select':

                                      var item = $('.sub_que_one_div').find('.sub_que_one_box');

                                      optionOneCondn['type'] = 'select';
                                      var optionOneValues = [];

                                      var selectOne = $('<select id="conditional_one_select" name="select_conditional" class="select_classes" style="width:auto;"/>');

                                      $.each(item, function(item, index) {
                                          // console.log(customId);
                                          var value = $('.sub_que_one_box').val();
                                          var radioVal = this.radio_question;

                                          var output = $("<option/>", {
                                              value: this.value,
                                              text: this.value,
                                              id: 'customId',
                                              class: "options"
                                          }).appendTo(selectOne);

                                          (optionOneValues).push(this.value)
                                      });


                                      optionOneCondn["values"] = [];
                                      for (var i = 0; i < optionOneValues.length; i++) {
                                          // var value = (options[i]);
                                         optionOneCondn["values"].push(optionOneValues[i]);
                                      }
                                      optionOne.push(optionOneCondn);


                                      $(conditional_sub_que_one_block).append(selectOne);
                                      break;

                              }


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
                       conditional_obj['choices'].push(optionOne);


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

                         

                          console.log(conditional_two_question);
                         

                          var conditional_two_select = $('#conditional_two_select').val();

                          if (conditional_two_question == '') {
                              alert('Please fill the details')
                          } else {
                              var label_que_two = "<label class ='form-label txt-label'></lable>";

                              var new_label_conditional_two = $(label_que_two).append(conditional_two_question);

                                var optionTwoCondn = {};
                                optionTwoCondn['question'] = conditional_two_question;

                              $(conditional_sub_que_two_block).append(new_label_conditional_two);


                              var typenameTwo = $('#conditional_one_select').val();
                              switch (typenameTwo) {
                                  case 'text':
                                      $("<input/>", {
                                          type: "text",
                                          value: conditional_two_question,
                                          id: 'conditional_one_question'
                                      }).appendTo(conditional_sub_que_two_block);
                                      optionTwoCondn['type'] = 'text';
                                      optionTwo.push(optionTwoCondn);
                                   
                                      break;

                                  case 'tel':
                                      $("<input/>", {
                                          type: "tel",
                                          id: 'phone',
                                          class: 'from control',
                                          name: 'tel'
                                      }).appendTo(conditional_sub_que_two_block);

                                      $("#phone").intlTelInput({
                                          utilsScript: "build/js/utils.js"
                                      });
                                      optionTwoCondn['type'] = 'tel';
                                      optionTwo.push(optionTwoCondn);
                                   

                                      break;

                                  case 'textarea':
                                      $("<textarea/>", {
                                          id: 'conditional_one_question',
                                      }).appendTo(conditional_sub_que_two_block);
                                      optionTwoCondn['type'] = 'textarea';
                                      optionTwo.push(optionTwoCondn);
                                     
                                      break;

                                  case 'radio':

                                      var itemTwo = $('.sub_que_two_div').find('.sub_que_two_box');

                                      optionTwoCondn['type'] = 'radio';
                                      var optionTwoValues = [];

                                      $.each(itemTwo, function(itemTwo, index) {
                                          // console.log(customId);
                                          var value = $('.sub_que_two_box').val();
                                          var radioVal = this.radio_question;

                                          $("<input/>", {
                                              type: "radio",
                                              value: this.value,
                                              id: 'customId',
                                              name: 'radio',
                                              class: "radio radio-inline custom_radio",
                                          }).appendTo(conditional_sub_que_two_block);

                                          (optionTwoValues).push(this.value)


                                          $(conditional_sub_que_two_block).append(this.value);

                                      });

                                      optionTwoCondn["values"] = [];
                                      for (var i = 0; i < optionTwoValues.length; i++) {
                                          // var value = (options[i]);
                                          optionTwoCondn["values"].push(optionTwoValues[i]);
                                      }

                                      optionTwo.push(optionTwoCondn);
                                    
                                      break;



                                  case 'checkbox':

                                      var item = $('.sub_que_two_div').find('.sub_que_two_box');


                                      optionTwoCondn['type'] = 'checkbox';
                                      var optionTwoValues = [];
                                      $.each(item, function(item, index) {
                                          // console.log(customId);
                                          var value = $('.sub_que_two_box').val();
                                          var radioVal = this.radio_question;

                                          $("<input/>", {
                                              type: "checkbox",
                                              value: this.value,
                                              id: 'customId',
                                              name: 'radio',
                                              class: "checkbox checkbox-inline custom_checkbox",
                                          }).appendTo(conditional_sub_que_two_block);
                                          (optionTwoValues).push(this.value)
                                          $(conditional_sub_que_two_block).append(this.value);
                                      });
                                      optionTwoCondn["values"] = [];
                                      for (var i = 0; i < optionTwoValues.length; i++) {
                                          // var value = (options[i]);
                                          optionTwoCondn["values"].push(optionTwoValues[i]);
                                      }
                                      optionTwo.push(optionTwoCondn);
                                      break;

                                  case 'date':
                                      $("<input/>", {
                                          type: 'text',
                                          class: 'btn btn-default',
                                          id: 'datepicker',
                                          name: 'calender',
                                          placeholder: 'DD-MM-YYYY'
                                      }).appendTo(conditional_sub_que_two_block);

                                      $('#datepicker').dcalendarpicker({
                                          format: 'dd-MMM-yyyy'
                                      });
                                      optionTwoCondn['type'] = 'date';
                                      optionTwo.push(optionTwoCondn);
                                      break;

                                  case 'email':

                                      $("<input/>", {
                                          type: 'email',
                                          class: 'form-group',
                                          id: 'conditional_email',
                                          name: 'email'
                                      }).appendTo(conditional_sub_que_two_block);
                                      optionTwoCondn['type'] = 'email';
                                      optionTwo.push(optionTwoCondn);

                                      break;

                                  case 'select':

                                      var item = $('.sub_que_two_div').find('.sub_que_two_box');

                                      optionTwoCondn['type'] = 'select';
                                      var optionTwoValues = [];

                                      var selectTwo = $('<select id="conditional_two_select" name="select_conditional_two" class="select_classes" style="width:auto;"/>');

                                      $.each(item, function(item, index) {
                                          // console.log(customId);
                                          var value = $('.sub_que_two_box').val();


                                          var output = $("<option/>", {
                                              value: this.value,
                                              text: this.value,
                                              id: 'customId',
                                              class: "options"
                                          }).appendTo(selectTwo);

                                          (optionTwoValues).push(this.value)

                                      });

                                      optionTwoCondn["values"] = [];
                                      for (var i = 0; i < optionTwoValues.length; i++) {
                                          // var value = (options[i]);
                                          optionTwoCondn["values"].push(optionTwoValues[i]);
                                      }
                                      optionTwo.push(optionTwoCondn);

                                      $(conditional_sub_que_two_block).append(selectTwo);

                                      break;

                              }



                              $(conditionalBlock).append(conditional_sub_que_two_block);
                              $(".sub_que_block_two").hide();

                              $('.conditional_option_two').click(function() {
                                  if ($('.conditional_option_two').is(':checked')) {
                                      $(".sub_que_block_one").hide();
                                      $(".sub_que_block_two").show();
                                  } else {
                                      $(".sub_que_block_two").hide();
                                  }

                              })
                          }
                      }

                      conditional_obj['choices'].push(optionTwo);
                  }

                  mainObj["inputs"].push(conditional_obj);
                  console.log( JSON.stringify(mainObj));

                  $('#conditional_one').hide();
                  $('#conditional_two').hide();
                  $('form :input').val("");
              })



            ///////////////////////////////////////////// conditional ends////////////////////////////////////////////////////



              $("#remove_radio_settings_btn").unbind().click(function(e) {
                  e.preventDefault();
                  var count = $('.addNewRadio').length
                  if (count > 1) {
                      $(".addNewRadio").last().remove();
                  }
              });

              $("#remove_checkbox_settings_btn").unbind().click(function(e) {
                  e.preventDefault();
                  var count = $('.addNewCheckBox').length
                  if (count > 1) {
                      $(".addNewCheckBox").last().remove();
                  }
              });

              $("#remove_select_settings_btn").unbind().click(function(e) {
                  e.preventDefault();

                  var count = $('.addNewOption').length
                  if (count > 1) {
                      $(".addNewOption").last().remove();
                  }

              })

              $("#remove_matrix_settings_btn").unbind().click(function(e) {
                  e.preventDefault();
                  var count = $('.addNewmatrixOption').length
                  if (count > 1) {
                      $(".addNewmatrixOption").last().remove();
                  }
              })

              $('#main_submit').unbind().click(function(e) {
                  e.preventDefault();
                  var formName = prompt("Please Name The form");
                  if (formName == '') {
                      alert("You can't save form without naming it.")
                  } else {

                  		$.ajax({
						    url: 'api.letsendorse.com:81/form',
						    type: "POST",
						    data: JSON.stringify(mainObj),
						    contentType: "application/json"
						    
						});

                      // localStorage.setItem(formName, JSON.stringify(mainObj));
                      // console.log(JSON.stringify(mainObj));
                      alert("Saved Successfully");
                  }

              })



          });

      });



      //http://stackoverflow.com/questions/10578619/jquery-dynamically-create-select-tag
      //creating select tag


      //email regex : /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
      //     var userinput = $(this).val();
      // var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

      // if(!pattern.test(userinput))
      // {
      //   alert('not a valid e-mail address');
      // }​


      //                 function validateUrl()   // return true or false.
      // {
      //     var urlregex = new RegExp(
      //           "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
      //     return urlregex.test(textval);
      // }