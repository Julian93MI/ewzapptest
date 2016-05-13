var createMenuePunkte, hintergrund, initApp, kategorien, logo_mit_pfeil, logo_ohne_pfeil, menue, menuename, statusbar, suche, sucheButton, sucheCheckbox1, sucheCheckbox2, sucheCheckbox3, sucheCheckbox4, sucheLoeffel1, sucheLoeffel2, sucheLoeffel3, textfield;

kategorien = ["Rezepte&nbspmit&nbspFleisch", "Vegetarisch", "Vegan", "Desserts"];

menuename = ["Kategorien", "Meine Rezepte", "Rezeptsuche", "Zufallsrezept"];

hintergrund = new BackgroundLayer({
  backgroundColor: "white"
});

statusbar = new Layer({
  z: 1,
  width: hintergrund.width,
  height: hintergrund.height * 0.1,
  backgroundColor: "rgba(255,150,22,1)",
  html: menuename[0],
  style: {
    color: "#000",
    lineHeight: (hintergrund.height * 0.12) + "px",
    fontSize: (hintergrund.height * 0.05) + "px",
    textIndent: (hintergrund.width * 0.23) + "px"
  }
});

statusbar.states.add({
  kategorien: {
    html: menuename[0],
    style: {
      color: "#000",
      lineHeight: (hintergrund.height * 0.12) + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.23) + "px"
    }
  },
  meineRezepte: {
    html: menuename[1],
    style: {
      color: "#000",
      lineHeight: (hintergrund.height * 0.12) + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.23) + "px"
    }
  },
  rezeptsuche: {
    html: menuename[2],
    style: {
      color: "#000",
      lineHeight: (hintergrund.height * 0.12) + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.23) + "px"
    }
  },
  zufallsrezept: {
    html: menuename[3],
    style: {
      color: "#000",
      lineHeight: (hintergrund.height * 0.12) + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.23) + "px"
    }
  }
});

menue = new Layer({
  z: 2,
  width: hintergrund.width * 0.8,
  height: hintergrund.height - statusbar.height,
  backgroundColor: "rgba(255,193,15,0.72)",
  y: statusbar.height
});

menue.states.add({
  hidden: {
    opacity: 0,
    x: -menue.width
  },
  visible: {
    opacity: 1,
    x: 0
  }
});

menue.states.switchInstant("hidden");

suche = new Layer({
  backgroundColor: "rgba(123,123,123,0)"
});

suche.states.add({
  hidden: {
    opacity: 0,
    x: -menue.width
  },
  visible: {
    opacity: 1,
    x: 0
  },
  halfhidden: {
    opacity: 0.5
  }
});

suche.states.switchInstant("hidden");

logo_ohne_pfeil = new Layer({
  z: 2,
  width: hintergrund.width * 0.25,
  height: hintergrund.height * (1 / 9.5),
  image: "images/logo.png",
  originY: 2.7,
  originX: 2.75,
  x: -12,
  y: -1,
  invert: 0,
  sepia: 0,
  grayscale: 0,
  hueRotate: 0,
  brightness: 0
});

logo_mit_pfeil = new Layer({
  z: 2,
  width: hintergrund.width * 0.25,
  height: hintergrund.height * (1 / 9.5),
  image: "images/logo_mit_pfeil.png",
  originY: 2.7,
  originX: 2.75,
  x: -12,
  y: -1,
  invert: 0,
  sepia: 0,
  grayscale: 0,
  hueRotate: 0,
  brightness: 0
});

logo_ohne_pfeil.states.add({
  visible: {
    opacity: 1,
    x: -12
  },
  hidden: {
    pacity: 0,
    x: Screen.width * 1.5
  }
});

logo_mit_pfeil.states.add({
  hidden: {
    opacity: 0,
    x: Screen.width * 1.5
  },
  visible: {
    opacity: 1,
    x: -12
  }
});

logo_ohne_pfeil.states.switchInstant("hidden");

