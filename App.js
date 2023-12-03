import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Logo from "./components/icons/Logo";
import { Email } from './components/Email';

const Placeholder = require('./assets/images/hero-mobile.jpg')
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Image source={Placeholder}></Image>
      <View style={styles.subcontainer}>
          <Text style={[styles.title, {color: '#rgba(193,142,127,1)'}]} >WE'RE</Text>
          <Text style={[styles.title,{ marginBottom: 15 ,lineHeight: 42,marginTop: -1,fontWeight: 500}]}>COMMING SOON</Text>
          <Text style={styles.content}>Hello fellow shoppers! We're currently building our new
            fashion store. Add your email below to stay up-to-date with 
            announcements and our launch deals
          </Text>
        <Email />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(241,210,201,0.4)',
  },
  subcontainer: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    letterSpacing: 10,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '300',
  },
  content: {
    lineHeight: 23,
    textAlign: 'center',
    paddingHorizontal: 28,
    marginBottom: 30,
    fontWeight: '600',
    color: '#rgba(193,142,127,1)'
  },
  logo: {
    padding: 32,
    width:'100%',
    backgroundColor: '#fff',
  }
});
