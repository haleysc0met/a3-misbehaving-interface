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
            const usernameInput = document.getElementById('username');
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
            }
});
// }, 3000);
