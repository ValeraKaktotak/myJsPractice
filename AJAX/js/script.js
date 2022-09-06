let clickButton = document.querySelector('#click_me');
let clickPostButton = document.querySelector('#click_me_post');
let pageNumber = document.querySelector('#page_number');
let pageLimit = document.querySelector('#page_limit');
let queryInfo = document.querySelector('.query_info');
let apiUrl = 'https://api-generator.retool.com/47ITxJ/data';
let apiUrlPost = 'https://api-generator.retool.com/47ITxJ/data';

clickButton.addEventListener('click', ()=>{
    let promise = makeGetRequest(pageNumber.value, pageLimit.value, apiUrl);
    promise.then(data => {
        queryInfo.innerHTML = '';
        data.forEach(element=>{
            let myDiv = document.createElement('div');
            myDiv.textContent = element.Column1;
            queryInfo.append(myDiv);
        });
    });
});

clickPostButton.addEventListener('click', ()=>{
    let promise = makePostRequest(apiUrlPost);
    promise.then(data => {
        alert(`Ваша запись ${data.id} добавлена`);
    });
});


