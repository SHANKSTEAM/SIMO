const API_KEY = 'AIzaSyBusOlzFTL_925MbYY7Ed0cXfnYvXtrOo0';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const spreadsheetId = '1G79_ZyaJU5Xf_kZHunZtflus-6A4qZ9mQMiPJSsQqgY';
const range = 'Categories';
const _valueInputOption = "USER_ENTERED";

function gapiLoaded() {
    gapi.load('client', intializeGapiClient);
}

async function intializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    getGoogleSheetsData();
    document.getElementsByClassName("loader --8")[0].remove();
}


function getGoogleSheetsData() {
    try {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        }).then((response) => {
            const result = response.result.values;
            if(result == null){
                console.log("no category is found");
            }else{
                console.log("result " + result);
            }
        });
    } catch (err) {
        console.log("Erorr " + err.message);
        return;
    }
}