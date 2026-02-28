import { COUNTER_ANIMATION_CONFIG } from '../constants/whyChooseUs.constants';

interface AnimateNumberOptions {
  targetNumber: number;
  duration?: number;
  showPlusSign?: boolean;
}

/**
 * Animates a counter element with a rolling number effect
 * @param element - The container element containing [data-counter]
 * @param options - Animation configuration
 */
export function animateCounterNumber(
  element: HTMLElement,
  options: AnimateNumberOptions
): void {
  const {
    targetNumber,
    duration = COUNTER_ANIMATION_CONFIG.DURATION,
    showPlusSign = false,
  } = options;

  const numberElement = element.querySelector('[data-counter]') as HTMLElement;
  if (!numberElement) return;

  const digits = targetNumber.toString().split('');

  // Reset and setup container
  numberElement.innerHTML = '';
  numberElement.style.display = 'inline-flex';
  numberElement.style.gap = '0';
  numberElement.style.alignItems = 'baseline';

  // Add plus sign if needed (for numbers like 15+)
  if (showPlusSign) {
    const plusSign = document.createElement('span');
    plusSign.textContent = '+';
    plusSign.className = 'text-gray-400';
    plusSign.style.marginRight = '0.1em';
    numberElement.appendChild(plusSign);
  }

  // Create rolling animation for each digit
  digits.forEach((targetDigit, index) => {
    const digitContainer = createDigitContainer();
    const roller = createRoller(duration);
    const targetValue = parseInt(targetDigit);

    // Create number sequence (0 to target)
    for (let i = 0; i <= targetValue; i++) {
      const numDiv = createNumberElement(i.toString());
      roller.appendChild(numDiv);
    }

    digitContainer.appendChild(roller);
    numberElement.appendChild(digitContainer);

    // Trigger animation with stagger
    const delay =
      COUNTER_ANIMATION_CONFIG.INITIAL_DELAY +
      index * COUNTER_ANIMATION_CONFIG.STAGGER_DELAY;

    setTimeout(() => {
      roller.style.transform = `translateY(-${targetValue}em)`;
    }, delay);
  });
}

/**
 * Creates a container for a single digit
 */
function createDigitContainer(): HTMLDivElement {
  const container = document.createElement('div');
  container.style.overflow = 'hidden';
  container.style.height = '1em';
  container.style.position = 'relative';
  container.style.display = 'inline-block';
  return container;
}

/**
 * Creates the rolling element that animates
 */
function createRoller(duration: number): HTMLDivElement {
  const roller = document.createElement('div');
  roller.style.transition = `transform ${duration}ms ${COUNTER_ANIMATION_CONFIG.EASING}`;
  roller.style.position = 'relative';
  return roller;
}

/**
 * Creates a number element for the roller
 */
function createNumberElement(text: string): HTMLDivElement {
  const numDiv = document.createElement('div');
  numDiv.textContent = text;
  numDiv.style.height = '1em';
  numDiv.style.lineHeight = '1em';
  return numDiv;
}
