import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import colors from '../colors';
import { PrimaryText, SectionHeader } from '../type';
import Header from './Header';
import Clients from './Clients';
import Tools from './Tools';

export default class Portfolio extends Component {

	render() {
		return (
			<View style={styles.wrapper}>
				<Header />

				<View style={styles.body}>

					<PrimaryText style={styles.tagline}>I help innovative companies build delightful mobile apps using the best technologies in the world.</PrimaryText>

					<Clients />

					<Tools />

				</View>

			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		//flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		paddingBottom: 100
	},
	tagline: {
	},
	body: {
		padding: 44,
		maxWidth: 600
	}
});
