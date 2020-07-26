class Timer {
  timer: HTMLElement | null;

  constructor(selector: string) {
    this.timer = document.getElementById(selector);

    this.init();
  }

  private init() {
    if (this.timer) {
      Timer.render();
    } else if (this.timer === null) {
      console.error('Wrong selector. Please, check the ID');
    } else {
      return;
    }
  }

  private static render() {
    console.log('Hello, it\'s Timer');
  }
}

const timer = new Timer('timer');
