import {
  useFunctionComponentHooks,
} from '^/hooks/useFunctionComponentHooks';
import Checkbox, { CheckStatus } from './components/atoms/Checkbox';

interface CheckboxChain {
  main: CheckStatus;
  sub: CheckStatus[];
}

export default function Main() {
  const rootElement = document.createElement('div');
  function render() {
    const { main, sub } = checkStatus();

    rootElement.appendChild(Checkbox({
      checkStatus: main,
      onClick: handleOnClickMainCheckbox,
    }));

    for (let i = 0; i < sub.length; i++) {
      rootElement.appendChild(Checkbox({
        checkStatus: sub[i],
        onClick: () => handleOnClickSubCheckbox(i),
      }));
    }
  }

  const { useState } = useFunctionComponentHooks({ rootElement, render });

  const [checkStatus, setCheckStatus] = useState<CheckboxChain>({
    main: CheckStatus.NONE,
    sub: [CheckStatus.NONE, CheckStatus.NONE, CheckStatus.NONE],
  });

  function handleOnClickMainCheckbox() {
    const { main, sub } = checkStatus();

    if (main === CheckStatus.FULL) {
      setCheckStatus({
        main: CheckStatus.NONE,
        sub: sub.map(() => CheckStatus.NONE),
      });
    } else {
      setCheckStatus({
        main: CheckStatus.FULL,
        sub: sub.map(() => CheckStatus.FULL),
      });
    }
  }


  function handleOnClickSubCheckbox(i: number) {
    const { sub } = checkStatus();
    const newSub = Array.from(sub);

    if (newSub[i] === CheckStatus.FULL) {
      newSub[i] = CheckStatus.NONE;
    } else {
      newSub[i] = CheckStatus.FULL;
    }

    const isFull: boolean = newSub.every(cur => cur === CheckStatus.FULL);
    const isNone: boolean = newSub.every(cur => cur === CheckStatus.NONE);

    const newMain = isFull ? CheckStatus.FULL : (isNone ? CheckStatus.NONE : CheckStatus.PARTIAL);

    setCheckStatus({
      main: newMain,
      sub: newSub,
    });
  }

  render();
  return rootElement;
}
