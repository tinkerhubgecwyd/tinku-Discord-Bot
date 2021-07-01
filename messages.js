
module.exports.botData = [
    'name',
    'Who are you',
    'who are you',
    'Name',
    'Tell about you',
    'tell about you',
    'Tell me something about you',
    'tell me something about you',
    'What is your name',
    'what is your name',
    'your name plase',
    'What you want',
    'what you want'
]

const iambot = [
    'hy..im tinku a official bot from gecw :blush: :gear: ',
    'hii my name is tinku :wink: :robot: ',
    'im tinku a bot to assist you :two_hearts:',
    'hy....im tinku coded by tinker hub gecw :yum: '
]
//some one saying hi
const callme = [
    'hii',
    'hy',
    'hello',
    'Hii',
    'Hi',
    'hi',
    'Hello',
    'hyy',
    'Hyy',
    'Hy',
    'Help',
    'help',
    'helo'
]
const hireplay = [
    'did you call me ? ,how can i help :grinning:',
    'hyy.. how can i help :grin: :heart: ',
    'hy im here , how can i help?. :kissing_heart: .'
];
//what is tinker hub?
const whatistinkerhub = [
    'what is tinkerhub',
    'about tinker hub',
    'tinker hub',
    'tinkerhub',
    'Tinkerhub',
    'Tinker hub',
    'who are we',
    'tell me about tnkerhub',
    'Tell me about tinkerhub',
    'tell me about tnker hub',
    'Tell me about tinker hub',


];
const whatistingerhubans = "We are a community of tinkerers :yum: , makers, policy geeks & students. Working towards mapping and empowering people who share passion to innovate :kissing_heart: . refer here :  https://tinkerhub.org ";
//what is gecw
const whatisgecw = [
    'gecw',
    'what is gecw',
    'where is gecw',
    'tell me something about gecw',
    'Gecw',
    'gecwayanad',


];




function findContainSearch(message){
    var splitmsg = message.split("  ");
    return splitmsg[0];
}
function SearchQuery(message){
    var splitmsg = message.split("  ");
    return splitmsg[1];
}
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}


module.exports = {findContainSearch,SearchQuery,  getapi}




