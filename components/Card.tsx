import {
  GridItem,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

type Props = {
  title: string;
  data: number;
  color?: string;
  before?: string;
  after?: string;
};

const Card = ({ title, data, color, before, after }: Props) => {
  return (
    <GridItem p="2" boxShadow="md" borderRadius="lg">
      <Stat w="fit-content" mx="auto">
        <StatLabel>{title.toLocaleString()}</StatLabel>
        <StatNumber color={color} fontSize={{ base: 'lg', md: 'xl' }}>
          {before}
          {data.toLocaleString()}
          {after}
        </StatNumber>
      </Stat>
    </GridItem>
  );
};

export default Card;
