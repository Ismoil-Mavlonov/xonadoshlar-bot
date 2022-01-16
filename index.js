const token = '5068912179:AAHE87v4_zgavHXecf9cyOFayDHhG1nTqeo'
const telegramBot = require('node-telegram-bot-api')
const bot = new telegramBot(token, {polling: true})


bot.on('message', (evt)=>{
	let msg = evt.text
	let chatId = evt.chat.id
	let fName  = evt.from.first_name
	if (msg == '/start'){
		bot.sendMessage(chatId, "Salom, xush kelibsiz " +  fName, {
			reply_markup: {
				keyboard: [['Xonadoshlar_haqida'], ['Ismoil', 'Javlon'], ['Dilmurod', 'Otabek']],
				resize_keyboard: true
			}
		})
	}

	if (msg == 'Xonadoshlar_haqida'){
		bot.sendMessage(chatId, "Xonada 4 kishi turadi. Uy Zangiota tumani, 116-xonadonda joylashgan. ", {
		})
	}

	if (msg == 'Javlon'){
		bot.sendMessage(chatId, "Yoshi 24 da. Familyasi Baxrinov.", {
		})

		bot.sendPhoto(chatId, './rasm/javlon.jpg')
	}

	if (msg == 'Dilmurod'){
		bot.sendMessage(chatId, "Yoshi 22 da. Kimyoda o'qiydi.", {
		})

		bot.sendPhoto(chatId, './rasm/dilmurod.jpg')
	}

	if (msg == 'Otabek'){
		bot.sendMessage(chatId, "Toga uyda", {
		})

	}

})