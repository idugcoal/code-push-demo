import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import codePush from 'react-native-code-push';
import {leo, brain, bocce} from './src/data';
import CodePush from 'react-native-code-push';
class App extends Component {
  componentWillMount() {
    CodePush.disallowRestart();
  }
  componentDidMount() {
    codePush.allowRestart();
  }
  codePushDownloadDidProgress(progress) {
    console.log(
      progress.receivedBytes + ' of ' + progress.totalBytes + ' received.',
    );
  }
  render() {
    const current = leo;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{current.title}</Text>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={current.image}
                  resizeMode={'stretch'}
                />
              </View>
              <Text style={styles.subtitle}>{current.subtitle}</Text>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'whitesmoke',
  },
  body: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    height: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
    color: 'navy',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '400',
    color: 'dodgerblue',
  },
});

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
};

App = codePush(codePushOptions)(App);
export default App;
