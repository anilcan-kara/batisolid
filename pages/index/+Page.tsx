import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <>
      <h1 class="font-bold text-3xl pb-4">My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-accent">
          That's never been done in the history of the Jedi. It's insulting!
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-error">It's never happened before.</div>
      </div>
    </>
  );
}
