const urlreg = "http://localhost:8080/regioner"

function fetchAnyUrlText(url) {
    console.log("inside fetch text url=" + url)
    const f = fetch(url).then(response => response.text());
    console.log("2222222222")
    console.log(f)
    return f;
}

actionFetchUrl("hej")

async function actionFetchUrl(btn) {
    const json = await fetchAnyUrlText(urlreg);
    console.log(json)
}

