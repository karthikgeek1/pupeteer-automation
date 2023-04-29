const puppeteer = require('puppeteer')

const url = 'https://www.instagram.com/';
const number = '7416613796';
const password = 'Reactdev@1';

const browserOpen = puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
})
let page;
browserOpen.then(function (browserObj) {
    let browserOpenProm = browserObj.newPage()
    return browserOpenProm
}).then(function (newTab) {
    page = newTab;
    let hackerrankProm = page.goto(url);
    return hackerrankProm
}).then(function () {
    let isNumber = WaitAndType("input[aria-label='Phone number, username, or email']", page, number);
    return isNumber
}).then(function () {
    let ispassword = WaitAndType("input[type='password']", page, password);
    return ispassword
}).then(function () {
    let buttonclicked = WaitAndClick('button[type="submit"]', page);
    return buttonclicked
}).then(function(){
    let notNow = WaitAndClick('button[class="_acan _acap _acas _aj1-"]', page)
    return notNow
}).then(function(){
    let turnon = WaitAndClick('button[class="_a9-- _a9_0"]', page)
    return turnon
}).then(function(){
    let newPost = WaitAndClick('svg[aria-label="New Post"]', page)
    return newPost
})

function WaitAndClick(selector, cpage){
    return new Promise(function(resolve,reject){
        let waitForPromise = cpage.waitForSelector(selector);
        waitForPromise.then(function(){
            let clickModel = cpage.click(selector)
            return clickModel
        }).then(function(){
            resolve()
        }).catch(function(err){
            console.log(err)
            reject()
        })
    })
}
function WaitAndType(selector, cpage, data){
    return new Promise(function(resolve,reject){
        let waitForPromise = cpage.waitForSelector(selector);
        waitForPromise.then(function(){
            let clickModel = cpage.type(selector, data, {delay:50})
            return clickModel
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}