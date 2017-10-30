angular.module('am-communications').factory('identityService', function() {
  const identityData = {
    layerAppId,
    identityProviderUrl: `${identityProviderUrl}/authenticate`,
    validateSetup(client) {
      const conversationQuery = client.createQuery({
        paginationWindow: 1,
        model: window.layer.Query.Conversation
      });
      conversationQuery.on('change:data', function() {
        console.log('conversationQuery: ', conversationQuery.data);
        if (conversationQuery.data.length === 0) {
          const identityQuery = client.createQuery({
            paginationWindow: 5,
            model: window.layer.Query.Identity
          });
          identityQuery.on('change:data', function() {
            if (identityQuery.data.length === 0) {
              alert('There are no other users to talk to');
            } else {
              const conversation = client.createConversation({
                participants: identityQuery.data.map(function(user) {
                  return user.id;
                }),
                metadata: {
                  conversationName: 'Sample Conversation'
                }
              });
              conversation.createMessage('Welcome to the new Conversation').send();
            }
          });
        }
      });
    },
    getIdentityToken(nonce, callback) {
      window.layer.xhr({
        url: identityData.identityProviderUrl,
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
        },
        method: 'POST',
        data: {
          nonce,
          email: 'pablo@example.com',
          password: '12345678'
        }
      }, function(res) {
        if (res.success && res.data.identity_token) {
          console.log('challenge: ok');
          callback(res.data.identity_token);
        } else {
          alert('Login failed; please check your user id and password');
        }
      });
    },
    onLogin(callback) {
      this.loginCallback = callback;
    }
  };
  return identityData;
});
