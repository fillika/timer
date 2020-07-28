import Dom from './Dom';

/**
 * Класс Timer подразумевает сущность для работы с событиями таймера - например его запуск, остановку и т.д.
 */
class Timer extends Dom {
  count: number;
  millisec: number;
  minutes: number;
  hours: number;
  timeoutId: ReturnType<typeof setTimeout> | null;
  flag: boolean;

  constructor(selector: string) {
    super(selector);
    this.count = 0;
    this.minutes = 0;
    this.hours = 0;
    this.millisec = 100;
    this.timeoutId = null;
    this.flag = false;

    this.firstInit();
  }

  public print(str: string) {
    if (this.timerContainer) {
      this.timerContainer.textContent = str;
    }
  }

  private firstInit() {
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);

    this.startBtn?.addEventListener('click', this.start);
    this.stopBtn?.addEventListener('click', this.stop);
    this.resetBtn?.addEventListener('click', this.reset);
  }

  public start(): void {
    if (!this.flag) {
      this.flag = true;
      this.timeoutId = setInterval(() => {
        this.count += this.millisec;

        if (this.count >= 60000) {
          this.count = 0;
          this.minutes += 1;
        }

        if (this.minutes >= 60) {
          this.minutes += 0;
          this.hours += 1;
        }

        const seconds = (this.count / 1000) < 10 ? `0${(this.count / 1000).toFixed(1)}` : (this.count / 1000).toFixed(1)
        const minutes = this.minutes <= 9 ? `0${ this.minutes }` : this.minutes;
        const hours = this.hours <= 9 ? `0${ this.hours }` : this.hours;

        const str = `${ hours }:${ minutes }:${seconds}`; // Чтобы привести к строке + 1 знак после запятой

        this.print(str);
      }, this.millisec);
    }
  }

  public stop(): void {
    this.flag = false;
    clearTimeout(this.timeoutId);
  }

  public reset(): void {
    this.count = 0;
    this.print('00:00:00.0');
  }
}

const timer = new Timer('timer');
