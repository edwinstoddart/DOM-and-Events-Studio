// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
    // Buttons
    const takeOff = document.getElementById('takeoff');
    const land = document.getElementById('landing');
    const abort = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const right = document.getElementById('right');
    const down = document.getElementById('down');
    const left = document.getElementById('left');

    // Shuttle Parameters
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const shuttle = document.getElementById('rocket');

    // Functions
    function confirmTakeoff() {
        let answer = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (answer === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = (parseInt(shuttleHeight.innerHTML, 10) + 10000);
            rocket.style.top = (parseInt(rocket.style.top, 10) -10).toString(10)+'px';
        }
    }
    function landing() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
        rocket.style.top = '250px';
        rocket.style.left = '255px';
    }
    function confirmAbortion() {
        let answer = window.confirm('Confirm that you want to abort the mission.');
        if (answer === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
            rocket.style.top = '250px';
            rocket.style.left = '255px';
        }
    }
    function move(direction) {
        if (flightStatus.innerHTML === 'Shuttle in flight.') {
            switch (direction) {
                case 'up':
                    if (parseInt(rocket.style.top, 10) >= 10) {
                        rocket.style.top = (parseInt(rocket.style.top, 10) -10).toString(10)+'px';
                        shuttleHeight.innerHTML = (parseInt(shuttleHeight.innerHTML, 10) + 10000);
                        if (parseInt(rocket.style.top, 10) >= 240) {shuttleBackground.style.backgroundColor = 'blue';}
                    }
                    break;
                case 'right':
                    if (parseInt(rocket.style.left, 10) <= 540) {
                        rocket.style.left = (parseInt(rocket.style.left, 10) +10).toString(10)+'px';
                    }
                    break;
                case 'down':
                    if (parseInt(rocket.style.top, 10) <= 240) {
                        rocket.style.top = (parseInt(rocket.style.top, 10) +10).toString(10)+'px';
                        shuttleHeight.innerHTML = (parseInt(shuttleHeight.innerHTML, 10) - 10000);
                        if (parseInt(rocket.style.top, 10) >= 250) {shuttleBackground.style.backgroundColor = 'green';}
                    }
                    break;
                case 'left':
                    if (parseInt(rocket.style.left, 10) >= -10) {
                        rocket.style.left = (parseInt(rocket.style.left, 10) -10).toString(10)+'px';
                    }
                    break;
            }
        }
    }

    // Event Listeners
    takeOff.addEventListener('click', confirmTakeoff);
    land.addEventListener('click', landing);
    abort.addEventListener('click', confirmAbortion);
    up.addEventListener('click', () => {move('up')});
    right.addEventListener('click', () => {move('right')});
    down.addEventListener('click', () => {move('down')});
    left.addEventListener('click', () => {move('left')});
})