logo_ohne_pfeil.onClick(function() {
  logo_ohne_pfeil.states.switchInstant("hidden");
  logo_mit_pfeil.states.switchInstant("visible");
  return menue.states["switch"]("hidden");
});

logo_mit_pfeil.onClick(function() {
  logo_mit_pfeil.states.switchInstant("hidden");
  logo_ohne_pfeil.states.switchInstant("visible");
  return menue.states["switch"]("visible");
});

textfield = new Layer({
  superLayer: suche,
  width: hintergrund.width * 0.82,
  height: hintergrund.height * 0.1,
  backgroundColor: "rgba(51,51,51,0)",
  x: (hintergrund.width - hintergrund.width * 0.82) / 2,
  y: statusbar.height * 1.8,
  borderWidth: 5,
  borderColor: "rgba(0,0,0,1)"
});

textfield.html = "<p style='margin:0px'></p><input id='input1' type='text' style='font-size:55px;line-height:" + (hintergrund.height * 0.085) + "px;padding 0px;margin:0px;width:" + (hintergrund.width * 0.8) + "px' placeholder=' Suchbegriff eingeben...' />";

textfield.ignoreEvents = false;

textfield.on(Events.Click, function() {
  var inputField1;
  inputField1 = document.getElementById('input1');
  inputField1.ignoreEvents = false;
  return inputField1.focus();
});

textfield.states.add({
  hidden: {
    opacity: 0,
    x: -menue.width
  },
  halfhidden: {
    opacity: 0.5
  },
  visible: {
    opacity: 1,
    x: (hintergrund.width - hintergrund.width * 0.82) / 2
  }
});

sucheCheckbox1 = new Layer({
  superLayer: suche,
  width: (hintergrund.height * 0.3) / 4,
  height: (hintergrund.height * 0.3) / 4,
  x: (hintergrund.width - hintergrund.width * 0.82) / 2,
  y: statusbar.height * 1.8 + textfield.height * 1.5,
  image: "images/checked.png",
  borderWidth: 5,
  borderRadius: 15,
  borderColor: "rgba(46,46,46,0.64)",
  html: kategorien[0],
  style: {
    color: "#000",
    lineHeight: ((hintergrund.height * 0.3) / 4) + "px",
    fontSize: (hintergrund.height * 0.045) + "px",
    textIndent: ((hintergrund.height * 0.3) / 4 + 10) + "px"
  }
});

sucheCheckbox2 = new Layer({
  superLayer: suche,
  width: (hintergrund.height * 0.3) / 4,
  height: (hintergrund.height * 0.3) / 4,
  x: (hintergrund.width - hintergrund.width * 0.82) / 2,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.2,
  image: "images/checked.png",
  borderWidth: 5,
  borderRadius: 15,
  borderColor: "rgba(46,46,46,0.64)",
  html: kategorien[1],
  style: {
    color: "#000",
    lineHeight: ((hintergrund.height * 0.3) / 4) + "px",
    fontSize: (hintergrund.height * 0.045) + "px",
    textIndent: ((hintergrund.height * 0.3) / 4 + 10) + "px"
  }
});

sucheCheckbox3 = new Layer({
  superLayer: suche,
  width: (hintergrund.height * 0.3) / 4,
  height: (hintergrund.height * 0.3) / 4,
  x: (hintergrund.width - hintergrund.width * 0.82) / 2,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.2 + sucheCheckbox2.height * 1.2,
  image: "images/checked.png",
  borderWidth: 5,
  borderRadius: 15,
  borderColor: "rgba(46,46,46,0.64)",
  html: kategorien[2],
  style: {
    color: "#000",
    lineHeight: ((hintergrund.height * 0.3) / 4) + "px",
    fontSize: (hintergrund.height * 0.045) + "px",
    textIndent: ((hintergrund.height * 0.3) / 4 + 10) + "px"
  }
});

