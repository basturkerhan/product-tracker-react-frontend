import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useProvider } from "../../hooks/useProvider";
import { setSigner, setAddress, setAccount } from "../../store/slices/data";
import { setPTrackerContract } from "../../store/slices/contract";
import { setUserRole } from "../../store/slices/data";
import { batch, useDispatch } from "react-redux";
import { PTRACKER_ADDRESS } from "../../constants/addresses";
import { PTRACKER_ABI } from "../../constants/abi";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {SiBlockchaindotcom} from "react-icons/si";
import rolesEnum from "../../enums/roles";

const Login = () => {
  const dispatch = useDispatch();
  const provider = useProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.ethereum) return;
  }, []);

  const connectWithWallet = async () => {
    if (!provider) {
      return;
    }

    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => dispatch(setAccount(accounts[0])))
      .catch((err) => console.log(err));

    const signer = provider.getSigner();
    const pTrackerContract = new ethers.Contract(
      PTRACKER_ADDRESS,
      PTRACKER_ABI,
      signer
    );
    const role = await pTrackerContract.getRole();

    const address = await signer.getAddress();
    batch(() => {
      dispatch(setSigner(signer));
      dispatch(setAddress(address));
      dispatch(setPTrackerContract(pTrackerContract));
      dispatch(setUserRole(role));
    });

    const route = (role===rolesEnum.Owner) ? "/admin" : (role===rolesEnum.Producer) ? "/producer" : "/";
    console.log("aktar");
    await navigate(route);
  };

  return (
    <div id="login-page">
      <div id="login-form">
        <Button variant="light" className="login-button" onClick={connectWithWallet}>
            <span><SiBlockchaindotcom style={{marginRight: "0.5rem"}} /> </span>
            <span>Metamask ile giriş yap</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
