function rgb(r, g, b){
    r = r>=255?255:r;
    g = g>=255?255:g;
    b = b>=255?255:b;

    let red = r<=0?'00':r.toString(16).toUpperCase();
    let green = g<=0?'00':g.toString(16).toUpperCase();
    let blue = b<=0?'00':b.toString(16).toUpperCase();
    if(red.length==1){
        red='0'+red;
    }
    if(green.length==1){
        green='0'+green;
    }
    if(blue.length==1){
        blue='0'+blue;
    }
     return red+green+blue;

  }
  
  console.log(rgb(260,260,130));
