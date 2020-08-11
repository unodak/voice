const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greeting = ["I'm great thanks", 'Okay I guess', 'Been better'];
const time = ['The time is'];
const weather = ["It's really confusing if I'm being completly honest", "Can't connect to the internet, ask me tomorrow"];
const name = ["I don't have a name yet"];
const joke = ['Dad, did you get a haircut?" "No, I got them all cut!', 'What did the power ranger say when he became a doctor?" "Its morphine time!', "Why couldn't the toilet paper cross the road? '' He got stuck in a crack", "Not sure if it will work but... '' Katsu doom!"];
const age = ["Computers don't have ages, but I'd say about a couple of hours. 8 maximum", ""];
const day = ['Monday, 2020 is just Mondays'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated, you can speak');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "You're going to have to repeat that?";

    
     if(message.includes('how are you')) {
         const finalText = greeting[Math.floor(Math.random() * greeting.length)];
        speech.text =finalText;
     }

     if(message.includes('what is the time')) {
        const finalText = time[Math.floor(Math.random() * time.length)];
        var today = new Date();
        speech.text = finalText + today + "sorry for being so specific I don't know how to break it down yet";

     }

     if(message.includes('what is the weather like')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
       speech.text =finalText;
     }

     if(message.includes('what is your name')) {
        const finalText = name[Math.floor(Math.random() * name.length)];
       speech.text =finalText;
     }

     if(message.includes( 'tell me a dad joke')) {
        const finalText = joke[Math.floor(Math.random() * joke.length)];
       speech.text =finalText;
     }

     if(message.includes('how old are you')) {
        const finalText = age[Math.floor(Math.random() * age.length)];
       speech.text =finalText;
     }

     if(message.includes('what day is it tomorrow')) {
        const finalText = day[Math.floor(Math.random() * day.length)];
       speech.text =finalText;
     }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.2;

    window.speechSynthesis.speak(speech);
}