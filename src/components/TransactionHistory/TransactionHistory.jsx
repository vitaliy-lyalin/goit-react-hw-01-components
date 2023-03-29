import PropTypes from 'prop-types';
import {
  Table,
  Head,
  Body,
  HeadRow,
  HeadCell,
  BodyRow,
  BodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyRow key={id}>
              <BodyCell>{type}</BodyCell>
              <BodyCell>{amount}</BodyCell>
              <BodyCell>{currency}</BodyCell>
            </BodyRow>
          );
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
