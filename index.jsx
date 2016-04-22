//require("./node_modules/bootstrap/dist/css/bootstrap.min.css")

import React, {
	AppRegistry,
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import AnimationTest from './src/components/AnimationTest';
import Portfolio from './src/components/Portfolio';

class App extends Component {

	render() {
		const boxes = [];
		for (let i = 0; i < 200; i++) {
			boxes.push(<AnimationTest />);
		}
		return <Portfolio />
		return (
			<View style={styles.wrapper}>
				<Image style={styles.image} source={{uri: 'http://facebook.github.io/react-native/img/opengraph.png'}} />
				<Text>You're now using react-native-web!</Text>
				{false && boxes}
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		alignSelf: 'center',
		width: 100,
		borderRadius: 12,
		marginBottom: 20
	}
});

// App registration and rendering
AppRegistry.registerComponent('HireMe', () => App);
AppRegistry.runApplication('HireMe', { rootTag: document.getElementById('react-root') });
