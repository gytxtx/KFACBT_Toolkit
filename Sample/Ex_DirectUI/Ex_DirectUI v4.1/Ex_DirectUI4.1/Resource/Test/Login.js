var idSavePassword=1005;
var idAutoLogin=1006;
var dwHue=0;
var dwCheckcode=0;

function onAttach()
{
	DUI.alert("On Attach");
}

function oncheck_savepassword(obj)
{
	if(obj.check == 0)
	{
		if(obj.getobjfromid(idAutoLogin).check!=0)
		{
			obj.getobjfromid(idAutoLogin).check=0;
		}
	}

}

function oncheck_autologin(obj)
{
	if(obj.check != 0)
	{
		if(obj.getobjfromid(idSavePassword).check==0)
		{
			obj.getobjfromid(idSavePassword).check=1;
		}
	}
}

function onload_login(obj)
{
	if($.IsDxRender)
	{
		obj.settimer(50);
	}
}

function ontimer_login(obj)
{
	dwHue += 3;
	if(dwHue > 360)
	{
		dwHue = 0;
	}
	obj.getobjfromid(1000).HUE = dwHue;
	obj.getobjfromid(1001).HUE = dwHue;
	obj.getobjfromid(1002).HUE = dwHue;
}

function onclick_reg(obj)
{
	obj.getobjfromid(1008).visible = true;
	obj.getobjfromid(1009).visible = 1;
}

function onclick_ret(obj)
{
	obj.getobjfromid(1008).visible = 0;
	obj.getobjfromid(1009).visible = 0;
}

function onclick_checkcode(obj)
{
	obj.enable = 0;
	dwCheckcode = 60;
	obj.text=dwCheckcode.toString();
	obj.settimer(1000);
}

function ontimer_checkcode(obj)
{
	dwCheckcode-=1;
	if(dwCheckcode < 1)
	{
		obj.text='i18n(reg.getcode)';
		obj.enable = true;
		obj.killtimer();
	}else
	{
		obj.text=dwCheckcode.toString();
	}

}