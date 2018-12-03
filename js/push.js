console.log('[Application] start push listenning');

const messaging = firebase.messaging();

messaging.requestPermission().then(() => {
    console.log('Permission granted');

    return messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log(currentToken);
            return currentToken;
        } else {
            console.warn('Nenhum id diponível, solicite permissão para gerar um');
        }
    });
});

messaging.getToken()
        .then((currentToken) => {
            if (currentToken) {
                console.log(currentToken);
                return currentToken;
            } else {
                console.warn('Nenhum id diponível, solicite permissão para gerar um');
            }
        })
        .catch((err) => {
            console.warn('get token err', err);
        });
