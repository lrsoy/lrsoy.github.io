// 有关于首页动画的处理
const DEFAULT_OPTIONS = reactive({
  canvasSelector: ".canvas",
  textSelector: ".puddle",
  letterClassName: "puddle__letter",
  dropsClassName: "combined-puddles",
  delayBetweenDrops: 95,
  dropTypes: 10,
  wordAngleRange: [-3, 3]
})


const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const injectSVGFilter = (canvasDom: HTMLInputElement) => {
  const filter =
    `<svg style="display:none;">
    <filter id="drops-filter" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
    </filter>
  </svg>`;
  canvasDom.insertAdjacentHTML("beforeend", filter)
}
const wrapLetters = (canvasChild: NodeListOf<HTMLElement>) => {
  if (!canvasChild) return;
  canvasChild?.forEach(f => {
    const letters = Array.from(f.innerText).map((letter) => {
      const dropType = getRandomInt(1, DEFAULT_OPTIONS.dropTypes);
      const className = `${DEFAULT_OPTIONS.letterClassName} ${DEFAULT_OPTIONS.letterClassName}--t-${dropType}`;
      return `<div class="${className}">${letter}</div>`;
    });
    const angle = getRandomInt(
      DEFAULT_OPTIONS.wordAngleRange[0],
      DEFAULT_OPTIONS.wordAngleRange[1]
    );
    f.style.cssText += `--r:${angle}deg`;
    f.innerHTML = letters.join("");
  })
}
const addDelayToEachLetter = () => {
  const letters = document.querySelectorAll(`.${DEFAULT_OPTIONS.letterClassName}`) as NodeListOf<HTMLElement>
  Array.from(letters, (f, index) => {
    const delay = index * DEFAULT_OPTIONS.delayBetweenDrops;
    f.style.cssText += `--delay:${delay}ms`;
  });
}
const createDrops = (canvasChild: NodeListOf<HTMLElement>, canvasDom: HTMLInputElement) => {
  const drops = document.createElement("div");
  drops.className = DEFAULT_OPTIONS.dropsClassName;
  Array.from(canvasChild, (f) =>
    drops.appendChild(f.cloneNode(true))
  );
  canvasDom.appendChild(drops);
}
const startAnimation = (canvasDom: HTMLInputElement) => {
  canvasDom.classList.add("canvas--animated")
}

export const Droppy = () => {
  const canvasDom = document.querySelector(DEFAULT_OPTIONS.canvasSelector) as HTMLInputElement
  const canvasChild = document.querySelectorAll(DEFAULT_OPTIONS.textSelector) as NodeListOf<HTMLElement>
  injectSVGFilter(canvasDom)
  wrapLetters(canvasChild)
  addDelayToEachLetter()
  createDrops(canvasChild, canvasDom)
  startAnimation(canvasDom)
}