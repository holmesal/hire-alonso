import React, {
    Component,
    Image,
    Text,
    View
} from 'react-native';

import colors from './colors';

const baseTextStyle = {
//	fontFamily: 'System',
//	backgroundColor: 'transparent',
	color: colors.darkGrey,
};

export class PrimaryText extends Component {

    render() {
        return (
            <Text {...this.props} style={[
            		baseTextStyle,
                {

                    fontSize: 16,
                    fontWeight: '200',
                    letterSpacing: 1.07,
                    lineHeight: '28px'
                },
                this.props.style
            ]}>{this.props.children}</Text>
        );
    }
}

export class SectionHeader extends Component {

	render() {
		return (
			<Text {...this.props} style={[
								baseTextStyle,
                {
                    fontSize: 12,
                    fontWeight: '600',
                    letterSpacing: 2,
                    borderStyle: 'solid',
                    paddingBottom: 6,
                    marginTop: 120,
                    marginBottom: 24,
                    borderWidth: 0,
                    borderBottomWidth: 2,
                    borderBottomColor: colors.darkGrey
                },
                this.props.style
            ]}>{this.props.children}</Text>
		);
	}
}


export class H2 extends Component {

	render() {
		return (
			<Text {...this.props} style={[
            		baseTextStyle,
                {

                    fontSize: 16,
                    fontWeight: '600',
                    letterSpacing: 1.07,
                    marginBottom: 6
                },
                this.props.style
            ]}>{this.props.children}</Text>
		);
	}
}


export class Prose extends Component {

	render() {
		return (
			<Text {...this.props} style={[
                {
                    fontWeight: '300',
                    fontSize: 16,
                    letterSpacing: 0.6
                },
                this.props.style
            ]}>{this.props.children}</Text>
		);
	}
}

export class Link extends Component {

	render() {
		return (
			<Text {...this.props} style={[
            		baseTextStyle,
                {

                    //fontSize: 16,
                    color: colors.blue,
                    fontWeight: '600',
                    //letterSpacing: 1.07,
                    //lineHeight: '28px'
                },
                this.props.style
            ]}><a target="_blank" href={this.props.to} style={{textDecoration: 'none', color: 'inherit'}}>{this.props.children}</a></Text>
		);
	}
}







//export class SecondaryText extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    fontFamily: 'System',
//                    fontSize: 14,
//                    fontWeight: '200',
//                    color: colors.grey,
//                    backgroundColor: 'transparent',
//                    letterSpacing: 0.79
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//
//export class SupportingText extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    fontFamily: 'System',
//                    fontSize: 14,
//                    fontWeight: '200',
//                    color: colors.grey,
//                    backgroundColor: 'transparent',
//                    lineHeight: 17
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//
//export class MetaText extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    fontFamily: 'System',
//                    fontSize: 11,
//                    fontWeight: '400',
//                    color: colors.grey,
//                    backgroundColor: 'transparent',
//                    lineHeight: 13,
//                    letterSpacing: 0.77
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//
//export class BoldCaps extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    color: colors.white,
//                    backgroundColor: 'transparent',
//                    fontFamily: 'System',
//                    fontWeight: '700',
//                    fontSize: 10,
//                    letterSpacing: 1.85
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//
//
//
//
//export class H1 extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    fontFamily: 'System',
//                    fontWeight: '400',
//                    fontSize: 24,
//                    color: colors.darkGrey,
//                    backgroundColor: 'transparent',
//                    letterSpacing: 0.9
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//
//export class H2 extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    fontFamily: 'System',
//                    fontWeight: '400',
//                    fontSize: 18,
//                    color: colors.grey,
//                    backgroundColor: 'transparent',
//                    letterSpacing: 0.6
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//
//export class FinePrint extends Component {
//
//    render() {
//        return (
//            <Text {...this.props} style={[
//                {
//                    fontFamily: 'System',
//                    fontWeight: '400',
//                    fontSize: 14,
//                    color: colors.grey,
//                    backgroundColor: 'transparent'
//                },
//                this.props.style
//            ]}>{this.props.children}</Text>
//        );
//    }
//}
//

