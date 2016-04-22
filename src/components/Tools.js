import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import { SectionHeader, PrimaryText } from '../type';
import * as images from '../images';
import Tool from './Tool';

export default class Tools extends Component {

	render() {
		return (
			<View style={styles.wrapper}>

				<SectionHeader>TOOLS</SectionHeader>

				<View style={styles.info}>
					<PrimaryText>Every craftsman has his tools.</PrimaryText>
					<PrimaryText>Here's what I use:</PrimaryText>
				</View>

				<Tool name="React Native"
							image={images.reactNative}
							description="Incredible speed for both prototyping and production, excellent performance, and a thriving community." />

				<Tool name="Relay"
							image={images.relay}
							description="Co-locates data needs with react components, making them more composable and reusable. Removes the need to assemble the data you need from a collection of REST endpoints on the frontend, which means that you launch sooner." />

				<Tool name="GraphQL"
							image={images.graphql}
							description="Better than REST. Allows frontend developers to query for exactly the data needed, without impacting backend devs. This translates to development speed (there's a theme here)." />
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center'
		//flex: 1
		//marginTop: 100
	},
	info: {
		alignSelf: 'stretch',
		alignItems: 'flex-start'
	}
});
