import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import { SectionHeader, PrimaryText, Link } from '../type';
import * as images from '../images';
import Tool from './Tool';
import openTab from '../utils/openTab';

export default class Things extends Component {

	render() {
		return (
			<View style={styles.wrapper}>

				<SectionHeader>THINGS I'VE DESIGNED / BUILT</SectionHeader>

				<View style={styles.content}>

					<View style={styles.row}>
						<Image style={styles.icon} source={images.microphone} />
						<PrimaryText>A social podcast listening <Link to="http://pfoo.herokuapp.com">app.</Link></PrimaryText>
					</View>

					<View style={styles.row}>
						<Image style={styles.icon} source={images.satellite} />
						<PrimaryText>A webapp to consume information provided by two minifridge-sized <Link to="https://terrabella.google.com/">earth-imaging satellites.</Link></PrimaryText>
					</View>

					<View style={styles.row}>
						<Image style={styles.icon} source={images.plane} />
						<PrimaryText>A <Link to="https://www.dropbox.com/s/z98d9964hbu36g5/hero.pdf?dl=0">humanitarian UAV</Link> that can carry 1800lbs of cargo 600 nautical miles, take off and land in under 500ft on rough surfaces, and fold up to fit in the back of a C-130 transport aircraft.</PrimaryText>
					</View>

					<View style={styles.row}>
						<Image style={styles.icon} source={images.wave} />
						<PrimaryText>An anonymous <Link to="https://itunes.apple.com/us/app/shortwave-messaging/id864480884?mt=8">chat app</Link> with a range of 150 feet.</PrimaryText>
					</View>

					<View style={styles.row}>
						<Image style={styles.icon} source={images.conference} />
						<PrimaryText>An automatic <Link to="https://itunes.apple.com/us/app/shortwave-messaging/id864480884?mt=8">social network</Link> for conference attendees.</PrimaryText>
					</View>

					<View style={styles.row}>
						<Image style={styles.icon} source={images.bicycle} />
						<PrimaryText>A site that generates museum-quality heatmaps from your Strava rides. (prelaunch)</PrimaryText>
					</View>



				</View>
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
	content: {
		alignSelf: 'stretch',
		alignItems: 'flex-start'
	},
	row: {
		flexDirection: 'row',
		marginBottom: 12
	},
	icon: {
		width: 22,
		marginRight: 24,
		marginTop: 5
	}
});
