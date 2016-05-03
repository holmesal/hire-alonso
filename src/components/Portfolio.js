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

					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>I'm a born dot-connector.</Text></PrimaryText>

					<PrimaryText style={styles.tagline}>I do my best work when part of my job is to define the problem, as well as build the solution.</PrimaryText>

					<PrimaryText style={styles.tagline}>So I start by asking questions, until I understand what's important.</PrimaryText>

					<PrimaryText style={styles.tagline}>Then I pull out the best technologies available, and sprint until it's shipped.</PrimaryText>



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
		marginBottom: 12
	},
	body: {
		padding: 44,
		maxWidth: 600
	}
});
