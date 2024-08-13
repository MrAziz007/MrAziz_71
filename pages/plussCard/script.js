import { postAxios } from "../../libs/http.js";

let userId = localStorage.getItem('userId');

let form = document.forms[0];

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    postAxios(`cards`, { ...obj, userId })
        .then(res => {
            console.log(res)
            window.location.replace('/pages/cards/')
        })
        .catch(error => console.error(error))
};