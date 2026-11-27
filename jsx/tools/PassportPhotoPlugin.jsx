//////////////////////////////////////////////////
// Passport Photo Plugin: www.vsmedia.de
/* 
<javascriptresource>

<name>Passport Photo</name>

<menu>filter</menu>

<enableinfo>true</enableinfo>

<about>http://www.passport-photo-plugin.com</about>

</javascriptresource>
*/

main();

function main() {
	if($.os.indexOf("Win") != -1 )
	{
		// Windows
		//var path = $.fileName;
        //alert(path);
        //path = path.substring(0,path.lastIndexOf("/")+1);
        //alert(path);
        //var f = File(path + "PassportPhotoPlugin.exe");		
	    var f = File("C:/ProgramData/PassportPhotoPlugin/App/PassportPhotoPlugin.exe");
        f.execute();
	}
	else
	{
        // OS X
        var path = $.fileName;
        //alert(path);
        path = path.substring(0,path.lastIndexOf("/")+1);
        //alert(path);
        var f = File(path + "PassportPhotoPlugin.app");
        f.execute();
	}
}


