import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import openTab from '../utils/openTab';
import {PrimaryText, Prose} from '../type';

export default class ClientLogo extends Component {

	static propTypes = {};

	static defaultProps = {};

	render() {
		return (
			<TouchableOpacity style={styles.wrapper} onPress={() => openTab(this.props.url)}>
				<Image style={styles.image} source={this.props.source} />
				<PrimaryText style={styles.label}>{this.props.label}</PrimaryText>
			</TouchableOpacity>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		margin: 12,
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 12,
		borderRadius: 6,
		alignItems: 'center',
		borderColor: '#ECECEC',
		borderWidth: 1
	},
	image: {
		height: 200,
		flexWrap: 'wrap'
	},
	label: {
		textAlign: 'center'
	}
});
