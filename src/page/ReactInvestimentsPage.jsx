import Header from '../components/Header';
import Main from '../components/Main';
import { allInvestments } from '../data/investments';
import Investments from '../components/Investments';
import Investment from '../components/Investment';

export default function ReactInvestimentsPage() {
  return (
    <div>
      <Header>React Investments</Header>

      <Main>
        <Investments>
          {allInvestments.map(investment => {
            return <Investment key={investment.id}>{investment}</Investment>;
          })}
        </Investments>
      </Main>
    </div>
  );
}
