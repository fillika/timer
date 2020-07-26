import Dom from './Dom';

/**
 * Класс Timer подразумевает сущность для работы с событиями таймера - например его запуск, остановку и т.д.
 */
class Timer extends Dom {
  constructor(selector: string) {
    super(selector);
  }
}

const timer = new Timer('timer');
