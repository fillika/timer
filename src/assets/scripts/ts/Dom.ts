/**
 * Класс DOM определяет в себе метод init - для инициализации и проверки и
 * метод рендер - для рендера элементов в DOM.
 */
class Dom implements ITimer {
  timer: HTMLElement | null;

  static buttons = [
    {
      name: 'Start',
      className: ['timer-button', 'timer-button--start'],
    },
    {
      name: 'Stop',
      className: ['timer-button', 'timer-button--stop'],
    },
    {
      name: 'Reset',
      className: ['timer-button', 'timer-button--reset'],
    },
  ];

  constructor(selector: string) {
    this.timer = document.getElementById(selector);
    this.init();
  }

  private init(): void {
    if (this.timer) {
      this.render();
    } else if (this.timer === null) {
      console.error('Wrong selector. Please, check the ID');
    } else {
      return;
    }
  }

  private render() {
    this.createElements();
  }

  /**
   * Метод, который объединяет создание всех элементов и вставляет их в правлиьном порядке
   */
  private createElements(): void {
    const timerContainer = Dom.createEl('div');
    timerContainer.classList.add('timer__container');

    const timeBlock = Dom.createTimerBlock();
    const buttonsBlock = Dom.createButtonsBLock();

    timerContainer.appendChild(timeBlock);
    timerContainer.appendChild(buttonsBlock);

    this.timer?.appendChild(timerContainer);
  }

  /**
   * Метод создания контейнера с секундами и надписью sec
   */
  private static createTimerBlock(): HTMLElement {
    const timeBlock = Dom.createEl('div');
    const timeContainer = Dom.createEl('span');
    const secContainer = Dom.createEl('span');
    const br = Dom.createEl('br');

    timeContainer.id = 'timer-time';
    timeContainer.textContent = '0.0';
    secContainer.textContent = 'sec';

    timeBlock.classList.add('timer__time-block');
    timeBlock.appendChild(timeContainer);
    timeBlock.appendChild(br);
    timeBlock.appendChild(secContainer);

    return timeBlock;
  }

  /**
   * Метод, который создает контейнер с кнопками
   */
  private static createButtonsBLock(): HTMLElement {
    const buttonContainer = Dom.createEl('div');
    buttonContainer.classList.add('timer__button-box');

    Dom.buttons.forEach((btn: IButton) => {
      const { name, className } = btn;
      const button = Dom.createEl('button');

      button.textContent = name;
      className.forEach((clsName: string) => button.classList.add(clsName));
      buttonContainer.appendChild(button);
    });

    return buttonContainer;
  }

  /**
   * Метод, который сокращает синтаксис для создания DOM-елемента
   * @param {string} name - имя DOM-элемента
   */
  private static createEl(name: string): HTMLElement {
    return document.createElement(name);
  }
}

export default Dom;
