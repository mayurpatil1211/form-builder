    'use strict';
    $(document).ready(function () {
     $('.select_settings').hide();
        window.json = {};
        window.json['categories'] = [];
        window.json['questions'] = [];

     let formParent = document.getElementsByClassName('main_page');
     let form = `<form id="sortable" class="form-group"></form>`;
     // $(form).addClass("sortable");
     

     $(formParent).sortable({placeholder: "ui-state-highlight"}).append(form);

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
            // var btn = "<button class=\""+"btn btn-danger removeItem"+"\">REMOVE</button>";
            // $(btn).unbind().appendTo('#option_group');

        });



        $('#input_checkbox_settings_btn').unbind().click(function(e){
            e.preventDefault();

            var addCheckBox = $('.addNewCheckBox').appendTo('#checkGroup').last();
            console.log(addCheckBox);

            $(addCheckBox).clone().insertAfter(addCheckBox).val('');
        });


        $('#input_radio_settings_btn').unbind().click(function(e){
            e.preventDefault();
            var addRadioButton =  $('.addNewRadio:last').appendTo('#radio_group').last();
            console.log(addRadioButton);
            $(addRadioButton).clone().insertAfter(".newTextBoxes:last").val('');

            // $("#car2").clone().insertAfter("div.car_well:last");
        });

        $('#input_matrix_settings_btn').unbind().click(function(e){
            e.preventDefault();

            var addMatrixOption = $('.addNewmatrixOption').appendTo('#matrixGroup').last();
            console.log(addMatrixOption);

            $(addMatrixOption).clone().insertAfter(".newMatrixBoxes:last").val('');
        });


        // $('.make_condition').val($(this).is(':checked'){
        //     console.log('checked');
        // })

    var checks = $('.make_conditional');
    $(checks).on('change', function(){

         if($(this).is(":checked")) {
            console.log($(this).parent());
            $(this).attr("checked");
            console.log("conditional");
            var box = $("<li/>",{
                class: "li"
            })
            var output = $("<input/>", {
                    type: "text", 
                    name: "condition",
                    class: "form-control",
                    placeholder: 'value',
                    style: "width:60%; float:left;"
                });
                
               

             $(output).insertAfter(this).parent().find('.conditional_rdo');
              var checkbox = $("<input/>", {
                type: "checkbox",
                class: "make_conditional",
                style: "list-style-type:none;"
            });
               $(output).appendTo(box);
               $(checkbox).appendTo(box);

             $(box).insertAfter(this).parent().find('.form-control').appendTo('.radioDiv1');
        }
        if(!$(this).is(":checked")){
            $('.li').hide();
        }
    
    });
            
        
        



    // $('#input_radio_settings_btn').unbind().click(function (e) {
    //     e.preventDefault();

    //     var radio_btn = $(this).closest('#radio_group');

    //     console.log(radio_btn);
    //     console.log(radio_btn.find('.addNewRadio').length);
    //     console.log($(radio_btn).append('<input type="text" id="current Name" value="" />'))

    //     if (radio_btn.length > 0) {
    //         $(radio_btn).append('<input type="text" id="current Name" value="" />');
    //     }

    // });




    //fetching values from form


    $('#txt_save_all').unbind().click(function(e){
        e.preventDefault();
        var myObj = {};

        var required= function(e){
            return $('#text_required').is(":checked");
        }


        var question = $('#text_question').val();
        var name = $('#text_name').val();
        var placeholder = $('#text_placeholder').val();
        var type = $('#text_select').val();
        var category = $('#category_select_text').val();

            myObj["question_text"] = question;
                       myObj["type"] = type;
                       myObj["placeholder"] = placeholder;
                       myObj["category"] = category;
                        var length = window.json['questions'].length;
                       // console.log(myObj);

        if(question == '' | name == ''| type == -1 | category == -1 ){
            alert('Please fill all details')
        }else{


           if(type == "tel"){


           
                       var output =  $("<input/>", {
                           type: type,
                           class:'form-control',
                           id : 'phone',
                           name : 'name',
                           required : (required())
                       });
           
                       // console.log(output[0].outerHTML);
           
           
                       var divSubmit = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
                       $(divSubmit).addClass("default");
                       $(divSubmit).appendTo('#sortable');
                       var label = "<label class = "+"form-label txt-label"+"></lable>";
                       var newLabel = $(label).append(question);
                       $(divSubmit).append(newLabel);
                       // console.log(category);
                       $(output).appendTo(divSubmit);
                                $("#phone").intlTelInput({
                              // allowDropdown: false,
                              // autoHideDialCode: false,
                              // autoPlaceholder: "off",
                              // dropdownContainer: "body",
                              // excludeCountries: ["us"],
                              // formatOnDisplay: false,
                              // geoIpLookup: function(callback) {
                              //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                              //     var countryCode = (resp && resp.country) ? resp.country : "";
                              //     callback(countryCode);
                              //   });
                              // },
                              // initialCountry: "auto",
                              // nationalMode: false,
                              // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
                              // placeholderNumberType: "MOBILE",
                              // preferredCountries: ['cn', 'jp'],
                              // separateDialCode: true,
                              utilsScript: "build/js/utils.js"
                            });

           }else{ 
            
           
                       // var json = JSON.stringify(myObj);
                       var length = window.json['questions'].length;
                       // console.log(myObj);
           
                       var output =  $("<input/>", {
                           type: type,
                           class:'form-control',
                           id : 'customId',
                           placeholder : placeholder,
                           required : (required())
                       });
           
                       // console.log(output[0].outerHTML);
           
           
                       var divSubmit = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
                       $(divSubmit).addClass("default");
                       $(divSubmit).appendTo('#sortable');
                       var label = "<label class = "+"form-label txt-label"+"></lable>";
                       var newLabel = $(label).append(question);
                       $(divSubmit).append(newLabel);
                       // console.log(category);
                       $(output).appendTo(divSubmit);
                   }
            
           
        $('form :input').val("");

        }

    })



    $('#radio_save_all').unbind().click(function(e){
        e.preventDefault();
        var required = function(e){
            return $('#radio_required').is(":checked");
        }

        
        var question = $('#radio_label').val();
        var name = $('#radio_name').val();
        var category = $('#category_select_radio').val();
       
        if (question == '' | name == '' | category == -1) {
            alert('Please Fill all details');
        }else{

            var myObj = {};
            myObj["question_text"] = question;
            myObj["type"] = "radio";
            myObj["category"] = category;

            // var divRadio = $(document.createElement('div')).css({padding: '10px', width: 'auto'});
            // $(divRadio).appendTo('#sortable');

            // var heading = "<label class = "+"form-label"+" txt-label"+" style= "+"margin:10px;"+"></lable>";
            // var newLabel = $(heading).css({margin: '10px', width: 'auto'});
            //            var finalLabel    = $(label).appendTo(newLabel);
            // var radioHeading = $(divRadio).append(finalLabel);

            // $(divRadio).append(radioHeading);


            var divRadio = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divRadio).addClass("default");
            $(divRadio).appendTo('#sortable');
            var label = "<label class = "+"form-label control-label"+"> </lable>";
            var newLabel = $(label).append(question);
            $(divRadio).append(newLabel);



            var item = $('#radio_group').find('.addNewRadio');
            var count = 0;
            $.each(item, function(item, index){
                
                if(count<=100){
                 count +=1;
                 var customId = "radio"+count;
                    console.log(customId);
                    var value = $('.addNewRadio').val();
                    var radioVal = this.value;
                
                $("<input/>", {
                    type: "radio",
                    value: this.value,
                    id: customId,
                    name: name,
                    class: "radio radio-inline custom_radio",
                }).appendTo(divRadio);


                $(divRadio).append(this.value);

                console.log(value);
                console.log(category);

                // console.log(output[0].outerHTML);
                
                        // $(divRadio).append(output);

                        

                            }

                    });

            var count = $('.addNewRadio').length
                                if(count>1){
                            $( ".addNewRadio" ).last().remove();
                        }

            $('form :input').val("");
        }
    })






    $('#select_save_all').click(function(e){
        e.preventDefault();


        var required = function(e){
            return $('#select_required').is(":checked");
        }

        var dropdown = function(e){
            if($('#select_dropdown').val() == "multiple"){
                return true;
            }else{
                return false;  
            }
        }
        var question = $('#select_question').val();
        var category = $('#category_select_text').val();
        console.log(dropdown());





    // var divSelect = $(document.createElement('div')).css({padding: '10px', width: 'auto'});
    //                  $(divSelect).appendTo('#sortable');
    //                  var label = "<label class = "+"form-label control-label"+"> </lable>";
    //                  var newLabel = $(label).append(question);
    //                   $(divSelect).append(newLabel);




    if (question == '') {
        alert('Please Fill all The details');
    }else{

            var myObj = {};
            myObj["question_text"] = question;
            myObj["category"] = category;
            myObj["type"] = "select";

        var divSelect = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
        $(divSelect).addClass("default");
        $(divSelect).appendTo('#sortable');
        var label = "<label class = "+"form-label control-label"+"> </lable>";
        var newLabel = $(label).append(question);
        $(divSelect).append(newLabel);
        var select_classes = "selectpicker .btn-default .btn-select-light";
        var multiple = dropdown();


        var total = $("select").size() + 1; 
        var s = $("<select id=\""+total+"\" name=\""+total+"\" class=\""+select_classes+"\"/>");
     
        var item = $('#option_group').find('.addNewOption');
        $.each(item, function(item, index){
            var value = $('.addNewOption').val();


            $("<option />",{
                value: this.value, 
                text: this.value
            }).appendTo(s);


            console.log(this.value);
        });
        $(s).appendTo("divSelect"); 
           console.log(s[0].outerHTML);
           $(s).appendTo(divSelect);

        // var getselectcode = $("#divSelect").html();                            
            // $("#msj_form").append(appendLabel+"<td>"+getselectcode+"</td></tr>");   
            $("#divSelect").html('');  
        }
        
            var count = $('.addNewOption').length
                                if(count>1){
                            $( ".addNewOption" ).last().remove();
                        }


        $('form :input').val("");

    })







    $('#check_save_all').click(function(e){
        e.preventDefault();
        var required = function(e){
            return $('#checkbox_required').is(":checked");
        }
        var question = $('#checkbox_label').val();
        var category = $('#category_select_check').val();
        
        if(question == ''){
            alert('please fill the all info');
        }else{
            var myObj = {};
            myObj["question_text"] = question;
            myObj["type"] = "checkbox";
            myObj["category"] = category;

            var divCheck = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divCheck).addClass("default");
            $(divCheck).appendTo('#sortable');
            var label = "<label class = "+"form-label txt-label"+"></lable><br/>";
            var newLabel = $(label).append(question);
            $(divCheck).append(newLabel);



            var item = $('#checkGroup').find('.addNewCheckBox');
            $.each(item, function(item, index){
                var value = $('.addNewCheckBox').val();
               
                
                $("<input/>", {
                    type: "checkbox",
                    value: this.value,
                    required : (required())
                }).appendTo(divCheck);
               
                $(divCheck).append(this.value);
                     console.log(this.value);
                // console.log(output[0].outerHTML);
                 // var radioLabel = $(document.createElement('p')).css({padding: '3px', width: 'auto'});

                // $(radioLabel).append(this.value);
                // $(radioLabel).append(this.output);
                // var value1= $(value).appendTo(radioLabel);
                        // $(radioLabel).appendTo(divRadio);
                        // $( divCheck).append(output);

                        
                        console.log(category);



                    });
                            var count = $('.addNewCheckBox').length
                                if(count>1){
                            $( ".addNewCheckBox" ).last().remove();
                        }

            $('form :input').val("");

        }
        
    });





    $('#txtarea_save_all').unbind().click(function(e){
        e.preventDefault();
        var required = function(e){
            return $('#txt_ares_req').val();

        }

        var rows = function(e){
            if ($('#txt_area_rows').val() == ''){
                return false;
            }
            else{
                return $('#txt_area_rows').val();
            }
        }

        var cols = function(e){
            if($('#txt_area_cols').val() == ''){
                return  false;
            }else{
                return $('#txt_area_cols').val();
            }
        }

        var category = $('#select_category_textarea').val();
        var question = $('#txt_area_question').val();
        console.log(question);
        // var rows = $('#txt_area_rows').val();
        // var cols =$('#txt_area_cols').val();
        var placeholder= $('#txt_area_placeholder').val();

        if (question == '') {
            alert('Please Fill All the details');
        }else{

            var myObj = {};
            myObj["question_text"] = question;
            myObj["category"] = category;

           var output = $("<textarea/>", {
            rows: (rows()),
            // cols : (cols()),
            // class: 'form-control',
            placeholder : placeholder,
            required : (required())
        });

           console.log(output[0].outerHTML);



           var divTextArea   = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
           $(divTextArea).addClass("default");
           $(divTextArea).appendTo('#sortable');
           var label       = "<label class = "+"form-label txtarea-label"+"></lable>";
           var newLabel    = $(label).append(question);
           $(divTextArea).append(newLabel);

           $(output).appendTo(divTextArea);
           $('form :input').val("");

       }


   })




    $('#save_time').unbind().click(function(e){
        e.preventDefault();
        var myObj = {};

        var required= function(e){
            return $('#time_required').is(":checked");
        }


        var question = $('#time_question').val();
        var category = $('#category_select_text_time').val();
        if(question == ''){
            alert('Please fill all details')
        }else{


            myObj["question_text"] = question;
            myObj["category"] = category;

            // var json = JSON.stringify(myObj);
            var length = window.json['questions'].length;
            console.log(myObj);

            var output =  $("<input/>", {
                type: "time",
                class:'form-control time',
                id : "time",
                required : (required())
            });

            // console.log(output[0].outerHTML);


            var divSubmit = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divSubmit).addClass("default");
            $(divSubmit).appendTo('#sortable');
            var label = "<label class = "+"form-label txt-label"+"></lable>";
            var newLabel = $(label).append(question);
            $(divSubmit).append(newLabel);
            // console.log(category);
            $(output).appendTo(divSubmit);
            $('form :input').val("");
        }

    })


          $('#save_range').unbind().click(function(e){
        e.preventDefault();
        var myObj = {};

        var required= function(e){
            return $('#range_required').is(":checked");
        }


        var question = $('#range_question').val();
        var category = $('#category_select_range').val();
        var startValue = $('#range_start').val();
        var endValue = $('#range_end').val();
        var rangeStep = $('#range_steps').val();
        if(question == '' | startValue == '' | endValue == ''){
            alert('Please fill all details')
        }else{


            
            // var json = JSON.stringify(myObj);
            var length = window.json['questions'].length;
            console.log(myObj);

            var output =  $("<input/>", {
                type: "range",
                class:'form-control range',
                id : "range",
                min: startValue,
                max: endValue,
                step: rangeStep,
                required : (required()),
                onchange : "showValue(this.value)"
            });

            // console.log(output[0].outerHTML);


            var divSubmit = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divSubmit).addClass("default");
            $(divSubmit).appendTo('#sortable');
            var label = "<label class = "+"form-label txt-label"+"></lable>";
            var span = "<span id= "+"print_range"+"></span>";
            var newLabel = $(label).append(question);
            $(divSubmit).append(newLabel);
            // console.log(category);
            $(output).appendTo(divSubmit);
            $(span).appendTo(divSubmit);
            $('form :input').val("");
        }

    })





          $('#save_file').unbind().click(function(e){
        e.preventDefault();
        var myObj = {};

        var required= function(e){
            return $('#file_required').is(":checked");
        }


        var question = $('#file_question').val();
        var category = $('#category_select_file').val();

        if(question == ''){
            alert('Please fill all details')
        }else{


            
            // var json = JSON.stringify(myObj);
            var length = window.json['questions'].length;
            console.log(myObj);

            var output =  $("<input/>", {
                type: "file",
                class:'btn btn-default input_file',
                id : "file",
                required : (required()),
            });

            // console.log(output[0].outerHTML);


            var divSubmit = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divSubmit).addClass("default");
            $(divSubmit).appendTo('#sortable');
            var label = "<label class = "+"form-label txt-label"+"></lable>";
            // var span = "<span id= "+"print_range"+"></span>";
            var newLabel = $(label).append(question);
            $(divSubmit).append(newLabel);
            // console.log(category);
            $(output).appendTo(divSubmit);
            // $(span).appendTo(divSubmit);
            $('form :input').val("");
        }

    })


