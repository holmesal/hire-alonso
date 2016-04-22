import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import { PrimaryText, SectionHeader } from '../type';
import ClientLogo from './ClientLogo';
import * as images from '../images';

export default class Clients extends Component {

	render() {
		return (
			<View style={styles.wrapper}>
				<SectionHeader style={{marginTop: 60}}>CLIENTS</SectionHeader>

				<ClientLogo url="https://terrabella.google.com/" source={images.skybox} />
				<ClientLogo url="http://www.projectara.com/" source={images.atap} />
				<ClientLogo url="https://twitter.com/catalinalabs" source={images.catalina} />
				<ClientLogo url="https://salute.io" source={images.salute} />
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center'
	}
});
