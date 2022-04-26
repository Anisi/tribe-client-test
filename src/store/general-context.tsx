import React, { createContext, useEffect, useState } from "react";
import { Network } from "@tribeplatform/gql-client/types";
import { useNetwork } from "@tribeplatform/react-sdk/hooks";

type setNetworkType = (network: Network) => void;

interface GeneralContextInterface {
  network: Network | null;
  setNetwork: setNetworkType;
}
const GeneralContext = createContext<GeneralContextInterface>({
  network: null,
  setNetwork: (network: Network) => {},
});

const retrieveStoredGeneralData = () => {
  let storedNetworkRaw = localStorage.getItem("network");

  let storedNetwork: Network | null = null;
  if (storedNetworkRaw) {
    try {
      storedNetwork = storedNetworkRaw ? JSON.parse(storedNetworkRaw) : null;
    } catch (e) {
      console.log(e);
    }
  }

  return {
    network: storedNetwork,
  };
};

export const GeneralContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  // const { data: networkInfo } = useNetwork();
  let generalData = retrieveStoredGeneralData();
  const [network, setNetwork] = useState<Network | null>(generalData.network);

  // useEffect(() => {
  //   if (networkInfo) {
  //     setNetwork(networkInfo);
  //   }
  // }, [networkInfo]);

  const contextValue: GeneralContextInterface = {
    network,
    setNetwork,
  };
  return (
    <GeneralContext.Provider value={contextValue}>
      <>{children}</>
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
