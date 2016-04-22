import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { chorus, testflight } from '../images';
import { Prose, SectionHeader, H2 } from '../type';
import openTab from '../utils/openTab';

export default class FeaturedApp extends Component {

	openTestflight() {
		openTab('http://pfoo.herokuapp.com');
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<SectionHeader>FEATURED APP</SectionHeader>

				<View style={styles.artwork}>
					<Image style={styles.image} source={chorus} />
				</View>
				<View style={styles.appInfo}>
					<H2>Chorus</H2>
					<Prose style={{marginTop: 12}}>Social podcasts</Prose>
				</View>

				<View style={styles.deets}>
					<Prose style={styles.deet}>• iOS app uses React Native, Relay, and Redux</Prose>
					<Prose style={styles.deet}>• Backend speaks GraphQL, runs on NodeJS w/ Postgres DB</Prose>
					<Prose style={styles.deet}>• Network-aware audio streaming</Prose>
					<Prose style={styles.deet}>• OpenGL image manipulation</Prose>
					<Prose style={styles.deet}>• Fast, on-demand audio transcoding</Prose>
					<Prose style={styles.deet}>• Social login</Prose>
				</View>

				<TouchableOpacity style={{marginTop: 40}} onPress={this.openTestflight.bind(this)}>
					<Image style={styles.testflightImage} source={testflight} />
				</TouchableOpacity>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center'
		//flex: 1
	},
	artwork: {
		width: 160,
		height: 160,
		marginTop: 30,
		borderRadius: 19,
		borderWidth: 1,
		borderColor: '#E0E0E0',
		overflow: 'hidden'
	},
	appInfo: {
		width: 160,
		paddingTop: 22
	},
	deets: {
		alignSelf: 'stretch',
		marginTop: 72
	},
	deet: {
		marginTop: 6,
		marginBottom: 6
	},

	testflightImage: {
		width: 248
	}
});
