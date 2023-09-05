import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <Appbar.Header mode = 'small'>
        <Appbar.Content title="Link" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}


