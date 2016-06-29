function addWidgetsfrmTermsAndConditions2() {
    frmTermsAndConditions2.setDefaultUnit(kony.flex.DP);
    var bgTermsAndConditions = new kony.ui.Image2({
        "bottom": "0px",
        "centerX": "50%",
        "height": "100%",
        "id": "bgTermsAndConditions",
        "isVisible": false,
        "left": "0px",
        "right": "0px",
        "src": "bgmercedez.png",
        "top": "0px",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "10%",
        "height": "5%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": 20,
        "maxWidth": "700px",
        "minHeight": 10,
        "minWidth": "500px",
        "skin": "lblTitle",
        "text": "Terminos y Condiciones",
        "top": "95%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnAceptar = new kony.ui.Button({
        "bottom": 0,
        "focusSkin": "focusGrayButton",
        "height": "6%",
        "id": "btnAceptar",
        "isVisible": true,
        "left": "55%",
        "right": 0,
        "skin": "newBtnEnviarGray",
        "text": "Aceptar",
        "top": "92%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [8, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnCancelar = new kony.ui.Button({
        "focusSkin": "focusGrayButton",
        "height": "6%",
        "id": "btnCancelar",
        "isVisible": true,
        "left": "5%",
        "skin": "newBtnEnviarGray",
        "text": "Cancelar",
        "top": "92%",
        "width": "40%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [8, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var scrollContainerTC = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": false,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "65%",
        "horizontalScrollIndicator": true,
        "id": "scrollContainerTC",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "25%",
        "verticalScrollIndicator": true,
        "width": "93%",
        "zIndex": 3
    }, {}, {});
    scrollContainerTC.setDefaultUnit(kony.flex.DP);
    var richTextTxt = new kony.ui.RichText({
        "centerX": "50%",
        "height": "120%",
        "id": "richTextTxt",
        "isVisible": true,
        "skin": "richTextScrollTerminos",
        "text": "<br/>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum urna in mi fringilla finibus. In dictum quis justo id pellentesque.\n<br/>\n<br/>\nCurabitur a facilisis augue, sed ultrices sem. Vestibulum vulputate tincidunt nisi, ut tempus sapien dignissim ac. Quisque congue ac nibh at suscipit. In at odio vulputate, mollis ex sit amet, facilisis ex. Aliquam porta lorem id velit imperdiet facilisis.\n<br/>\n<br/>\n Aliquam vel eros rutrum, aliquet erat at, fermentum nunc. Cras pharetra turpis ut sem rutrum vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id turpis ut purus semper condimentum at nec libero.  \n<br/>\n<br/>\nMaecenas dictum, lacus in finibus molestie, turpis nisi bibendum purus, id consequat augue massa a dui. Aenean nisl erat, aliquet sed mi dictum, feugiat egestas libero. Aenean rhoncus finibus justo sed pellentesque.\n <br/>\n",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    scrollContainerTC.add(richTextTxt);
    var FlexContainer03898a243477842 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "FlexContainer03898a243477842",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4dp",
        "skin": "slFbox",
        "top": "19.50%",
        "width": "93%",
        "zIndex": 3
    }, {}, {});
    FlexContainer03898a243477842.setDefaultUnit(kony.flex.DP);
    var richTextTitle = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "25%",
        "height": "100%",
        "id": "richTextTitle",
        "isVisible": true,
        "skin": "richTextTitleTerminos",
        "text": "Aviso de Privacidad, Términos y Condiciones",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer03898a243477842.add(richTextTitle);
    var CopyImage0cb7156476cc04d = new kony.ui.Image2({
        "height": "2%",
        "id": "CopyImage0cb7156476cc04d",
        "isVisible": true,
        "left": "9%",
        "src": "flechabotongris2.png",
        "top": "94%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage04978dae790f54f = new kony.ui.Image2({
        "height": "2%",
        "id": "CopyImage04978dae790f54f",
        "isVisible": true,
        "left": "59%",
        "src": "flechabotongris2.png",
        "top": "94%",
        "width": "1.50%",
        "zIndex": 5
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmTermsAndConditions2.add(bgTermsAndConditions, lblTitle, btnAceptar, btnCancelar, scrollContainerTC, FlexContainer03898a243477842, CopyImage0cb7156476cc04d, CopyImage04978dae790f54f);
};

function frmTermsAndConditions2Globals() {
    frmTermsAndConditions2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTermsAndConditions2,
        "allowHorizontalBounce": false,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer099041029e4bc45],
        "id": "frmTermsAndConditions2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "flexContainerTerminos"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": true,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false
    });
    frmTermsAndConditions2.info = {
        "notesId": "bbb070239dc74b46a98100406ff1b63b",
        "kuid": "bbb070239dc74b46a98100406ff1b63b"
    };
};