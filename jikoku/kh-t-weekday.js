// JavaScript Document
// 湘南台駅　平日
	///////////↓コピペ用
	//no[]=new bustime(,,"");


	
//////////　bustimeクラス　/////////////////////////////////////
	
	no=new Array();		//オブジェクトを入れる配列
	var cnt=0;		//カウンタ
no[0]=new bustime(15,15,"辻34");
no[1]=new bustime(15,27,"辻34");
no[2]=new bustime(15,32,"辻34");
no[3]=new bustime(15,43,"<span style='color:#860000'>辻35/急行</span>");
no[4]=new bustime(15,48,"辻34");
no[5]=new bustime(15,58,"<span style='color:#860000'>辻35/急行</span>");
no[6]=new bustime(16,3,"辻34");
no[7]=new bustime(16,15,"<span style='color:#860000'>辻35/急行</span>");
no[8]=new bustime(16,30,"<span style='color:#860000'>辻35/急行</span>");
no[9]=new bustime(16,45,"辻34");
no[10]=new bustime(16,55,"辻34");
no[11]=new bustime(17,5,"辻34");
no[12]=new bustime(17,15,"<span style='color:#860000'>辻35/急行</span>");
no[13]=new bustime(17,25,"辻34");
no[14]=new bustime(17,35,"<span style='color:#860000'>辻35/急行</span>");
no[15]=new bustime(17,45,"辻34");
no[16]=new bustime(17,55,"<span style='color:#860000'>辻35/急行</span>");
no[17]=new bustime(18,5,"<span style='color:#860000'>辻35/急行</span>");
no[18]=new bustime(18,15,"辻34");
no[19]=new bustime(18,25,"辻34");
no[20]=new bustime(18,45,"<span style='color:#860000'>辻35/急行</span>");
no[21]=new bustime(19,4,"<span style='color:#860000'>辻35/急行</span>");
no[22]=new bustime(19,24,"<span style='color:#860000'>辻35/急行</span>");
no[23]=new bustime(19,45,"辻34");
no[24]=new bustime(20,13,"辻34");
no[25]=new bustime(20,43,"辻34");
no[26]=new bustime(21,13,"辻34");
no[27]=new bustime(22,13,"辻34【最終】");
no[28]=new bustime("--","--","");
no[29]=new bustime("--","--","");
no[30]=new bustime("--","--","");
no[31]=new bustime("--","--","");
no[32]=new bustime("--","--","");





	function bustime(bt_hour,bt_minute,bt_kind){ 	//コンストラクタ(もどき) bt=bus time
	this.bt_hour=bt_hour;			
	this.bt_minute=bt_minute;
	this.bt_kind=bt_kind;
}	
