/* 
*
* Common Funciton Handler
*
*/

 var commonFunctionHandler = {
        helper:{},
        initialize:function(){ },
        sendPassword:function(){
             commonFunctionHandler.helper = new passwordHandler();
             commonFunctionHandler.helper.send();
         },
         changeAdminUserStatus: function(value,user_id){
             commonFunctionHandler.helper = new adminHandler();
              commonFunctionHandler.helper.changeStatus(value,user_id);
         },
         savePassword: function(){
             commonFunctionHandler.helper = new adminHandler();
         	 commonFunctionHandler.helper.savePass();
         },
         subscriberValidation: function(){
         	 $('#loader').html('');
             var suscriberEmailId = $('.newsletter-email').val();
             if(typeof(suscriberEmailId) == undefined || suscriberEmailId.length <= 0){
                $('#loader').html('<p class="text-danger">Incorrect email id</p>');
             }
             else{
                      var responseStatus =  adminHandler.prototype.emailValidation(suscriberEmailId);
                       if(responseStatus){
							$.ajax({
							url:GlobalVariable.baseUrl+'home/subscribe_newsletter',
							method:'post',
							data:{email:suscriberEmailId},
							beforeSend:function(){
							$('#loader').html('Sending...');
							},
							success:function(response){
							$('#loader').html(response);
							}
							});
                       }
                       else{
                       	       $('#loader').html('<p class="text-danger">Incorrect email id</p>');
                       	       return false;
                       }
             }
         }
  }
  passwordHandler = function(){}
  passwordHandler.prototype.send = function(){
       var passValue = $.trim($('#password-value').val());
       var status = commonFunctionHandler.helper.checkValidation(passValue);
       if(status){
       	 var sendUrl = GlobalVariable.baseUrl+'home/checkForntUserPassword';
       	 var sendData = {'password':passValue};
       	 $.post(sendUrl,sendData,function(response){
       	 	   $('.error-message').addClass('hide');
               if(response){
       	 	     $('.error-message').addClass('hide');
                 location.href = GlobalVariable.baseUrl+'all-web-showcase';

               }
               else{
               	$('#password-value').val('');
               	$('.error-message').removeClass('hide').html('Please enter correct password');
               }
       	 },'JSON');
       } 	  
  }
  passwordHandler.prototype.checkValidation = function(passvalue){
  	  var status = true;
        if(typeof(passvalue) == undefined ||  passvalue.length <= 0){		 
		      status = false;
		      	$('#password-value').val('');
		      $('.error-message').removeClass('hide');
	  } 	 
	 return status;
  }
  adminHandler = function(){}
  adminHandler.prototype.changeStatus = function(value,user_id){
      var sendUrl = GlobalVariable.baseUrl+'index.php/admin/change_user_password_status';
       	 var sendData = {
       	 	             'id':user_id,
       	 	             'active':value,
       	              };
       	 $.post(sendUrl,sendData,function(response){       	 	  
               if(response){       	 	   
                 location.reload();
               }             
       	 },'JSON');

  }

  adminHandler.prototype.savePass = function(){
  	 var password = $('#new-password-value').val();
  	 var confirm_password = $('#confirm-password-value').val();
  	 var user_id = $('#user_id').val();
  	 if( confirm_password!=password || typeof(user_id) == undefined){
  	 	 $('#confirm-password-value').val('');
         $('.error-message-pass').removeClass('hide');
         return false;
  	 }  
  	 else{
		var sendUrl = GlobalVariable.baseUrl+'index.php/admin/saveUserPassword';
		var sendData = {
		             'id':user_id,
		             'password':password
		      };
		$.post(sendUrl,sendData,function(response){       	 	  
		if(response){       	 	   
		     location.reload();
		}             
		},'json');
  	 }	
  }

  adminHandler.prototype.emailValidation = function(emailId){
       var status = true;
       if(emailId != undefined && emailId != null)
	  {
		  var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		  if(!filter.test(emailId)){
			  status = false;
			  $('#SuscriberEmail').val('');
			   $('.email-error').css('display','block');
		  }	
           else{ $('.email-error').css('display','none'); }		  
	  } 
	  return status;
  }    
  
 $(document).on('click','#requestSubmit',function(){
          $('.error-message').addClass('hide');
          $('#password-value').addClass('hide');
          $('#passwordSubmit').addClass('hide');
          $('#email-value').removeClass('hide');
          $(this).addClass('hide');
          $('#sendEmailSubmit').removeClass('hide');
          $('.modal-title').html('Please Enter Email Id');
           
        });   
 $(document).on('click','#sendEmailSubmit',function(){
         $('.error-message').addClass('hide');
           var emailId = $('#email-value').val();
           if(typeof(emailId) == undefined || emailId.length <=0 ){
              $('.error-message').removeClass('hide').html('Please enter correct email id');
           }
           else{
               var status = adminHandler.prototype.emailValidation(emailId);
               if(status){
               	  $('.sending').removeClass('hide');
                  var sendUrl = GlobalVariable.baseUrl+'home/savePasswordRequestEmailid';
                  var sendData = {
                                'email_id':emailId                              
                                };
                  $.post(sendUrl,sendData,function(response){   
                  if(response.Ajax){         
                                 $('.modal-body').html('<p>Thanks, Your resquest sent successfully.<p>');
                             }
                           else{
                            $('#email-value').val('');
                            $('.error-message').removeClass('hide').html('Please enter correct email id');
                      }               
                   },'json');
               }
               else{
                $('#email-value').val('');
                $('.error-message').removeClass('hide').html('Please enter correct email id');
               }
           } 
        }); 