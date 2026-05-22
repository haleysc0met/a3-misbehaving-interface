window.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');

    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    const slider3 = document.getElementById('slider3');
    const text = document.getElementById('resize');

    // Hardcode the initial states via JS just in case CSS fails
    if (container2) container2.style.display = 'none';
    if (container3) container3.style.display = 'none';

    // Step 1: Handle Slider 1 Interaction
    if (slider1) {
        slider1.addEventListener('input', function () {
            console.log("Slider 1 touched!"); // Verification check
            container1.style.setProperty('display', 'none', 'important');
            container2.style.setProperty('display', 'block', 'important');
        });
    }

    // Step 2: Handle Slider 2 Interaction
    if (slider2) {
        slider2.addEventListener('input', function () {
            console.log("Slider 2 touched!"); // Verification check
            container2.style.setProperty('display', 'none', 'important');
            container3.style.setProperty('display', 'block', 'important');
        });
    }

    // Step 3: Handle Slider 3 Interaction (The Working One)
    if (slider3) {
        slider3.addEventListener('input', function () {
            if (text) text.style.fontSize = slider3.value + 'px';
            // Show username after slider 3 interaction
            const playerUsernameInput = document.getElementById('player-username');
            if (playerUsernameInput) {
                setTimeout(() => {
                    playerUsernameInput.style.display = 'block';
                }, 3000);
            }

        });
    }
    // username submission
    // 1. The Username Input Prank Logic
    const usernameInput = document.getElementById('usernameInput');
    const secretText = 'ExoticButters';

    if (usernameInput) {
        setTimeout(() => {
            usernameInput.style.display = 'block';
            usernameInput.focus();
            usernameInput.addEventListener('keydown', function (event) {
                event.preventDefault();
                const currentLength = usernameInput.value.length;
                if (event.key === 'Backspace') {
                    usernameInput.value = usernameInput.value.slice(0, -1);
                    return;
                }
                if (currentLength < secretText.length && event.key.length === 1) {
                    usernameInput.value += secretText[currentLength];
                }
            });
        }, 3000);
    }

    // submit button logic for username input
    const submitButton = document.getElementById('submitUsername');

    if (submitButton) {
        submitButton.addEventListener('click', function () {
            // alert when you click submit
            alert('Username submitted! Can you close this now... youre making everyone uncomfortable.. seriously dude you gotta stop');

            // button shows up on click
            const nextDiv = document.getElementById('next-button');
            if (nextDiv) {
                nextDiv.style.display = 'block';
                const runawayBtn = document.getElementById('next');
                if (runawayBtn)
                    runawayBtn.style.display = 'block';
                runawayBtn.style.left = '45%';
                runawayBtn.style.top = '50%';

                // button moving away
                activateRunawayButton(runawayBtn);
            }
        });
    }


    // button logic 
    function activateRunawayButton(btn) {
        document.addEventListener('mousemove', function (e) {
            const btnRect = btn.getBoundingClientRect();
            const btnCenterX = btnRect.left + btnRect.width / 2;
            const btnCenterY = btnRect.top + btnRect.height / 2;

            const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

            if (distance < 80) {
                const newX = Math.random() * (window.innerWidth - btnRect.width);
                const newY = Math.random() * (window.innerHeight - btnRect.height);

                btn.style.left = newX + 'px';
                btn.style.top = newY + 'px';
            }
        });
        const motivationalDiv = document.getElementById('motivational-div');

        if (motivationalDiv) {
            setTimeout(() => {
                motivationalDiv.style.display = 'block'; // Shows the 1st div after 5s

                const helpfulDiv = document.getElementById('helpful-div');
                if (helpfulDiv) {
                    setTimeout(() => {
                        helpfulDiv.style.display = 'block'; // Shows the 2nd div after 3s more
                    }, 7000); }
            }, 5000);

        }
    }
});

