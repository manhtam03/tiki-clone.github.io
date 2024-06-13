
  $('.assistant').click(function(){
    $('.assistant-chat').fadeIn();
    $('.new-message-chat').hide();
  });
  $('.new-message').click(function(){
    $('.new-message-chat').fadeIn();
    $('.assistant-chat').hide();
  });
  $('.close-chat-mess').click(function(){
    $('.new-message-chat').hide();
  });
  $('.close-chat').click(function(){
    $('.assistant-chat').hide();
  });