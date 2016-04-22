import React, {
	Animated,
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

export default class AnimationTest extends Component {

	state = {
		position: new Animated.ValueXY({x: 0, y: 0})
	};

	componentDidMount() {
		setInterval(() => {
			this.goSomewhere()
		}, 2000);
	}

	goSomewhere() {
		const x = Math.random() * 400 - 200;
		const y = Math.random() * 400 - 200;
		Animated.spring(this.state.position, {
			toValue: {x, y},
		}).start()
	}


	render() {
		return (
			<Animated.View style={[styles.wrapper, {transform: this.state.position.getTranslateTransform()}]}>
				<TouchableOpacity style={styles.press} onPress={this.goSomewhere.bind(this)}>
					<Text></Text>
				</TouchableOpacity>
			</Animated.View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		width: 5,
		height: 5,
		marginLeft: 0,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: 'red',
		position: 'absolute',
		marginLeft: 300,
		marginTop: 300
	},
	press: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center'
	}

});
