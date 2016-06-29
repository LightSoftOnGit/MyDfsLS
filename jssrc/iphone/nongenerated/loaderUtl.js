var popUpCargar;
var frmCarga;

function showLoader() {
    frmCarga = kony.application.getCurrentForm();
    var basicConfImage = {
        id: "imageIdTest",
        isVisible: true,
        src: "buffer_loader.png",
        imageWhenFailed: "buffer_loader.png",
        imageWhileDownloading: "buffer_loader.png"
    };
    var layoutConfImage = {
        containerWeight: 100
    };
    var PSPConfImage = {
        glossyEffect: constants.MAGE_GLOSSY_EFFECT_RADIAL
    };
    var imageIdTest = new kony.ui.Image2(basicConfImage, layoutConfImage, PSPConfImage);
    imageIdTest.centerX = "50%";
    if (frmCarga.id.localeCompare("frmWelcomeScreen2") == 0) {
        imageIdTest.centerY = "70%";
    } else {
        imageIdTest.centerY = "50%";
    }
    frmCarga.add(imageIdTest);
    var gradosR = new Array();
    var t1 = kony.ui.makeAffineTransform();
    var t2 = kony.ui.makeAffineTransform();
    var t3 = kony.ui.makeAffineTransform();
    var t4 = kony.ui.makeAffineTransform();
    var t5 = kony.ui.makeAffineTransform();
    var t6 = kony.ui.makeAffineTransform();
    var t7 = kony.ui.makeAffineTransform();
    var t8 = kony.ui.makeAffineTransform();
    var t9 = kony.ui.makeAffineTransform();
    var t10 = kony.ui.makeAffineTransform();
    var t11 = kony.ui.makeAffineTransform();
    var t12 = kony.ui.makeAffineTransform();
    t1.rotate(36);
    t2.rotate(72);
    t3.rotate(108);
    t4.rotate(144);
    t5.rotate(180);
    t6.rotate(216);
    t7.rotate(252);
    t8.rotate(288);
    t9.rotate(324);
    t10.rotate(360);
    t11.rotate(0);
    var animDefinitionOne = {
        0: {
            "transform": t11
        },
        10: {
            "transform": t1
        },
        20: {
            "transform": t2
        },
        30: {
            "transform": t3
        },
        40: {
            "transform": t4
        },
        50: {
            "transform": t5
        },
        60: {
            "transform": t6
        },
        70: {
            "transform": t7
        },
        80: {
            "transform": t8
        },
        90: {
            "transform": t9
        },
        100: {
            "transform": t10
        }
    }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    var config = {
        "duration": 1.5,
        "iterationCount": 20,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    frmCarga.imageIdTest.animate(animDef, config);
    var popBasic = {
        id: "popUp",
        skin: "popHtmlSk",
        isModal: true,
        transparencyBehindThePopup: 50
    };
    var popLayout = {
        containerWeight: 20,
        padding: [5, 5, 5, 5]
    };
    var popPSP = {
        footerOverlap: false,
        captureGPS: false,
        windowSoftInputMode: constants.POPUP_ADJUST_RESIZE
    };
    popUpCargar = new kony.ui.Popup(popBasic, popLayout, popPSP);
    popUpCargar.show();
}

function dismissLoader() {
    if (popUpCargar != null && popUpCargar != undefined && frmCarga != null && frmCarga != undefined && frmCarga.imageIdTest != null && frmCarga.imageIdTest != undefined) {
        popUpCargar.destroy();
        frmCarga.imageIdTest.removeFromParent();
    }
}