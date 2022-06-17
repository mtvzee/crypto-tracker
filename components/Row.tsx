import {
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { CoinData } from '../types';
import ModalWindow from './ModalWindow';
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
import Card from './Card';

type Props = {
  coin: CoinData;
  // isOpen: boolean;
  // setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Row = ({ coin }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <li
      className="grid grid-cols-4 gap-2 p-2 transition duration-300 border-t cursor-pointer lg:grid-cols-6 hover:bg-orange-300 hover:scale-105 place-items-center"
      onClick={onOpen}
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
      {/* {isOpen && <ModalWindow coin={coin} isOpen={isOpen} onClose={onClose} />} */}
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        scrollBehavior="inside"
        size={{ base: 'sm', md: 'lg', lg: 'xl' }}
      >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <Center>
            <ModalHeader>
              <Flex>
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width="40"
                  height="40"
                />
                <Heading>{coin.name}</Heading>
              </Flex>
            </ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
              gap="4"
            >
              <Card title="現在の価格" data={coin.current_price} before="¥" />
              <Card title="時価総額" data={coin.market_cap} before="¥" />
              <Card title="安値" data={coin.low_24h} before="¥" />
              <Card title="高値" data={coin.high_24h} before="¥" />
              <Card
                title="24時間の変動率"
                data={coin.price_change_percentage_24h}
                color={coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}
                after="%"
              />
              <Card
                title="変動額"
                data={coin.price_change_24h}
                color={coin.price_change_24h >= 0 ? 'green' : 'red'}
                before="¥"
              />
            </Grid>
          </ModalBody>

          <Center>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                閉じる
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </li>
  );
};

export default Row;
