import Dom from './Dom';

/**
 * Класс Timer подразумевает сущность для работы с событиями таймера - например его запуск, остановку и т.д.
 */
class Timer extends Dom implements ITimer {
  count: number;
  millisec: number;
  minutes: number;
  hours: number;
  timeoutId: typeTimer | null;
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

  /**
   * Метод запускает все события таймера
   */
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
          this.plusMinute();
        }

        if (this.minutes >= 60) {
          this.plusHour();
        }

        const str = this.getResult(); // Чтобы привести к строке + 1 знак после запятой

        this.print(str);

      }, this.millisec);
    }
  }

  public stop(): void {
    this.flag = false;
    clearTimeout(this.timeoutId as typeTimer);
  }

  public reset(): void {
    this.count = 0;
    this.print('00:00:00.0');
  }

  /**
   * Метод обнуляет секунды и прибавляет одну минуту
   */
  private plusMinute(): void {
    this.count = 0;
    this.minutes += 1;
  }

  /**
   * Метод обнуляет минуты и прибавляет один час
   */
  private plusHour(): void {
    this.minutes += 0;
    this.hours += 1;
  }

  /**
   * Метод формирует строку, которую мы показываем пользователю.
   * Внутри тернарный оператор сравнивает 3 значения и выдает строку
   * Которую мы печатаем.
   */
  private getResult(): string {
    const currentTime = this.count / 1000;
    const seconds = currentTime < 10 ? `0${ currentTime.toFixed(1) }` : currentTime.toFixed(1);
    const minutes = this.minutes <= 9 ? `0${ this.minutes }` : this.minutes;
    const hours = this.hours <= 9 ? `0${ this.hours }` : this.hours;

    return `${ hours }:${ minutes }:${ seconds }`; // Чтобы привести к строке + 1 знак после запятой
  }
}

const timer = new Timer('timer');
