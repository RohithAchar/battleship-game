export default (function(){
    const wrapper = document.querySelector('.instruction-modal');
    const instruction1 = document.createElement('p');
    instruction1.textContent = 'Place your ships strategically on your grid to avoid being sunk.';
    const instruction2 = document.createElement('p');
    instruction2.textContent = 'Take turns attacking your opponent\'s grid by selecting coordinates.';
    const instruction3 = document.createElement('p');
    instruction3.textContent = 'Sink all of your opponent\'s ships to win the game!';
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start';
    startBtn.style.cursor = 'pointer';
    startBtn.addEventListener('click', () => {
        wrapper.style.display = 'none';
    })
    wrapper.append(instruction1, instruction2, instruction3, startBtn);
})();