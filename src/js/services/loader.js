export class Loader {
  constructor({
                size = 200,
                color = '#ffffff',
                timeout = 1000,
              } = {}) {
    this._defaultSize = size;
    this._defaultColor = color;
    this._defaultTimeout = timeout;
    this._instances = new Map();
  }

  _resolveTarget(target) {
    if (typeof target === 'string') {
      return document.getElementById(target);
    }
    return target;
  }

  async show(target, { size, color, timeout } = {}) {
    const el = this._resolveTarget(target);
    if (!el) throw new Error('Target not found');
    if (this._instances.has(el)) return;

    const appliedSize = size ?? this._defaultSize;
    const appliedColor = color ?? this._defaultColor;
    const appliedTimeout = timeout ?? this._defaultTimeout;

    const style = getComputedStyle(el);
    if (style.position === 'static') {
      el.style.position = 'relative';
    }

    const wrapper = document.createElement('div');
    wrapper.classList = 'loader-wrapper';
    wrapper.style.cssText = `
      width: ${appliedSize}px;
      height: ${appliedSize}px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const spinner = document.createElement('div');
    spinner.style.cssText = `
      width: ${appliedSize * 0.4}px;
      height: ${appliedSize * 0.4}px;
      border: 6px solid rgba(255,255,255,0.3);
      border-top-color: ${appliedColor};
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    `;

    wrapper.appendChild(spinner);
    el.appendChild(wrapper);

    this._instances.set(el, {
      wrapper,
      timeout: appliedTimeout,
    });

    if (appliedTimeout) {
      await new Promise(res => setTimeout(res, appliedTimeout));
    }
  }

  async hide(target) {
    const el = this._resolveTarget(target);
    if (!el || !this._instances.has(el)) return;

    const { wrapper } = this._instances.get(el);

    wrapper.remove();
    this._instances.delete(el);
  }
}

const style = document.createElement('style');
style.textContent = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
