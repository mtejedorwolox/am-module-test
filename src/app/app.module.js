const layerAppId = '/* @echo LAYER_APP_ID */';
const identityProviderUrl = '/* @echo IDENTITY_PROVIDER_URL */';

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
