function addWidgetsmenu() {
    menu.setDefaultUnit(kony.flex.DP);
    var headerPato = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10.0%",
        "id": "headerPato",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "85%",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    headerPato.setDefaultUnit(kony.flex.DP);
    var flexContainer98044149213724 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer98044149213724",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flexContainer98044149213724.setDefaultUnit(kony.flex.DP);
    var button98044149213726 = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "30.0%",
        "height": "45.0%",
        "id": "button98044149213726",
        "isVisible": true,
        "onClick": p2kwiet19724036342351_button98044149213726_onClick_seq0,
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer98044149213724.add(button98044149213726);
    var flexContainer98044149213728 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer98044149213728",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flexContainer98044149213728.setDefaultUnit(kony.flex.DP);
    var image298044149213730 = new kony.ui.Image2({
        "centerX": "50.0%",
        "height": "100.0%",
        "id": "image298044149213730",
        "isVisible": true,
        "left": "0%",
        "src": "mymbflogo.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer98044149213728.add(image298044149213730);
    var flexContainer98044149213732 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flexContainer98044149213732",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flexContainer98044149213732.setDefaultUnit(kony.flex.DP);
    var image298044149213734 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "30.0%",
        "height": "50.0%",
        "id": "image298044149213734",
        "isVisible": true,
        "src": "iconoinformacion.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer98044149213732.add(image298044149213734);
    headerPato.add(flexContainer98044149213724, flexContainer98044149213728, flexContainer98044149213732);
    var block = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100.0%",
        "id": "block",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "70.0%",
        "onTouchEnd": p2kwiet19724036342351_block_onTouchEnd_seq0,
        "top": "0dp",
        "width": "30%",
        "zIndex": 150
    }, {}, {});
    block.setDefaultUnit(kony.flex.DP);
    block.add();
    var navigation = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100.0%",
        "id": "navigation",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0.0%",
        "top": "0.0%",
        "width": "85%",
        "zIndex": 200
    }, {}, {});
    navigation.setDefaultUnit(kony.flex.DP);
    var flexContainer98044149287740 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainer98044149287740",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": p2kwiet19724036342351_flexContainer98044149287740_onTouchEnd_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer98044149287740.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492120630 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492120630",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492120630.setDefaultUnit(kony.flex.DP);
    var FlexContainer07af82f4e22c34f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer07af82f4e22c34f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    FlexContainer07af82f4e22c34f.setDefaultUnit(kony.flex.DP);
    var image2980441492122226 = new kony.ui.Image2({
        "height": "100.0%",
        "id": "image2980441492122226",
        "isVisible": true,
        "left": "0%",
        "src": "menu1.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    FlexContainer07af82f4e22c34f.add(image2980441492122226);
    var button980441492122588 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492122588",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "INICIO",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492120630.add(FlexContainer07af82f4e22c34f, button980441492122588);
    var image2980441492121108 = new kony.ui.Image2({
        "height": "5.0%",
        "id": "image2980441492121108",
        "isVisible": true,
        "left": "0%",
        "src": "raya.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer98044149287740.add(flexContainer980441492120630, image2980441492121108);
    var flexContainer980441492124254 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainer980441492124254",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": p2kwiet19724036342351_flexContainer980441492124254_onTouchEnd_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124254.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492124256 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492124256",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124256.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0319613110bfc49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0319613110bfc49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0319613110bfc49.setDefaultUnit(kony.flex.DP);
    var Copyimage0eb5727049a084d = new kony.ui.Image2({
        "height": "100.0%",
        "id": "Copyimage0eb5727049a084d",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "menu2.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer0319613110bfc49.add(Copyimage0eb5727049a084d);
    var button980441492124260 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492124260",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "LOGIN",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492124256.add(CopyFlexContainer0319613110bfc49, button980441492124260);
    var image2980441492124262 = new kony.ui.Image2({
        "height": "5.0%",
        "id": "image2980441492124262",
        "isVisible": true,
        "left": "0%",
        "src": "raya.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer980441492124254.add(flexContainer980441492124256, image2980441492124262);
    var flexContainer980441492124274 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainer980441492124274",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchStart": p2kwiet19724036342351_flexContainer980441492124274_onTouchStart_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124274.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492124276 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492124276",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124276.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0d002f71d90fe40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0d002f71d90fe40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0d002f71d90fe40.setDefaultUnit(kony.flex.DP);
    var Copyimage0ecbd024ec3b849 = new kony.ui.Image2({
        "height": "100.0%",
        "id": "Copyimage0ecbd024ec3b849",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "menu3.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer0d002f71d90fe40.add(Copyimage0ecbd024ec3b849);
    var button980441492124280 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492124280",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "CALCULADORA",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492124276.add(CopyFlexContainer0d002f71d90fe40, button980441492124280);
    var image2980441492124282 = new kony.ui.Image2({
        "height": "5.0%",
        "id": "image2980441492124282",
        "isVisible": true,
        "left": "0%",
        "src": "raya.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer980441492124274.add(flexContainer980441492124276, image2980441492124282);
    var flexContainer980441492124294 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainer980441492124294",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": p2kwiet19724036342351_flexContainer980441492124294_onTouchEnd_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124294.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492124296 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492124296",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124296.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer06ee5cc4c316e40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer06ee5cc4c316e40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer06ee5cc4c316e40.setDefaultUnit(kony.flex.DP);
    var Copyimage0eb1309f5b52641 = new kony.ui.Image2({
        "height": "100.0%",
        "id": "Copyimage0eb1309f5b52641",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "menu4.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer06ee5cc4c316e40.add(Copyimage0eb1309f5b52641);
    var button980441492124300 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492124300",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "DISTRIBUIDORES",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492124296.add(CopyFlexContainer06ee5cc4c316e40, button980441492124300);
    var image2980441492124302 = new kony.ui.Image2({
        "height": "5.0%",
        "id": "image2980441492124302",
        "isVisible": true,
        "left": "0%",
        "src": "raya.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer980441492124294.add(flexContainer980441492124296, image2980441492124302);
    var flexContainer980441492124624 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainer980441492124624",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": p2kwiet19724036342351_flexContainer980441492124624_onTouchEnd_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124624.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492124626 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492124626",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124626.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer01b9d5c20611948 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer01b9d5c20611948",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer01b9d5c20611948.setDefaultUnit(kony.flex.DP);
    var Copyimage038558444a0414b = new kony.ui.Image2({
        "height": "100.0%",
        "id": "Copyimage038558444a0414b",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "menu5.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer01b9d5c20611948.add(Copyimage038558444a0414b);
    var button980441492124630 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492124630",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "CONTACTANOS",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492124626.add(CopyFlexContainer01b9d5c20611948, button980441492124630);
    var image2980441492124632 = new kony.ui.Image2({
        "height": "5.0%",
        "id": "image2980441492124632",
        "isVisible": true,
        "left": "0%",
        "src": "raya.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer980441492124624.add(flexContainer980441492124626, image2980441492124632);
    var flexContainer980441492124644 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexContainer980441492124644",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": p2kwiet19724036342351_flexContainer980441492124644_onTouchEnd_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124644.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492124646 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492124646",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124646.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer03a9888cf6bd346 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer03a9888cf6bd346",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer03a9888cf6bd346.setDefaultUnit(kony.flex.DP);
    var Copyimage012dc14711fd548 = new kony.ui.Image2({
        "height": "100.0%",
        "id": "Copyimage012dc14711fd548",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "menu6.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer03a9888cf6bd346.add(Copyimage012dc14711fd548);
    var button980441492124650 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492124650",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "myDFS",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492124646.add(CopyFlexContainer03a9888cf6bd346, button980441492124650);
    var image2980441492124652 = new kony.ui.Image2({
        "height": "5.0%",
        "id": "image2980441492124652",
        "isVisible": true,
        "left": "0%",
        "src": "raya.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    flexContainer980441492124644.add(flexContainer980441492124646, image2980441492124652);
    var flexOpcConfig = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11.50%",
        "id": "flexOpcConfig",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": p2kwiet19724036342351_flexOpcConfig_onTouchEnd_seq0,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexOpcConfig.setDefaultUnit(kony.flex.DP);
    var flexContainer980441492124666 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "95.0%",
        "id": "flexContainer980441492124666",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer980441492124666.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0d712c339863d40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0d712c339863d40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0d712c339863d40.setDefaultUnit(kony.flex.DP);
    var Copyimage074b69ed536c04d = new kony.ui.Image2({
        "height": "100.0%",
        "id": "Copyimage074b69ed536c04d",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "menu7.png",
        "top": "0.0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer0d712c339863d40.add(Copyimage074b69ed536c04d);
    var button980441492124670 = new kony.ui.Button({
        "focusSkin": "dfsFocusMenuHamburguesa",
        "height": "100.0%",
        "id": "button980441492124670",
        "isVisible": true,
        "left": "5.0%",
        "skin": "newBtnMenuHamburguesa",
        "text": "CONFIGURACION",
        "top": "2.22%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    flexContainer980441492124666.add(CopyFlexContainer0d712c339863d40, button980441492124670);
    flexOpcConfig.add(flexContainer980441492124666);
    var btnLogout = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0.0%",
        "clipBounds": true,
        "height": "19.50%",
        "id": "btnLogout",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    btnLogout.setDefaultUnit(kony.flex.DP);
    var button980441492127660 = new kony.ui.Button({
        "centerX": "50%",
        "height": "55%",
        "id": "button980441492127660",
        "isVisible": true,
        "left": "0dp",
        "onClick": p2kwiet19724036342351_button980441492127660_onClick_seq0,
        "skin": "distBtnCerrarSesion",
        "text": "CERRAR SESION",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    btnLogout.add(button980441492127660);
    navigation.add(flexContainer98044149287740, flexContainer980441492124254, flexContainer980441492124274, flexContainer980441492124294, flexContainer980441492124624, flexContainer980441492124644, flexOpcConfig, btnLogout);
    menu.add(headerPato, block, navigation);
};

function menuGlobals() {
    menu = new kony.ui.Form2({
        "addWidgets": addWidgetsmenu,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "menu",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "flexContainerTerminos",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "needsIndicatorDuringPostShow": false,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "zoomScale": 1
    });
    menu.info = {
        "kuid": "p2kwiet19724036342351"
    };
};