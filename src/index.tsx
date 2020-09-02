import { NativeModules } from 'react-native';

type TxLiveType = {
  multiply(a: number, b: number): Promise<number>;
};

const { TxLive } = NativeModules;

export default TxLive as TxLiveType;
