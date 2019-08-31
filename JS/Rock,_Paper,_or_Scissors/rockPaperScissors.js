const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log(`${userInput} is not valid argument, enter 'rock', 'paper' or 'scissors'`);
    }
  }
  
  const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      return 'rock';
    } else if (choice === 1) {
      return 'paper';
    } else if (choice === 2) {
          return 'scissors';
    } else {
      return 'Error';
    }
  }
  
  //console.log(`Computer choose ${getComputerChoice()}`);
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'Human won!';
    } else if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'Human won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'Human won!';
      } 
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'Human won!';
      }
    }
  }
    
  //console.log(determineWinner('rock', getComputerChoice()));
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`User choose ${userChoice}`);
    console.log(`Computer choose ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();