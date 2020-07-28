interface ITimer {
  timer: HTMLElement | null;
  timerContainer: HTMLElement | null;
  startBtn: HTMLElement | null;
  stopBtn: HTMLElement | null;
  resetBtn: HTMLElement | null;
}

interface IButton {
  name: string,
  className: string[],
}
