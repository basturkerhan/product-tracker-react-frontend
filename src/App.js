import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { ethers } from "ethers";
import { PTRACKER_ADDRESS } from "./constants/addresses";
import { PTRACKER_ABI } from "./constants/abi";
import { batch, useDispatch } from "react-redux";
import { setProvider } from "./store/slices/data";
import { setPTrackerContract } from "./store/slices/contract";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import ProducerPrivateRoute from "./components/ProducerPrivateRoute";
import Login from "./components/login";
import AdminLanding from "./components/admin/pages/Landing";
import ProducerLanding from "./components/producer/pages/Landing";
import CreateProducerFirm from "./components/admin/pages/CreateProducerFirm";
import CreateShipperFirm from "./components/admin/pages/CreateShipperFirm";
import CreateProduct from "./components/producer/pages/CreateProduct";
import ProductDetails from "./components/user/productDetails/ProductDetails";
import SearchProduct from "./components/user/SearchProduct";
import AddSubProduct from "./components/producer/pages/AddSubProduct";
import { ListProducts } from "./components/producer/pages/ListProducts";
import { PendingVerify } from "./components/producer/pages/PendingVerify";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();

  const getProvider = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Metamask yüklü değil!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const productTrackerContract = new ethers.Contract(
      PTRACKER_ADDRESS,
      PTRACKER_ABI,
      provider
    );
    batch(() => {
      dispatch(setProvider(provider));
      dispatch(setPTrackerContract(productTrackerContract));
    });
  };

  useEffect(() => {
    getProvider();
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin">
            <Route path="" element={<AdminLanding />} />
            <Route path="create/producer" element={<CreateProducerFirm />} />
            <Route path="create/shipper" element={<CreateShipperFirm />} />
            <Route path="*" element={<AdminLanding />} />
          </Route>
        </Route>
        
        <Route element={<ProducerPrivateRoute />}>
          <Route path="/producer">
          <Route path="" element={<ProducerLanding />} />
          <Route path="pending-verify" element={<PendingVerify />} />
          <Route path="create/product" element={<CreateProduct />} />
          <Route path="add-sub-product" element={<AddSubProduct />} />
          <Route path="list/products" element={<ListProducts />} />
            <Route path="*" element={<ProducerLanding />} />
          </Route>
        </Route>

        <Route path="/" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Fragment>
  );
}

export default App;
