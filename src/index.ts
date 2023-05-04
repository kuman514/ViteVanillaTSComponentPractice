import Main from '^/Main';

(() => {
  const mainRoot = document.querySelector('#root');
  if (mainRoot !== null) {
    mainRoot.appendChild(Main());
  }
})();
