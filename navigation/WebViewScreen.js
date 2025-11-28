// Navegação para links externos (artigos)
import { WebView } from 'react-native-webview';

export default function WebViewScreen({ route }) {
  const { url } = route.params;
  return <WebView source={{ uri: url }}/>;
}
