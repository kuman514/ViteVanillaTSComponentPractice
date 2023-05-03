import Tmp from '^/tmp';

(() => {
  const mainRoot = document.querySelector('#root');
  if (mainRoot !== null) {
    mainRoot.innerHTML = Tmp();
  }
})();
