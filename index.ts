import { LitElement, html, customElement, internalProperty } from 'lit-element'
import '../index.js'

/**
 * Stores events in a log.
 * Listens to events of type `log` and the `entry` attribute.
 */
@customElement('demo-log-for-me')
export default class extends LitElement {
  @internalProperty()
  private times = 0

  protected readonly render = () => html`
    <button @click=${() => this.dispatchEvent(new CustomEvent('log', {
      detail: `Click #${this.times}`,
      bubbles: true,
    }))}>
      Click on me!
    </button>
    <button @click=${() => this.dispatchEvent(new CustomEvent('log', {
      detail: Error('Oh no!'),
      bubbles: true,
    }))}>
      Don't click me
    </button>
    <br/>
    I've been clicked ${this.times} times.`
}
