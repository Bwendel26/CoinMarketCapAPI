//My API key
var apikey = {
    key: 'efd77ad9-f62b-4cb9-81d0-a7e9e66a85ca'
}

//Get Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + 
        apikey.key)
        .then((response) => {
            if(!response.ok) throw new Error('Erro ao executar a requisição, status' + response.status);
            return response.json();
        })
        .then((api) => {
            var text = '';
            //get 10 coins and symbols
            for(let i = 0; i < 10; i++) {
                console.log(api);

                text += `
                    <div class="media" id="coin">
                        <img src="coin.png" class="align-self-center mr-3" alt="coin" width="100" height="60"/>
                        <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>${api.data[i].first_historical_data}</p>
                    </div>
                `;

                document.getElementById("coins_main").innerHTML = text;
            }
            
        })
        .catch((error) => {
            console.error(error.message);
        });