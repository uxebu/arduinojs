/*
Simple test to receive Serial Data from Node instance.
*/
void setup() {
  Serial.begin(38400);      // open the serial port at 9600 bps:    
}

int incoming = 0;

void loop() {
  if (Serial.available() > 0) {
    // read incoming byte
    incoming = Serial.read();

    Serial.print("Got: ");
    Serial.println(incoming);
  }
}
