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

					

					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>"We have this crazy idea..."</Text></PrimaryText>
					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>"We don't really know if it's possible, but..."</Text></PrimaryText>
					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>"There's this thing we've been wanting to try out..."</Text></PrimaryText>
					<PrimaryText style={styles.tagline}>My most interesting work usually starts with a conversation like this. I love these conversations.</PrimaryText>
					<PrimaryText style={styles.tagline}>What I'm best at is connecting the dots - building the right thing, at the right time, with the best available technologies.</PrimaryText>
					<PrimaryText style={styles.tagline}>I ask questions until I understand what's really important to you and your customers, and then I sprint until it's shipped.</PrimaryText>

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
