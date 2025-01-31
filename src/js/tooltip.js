export default class Tooltip {
  constructor() {
    this.tooltips = [];
  }

  showTooltip(message, element) {
    const tooltipElement = document.createElement('DIV');

    tooltipElement.classList.add('tooltip');
    const tooltipTitle = document.createElement('h2');
    tooltipTitle.classList.add('tooitip-title');
    tooltipTitle.textContent = 'Popover title';
    const tooltipText = document.createElement('p');
    tooltipText.classList.add('tooitip-text');
    tooltipText.textContent = message;
    tooltipElement.appendChild(tooltipTitle);
    tooltipElement.appendChild(tooltipText);

    const id = performance.now();

    this.tooltips.push({
      id,
      element: tooltipElement,
    });
    element.parentElement.prepend(tooltipElement);

    return id;
  }

  removeTooltip(id) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip == null) {
      return;
    }
    tooltip.remove();
    this.tooltips = this.tooltips.filter((t) => t.id !== id);
  }
}
