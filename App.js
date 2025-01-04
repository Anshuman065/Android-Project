import { NativeBaseProvider } from 'native-base';
import GetBMI from './src/index';

export default function App() {
  return (
    <NativeBaseProvider>
      <GetBMI />
    </NativeBaseProvider>
  );
}
