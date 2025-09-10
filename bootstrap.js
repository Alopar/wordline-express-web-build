function checkMobileMode(){
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        let meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
}

function initializeUnityPlayer(canvas, config){
    createUnityInstance(canvas, config, (progress) => { /*...*/ })
        .then((unityInstance) => {
            window.unityGame = unityInstance;
    });
}

const canvas = document.querySelector("#unity-canvas");
const config = {
    arguments: [],
    dataUrl: "Build/wordline-express-build-html.data",
    frameworkUrl: "Build/wordline-express-build-html.framework.js",
    codeUrl: "Build/wordline-express-build-html.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Advanced Game Labs",
    productName: "wordline-express",
    productVersion: "0.1.0",
};

checkMobileMode();
initializeUnityPlayer(canvas, config);