//calendar
$('#save_calendar').unbind().click(function(e){
        e.preventDefault();
        var myObj = {};

        var required= function(e){
            return $('#calendar_required').is(":checked");
        }


        var question = $('#calendar_question').val();
        var category = $('#category_select_calendar').val();

        if(question == ''){
            alert('Please fill all details')
        }else{


            
            // var json = JSON.stringify(myObj);
            var length = window.json['questions'].length;
            console.log(myObj);

            var output =  $("<input/>", {
                type: 'text',
                class:'btn btn-default',
                id : 'datepicker',
                required : (required())
            });

            // console.log(output[0].outerHTML);


            var divSubmit = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divSubmit).addClass("default");
            $(divSubmit).appendTo('#sortable');
            var label = "<label class = "+"form-label txt-label"+"></lable>";
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
//calendar end
 

//Matrix

$('#matrix_save_all').click(function(e){
        e.preventDefault();
        var required = function(e){
            return $('#matrix_required').is(":checked");
        }
        var question = $('#matrix_label').val();
        var category = $('#category_select_matrix').val();
        
        if(question == ''){
            alert('please fill the all info');
        }else{
            

            var divCheck = $(document.createElement('div')).css({padding: '10px', width: 'auto', background:'#fff'});
            $(divCheck).addClass("default");
            $(divCheck).appendTo('#sortable');
            var label = "<label class = "+"form-label txt-label"+"></lable><br/>";
            var newLabel = $(label).append(question);
            $(divCheck).append(newLabel);



            var item = $('#matrixGroup').find('.addNewmatrixOption');
            $.each(item, function(item, index){
                var value = $('.addNewmatrixOption').val();
               
                
                $("<input/>", {
                    type: "checkbox",
                    value: this.value,
                    required : (required())
                }).appendTo(divCheck);
               
                $(divCheck).append(this.value);
                     console.log(this.value);
                // console.log(output[0].outerHTML);
                 // var radioLabel = $(document.createElement('p')).css({padding: '3px', width: 'auto'});

                // $(radioLabel).append(this.value);
                // $(radioLabel).append(this.output);
                // var value1= $(value).appendTo(radioLabel);
                        // $(radioLabel).appendTo(divRadio);
                        // $( divCheck).append(output);

                        
                        console.log(category);



                    });
                       var count = $('.addNewmatrixOption').length
                                if(count>1){
                            $( ".addNewmatrixOption" ).last().remove();
                        }

            $('form :input').val("");

        }
        
    });

// matrix end





















// conditional


$("#remove_radio_settings_btn").unbind().click(function(e){
    e.preventDefault();
        var count = $('.addNewRadio').length
        if(count>1){
    $( ".addNewRadio" ).last().remove();
}
});

$("#remove_checkbox_settings_btn").unbind().click(function(e){
    e.preventDefault();
       var count = $('.addNewCheckBox').length
       if(count>1){
    $(".addNewCheckBox").last().remove();
}
});

$("#remove_select_settings_btn").unbind().click(function(e){
    e.preventDefault();

       var count = $('.addNewOption').length
    if(count>1){
    $(".addNewOption").last().remove();
}
    
})

$("#remove_matrix_settings_btn").unbind().click(function(e){
    e.preventDefault();
    var count = $('.addNewmatrixOption').length
    if(count>1){
    $(".addNewmatrixOption").last().remove();
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