// Navegação para links externos (artigos)
import { WebView } from 'react-native-webview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type WebViewScreenProps = NativeStackScreenProps<RootStackParamList, 'WebViewScreen'>;

export default function WebViewScreen({ route }: WebViewScreenProps) {
  const { url } = route.params;
  return <WebView source={{ uri: url }} />;
}