sucheCheckbox4 = new Layer({
  superLayer: suche,
  width: (hintergrund.height * 0.3) / 4,
  height: (hintergrund.height * 0.3) / 4,
  x: (hintergrund.width - hintergrund.width * 0.82) / 2,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.2 + sucheCheckbox2.height * 1.2 + sucheCheckbox3.height * 1.2,
  image: "images/checked.png",
  borderWidth: 5,
  borderRadius: 15,
  borderColor: "rgba(46,46,46,0.64)",
  html: kategorien[3],
  style: {
    color: "#000",
    lineHeight: ((hintergrund.height * 0.3) / 4) + "px",
    fontSize: (hintergrund.height * 0.045) + "px",
    textIndent: ((hintergrund.height * 0.3) / 4 + 10) + "px"
  }
});

sucheLoeffel1 = new Layer({
  superLayer: suche,
  width: (hintergrund.width * 0.82) / 4,
  height: hintergrund.height * 0.17,
  x: (hintergrund.width - hintergrund.width * 0.82 / 1.5) / 2,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.1 * 4,
  image: "images/Duni-Loeffel-Flair-20-Stueck-silber.png"
});

sucheLoeffel2 = new Layer({
  superLayer: suche,
  width: (hintergrund.width * 0.82) / 4,
  height: hintergrund.height * 0.17,
  x: (hintergrund.width - hintergrund.width * 0.82 / 1.5) / 2 + sucheLoeffel1.x,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.1 * 4,
  image: "images/Duni-Loeffel-Flair-20-Stueck-silber.png"
});

sucheLoeffel3 = new Layer({
  superLayer: suche,
  width: (hintergrund.width * 0.82) / 4,
  height: hintergrund.height * 0.17,
  x: (hintergrund.width - hintergrund.width * 0.82 / 1.5) / 2 + sucheLoeffel2.x,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.1 * 4,
  image: "images/Duni-Loeffel-Flair-20-Stueck-silber.png"
});

sucheButton = new Layer({
  superLayer: suche,
  width: (hintergrund.width * 0.82) / 1.6,
  height: hintergrund.height * 0.12,
  x: (hintergrund.width - hintergrund.width * 0.82 / 1.6) / 2,
  y: statusbar.height * 1.8 + textfield.height * 1.5 + sucheCheckbox1.height * 1.1 * 4 + sucheLoeffel1.height * 1.1,
  html: "Suchen",
  style: {
    color: "#000",
    lineHeight: (hintergrund.height * 0.115) + "px",
    fontSize: (hintergrund.height * 0.08) + "px",
    textIndent: "20px"
  },
  borderWidth: 5,
  borderRadius: 70,
  backgroundColor: "rgba(255,167,0,1)",
  shadowSpread: 10,
  shadowColor: "rgba(123,123,123,0.09)"
});


/*kann man das irgendwie in der for schleife initialisieren?
createMenuePunkte = (textfield, rows) ->
	rowHeight=(hintergrund.height*0.0156)*rows
	rowspace= hintergrund.height*0.005 #Platz zwischen den Zeilen
	for index in [0...rows]
		yPosition = (index * (rowHeight + rowspace)) + statusbar.height-menue.y
		menuepunkt = new Layer
			name: menuename[index]
			#id: index
			superLayer: menue
			width: menue.width
			height: rowHeight
			y: yPosition
			backgroundColor: "rgba(255,172,13,0.63)"
			borderWidth: 0
			blur: 0
			opacity: 1.00
			html: menuename[index]
			style:
				color:      "#000"
				lineHeight: "#{rowHeight}px"
				fontSize:   "#{hintergrund.height*0.05}px"
				textIndent: "#{hintergrund.width*0.05}px"

		menuepunkt.onClick ->
			logo_mit_pfeil.states.switchInstant("visible")
			logo_ohne_pfeil.states.switchInstant("hidden")
			menue.states.switch("hidden")
			print index-4
			switch menuepunkt.name
				when 0 then textfield.states.switchInstant("visible")
				when 1 then textfield.states.switchInstant("visible")
				when 2 then textfield.states.switchInstant("visible")
				when 3 then textfield.states.switchInstant("visible")
 */

