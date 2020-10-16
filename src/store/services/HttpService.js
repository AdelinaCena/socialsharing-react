
class HttpService {
    url = "http://localhost:8000/api/auth";

    postData = async(item, added_url) => {
    	const token = await localStorage.getItem('user');
    	let requestOptions = {
    		method: 'POST',
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
    	const token = await localStorage.getItem('user');
    	let requestOptions = {
    		method: 'GET',
    		headers:{
    			'Authorization': token,
    			'Content-Type': 'Application/json',
    		}
    	}

    	return fetch(this.url+"/"+added_url, requestOptions).then(response=>{return response.json()});

    }
}

export default HttpService