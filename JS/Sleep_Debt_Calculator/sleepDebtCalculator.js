const getSleepHours = (day) => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 8;
        break;
    }
  }
  
  //console.log(getSleepHours('monday'));
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 7.5;
    return idealHours * 7;
  }
  
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You have perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You have more sleep than needed! You are ${actualSleepHours - idealSleepHours} hours over the ideal sleep hours.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You should get some rest! You are ${idealSleepHours - actualSleepHours} hours under the ideal sleep hours.`);
    }
  }
    
  calculateSleepDebt();