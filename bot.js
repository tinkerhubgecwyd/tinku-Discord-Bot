const Discord = require('discord.js');
const request = require('request');
const customsg = require("./messages.js");
const news = require("./technewsapi");

require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('logged');
}

const PREFIX = "!";

// news.fetchNews();










//custom words----------------------------


botData = [
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

client.on('message', gotMessage);

function gotMessage(msg){
    if(msg.channel.id == process.env.CHANNELONE || msg.channel.id == process.env.CHANNELTWO || msg.channel.id == process.env.CHANNELTHREE){
        if(msg.author.bot){return null
        }else if(msg.content.startsWith(PREFIX)){
            const [CMD_NAME, ...arg] = msg.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
            const d = new Date();
            const DATE = d.getDate()+'-'+d.getMonth+'-'+d.getFullYear;
            COVIN_URL = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+arg[0]+'&date=16-06-21'
        }
        else if('!tinsearch' == customsg.findContainSearch(msg.content)){
            API_URL = 'http://api.serpstack.com/search?access_key='+process.env.SERPSTACKAPI_KEY+'&query='+customsg.SearchQuery(msg.content);
            //google search using stack api

            

            request(API_URL, { json: true }, (err, res, body) => {
            if (err) { return console.log("error is "+err); }

            
            else{
                // console.log(body);
                msg.reply(body.knowledge_graph.title+'\n'+body.knowledge_graph.description);
                body.organic_results.forEach(element => {
                    msg.reply(element.title+'\n'+element.url);
                });

            }
            
            });




        }else if(msg.content == 'hii'){
            msg.reply('hello nice to meet you!!');
        }else if(botData.some(words => msg.content.includes(words))){
            const response = iambot[Math.floor(Math.random() * iambot.length)];
            msg.reply(response);
        }else if(callme.some(words => msg.content.includes(words))){
            const response2 = hireplay[Math.floor(Math.random() * iambot.length)];
            if (response2 != null){
                msg.reply(response2);
            }


        }else if(whatistinkerhub.some(words => msg.content.includes(words))){
            msg.reply(whatistingerhubans);
        }else{
            msg.reply('sorry i dont understand !! if you need any help you can always connect with @adminstrator')
        }
    }
}




