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
import Things from './Things';
import Tools from './Tools';
import FeaturedApp from './FeaturedApp';
import Contact from './Contact';

export default class Portfolio extends Component {

	render() {
		return (
			<View style={styles.wrapper}>
				<Header />

				<View style={styles.body}>

					<PrimaryText style={styles.tagline}>I help innovative companies build delightful mobile apps using the best technologies in the world.</PrimaryText>

					<Clients />

					<Things />

					<Tools />

					<FeaturedApp />

					<Contact />

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