createMenuePunkte = function(rows) {
  var menuepunkt0, menuepunkt1, menuepunkt2, menuepunkt3, rowHeight, rowspace, yPosition;
  rowHeight = (hintergrund.height * 0.0156) * rows;
  rowspace = hintergrund.height * 0.005;
  yPosition = (0 * (rowHeight + rowspace)) + statusbar.height - menue.y;
  menuepunkt0 = new Layer({
    name: menuename[0],
    superLayer: menue,
    width: menue.width,
    height: rowHeight,
    y: yPosition,
    backgroundColor: "rgba(255,172,13,0.63)",
    borderWidth: 0,
    blur: 0,
    opacity: 1.00,
    html: menuename[0],
    style: {
      color: "#000",
      lineHeight: rowHeight + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.05) + "px"
    }
  });
  yPosition = (1 * (rowHeight + rowspace)) + statusbar.height - menue.y;
  menuepunkt1 = new Layer({
    name: menuename[1],
    superLayer: menue,
    width: menue.width,
    height: rowHeight,
    y: yPosition,
    backgroundColor: "rgba(255,172,13,0.63)",
    borderWidth: 0,
    blur: 0,
    opacity: 1.00,
    html: menuename[1],
    style: {
      color: "#000",
      lineHeight: rowHeight + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.05) + "px"
    }
  });
  yPosition = (2 * (rowHeight + rowspace)) + statusbar.height - menue.y;
  menuepunkt2 = new Layer({
    name: menuename[2],
    superLayer: menue,
    width: menue.width,
    height: rowHeight,
    y: yPosition,
    backgroundColor: "rgba(255,172,13,0.63)",
    borderWidth: 0,
    blur: 0,
    opacity: 1.00,
    html: menuename[2],
    style: {
      color: "#000",
      lineHeight: rowHeight + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.05) + "px"
    }
  });
  yPosition = (3 * (rowHeight + rowspace)) + statusbar.height - menue.y;
  menuepunkt3 = new Layer({
    name: menuename[3],
    superLayer: menue,
    width: menue.width,
    height: rowHeight,
    y: yPosition,
    backgroundColor: "rgba(255,172,13,0.63)",
    borderWidth: 0,
    blur: 0,
    opacity: 1.00,
    html: menuename[3],
    style: {
      color: "#000",
      lineHeight: rowHeight + "px",
      fontSize: (hintergrund.height * 0.05) + "px",
      textIndent: (hintergrund.width * 0.05) + "px"
    }
  });
  menuepunkt0.onClick(function() {
    logo_mit_pfeil.states.switchInstant("visible");
    logo_ohne_pfeil.states.switchInstant("hidden");
    menue.states["switch"]("hidden");
    suche.states.switchInstant("hidden");
    return statusbar.states.switchInstant("kategorien");
  });
  menuepunkt1.onClick(function() {
    logo_mit_pfeil.states.switchInstant("visible");
    logo_ohne_pfeil.states.switchInstant("hidden");
    menue.states["switch"]("hidden");
    suche.states.switchInstant("hidden");
    return statusbar.states.switchInstant("meineRezepte");
  });
  menuepunkt2.onClick(function() {
    logo_mit_pfeil.states.switchInstant("visible");
    logo_ohne_pfeil.states.switchInstant("hidden");
    menue.states["switch"]("hidden");
    suche.states.switchInstant("visible");
    return statusbar.states.switchInstant("rezeptsuche");
  });
  return menuepunkt3.onClick(function() {
    logo_mit_pfeil.states.switchInstant("visible");
    logo_ohne_pfeil.states.switchInstant("hidden");
    menue.states["switch"]("hidden");
    suche.states.switchInstant("hidden");
    return statusbar.states.switchInstant("zufallsrezept");
  });
};

initApp = function() {};

createMenuePunkte(4);

initApp();
