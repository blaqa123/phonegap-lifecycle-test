var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var batterylow_Check= 0;
var Charging_Check = 0;
var fullBattery_Check = 100;


    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
		$("#batterylow").text("Warning!! Battery Low:" + batterylow_Check);
		$("#charging").text("charging:" + Charging_Check);
		$("#fullbattery").text("fully charged:" + fullBattery_Check);
		
	}
	function batteryStatus(){
		$("#batterylow").text("Warning!! Battery Low:" + batterylow_Check);
		$("#charging").text("charging:" + Charging_Check);
		$("#fullbattery").text("fully charged:" + fullBattery_Check);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
