const pad = (v) => {
    const s = v.toString();
    return s.length < 2 ? '0' + s : s;
}

const setClock = (htmltarget) => {
    const date = new Date();
    const formatedTime = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    const formattedDate = `${pad(date.getDate())}/${pad(date.getMonth()+1)}/${pad(date.getFullYear())}`;
    htmltarget.textContent = `${formattedDate} ${formatedTime}`;
}

const setClockHandler = () => {
    const clock = document.querySelector('#topbar-clock');
    const loop = () => {
        setClock(clock);
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}


const main = () => {
    setClockHandler();
}
main();