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
				<SectionHeader style={{marginTop: 60}}>FOLKS I'VE WORKED WITH</SectionHeader>

				<View style={styles.grid}>
					<ClientLogo url="https://terrabella.google.com/" source={images.skybox} label="Software Engineering" />
					<ClientLogo url="http://www.projectara.com/" source={images.atap} label="Design Concepting" />
					<ClientLogo url="https://twitter.com/catalinalabs" source={images.catalina}  label="Mobile Prototyping" />
					<ClientLogo url="http://salute.io" source={images.salute}  label="Mobile Prototyping" />
					<ClientLogo url="https://robinpowered.com/" source={images.robin}  label="Hardware Prototyping" />
				</View>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	grid: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		flexWrap: 'wrap',
		justifyContent: 'center'
	}
});
