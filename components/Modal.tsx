import { Dialog } from '@headlessui/react';
import { type } from 'os';
import { Dispatch, SetStateAction } from 'react';
import { CoinData } from '../types';

type Props = {
  coin: CoinData;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ coin, isOpen, setIsOpen }: Props) => {
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/30" />
        <Dialog.Panel>
          <h1>{coin.name}</h1>
          <button onClick={() => setIsOpen(false)}>閉じる</button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Modal;
