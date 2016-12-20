var quote = [
'\"Some people never go crazy. What truly horrible lives they must lead.\" - Charles Bukowski','\"What matters most is how well you walk through the fire\" - Charles Bukowski','\"We\'re all going to die, all of us, what a circus! That alone should make us love each other but it doesn\'t. We are terrorized and flattened by trivialities, we are eaten up by nothing.\" - Charles Bukowski' , '\"My ambition is handicapped by laziness.\" - Charles Bukowski' , '\"You have to die a few times before you can really live.\" - Charles Bukowski' , '\"The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence.\" - Charles Bukowski', '\"Man, you\'re letting your brain dial turn your fear volume up.\" - Finn' , '\"When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.\" - BMO', '\"Everything small is just a smaller version of something big!\" - Finn', '\"Dude, suckin\' at something is the first step to being sorta good at something.\" - Jake', '\"You don\t need a mirrror to know you look good. You\re beautiful on the inside. Like... your brain and stuff!\" - Finn', '\"You\re getting all hung up, hung up on imaginary problems. You got to focus on what\'s real, man.\" - Jake' , '\"I don\'t need to feel like I\'m waiting to be noticed. I know who I am and I\'ll know what I want if and when it ever comes along.\" - Fionna', '\"Y\'all are just hating on my steez. I\'m not listening to haters.\" - Ice Kind'
]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quote.length));
	document.getElementById('quoteDisplay').innerHTML = quote[randomNumber];

  $(".quoteText").text(data.quoteText);

  var quot = 'https://twitter.com/intent/tweet?text=' + data.content
}

$(".twitter-share-button").attr("href", quot)
