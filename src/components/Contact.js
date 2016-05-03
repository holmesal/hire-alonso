import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { PrimaryText, Prose, SectionHeader, H2 } from '../type';
import openTab from '../utils/openTab';
import { mail } from '../images';

export default class Contact extends Component {

	static propTypes = {};

	static defaultProps = {};

	openMail() {
		openTab('mailto:hire@alonso.io');
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<SectionHeader>LET'S WORK TOGETHER</SectionHeader>

				<View style={styles.content}>
					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>"We have this crazy idea..."</Text></PrimaryText>
					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>"We don't really know if it's possible, but..."</Text></PrimaryText>
					<PrimaryText style={styles.tagline}><Text style={{fontWeight: '600'}}>"There's this thing we've been wanting to try out..."</Text></PrimaryText>
					<PrimaryText style={styles.tagline}>My most interesting work usually starts with a conversation like this. I love these conversations. Let's have one.</PrimaryText>
				</View>

				<TouchableOpacity style={styles.mailButton} onPress={this.openMail.bind(this)}>
					<Image style={styles.letters} source={mail} />
					<H2 style={styles.email}>hire@alonso.io</H2>
				</TouchableOpacity>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		//flex: 1
		alignItems: 'center'
	},
	content: {
		alignSelf: 'stretch',
		alignItems: 'flex-start'
	},
	mailButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30,
		//backgroundColor: 'yellow'
	},
	letters: {
		width: 50
	},
	email: {
		 //color: 'red',
			marginLeft: 18,
			marginBottom: -2,
		//	backgroundColor: 'red',
			alignSelf: 'center'
	},
	tagline: {
		marginBottom: 12
	}
});
