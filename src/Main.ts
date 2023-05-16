import Combobox from './components/molecules/Combobox';
import { CheckStatus } from './types';

export default function Main() {
  const rootElement = document.createElement('div');
  function render() {
    rootElement.appendChild(Combobox({
      node: {
        id: 1,
        title: 'yasuo',
        checkStatus: CheckStatus.PARTIAL,
        children: [],
      },
      onClick: () => ({}),
    }));
  }

  render();
  return rootElement;
}
