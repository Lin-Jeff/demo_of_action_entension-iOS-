function getElements()
  {
  var x=document.getElementsByTagName("input");
  for(var i = 0;i < x.length; i++){
	  if(x[i].type == "text"){
		  x[i].value = "this is text type";
	  } else if(x[i].type == "password"){
		  x[i].value = "this is password type";
	  }
  }
  alert(x.length);
  }
    var MyExtensionJavaScriptClass = function() {}; 
      
    MyExtensionJavaScriptClass.prototype = { 
        run: function(arguments) { 
        // Pass the baseURI of the webpage to the extension. 
            arguments.completionFunction({"baseURI": document.baseURI}); 
        }, 
      
        // Note that the finalize function is only available in iOS. 
        finalize: function(arguments) { 
        // arguments contains the value the extension provides in [NSExtensionContext completeRequestReturningItems:expirationHandler:completion:]. 
        // In this example, the extension provides a color as a returning item. 
        	document.body.style.backgroundColor = arguments["bgColor"]; 
			var x=document.getElementsByTagName("input");
			for(var i = 0;i < x.length; i++){
		 		if(x[i].type == "text"){
		 			x[i].value = "this is text type";
	  			} else if(x[i].type == "password"){
	  				x[i].value = "this is password type";
	  			}
	  		}
//            var ifm1 = document.getElementById('J_loginIframe')
//	  		alert(ifm1.id)
//            var str1 = ifm1.id
//            var patrn1=/.*[iI][fF][Rr][aA][Mm][Ee].*/;
//            
//            if (patrn1.exec(str1)){
//                alert(1)
//            }
	  		
	  		var eles = document.getElementsByTagName('*');
            alert(eles.length);
            var ifm = null;
            for(var k = 0;k < eles.length ;k++) {
//                alert(eles[k]);
//                ifm = eles[k].contentWindow.document.getElementsByTagName("input")
//                if(ifm) {
//                    alert(ifm.length);
//                    for(var j = 0;j < ifm.length; j++){
//                        alert(ifm[j].type);
//                        //                alert(j)
//                        ifm[j].value = "text type";
//                        
//                        if(ifm[j].type == "text"){
//                            ifm[j].value = "text type";
//                            
//                        } else if(ifm[j].type == "password"){
//                            ifm[j].value = "password";
//                            
//                        }else {
//                            continue;
//                        }
//                    }
//                }else {
//                    alert(0);
//                }
                
                var str = eles[k];
                var patrn=/.*[fF][Rr][aA][Mm][Ee].*/;//匹配iframe的节点
                
                if (patrn.exec(str)){
                    alert(str);
                    var str1 = eles[k].id;
                    alert(str1);
                    var ifm = document.getElementById(str1).contentWindow.document.getElementsByTagName("input");
                    
                    for(var j = 0;j < ifm.length; j++){
//                        alert(ifm[j].type);
                        //                alert(j)
                        ifm[j].value = "text type";
                        
                        if(ifm[j].type == "text"){
                            ifm[j].value = "text type";
                            
                        } else if(ifm[j].type == "password"){
                            ifm[j].value = "password";
                            
                        }else {
                            continue;
                        }
                    }
                    //	  		alert(ifm.length);
                }
                
                
            }
          
        }
    };

      
    // The JavaScript file must contain a global object named "ExtensionPreprocessingJS". 
    var ExtensionPreprocessingJS = new MyExtensionJavaScriptClass; 	
