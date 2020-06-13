const mainScreen = document.querySelector('.canvas');
const secondScreen = document.querySelector('.game__box');

class Food {
     positionX = 10;
     positionY = 5;

     createFoodContainer() {
          this.food = document.createElement('div');
          secondScreen.appendChild(this.food);
     }

     randomPosition() {
          this.positionY = Math.random() * 80;
          this.food.style.bottom = this.positionY + 2 +"%";
          this.positionY;
     }

     runToLeft() {
          setInterval(() => {
               if (this.positionX >= 95) {
                    this.food.remove();
               }
               if (this.positionX <= 100) {
                    this.food.style.left = this.positionX + "%";
                    this.positionX += .4;
               }
          }, 50);
     }



     foodsTypeRandom() {
          const badFood = [
               'url(./game_image/burger.svg)',
               'url(./game_image/pizza.svg)',
               'url(./game_image/frytki.svg)',
          ]
          const goodFood = [
               'url(./game_image/jablko.svg)',
               'url(./game_image/marchewka.svg)',
               'url(./game_image/brokul.svg)',
          ]
          let choiceFood = Math.floor(Math.random() * badFood.length);
          let number = Math.random() * 100;

          if (number > 50 && number < 80) {
               this.food.classList.add('game__box--badfood');
               this.food.style.backgroundImage = badFood[choiceFood];
          } else if (number > 20 && number < 50){
               this.food.classList.add('game__box--goodfood');
               this.food.style.backgroundImage = goodFood[choiceFood];
          } else {
               this.food.style.backgroundImage = '';
          };
     }

     initializeFood() {
          this.createFoodContainer();
          this.foodsTypeRandom();
          this.randomPosition();
          this.runToLeft();
     }
}
class Human {
     positionX = 0;
     positionY = 0;
     width = 51;
     height = 120;

     createHumanElement() {
          this.human = document.createElement('div');
          this.human.classList.add('human');
          secondScreen.appendChild(this.human);
     }
     humanMove() {
          let sreenTopPosition = secondScreen.offsetTop;

          this.positionY = event.clientY - sreenTopPosition - this.width / 2;

          if (this.positionY >= 400) {
               this.positionY = 400;
          }
          if (this.positionY <= 1 ) {
               this.positionY = 1;
          }
          this.human.style.top = this.positionY + 'px';
     }
     humanPositionY() {
          this.human.addEventListener('mousemove', () => this.humanMove());
     }
}

const randomFoodCreate = () => {
     setInterval(() => {
          let food = new Food();
          food.initializeFood();
     }, 1000);
}
const human = new Human();
human.createHumanElement();
human.humanPositionY();
randomFoodCreate();





