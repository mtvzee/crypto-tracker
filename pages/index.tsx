import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../components/ModalWindow';
import Row from '../components/Row';
import { CoinData } from '../types';

type Props = {
  coinList: CoinData[];
};

const Home: NextPage<Props> = ({ coinList }) => {
  const [input, setInput] = useState('');
  // const [isOpen, setIsOpen] = useState(false);
  const filteredCoin = coinList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 lg:text-lg">
      <h1 className="my-8 text-3xl font-semibold lg:text-5xl">
        Crypto Tracker
      </h1>
      {/* 検索 */}
      <input
        type="text"
        placeholder="検索したい通貨を入力"
        className="block p-4 mb-8 outline-none bg-white/50 w-60 rounded-xl lg:w-96"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* コイン一覧 */}
      <ul className="p-2 border-b">
        <li className="grid grid-cols-4 font-bold h-14 place-items-center lg:grid-cols-6">
          <div className="w-24 col-start-2 lg:w-32">通貨名</div>
          <div>現在価格</div>
          <div className="text-center">変動率(24h)</div>
          <div className="hidden lg:block">安値(24h)</div>
          <div className="hidden lg:block">高値(24h)</div>
        </li>
        {filteredCoin.map((coin) => (
          <Row
            key={coin.id}
            coin={coin}
            // isOpen={isOpen}
            // setIsOpen={setIsOpen}
          />
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const coinList = await res.json();
  return {
    props: { coinList },
  };
};

export default Home;
