import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { CoinData } from '../types';
import Modal from './Modal';

type Props = {
  coin: CoinData;
  // isOpen: boolean;
  // setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Row = ({ coin }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="grid grid-cols-4 gap-2 p-2 transition duration-300 border-t cursor-pointer lg:grid-cols-6 hover:bg-orange-300 hover:scale-105 place-items-center"
      onClick={() => setIsOpen(true)}
    >
      <div className="relative h-9 w-9 lg:h-12 lg:w-12">
        <Image
          src={coin.image}
          layout="fill"
          objectFit="cover"
          alt={coin.name}
        />
      </div>
      <div className="w-24 lg:w-32">
        <div>{coin.name}</div>
        <div className="uppercase">{coin.symbol}</div>
      </div>
      <div className="w-24 text-right ">
        ¥{coin.current_price.toLocaleString()}
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="w-20 text-right text-emerald-600">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
      ) : (
        <div className="w-20 text-right text-red-500">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
      )}
      <div className="hidden text-right lg:block w-28">
        ¥{coin.low_24h.toLocaleString()}
      </div>{' '}
      <div className="hidden text-right lg:block w-28">
        ¥{coin.high_24h.toLocaleString()}
      </div>
      {isOpen && <Modal coin={coin} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </li>
  );
};

export default Row;
