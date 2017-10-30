angular.module('am-communications').factory('amcService', [
  function() {
    return {
      openConversationWith(otherUser) {
        console.log('Opening conversation with: ', otherUser);
      },
      getUsersStatus(userIds) {
        console.log('getUsersStatus for: ', userIds);
        return userIds.map((id) => ({ id, status: 'online' }));
      }
    };
  }
]);
