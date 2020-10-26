
/*
*Class HttpService
*Stores the main http functions 
*Reusable funx
*/
class HttpService {
    
    url = "http://localhost:8000/api";

    postData = async(item, added_url, type = 'POST') => {
        // item from local storage that stores the token
    	const token = await localStorage.getItem('user');
    	let requestOptions = {
    		method: type,
    		headers:{
    			'Authorization': token,
    			'Content-Type': 'Application/json',
    		},
    		body: JSON.stringify(item)
    	}
    	return fetch(this.url+"/"+added_url, requestOptions).then(
            response => {
                return response.json()
            });
    }

    getData = async(added_url) => {
        // item from local storage that stores the token
    	const token = await localStorage.getItem('user');
    	let requestOptions = {
    		method: 'GET',
    		headers:{
    			'Authorization': token,
    			'Content-Type': 'Application/json',
    		}
    	}
    	return fetch(this.url+"/"+added_url, requestOptions
            ).then(response=>{return response.json()});
    }


    postFormData = async(item, added_url, type = 'POST') => {
        // item from local storage that stores the token
        const token = await localStorage.getItem('user');
        let requestOptions = {
            method: type,
            headers:{
                'Authorization': token,
            },
            body: (item)
        }
        return fetch(this.url+"/"+added_url, requestOptions).then(
            response => {
                return response.json()
            });
    }
}

export default HttpService