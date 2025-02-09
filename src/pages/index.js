import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../assets/vite.svg";

const html = (strings, ...values) => strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");

export default html`
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello Vite!</h1>
        <div class="card">
            <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">Click on the Vite logo to learn more</p>
    </div>
`;
