/**
* This is main js file. Don't edit the file if you want to update module in future.
* 
* @author    Globo Software Solution JSC <contact@globosoftware.net>
* @copyright 2015 GreenWeb Team
* @link	     http://www.globosoftware.net
* @license   please read license in file license.txt
*/
if (typeof $.uniform !== 'undefined')
    if (typeof $.uniform.defaults !== 'undefined')
    {
    	if (typeof contact_fileDefaultHtml !== 'undefined')
    		$.uniform.defaults.fileDefaultHtml = contact_fileDefaultHtml;
    	if (typeof contact_fileButtonHtml !== 'undefined')
    		$.uniform.defaults.fileButtonHtml = contact_fileButtonHtml;
    }
var CaptchaCallback = function(){ 
    if($('.gformbuilderpro_form .g-recaptcha').length > 0)
        $('.gformbuilderpro_form .g-recaptcha').each(function(index, el) {
            if(!$(this).hasClass('added_grecaptcha')){
                if($(this).data('sitekey') != ''){
                    grecaptcha.render(this, {'sitekey' : $(this).data('sitekey')});
                    $(this).addClass('added_grecaptcha');
                }
            }     
        });
}; 
function init_gmap() {
    $('.google-maps').each(function(){
        map_description = $(this).data('description');
        value = $(this).data('value');
        value_latlng = value.split(',');
        name = $(this).data('name');
        label = $(this).data('label');
        var myOptions = {
            zoom: 15,
            center: new google.maps.LatLng(value_latlng[0],value_latlng[1]),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('google-maps-'+name), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(value_latlng[0],value_latlng[1])
        });
        infowindow = new google.maps.InfoWindow({
            content: "<strong>"+label+"</strong><br/>"+map_description
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
        google.maps.event.trigger(map, "resize");
    });
}
function loadrecaptchav3(sitekey){
    grecaptcha.ready(function () {
        grecaptcha.execute(sitekey, { action: 'gformbuilderpro' }).then(function (token) {
            var recaptchaResponse = document.getElementById('recaptchaResponse');
            recaptchaResponse.value = token;
        });
    });
}
$(window).load(function() {
    if($('.gformbuilderpro_form .g-recaptcha').length > 0){
        var script = document.createElement("script");
        script.src = "https:/"+"/www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit";
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    if($('#recaptchaResponse').length > 0){
        var sitekey = $('#recaptchaResponse').attr('data-sitekey');
        var script = document.createElement("script");
        script.src = "https:/"+"/www.google.com/recaptcha/api.js?render="+sitekey;
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        gv3interval = setInterval(
            function(){
                if(typeof grecaptcha === "undefined") 
                {}
                else{
                    if($('#recaptchaResponse').val() == ''){
                        loadrecaptchav3(sitekey);
                        clearInterval(gv3interval);
                    }
                };
            }
        ,500);
    }
    
    
    if($('.google-maps').length > 0){
        _gmap_key = '';
        $('.google-maps').each(function(){
            gmap_key = $(this).data('gmap_key');
            if(gmap_key !=''){
                _gmap_key = '&key='+gmap_key;
                return false;
            }
        });
        var script = document.createElement("script");
        script.src = "https:/"+"/maps.googleapis.com/maps/api/js?v=3.exp&callback=init_gmap"+_gmap_key;
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        //google.maps.event.addDomListener(window, 'load', init_gmap);
    }
});  
$(document).ready(function(){   
    if($('.gformbuilderpro_form').length > 0){
        $('.gformbuilderpro_form').each(function(){
            if($(this).find('button[name="submitForm"]').length == 0){
                var submitbutton = '<div class="formbuilder_group"><div class="formbuilder_column col-md-12 col-sm-12 col-xs-12"><div class="itemfield_wp"><div class="itemfield"><button type="submit" name="submitForm" id="submitForm" class="button btn btn-default button-medium"><span>Submit</span></button></div></div></div></div>';
                $(this).find('.gformbuilderpro_content').append(submitbutton);
            }
        });
    }
    $('.gformbuilderpro_form input[type=text]').on('change invalid', function() {
        var textfield = $(this).get(0);
        textfield.setCustomValidity('');
        if (!textfield.validity.valid) {
          textfield.setCustomValidity($('#gformbuilderpro_formValidity').val());  
        }
    });
     if($('.htmlinput').length > 0){
         tinymce.init({ selector:'.htmlinput' });
     }
     if($('.mColorPickerInput').length > 0)
        $('.mColorPickerInput').each( function() {
                $(this).minicolors({
                    control: $(this).attr('data-control') || 'hue',
                    defaultValue: $(this).attr('data-defaultValue') || '',
                    format: $(this).attr('data-format') || 'hex',
                    keywords: $(this).attr('data-keywords') || '',
                    inline: $(this).attr('data-inline') === 'true',
                    letterCase: $(this).attr('data-letterCase') || 'lowercase',
                    opacity: $(this).attr('data-opacity'),
                    position: $(this).attr('data-position') || 'bottom left',
                    swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
                    change: function(value, opacity) {
                        if( !value ) return;
                        if( opacity ) value += ', ' + opacity;
                        if( typeof console === 'object' ) {
                            //console.log(value);
                        }
                    },
                    theme: 'bootstrap'
                });

            });
     if($( ".datepicker").length > 0){
        $( ".datepicker" ).datepicker({ 
            changeYear: true,
            changeMonth: true,
        });
     }
     if($( ".time_input").length > 0){
        $( ".time_input").each(function(){
            rel = $(this).attr('name');
            time = $('.'+rel+'_hour').val()+':'+$('.'+rel+'_minute').val();
            if($('.'+rel+'_apm').length > 0){
                time = time+' '+$('.'+rel+'_apm').val();
            }
            $(this).val(time);
        })
     }
     $('.time_select').change(function(){
        rel = $(this).attr('rel');
        time = $('.'+rel+'_hour').val()+':'+$('.'+rel+'_minute').val();
        if($('.'+rel+'_apm').length > 0){
            time = time+' '+$('.'+rel+'_apm').val();
        }
        $('input[name="'+rel+'"]').val(time);
     });
     gformbuilderpro_overlay = '<div id="gformbuilderpro_overlay"><div class="container"><div class="content"><div class="circle"></div></div></div></div></div>';
     $('.grating').change(function(){
            rateval = $(this).val();
            ratename = $(this).attr('name');
            for(i=1;i<=5;i++){
                if(i > rateval){
                    $('.'+ratename+'star'+i).removeClass('active');
                }else{
                    $('.'+ratename+'star'+i).addClass('active');
                }
            }
     });
     $('.slider-range').each(function(){
        $(this).slider({
              range: "min",
              value: $('#'+$(this).data('id')).val(),
              min: $('#'+$(this).data('id')).data('min'),
              max: $('#'+$(this).data('id')).data('max'),
              step: $('#'+$(this).data('id')).data('range'),
              slide: function( event, ui ) {
                $('#'+$(this).data('id')).val(ui.value);
                $('#'+$(this).data('id')+'-value').html(ui.value);
              }
        });
     });
     $('.slider-range-multi').each(function(){
        valmin = $('#'+$(this).data('id')).data('valmin');
        valmax = $('#'+$(this).data('id')).data('valmax');
        $(this).slider({
              range: true,
              values: [valmin,valmax],
              min: $('#'+$(this).data('id')).data('min'),
              max: $('#'+$(this).data('id')).data('max'),
              step: $('#'+$(this).data('id')).data('range'),
              slide: function( event, ui ) {
                $('#'+$(this).data('id')).val(ui.values[0]+'->'+ui.values[1]);
                $('#'+$(this).data('id')+'-value').html(ui.values[0]+'->'+ui.values[1]);
              }
        });
     });
     $('.spinner_plus').click(function(){
        spinner_value = parseInt($('#'+$(this).data('id')).val());
        maxval = parseInt($('#'+$(this).data('id')).data('max'));
        range = parseInt($('#'+$(this).data('id')).data('range'));
        if(maxval > (spinner_value+range)){
            $('#'+$(this).data('id')).val(parseInt(spinner_value)+range);
        }else{
            $('#'+$(this).data('id')).val(parseInt(maxval));
        }
     });
     $('.spinner_sub').click(function(){
        spinner_value = parseInt($('#'+$(this).data('id')).val());
        minval = parseInt($('#'+$(this).data('id')).data('min'));
        range = parseInt($('#'+$(this).data('id')).data('range'));
        if(minval < (spinner_value-range)){
            $('#'+$(this).data('id')).val(parseInt(spinner_value)-range);
        }else{
            $('#'+$(this).data('id')).val(parseInt(minval));
        }
     });
     $('.onoffswitch-checkbox').change(function(){
            if($(this).is(':checked')){
                $(this).parents('.onoffswitch').find('.onoffswitch-label').addClass('onoffswitch-active');
            }else{
                $(this).parents('.onoffswitch').find('.onoffswitch-label').removeClass('onoffswitch-active');
            }
     });
     $('.onoffswitch-checkbox').each(function(){
            if($(this).is(':checked')){
                $(this).parents('.onoffswitch').find('.onoffswitch-label').addClass('onoffswitch-active');
            }else{
                $(this).parents('.onoffswitch').find('.onoffswitch-label').removeClass('onoffswitch-active');
            }
     });
    function getDoc(frame) {
        var doc = null;
        try {
            if (frame.contentWindow) {
                doc = frame.contentWindow.document;
            }
        } catch (err) {}
        if (doc) {
            return doc;
        }
        try {
            doc = frame.contentDocument ? frame.contentDocument : frame.document;
        } catch (err) {
            doc = frame.document;
        }
        return doc;
    }
    $(".gformbuilderpro_form form").submit(function(e) {
        if(!$(this).hasClass('form_using_ajax')){
            if($('#product_page_product_id').length > 0 && $('.hidden_productatt').length > 0){
                if($('#idCombination').length > 0){
                    $('.hidden_productatt').val($('#product_page_product_id').val()+'-'+$('#idCombination').val());
                }else{
                    if($('#add-to-cart-or-refresh').length > 0){
                        var productUrl = window.location.href; 
                        var formSerialized = $('#add-to-cart-or-refresh').serialize();
                        $.ajax({
                            url: productUrl,
                            type: 'POST',
                            async:false,
                            data: (formSerialized !='' ? formSerialized+'&ajax=1&action=refresh&quantity_wanted=1' : 'ajax=1&action=refresh&quantity_wanted=1'),
                            dataType: 'json',
                            success: function(data, textStatus, jqXHR) {
                                var idCombination = data.id_product_attribute;
                                $('.hidden_productatt').val($('#product_page_product_id').val()+'-'+idCombination);
                            }
                        });
                    }
                }
            }
        }
    });
    $(".gformbuilderpro_form form.form_using_ajax").submit(function(e) {
        if($('#product_page_product_id').length > 0 && $('.hidden_productatt').length > 0){
            if($('#idCombination').length > 0)
                $('.hidden_productatt').val($('#product_page_product_id').val()+'-'+$('#idCombination').val());
            else{
                if($('#add-to-cart-or-refresh').length > 0){
                    var productUrl = window.location.href; 
                    var formSerialized = $('#add-to-cart-or-refresh').serialize();
                    $.ajax({
                        url: productUrl,
                        type: 'POST',
                        async:false,
                        data: (formSerialized !='' ? formSerialized+'&ajax=1&action=refresh&quantity_wanted=1' : 'ajax=1&action=refresh&quantity_wanted=1'),
                        dataType: 'json',
                        success: function(data, textStatus, jqXHR) {
                            var idCombination = data.id_product_attribute;
                            $('.hidden_productatt').val($('#product_page_product_id').val()+'-'+idCombination);
                        }
                    });
                }
            }
        }
        var formsubmit = $(this);
        if (typeof tinymce != "undefined") { 
            tinymce.triggerSave();
        }
        /* fix missing file upload in safari */
        if(formsubmit.find('input[type="file"]').length > 0)
            formsubmit.find('input[type="file"]').each(function(){
                var vidFileLength = $(this)[0].files.length;
                if(vidFileLength === 0){
                    $(this).attr('data-type','file').attr('data-bkname',$(this).attr('name')).removeAttr('name');
                }
            })
        var formURL = formsubmit.attr("action");
        $(gformbuilderpro_overlay).appendTo(formsubmit);
        if (window.FormData !== undefined) {
            var formData = new FormData(this);
            $.ajax({
                url: formURL,
                type: 'POST',
                data: formData,
                mimeType: "multipart/form-data",
                contentType: false,
                cache: false,
                processData: false,
                success: function(data, textStatus, jqXHR) {
                    if(formsubmit.find('input[data-type="file"]').length > 0)
                    formsubmit.find('input[data-type="file"]').each(function(){
                        if (typeof $(this).attr('data-bkname') !== typeof undefined && $(this).attr('data-bkname') !== false)
                        $(this).removeAttr('data-type').attr('name',$(this).attr('data-bkname')).removeAttr('data-bkname');
                    })
                    formsubmit.find('#gformbuilderpro_overlay').remove();
                    var result = $.parseJSON(data);
                    if(formsubmit.find('.formajaxresult').length > 0){
                        if(result.errors == '0') {
                            formsubmit[0].reset();
                            formsubmit.find('.formajaxresult').html('<div class="success_box">'+result.thankyou+'</div>');
                        }
                        else
                            formsubmit.find('.formajaxresult').html(result.thankyou);
                    }else{
                        resulthtml = '';
                        if(result.errors == '0') {
                            formsubmit[0].reset();
                            resulthtml ='<div class="formajaxresult"><div class="success_box">'+result.thankyou+'</div><div>';
                        }
                            
                        else
                            resulthtml = '<div class="formajaxresult">'+result.thankyou+'<div>';
                        $(resulthtml).insertBefore(formsubmit.find('.gformbuilderpro_content'));
                    }
                    $('html,body').animate({
                        scrollTop: formsubmit.find('.formajaxresult').offset().top},
                    'slow');
                    if(result.autoredirect == true){
                        setTimeout(function () {
                           window.location.href = result.redirect_link;
                        }, result.timedelay);
                    }
                    if($('#recaptchaResponse').length > 0){
                        var sitekey = $('#recaptchaResponse').attr('data-sitekey');
                        loadrecaptchav3(sitekey);
                    }else
                        if (typeof grecaptcha != "undefined"  && $('.gformbuilderpro_form .g-recaptcha').length > 0) {
                            grecaptcha.reset();
                        }
                    
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    if(formsubmit.find('input[data-type="file"]').length > 0)
                    formsubmit.find('input[data-type="file"]').each(function(){
                        if (typeof $(this).attr('data-bkname') !== typeof undefined && $(this).attr('data-bkname') !== false)
                        $(this).removeAttr('data-type').attr('name',$(this).attr('data-bkname')).removeAttr('data-bkname');
                    })
                    if($('#recaptchaResponse').length > 0){
                        var sitekey = $('#recaptchaResponse').attr('data-sitekey');
                        loadrecaptchav3(sitekey);
                    }else
                    if (typeof grecaptcha != "undefined"  && $('.gformbuilderpro_form .g-recaptcha').length > 0) {
                        grecaptcha.reset();
                    }
                    var err = eval("(" + jqXHR.responseText + ")");
                    alert(err.Message);
                    
                }
            });
            e.preventDefault();
            //e.unbind();
        } else {
            var iframeId = 'unique' + (new Date().getTime());
            var iframe = $('<iframe src="javascript:false;" name="' + iframeId + '" />');
            iframe.hide();
            formsubmit.attr('target', iframeId);
            iframe.appendTo('body');
            iframe.load(function(e) {
                $('#gformbuilderpro_overlay').remove();
                var doc = getDoc(iframe[0]);
                var docRoot = doc.body ? doc.body : doc.documentElement;
                var data = docRoot.innerHTML;
                var result = $.parseJSON(data);
                if(formsubmit.find('.formajaxresult').length > 0){
                    if(result.errors == '0') {
                        formsubmit[0].reset();
                        formsubmit.find('.formajaxresult').html('<div class="success_box">'+result.thankyou+'</div>');
                    }
                    else
                        formsubmit.find('.formajaxresult').html(result.thankyou);
                }else{
                    resulthtml = '';
                    if(result.errors == '0') {
                        formsubmit[0].reset();
                        resulthtml ='<div class="formajaxresult"><div class="success_box">'+result.thankyou+'</div><div>';
                    }
                    else
                        resulthtml = '<div class="formajaxresult">'+result.thankyou+'<div>';
                    $(resulthtml).insertBefore(formsubmit.find('.gformbuilderpro_content'));
                }
                
                $('html,body').animate({
                    scrollTop: formsubmit.find('.formajaxresult').offset().top},
                'slow');
                
                if($('#recaptchaResponse').length > 0){
                        var sitekey = $('#recaptchaResponse').attr('data-sitekey');
                        loadrecaptchav3(sitekey);
                    }else
                if (typeof grecaptcha != "undefined" && $('.gformbuilderpro_form .g-recaptcha').length > 0) {
                    grecaptcha.reset();
                }
                
            });
        }
    });
    $('.color_box .mColorPickerinput').on('click',function(){
        id = $(this).attr('id');
        if($('#icp_'+id).length > 0){
            $('#icp_'+id).click();
        }
    });
    
    
    /* from version 1.2.0 */
    $('.gformbuilderpro_openform').fancybox({
        'beforeShow': function(){
            if($('.formajaxresult').length > 0)
                $('.formajaxresult').html('');
        },
        afterLoad: function () {
            if (typeof tinymce != "undefined") { 
                tinymce.remove();
                setTimeout(function(){tinymce.init({selector:'.htmlinput'});},500);
            }
        }
    });
})