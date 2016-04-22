import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { Prose, SectionHeader, H2 } from '../type';
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
		alignSelf: 'stretch'
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
	}
});
