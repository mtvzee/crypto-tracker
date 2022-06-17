import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { CoinData } from '../types';

type Props = {
  coin: CoinData;
  isOpen: boolean;
  onClose: () => void;
  // setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalWindow = ({ coin, isOpen, onClose }: Props) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            You can scroll the content behind the modal
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // <Transition show={isOpen} as={Fragment}>
    //   <Dialog onClose={() => setIsOpen(false)}>
    //     <Transition.Child
    //       as={Fragment}
    //       enter="ease-out duration-300"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="ease-in duration-200"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <div className="fixed inset-0 bg-black/30" />
    //     </Transition.Child>
    //     <Transition.Child
    //       as={Fragment}
    //       enter="ease-out duration-300"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="ease-in duration-200"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       <div className="fixed inset-0 flex items-center justify-center">
    //         <Dialog.Panel className="flex flex-col items-center justify-center w-4/5 max-w-lg p-4 space-y-4 bg-white rounded-xl h-3/5">
    //           <div className="relative w-16 h-16">
    //             <Image
    //               src={coin.image}
    //               alt={coin.name}
    //               objectFit="cover"
    //               layout="fill"
    //             />
    //           </div>
    //           <h1>{coin.name}</h1>
    //           <div>現在価格：{coin.current_price.toLocaleString()}円</div>
    //           <div>24時間の変動額：{coin.price_change_24h}円</div>
    //           <div>24時間の変動率：{coin.price_change_percentage_24h}%</div>
    //           <div>安値：{coin.low_24h.toFixed(3)}%</div>
    //           <div>高値：{coin.high_24h.toFixed(3)}%</div>

    //           <button onClick={() => setIsOpen(false)}>閉じる</button>
    //         </Dialog.Panel>
    //       </div>
    //     </Transition.Child>
    //   </Dialog>
    // </Transition>
  );
};

export default Modal;
