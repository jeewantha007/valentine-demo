let btnWidth = 100; 
let btnHeight = 60;  
let clickCount = 0;
let marginTop = 0; 
let nobtnWidth = 100;
let fontSize = 20;

let hii = [
    'are you sure ?', 
    'think again!!', 
    'you are killing me', 
    'don\'t break my heart', 
    'you\'re breaking my heart', 
    'this is getting serious', 
    'don\'t do this to me', 
    'please reconsider', 
    'don\'t go there', 
    'think about it',
    'I can\'t take this anymore',
    'I need you to stop',
    'this is getting too much',
    'is this real?',
    'why are you doing this?',
    'I\'m going to need some time',
    'you\'re making it hard',
    'I feel like I\'m dying here',
    'this feels like the end',
    'my heart can\'t take much more'
];

let songPlayed = false; // Flag to track if the song has been played
let audio; // Reference to the audio element

const btunSizeChanger = () => {


    

    
    if (clickCount < 20) {
        // Play the song only on the first click
        if (!songPlayed) {
            audio = new Audio('images/videoplayback.weba');
            audio.play();
            songPlayed = true;  // Set the flag to true after the song plays
        }

  


        document.getElementById('image').src = 'https://media.tenor.com/amRuuQRN6d0AAAAi/love.gif';
    



        // Button size and text changes
        btnWidth += 50;
        btnHeight += 50;

        document.getElementById('yesBtn').style.width = btnWidth + 'px';
        document.getElementById('yesBtn').style.height = btnHeight + 'px';

        fontSize += 20;
        document.getElementById('yesBtn').style.fontSize = fontSize + 'px';
        document.getElementById('yesBtn').style.fontWeight = 'bold';  // Set fontWeight to bold

        marginTop += 2;  
        document.getElementById('noBtn').style.marginTop = marginTop + 'px'; 

        nobtnWidth += 10;  
        document.getElementById('noBtn').style.width = nobtnWidth + 'px'; 

        let noBtnTextIndex = clickCount % hii.length;  
        document.getElementById('noBtn').textContent = hii[noBtnTextIndex];

        clickCount++;
    } else {
        alert('You broke my heart!!!');
    }
};

// Stop the song when the "Yes" button is clicked
document.getElementById('yesBtn').addEventListener('click', () => {
    if (audio) {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the audio to the beginning
        songPlayed = false;  // Reset the flag to allow the song to play again if needed
    }
});

const yesButton = () => {

  

    const audio = new Audio('images/No Promises - Shayne Ward [www.sangeethe.com].mp3');
  audio.play();

  document.getElementById('image').src = 'https://media.tenor.com/NGFif4dxa-EAAAAi/hug-hugs.gif';

  document.getElementById('quz').innerHTML = '';
  document.getElementById('yesBtn').style.display = 'none';
  document.getElementById('noBtn').style.display = 'none';


    const Confettiful = function(el) {
        this.el = el;
        this.containerEl = null;
        
        this.confettiFrequency = 3;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];
        
        this._setupElements();
        this._renderConfetti();
      };
      
      Confettiful.prototype._setupElements = function() {
        const containerEl = document.createElement('div');
        const elPosition = this.el.style.position;
        
        if (elPosition !== 'relative' || elPosition !== 'absolute') {
          this.el.style.position = 'relative';
        }
        
        containerEl.classList.add('confetti-container');
        
        this.el.appendChild(containerEl);
        
        this.containerEl = containerEl;
      };
      
      Confettiful.prototype._renderConfetti = function() {
        this.confettiInterval = setInterval(() => {
          const confettiEl = document.createElement('div');
          const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
          const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
          const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
          const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
          
          confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
          confettiEl.style.left = confettiLeft;
          confettiEl.style.width = confettiSize;
          confettiEl.style.height = confettiSize;
          confettiEl.style.backgroundColor = confettiBackground;
          
          confettiEl.removeTimeout = setTimeout(function() {
            confettiEl.parentNode.removeChild(confettiEl);
          }, 3000);
          
          this.containerEl.appendChild(confettiEl);
        }, 25);
      };
      
      window.confettiful = new Confettiful(document.querySelector('.js-container'));








      
  // Add the first romantic message to display-1
document.getElementById('display-1').innerHTML = 
"We're just getting started... 💫";

document.getElementById('display-1').style.color = 'gold';
document.getElementById('display-1').style.fontWeight = 'bold';

// Add the second romantic message to display-2
const coupleMessage = document.getElementById('display-2');
coupleMessage.innerHTML = "We’re now officially a couple! 💑";
coupleMessage.style.color = 'lightcoral';
coupleMessage.style.transition = 'opacity 1s, transform 1s';

// Start with an invisible message
coupleMessage.style.opacity = '0';
coupleMessage.style.transform = 'scale(0.8)';

// Show the message with animation
setTimeout(() => {
    coupleMessage.style.opacity = '1';
    coupleMessage.style.transform = 'scale(1)';
}, 2000);

// Add a third romantic follow-up message using display-3
const foreverMessage = document.getElementById('display-3');
foreverMessage.innerHTML = "Together forever, hand in hand. 💕";
foreverMessage.style.color = 'red';
foreverMessage.style.transition = 'opacity 1s, transform 1s';

// Start with an invisible message
foreverMessage.style.opacity = '0';
foreverMessage.style.transform = 'scale(0.8)';

// Show the message with animation
setTimeout(() => {
    foreverMessage.style.opacity = '1';
    foreverMessage.style.transform = 'scale(1)';
}, 4000);

// Add a delayed romantic follow-up with animation
setTimeout(() => {
    foreverMessage.innerHTML = "Forever and always, you & me. ❤️";
    foreverMessage.style.color = 'crimson'; // Change color for emphasis
    foreverMessage.style.transform = 'scale(1.2)';
}, 10000);

// Reset the scale back to normal
setTimeout(() => {
    foreverMessage.style.transform = 'scale(1)';
}, 12000);  // Slight delay before reset






    // Add the animation class to the Yes button for the animation effect
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.classList.add('congratulation-animation');

    // Reset the button styles and text
    yesBtn.style.width = '100px';
    yesBtn.style.height = '50px';
    yesBtn.style.fontSize = '20px';  // Reset fontSize
    yesBtn.style.fontWeight = 'normal'; // Reset fontWeight
    yesBtn.style.padding = '10px';

    document.getElementById('noBtn').style.width = '100px';
    document.getElementById('noBtn').style.height = '50px';
    document.getElementById('noBtn').style.marginTop = '10px'; // Reset the margin
    document.getElementById('noBtn').innerText = 'No'; // Reset the text of "No" button

    // Reset the variables to their initial state
    btnWidth = 100;
    btnHeight = 50;
    clickCount = 0;
    marginTop = 0;
    nobtnWidth = 100;
    fontSize = 20;

    // Remove the animation class after it finishes so it can be re-applied if needed
    setTimeout(() => {
        yesBtn.classList.remove('congratulation-animation');
    }, 1000);  // 1 second to match the animation duration
};


