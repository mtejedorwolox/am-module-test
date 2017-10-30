angular
    .module('am-communications')
    .service('amcService', function() {
      this.startConversation = function(email) {
        email.concat('asdf');
        // console.log(`llamada al servicio con el email: ${email}`);
      };
    });
