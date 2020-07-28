interface IDom {
  timer: HTMLElement | null;
  timerContainer: HTMLElement | null;
  startBtn: HTMLElement | null;
  stopBtn: HTMLElement | null;
  resetBtn: HTMLElement | null;
}

interface ITimer {
  count: number;
  millisec: number;
  minutes: number;
  hours: number;
  timeoutId: ReturnType<typeof setTimeout> | null;
  flag: boolean;
}



interface IButton {
  name: string,
  className: string[],
}
