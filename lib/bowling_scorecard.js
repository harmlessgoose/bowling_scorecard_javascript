const rl = require('readline-sync');

total_score = 0;

function start_game() {
  frame();

  console.log(`Total score = ${this.total_score}`);
}

function frame() {
  let frame_total = 10;

  for (let current_frame = 1; current_frame <= frame_total; current_frame++) {
    console.log("--------------------------");
    console.log(`Frame: ${current_frame}`);
    roll();
  };
};

function roll() {
  let roll_total = 2;
  let current_roll = 1;
  let total_pins_knocked_down = 0;

  for (i = 0; i < roll_total; i++) {
    console.log(`Roll: ${current_roll}`);
    current_roll++;
  
    let pins_knocked_down = rl.question('How many pins were knocked down? ');

    total_pins_knocked_down += Number(pins_knocked_down);
  }

  console.log(`Total pins knocked down: ${total_pins_knocked_down}`);
  total_score += total_pins_knocked_down;
};

start_game();

module.exports = start_game;