var savedRuler= app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.INCHES;
var w = app.activeDocument.width;
if(w>10) app.activeDocument.resizeImage (10, 10);
app.preferences.rulerUnits = savedRuler;