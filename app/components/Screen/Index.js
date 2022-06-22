import React, { PureComponent } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";

type Props = {
    header?: *,
    children?: *,
    containerStyle?: *,
    contentStyle?: *,
    showHeader: Boolean,
    showBack?: Boolean
};

export class Index extends React.Component<Props> {
    constructor(props) {
        super(props);
    }
    
  render() {
    const {
        header,
        children,
        containerStyle,
        contentStyle,
        showHeader,
        showBack,
    } = this.props;

    return (
    <SafeAreaProvider>
        <SafeAreaView style={[styles.container, containerStyle]}>
            <StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
            {showHeader ? <Header showBack={showBack} {...this.props} /> : null}
            <View style={[styles.content, contentStyle]}>{children}</View>
        </SafeAreaView>
    </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      backgroundColor: '#E4FCF4',
      justifyContent: 'flex-start'
    }
  });

export default Index