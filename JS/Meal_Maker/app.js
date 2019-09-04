const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      if (this._courses.appetizers) {
        return `${this._courses.appetizers}`;
      } else {
        return 'Missing appetizers property.';
      }
    },
    set appetizers(newAppetizer) {
      if (typeof newAppetizer === 'string') {
        this._courses.appetizers.push(newAppetizer);
      } else {
        return 'Appetizer must be a string';
      }
    },
    get mains() {
      if (this._courses.mains) {
        return `${this._courses.mains}`;
      } else {
        return 'Missing mains property.';
      }
    },
    set mains(newMain) {
      if (typeof newMain === 'string') {
        this._courses.mains.push(newMain);
      } else {
        return 'Main must be a string';
      }
    },
      get desserts() {
      if (this._courses.desserts) {
        return `${this._courses.desserts}`;
      } else {
        return 'Missing desserts property.';
      }
    },
    set deserts(newDessert) {
      if (typeof newDessert === 'string') {
        this._courses.desserts.push(newDessert);
      } else {
        return 'Dessert must be a string';
      }
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}, Total Price: $${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 5);
  menu.addDishToCourse('appetizers', 'Calamari Salad', 6);
  menu.addDishToCourse('appetizers', 'Cheese and Crackers', 7);
  menu.addDishToCourse('mains', 'Beef Stroganoff', 8);
  menu.addDishToCourse('mains', 'Lasagna', 9);
  menu.addDishToCourse('mains', 'Goulash', 10);
  menu.addDishToCourse('desserts', 'Apple Dumpling', 4);
  menu.addDishToCourse('desserts', 'Banana Split', 5);
  menu.addDishToCourse('desserts', 'Cinnamon Rolls', 6);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  