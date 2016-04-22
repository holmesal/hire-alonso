import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import { H2, Prose } from '../type';

export default class Tool extends Component {

	static propTypes = {
		name: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string
	};

	render() {
		return (
			<View style={styles.wrapper}>

				<Image style={styles.image} source={this.props.image} />

				<H2>{this.props.name}</H2>

				<Prose>{this.props.description}</Prose>


			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		alignSelf: 'stretch',
		alignItems: 'flex-start',
		marginTop: 36,
		marginBottom: 36
	},
	image: {
		marginBottom: 24,
		width: 72,
		height: 72
	}
});
