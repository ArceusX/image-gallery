import CardNavbar from '../components/CardNavbar';
import CardList from '../components/CardList';

export default function Home({items}) {
  return (
    <>
      <CardNavbar items={items} />
      <CardList   items={items} />
    </>
  );
}
