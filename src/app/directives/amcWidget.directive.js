angular
    .module('am-communications')
    .directive('amcWidget', function() {
      return {
        restrict: 'E',
        template:
          `<layer-conversations-list selected-id={selectedConversation.id} />
           <layer-conversation-panel conversation-id="layer:///conversations/9c9fb01c-3cc5-4bf3-bbff-a5332eb19013" />`,
        scope: {},
        controller: [function() {}]
      };
    });
