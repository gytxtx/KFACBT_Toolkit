var idStaticTime = 1001;
var idBtnEvent = 1002;
var idCheckBox = 1003;
var idImageBox = 1004;

function onMain()
{
	DUI.setLong(EWL_CRBKG,$.argb(255,0,0,100));
	DUI.setBkg("./res/bkg.png");
	
	DUI.title = "Hello JS Control ExDirectUI";
	
	var oStatic = DUI.getObjFromID(idStaticTime);
	if (oStatic)
	{
		oStatic.top= DUI.height - 100;
		oStatic.event(NM_TIMER,"onStaticTimer");
		oStatic.setTimer(1000);
		onStaticTimer(oStatic);
	}
	
	var oBtn = DUI.getObjFromID(idBtnEvent);
	if (oBtn)
	{
		oBtn.text="Click Me";
		oBtn.event(NM_CLICK,"onBtnClick");
	}
	
	var oCheckBox = DUI.getObjFromID(idCheckBox);
	if (oCheckBox)
	{
		oCheckBox.event(NM_CLICK,"onCheckClick");
	}
	
	return 1;
}

//事件的参数列表为 obj,wParam,lParam 可以按需部分填写
function onStaticTimer(obj)
{
	obj.text = new Date().toLocaleString();
}

function onBtnClick()
{	
	DUI.alert("You Clicked The Button!");	
}

function onCheckClick(obj)
{
	DUI.getObjFromID(idBtnEvent).enable = !obj.check;
}