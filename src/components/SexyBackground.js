import React, {
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

import {
	CanvasSpace,
	Const,
	Form,
	Point,
	Pair,
	Vector
} from 'ptjs';

export default class SexyBackground extends Component {

	componentDidMount() {
		this.initPt();
	}

	initPt() {
		var colors = {
			a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#ffe359",
			b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "#e2e6ef",
			lightBlue: '#4997BA'
		};
		var space = new CanvasSpace("demo", "#202020" ).display();
		var form = new Form( space );

		console.info(space)


		//// 2. Create Elements
		var pairs = [];
		var center = space.size.$divide(2);
		var mouse = center.clone();
		mouse.x = space.size.x + 50;
		mouse.y = 50;
		var mousing = false;

		// Initial direction
		var target = center.clone();
		target.x = -50;
		console.info('initial target', target)
		//var moveSpeed = 0.003;
		var moveSpeed, defaultMoveSpeed = 0.008;
		var fastMoveSpeed = 0.05;

		var nw = space.size.$multiply(0.1);
		console.info(nw)
		var north = new Point([space.size.x/2, 20, 0]);
		console.info(north)

		const bigMonitorArea = 1920 * 1200;
		const bigMonitorNumPoints = 100;
		const currentArea = space.size.x * space.size.y;
		const areaFraction = currentArea / bigMonitorArea;
		const numPoints = Math.round(bigMonitorNumPoints * Math.sqrt(Math.sqrt(areaFraction)));

		var steps = numPoints;
		var rx = space.size.x * 0.45;
		var ry = space.size.y * 0.45;

		// Alternate method - ensures bounds always covered
		//var dr = Math.max( space.size.x, space.size.y ) * 0.5 / steps; // Whoa try this shit out!
		var dr = Math.max( space.size.x, space.size.y ) * 0.4;
		rx = dr;
		ry = dr;

		// create points
		for (var i=0; i<steps; i++) {
			var p = new Pair( Math.random()*rx, Math.random()*ry ).to( Math.random()*-rx, Math.random()*-ry );
			p.moveBy( center ).rotate2D( i*Math.PI/steps, center );

			pairs.push( p );
		}

		function pickTop() {
			return new Vector(Math.random() * space.size.x, -100);
		}

		function pickBottom() {
			return new Vector(Math.random() * space.size.x, space.size.y + 100);
		}

		function pickLeft() {
			return new Vector(-100, Math.random() * space.size.y);
		}

		function pickRight() {
			return new Vector(space.size.x + 100, Math.random() * space.size.y);
		}

		function sample(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		}


		function pickNewTarget() {
			var newX, newY, newTarget;
			if (target.x < 0) {
				newTarget = sample([pickTop, pickRight, pickBottom]).call()
			} else if (target.x > space.size.x) {
				newTarget = sample([pickTop, pickLeft, pickBottom]).call()
			} else if (target.y < 0) {
				newTarget = sample([pickLeft, pickRight, pickBottom]).call()
			} else if (target.y > space.size.y) {
				newTarget = sample([pickLeft, pickTop, pickBottom]).call()
			} else {
				newTarget = sample([pickTop, pickLeft, pickRight, pickBottom]).call()
			}
			// var newTarget = new Vector(Math.random() * space.size.x * 0.8, Math.random() * space.size.y * 0.8);
			console.info('picked new target', newTarget);
			target = newTarget
		}


		//// 3. Visualize, Animate, Interact
		space.add({
			animate: function(time, fps, context) {
				for (var i=0; i<pairs.length; i++) {

					// rotate each pair by 0.1 degree
					var pr = pairs[i];
					var rotationFactor = pr.midpoint().distance(center);

					// pr.rotate2D( Const.one_degree/10 * rotationFactor/500, center );
				//	pr.rotate2D( Const.one_degree/20, center );
					pr.rotate2D( Const.one_degree/16, center );

					// check collinearity with mouse, and draw a line with different color
					var col = pr.collinear(mouse);

					// disable mouse
					col = 10000;

					if (!mousing) {
						// If we're not already at the point
						if (mouse.distance(target) < 1) {
							pickNewTarget();
							moveSpeed = defaultMoveSpeed;
						}
						// Figure out the heading to the next target
						var targetHeading = new Pair(mouse).to(target).direction().normalize();

						mouse.moveBy(targetHeading.$multiply(moveSpeed));
					}

					// Attract
					// var attractionDirection = new Pair(pr.$getAt(0), mouse).normalize();
					// pr.$getAt(0).x -= 10;


					// form.stroke("rgba(250,250,250,0.06)");

					// var point = space.size.$divide(Math.random() * 10);

					// form.line( pr.equal().to( north ) );
					form.stroke(false ).fill(colors.lightBlue).points( pr.toArray(), 0.5) ;

					var dist = pr.$getAt(0).distance(mouse);
					var opacity = (100/dist) * 0.1;
					form.stroke("rgba(250,250,250,"+opacity+")");

					form.line( pr.clone().to( mouse ) );
					// Color this point white the closer we are
					var whiteOpacity = 40/dist;
					form.stroke(false ).fill("rgba(255,255,255,"+(whiteOpacity)+")").point( pr.$getAt(0), 0.5) ;
					form.stroke(false ).fill("rgba(255,255,255,"+(whiteOpacity/3)+")").point( pr.$getAt(1), 0.5) ;

					var dist = pr.$getAt(1).distance(mouse);
					var opacity = (100/dist) * 0.1;
					form.stroke("rgba(250,250,250,"+opacity+")");
					form.line(new Pair(pr.$getAt(1)).to(mouse))

					// Exact collinearity with return 0, but here we just check for a generous threshold
					if ( Math.abs( col ) < 200 ) {
						form.stroke("#fff");
						form.line( pr );
						form.line( pr.clone().to( mouse ) );

						// not collinear, check whether mouse is on left or right side
					} else {
						// if (Math.random() > 0.99) {

						// form.stroke( ( (col<0) ? "rgba(255,255,0,.1)" : "rgba(0,255,255,.1)") ).line( pr );
						// }

					}

					 //form.fill( '#fefefe' ).stroke(false).point( mouse, 1.5, true );
				}
			},
			onMouseAction: function(type, x, y, evt) {
				 //console.info(type)
				//if (space.touchesToPoints( evt ).length > 0) alert('touching!')
				if (type=="move") {
				//	mousing = true;
				//	mouse.set(x,y);
					target = new Point(x,y);
					moveSpeed = fastMoveSpeed;
				} else if (type == 'out') {
					console.info('mouseout!')
					mousing = false;
					moveSpeed = defaultMoveSpeed;
					pickNewTarget();
				} else if (type == 'up') {
					pickNewTarget();
					mousing = false;
					moveSpeed = defaultMoveSpeed;
				}
			}
		});


		space.bindMouse();
		space.play();
	}

	render() {
		return (
			<div id="pt" style={this.props.style} />
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		//flex: 1
		backgroundColor: 'red'
	},
	fill: {

	}
});
