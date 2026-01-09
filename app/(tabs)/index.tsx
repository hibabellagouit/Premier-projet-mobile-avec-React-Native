import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import MainCard from "@/components/WelcomeScreen";
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <AppHeader />

      <View style={styles.content}>
        <MainCard />  {/*  */}
      </View>

      <AppFooter />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B9080',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
