export async function fetchCars() {
    const headers = { 
        'X-RapidAPI-Key': '563342dc6bmshfbda82944c813ecp1a6e95jsndb4c0dde9310',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
        const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' 
        , {headers: headers,});

        const result = await response.json();

        return result;
    }
