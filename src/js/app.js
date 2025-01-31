import Tooltip from './tooltip';

const button = document.querySelector('button');
const tooltipFactory = new Tooltip();
const tooltipMessage = "And here's some amazing content. It's very engaging. Right?";

const actualMessages = [];

const snowTooltip = (message, el) => {
  actualMessages.push({
    name: el.type,
    id: tooltipFactory.showTooltip(message, el),
  });
};

const elementOnBlur = (e) => {
  const currentErrorMessage = actualMessages.find((item) => item.name === e.type);

  if (currentErrorMessage) {
    tooltipFactory.removeTooltip(currentErrorMessage.id);
  }

  e.removeEventListener('blur', elementOnBlur);
};

button.addEventListener('mouseenter', () => snowTooltip(tooltipMessage, button));
button.addEventListener('mouseleave', () => elementOnBlur(button));
