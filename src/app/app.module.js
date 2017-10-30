const layerAppId = '/* @echo LAYER_APP_ID */';

window.layerUI.init({
  appId: layerAppId
});

window.layerUI.adapters.angular(angular);

angular.module(
  'am-communications', [
    'loginUtils',
    'layerUIControllers'
  ]
);
