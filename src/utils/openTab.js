
export default function openTab(url) {
	var a  = document.createElement("a")
		, ev = document.createEvent("MouseEvents");
	a.href = url;
	a.target = '_blank';

	ev.initMouseEvent( "click", true, true, window
		, 0, 0, 0, 0, 0, true, false
		, false, true, 0, null );
	a.dispatchEvent(ev)
}
