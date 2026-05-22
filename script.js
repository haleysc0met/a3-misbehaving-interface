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
    // submit button alert
    const submitButton = document.getElementById('submitUsername');
            if (submitButton) {
                submitButton.addEventListener('click', function () {
                    if (!localStorage.getItem('usernameSubmittedAlert')) {

                        alert('Username submitted! Not that is was a good one, maybe you should work on that?');
                        localStorage.setItem('usernameSubmittedAlert', 'true');
                    }
                });
            }
            // button running away from the user
  const runawayBtn = document.getElementById('next-button');
            if (runawayBtn) {
                runawayBtn.style.display = 'block';
                runawayBtn.style.left = '45%';
                runawayBtn.style.top = '50%';
                activateRunawayButton(runawayBtn);
            }
}
);
//
// runaway button function
function activateRunawayButton(btn) {
    document.addEventListener('mousemove', function (e) {
        // Get the current position of the button
        const btnRect = btn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;
        // math for how close cursor is to the button
        const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

        // If the cursor gets closer than 80px, move the button
        if (distance < 80) {
            // Generate a random position within the visible window bounds
            const newX = Math.random() * (window.innerWidth - btnRect.width);
            const newY = Math.random() * (window.innerHeight - btnRect.height);

            btn.style.left = newX + 'px';
            btn.style.top = newY + 'px';
        }
    });
}
// Remove extra closing braces and parentheses
