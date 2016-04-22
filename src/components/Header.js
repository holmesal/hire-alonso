import React, {
	Component,
	Dimensions,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';
import colors from '../colors';

import SexyBackground from './SexyBackground';

const { height, width } = Dimensions.get('window');

export default class Header extends Component {

	static propTypes = {};

	static defaultProps = {};

	render() {
		const marginTop = height/5;
		return (
			<View style={[styles.wrapper, {height}]}>
				<SexyBackground style={styles.background} />
				<View style={styles.overlay} pointerEvents="none">
					<Text style={[styles.name, {marginTop}]}>Alonso Holmes</Text>
				</View>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		alignSelf: 'stretch',
		height: 200,
		//backgroundColor: colors.darkGrey,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
	},
	name: {
		color: colors.white,
		fontSize: 34,
		letterSpacing: 1.7,
		fontWeight: '500',
		borderStyle: 'solid',
		borderBottomWidth: 3,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		paddingBottom: 12,
		borderBottomColor: colors.white
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
});
