var g_lastID=20000;
var idSavePassword=33001;
var idAutoLogin=33002;

function btn_maintab_select(obj)
{
	var id = obj.lparam;
	
	obj.getobjfromid(g_lastID).visible = false;
	obj.getobjfromname("menu.position").left = obj.left
	obj.getobjfromid(id).visible = true;
	g_lastID=id;
}

function btn_node_mode_check(obj)
{

	obj.getobjfromname("node.mode").enable = (obj.check==0);
}

function btn_node_show(obj)
{
	obj.getobjfromid(5000).visible = true;
	obj.getobjfromid(5001).visible = true;
	obj.getobjfromid(5002).visible = false;
}
function btn_node_hide(obj)
{
	obj.getobjfromid(5000).visible = false;
}
function btn_plugin_show(obj)
{
	obj.getobjfromid(5000).visible = true;
	obj.getobjfromid(5001).visible = false;
	obj.getobjfromid(5002).visible = true;
}

function btn_savepassword(obj)
{
	if(obj.check == 0)
	{
		if(obj.getobjfromid(idAutoLogin).check!=0)
		{
			obj.getobjfromid(idAutoLogin).check=0;
		}
	}

}

function btn_autologin(obj)
{
	if(obj.check != 0)
	{
		if(obj.getobjfromid(idSavePassword).check==0)
		{
			obj.getobjfromid(idSavePassword).check=1;
		}
	}
}

function btn_area(obj)
{
	if(obj.check != 0)
	{
		obj.getobjfromid(20120).move(obj.left,obj.top,EOP_DEFAULT,EOP_DEFAULT);
	}
}

function btn_selectgame(obj)
{
	obj.getobjfromid(1100).check=1;
}

function btn_notify_hover(obj)
{
	obj.check=1;
}