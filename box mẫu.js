var dialog = new Window("dialog"); 
    dialog.text = "Tool Xếp Ảnh Thẻ - NT Studio"; 
    dialog.preferredSize.width = 180; 
    dialog.preferredSize.height = 100; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

var button1 = dialog.add("button", undefined, undefined, {name: "button1"}); 
    button1.text = "Ảnh 2x3"; 
    button1.preferredSize.width = 150; 
    button1.onClick = function(){
      dialog.close();
      // 
    }

var button2 = dialog.add("button", undefined, undefined, {name: "button2"}); 
    button2.text = "Ảnh 3x4"; 
    button2.preferredSize.width = 150; 
    button2.onClick = function(){
      dialog.close();
      // 

    }

var button3 = dialog.add("button", undefined, undefined, {name: "button3"}); 
    button3.text = "Ảnh 4x6"; 
    button3.preferredSize.width = 150; 
    button3.onClick = function(){
      dialog.close();
      //    
	  }

//var button4 = dialog.add("button", undefined, undefined, {name: "button4"}); 
//    button4.text = "buttt"; 
//    button4.preferredSize.width = 320; 
//    button4.onClick = function(){
//      dialog.close();
//    }
//
//var button5 = dialog.add("button", undefined, undefined, {name: "button5"}); 
//    button5.text = "Action to JS"; 
//    button5.preferredSize.width = 320; 
//    button5.onClick = function(){
//    dialog.close();
//    }

//var slider1 = dialog.add("slider", undefined, undefined, undefined, undefined, {name: "slider1"}); 
//    slider1.minvalue = 0; 
//    slider1.maxvalue = 100; 
//    slider1.value = 50; 

var button6 = dialog.add("button", undefined, undefined, {name: "button6"}); 
    button6.text = "Close"; 
	button6.onClick = function(){
        dialog.close();
// code
        }


        var statictext1 = dialog.add("statictext", undefined, undefined, {name: "statictext1"}); 
        statictext1.text = "Design by NT Studio"; 
        statictext1.preferredSize.width = 178; 
        statictext1.justify = "center"; 
        statictext1.alignment = ["center","top"]; 
    
    dialog.show();