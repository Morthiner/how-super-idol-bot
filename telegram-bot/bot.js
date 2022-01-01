const telegramBot = require("node-telegram-bot-api")

const token = '5075396911:AAHC0TTIRK6YNceEgHm7dNsqOyUl-78OQbg'

const bot = new telegramBot(token, { polling:true })

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ['20%', '45%', '1%', '56%', '7%', '0%', '30%', '25%', '35%', '40%', '50%', '55%', '60%', '65%', '70%', '80%', '85%', '90%', '95%', '100', '101%', '36%'];

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    const firstName = msg.from.first_name
    const mensagemUsuario = msg.text
    console.log(msg, chatId)

    if(mensagemUsuario == "/superidol@HowSuperIdol_bot" || "/superidol"){
        bot.sendMessage(chatId, 'You are ' + random_item(items) + ' super idol!!')
    } 
   
    return true
})