import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CoinData } from '../types';

type Props = {
  coinList: CoinData[];
};

const Home: NextPage<Props> = ({ coinList }) => {
  const [input, setInput] = useState('');
  const filteredCoin = coinList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <h1>Crypto Tracker</h1>
      {/* トレンド */}
      <div></div>
      {/* 検索 */}
      <div>
        <input
          type="text"
          placeholder="検索したい通貨を入力"
          className="block p-2 border outline-none w-60"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {/* コイン一覧 */}
      <div>
        <ul>
          {filteredCoin.map((coin) => (
            <li key={coin.id}>
              <Link href="#">
                <a className="flex items-center p-2 border-t">
                  <div className="relative w-8 h-8 mr-3">
                    <Image
                      src={coin.image}
                      layout="fill"
                      objectFit="cover"
                      alt={coin.name}
                    />
                  </div>
                  <div className="w-20">
                    <div>{coin.name}</div>
                    <div className="uppercase">{coin.symbol}</div>
                  </div>
                  <div className="w-24 text-right ">
                    ¥{coin.current_price.toLocaleString()}
                  </div>
                  {coin.price_change_percentage_24h > 0 ? (
                    <div className="w-20 text-right text-emerald-500">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  ) : (
                    <div className="w-20 text-right text-red-500">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  )}
                  <div className="w-40 text-right ">
                    <span className="">¥{coin.low_24h.toLocaleString()}</span>/
                    <span className="">¥{coin.high_24h.toLocaleString()}</span>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const coinList = await res.json();
  return {
    props: { coinList },
  };
};

export default Home;
