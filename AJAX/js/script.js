let clickButton = document.querySelector('#click_me');
let pageNumber = document.querySelector('#page_number');
let pageLimit = document.querySelector('#page_limit');
let queryInfo = document.querySelector('.query_info');
let apiUrl = 'https://retoolapi.dev/2XHDRY/data';

clickButton.addEventListener('click', ()=>{
    let promise = makeRequest(pageNumber.value, pageLimit.value, apiUrl);
    promise.then(data => {
        data.forEach(element=>{
            let myDiv = document.createElement('div');
            myDiv.textContent = element.Column1;
            queryInfo.append(myDiv);
        });
    });
});


