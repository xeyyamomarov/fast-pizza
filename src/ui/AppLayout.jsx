import Header from './Header';
import Loader from '../ui/Loader';
import CartOverView from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
};

export default AppLayout;
