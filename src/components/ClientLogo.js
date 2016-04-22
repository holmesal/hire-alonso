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

export default class ClientLogo extends Component {

	static propTypes = {};

	static defaultProps = {};

	render() {
		return (
			<TouchableOpacity style={styles.wrapper} onPress={() => openTab(this.props.url)}>
				<Image style={styles.image} source={this.props.source} />
			</TouchableOpacity>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		marginTop: 12,
		marginBottom: 12
	},
	image: {
		height: 200
	}
});
