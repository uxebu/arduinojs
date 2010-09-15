var sys = require("sys");
var SerialPort = require("./serialport_native").SerialPort;
sp = new SerialPort;

// Replace with correct serial device
sp.open("/dev/cu.usbserial-A9007OGm");

var str = "TEST";
sp.write(str);

var buf = new Buffer([0x02, 0x03, 0x05, 0x02, 0x01]);
sp.write(buf);

sp.close();