import React from 'react';
import styled from 'styled-components';
import BodyWrapper from '../components/BodyWrapper';
import { authUser } from '../actions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableWrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex: 0 0 auto;
  padding: 24px;
  flex-wrap: nowrap;
  overflow-x: auto;

  > * {
    flex: 0 0 auto;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 84px 0 0;
  padding: 0;

  li {
    padding: 33px 33px 0 0;
    text-align: right;
  }
`;

const Table = styled.table`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(50, 50, 50, 0.2);
  text-align: center;

  tr {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    padding: 0 24px;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
  }

  tbody tr:last-child {
    border: none;
  }

  tbody tr:hover {
    background-color: #f8f8f8;
  }

  th,
  td {
    width: 240px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    text-align: center;
  }

  th {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    font-size: 19px;

    span:last-child {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 300;
      color: #888;
    }
  }

  thead {
    background-color: #f1f1f1;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;

    tr {
      border-bottom: 1px solid #dedede;
    }
  }

  tfoot {
    background-color: #f1f1f1;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 510px) {
    tr {
      padding: 0 16px;
    }
    th,
    td {
      padding: 12px 0;
    }
  }
`;

const PricingPage = () => (
  <BodyWrapper>
    <Wrapper>
      <TableWrapper>
        <List>
          <li>Redirections</li>
          <li>Custom domains</li>
          <li>Branded links</li>
          <li>Detailed stats per month</li>
          <li>API calls per day</li>
          <li>Google analytics integration</li>
          <li>Custom URLs / passwords</li>
          <li>404 redirect</li>
          <li>HTTPS links</li>
          <li>Teammates</li>
          <li>Live chat & support</li>
        </List>
        <Table>
          <thead>
            <tr>
              <th>
                <span>Free</span>
                <span>$0 / mo</span>
              </th>
              <th>
                <span>Basic</span>
                <span>$14.99 / mo</span>
              </th>
              <th>
                <span>Premium</span>
                <span>$99 / mo</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>1</td>
              <td>5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>500</td>
              <td>10,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>1,0000</td>
              <td>100,000</td>
              <td>1,000,000</td>
            </tr>
            <tr>
              <td>500</td>
              <td>1,0000</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>-</td>
              <td>3</td>
              <td>10</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  </BodyWrapper>
);

PricingPage.getInitialProps = ({ req, reduxStore }) => {
  const token = req && req.cookies && req.cookies.token;
  if (token && reduxStore) reduxStore.dispatch(authUser(token));
  return {};
};

export default PricingPage;
