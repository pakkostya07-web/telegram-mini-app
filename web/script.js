const tg = window.Telegram.WebApp;

tg.ready();

const user = tg.initDataUnsafe.user;
document.getElementById("user").innerText =
    `Привет, ${user.first_name}`;

function send() {
    tg.sendData("hello from mini app");
}
