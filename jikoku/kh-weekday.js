// JavaScript Document
// 湘南台駅　平日
	///////////↓コピペ用
	//no[]=new bustime(,,"");


	
//////////　bustimeクラス　/////////////////////////////////////
	
	no=new Array();		//オブジェクトを入れる配列
	var cnt=0;		//カウンタ
	
no[0]=new bustime(15,16,"湘23");
no[1]=new bustime(15,21,"<span style='color:#860000'>湘25/急行</span>");
no[2]=new bustime(15,24,"湘23");
no[3]=new bustime(15,28,"湘28/直行【中高専用】");
no[4]=new bustime(15,30,"湘28/直行【中高専用】");
no[5]=new bustime(15,31,"湘23");
no[6]=new bustime(15,38,"<span style='color:#860000'>湘25/急行</span>");
no[7]=new bustime(15,43,"湘23");
no[8]=new bustime(15,51,"<span style='color:#860000'>湘25/急行</span>");
no[9]=new bustime(15,56,"湘23");
no[10]=new bustime(16,3,"<span style='color:#860000'>湘25/急行</span>");
no[11]=new bustime(16,8,"湘23");
no[12]=new bustime(16,13,"湘23");
no[13]=new bustime(16,20,"<span style='color:#860000'>湘25/急行</span>");
no[14]=new bustime(16,25,"湘23");
no[15]=new bustime(16,33,"<span style='color:#860000'>湘25/急行</span>");
no[16]=new bustime(16,38,"湘23");
no[17]=new bustime(16,45,"<span style='color:#860000'>湘25/急行</span>");
no[18]=new bustime(16,50,"湘23");
no[19]=new bustime(16,58,"<span style='color:#860000'>湘25/急行</span>");
no[20]=new bustime(17,5,"<span style='color:#860000'>湘25/急行</span>");
no[21]=new bustime(17,10,"湘23");
no[22]=new bustime(17,18,"<span style='color:#860000'>湘25/急行</span>");
no[23]=new bustime(17,23,"湘23");
no[24]=new bustime(17,30,"<span style='color:#860000'>湘25/急行</span>");
no[25]=new bustime(17,35,"湘23");
no[26]=new bustime(17,43,"<span style='color:#860000'>湘25/急行</span>");
no[27]=new bustime(17,48,"湘23");
no[28]=new bustime(17,55,"湘23");
no[29]=new bustime(18,3,"<span style='color:#860000'>湘25/急行</span>");
no[30]=new bustime(18,8,"湘23");
no[31]=new bustime(18,11,"湘28/直行【中高専用】");
no[32]=new bustime(18,16,"<span style='color:#860000'>湘25/急行</span>");
no[33]=new bustime(18,20,"湘23");
no[34]=new bustime(18,28,"<span style='color:#860000'>湘25/急行</span>");
no[35]=new bustime(18,35,"<span style='color:#860000'>湘25/急行</span>");
no[36]=new bustime(18,40,"湘23");
no[37]=new bustime(18,42,"湘28/直行【中高専用】");
no[38]=new bustime(18,47,"湘23");
no[39]=new bustime(18,55,"<span style='color:#860000'>湘25/急行</span>");
no[40]=new bustime(19,1,"<span style='color:#860000'>湘25/急行</span>");
no[41]=new bustime(19,7,"湘23");
no[42]=new bustime(19,15,"<span style='color:#860000'>湘25/急行</span>");
no[43]=new bustime(19,20,"湘23");
no[44]=new bustime(19,30,"湘23");
no[45]=new bustime(19,40,"湘23");
no[46]=new bustime(19,50,"湘23");
no[47]=new bustime(20,0,"湘23");
no[48]=new bustime(20,10,"湘23");
no[49]=new bustime(20,20,"湘23");
no[50]=new bustime(20,30,"湘23");
no[51]=new bustime(20,40,"湘23");
no[52]=new bustime(20,50,"湘23");
no[53]=new bustime(21,0,"湘23");
no[54]=new bustime(21,15,"湘23");
no[55]=new bustime(21,30,"湘23");
no[56]=new bustime(21,50,"湘23");
no[57]=new bustime(22,10,"湘23");
no[58]=new bustime(22,30,"湘23");
no[59]=new bustime(22,50,"湘23");
no[60]=new bustime(23,15,"湘26/深夜バス【最終・運賃倍額】");



no[61]=new bustime("--","--","");
no[62]=new bustime("--","--","");
no[63]=new bustime("--","--","");
no[64]=new bustime("--","--","");
no[65]=new bustime("--","--","");



	function bustime(bt_hour,bt_minute,bt_kind){ 	//コンストラクタ(もどき) bt=bus time
	this.bt_hour=bt_hour;			
	this.bt_minute=bt_minute;
	this.bt_kind=bt_kind;
}	
