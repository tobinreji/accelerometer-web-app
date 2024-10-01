// Check if the DeviceMotionEvent is supported
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
        // Get the acceleration values (without gravity)
        var acceleration = event.acceleration;

        // Check if acceleration data is available
        if (acceleration) {
            document.getElementById('x').innerHTML = 'X: ' + acceleration.x.toFixed(2) + ' m/s²';
            document.getElementById('y').innerHTML = 'Y: ' + acceleration.y.toFixed(2) + ' m/s²';
            document.getElementById('z').innerHTML = 'Z: ' + acceleration.z.toFixed(2) + ' m/s²';
        }
    });
} else {
    // If DeviceMotionEvent is not supported, display an error message
    document.getElementById('x').innerHTML = 'Accelerometer not supported.';
    document.getElementById('y').style.display = 'none';
    document.getElementById('z').style.display = 'none';
}
