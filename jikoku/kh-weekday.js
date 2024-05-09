// JavaScript Document
// 湘南台駅　平日
	///////////↓コピペ用
	//no[]=new bustime(,,"");


	
//////////　bustimeクラス　/////////////////////////////////////
	
	no=new Array();		//オブジェクトを入れる配列
	var cnt=0;		//カウンタ
	
no[0]=new bustime(14,29,"<span style='color:#860000'>湘25/急行</span>");
no[1] = new bustime(14, 39, "湘23");
no[2]=new bustime(14,49,"<span style='color:#860000'>湘25/急行</span>");
no[3] = new bustime(14, 59, "湘23");
no[4] = new bustime(15, 8, "湘23");
no[5] = new bustime(15, 16, "<span style='color:#860000'>湘25/急行</span>");
no[6]=new bustime(15,24,"<span style='color:#860000'>湘25/急行</span>");
no[7] = new bustime(15, 28, "湘28/直行");
no[8]=new bustime(15,31,"<span style='color:#860000'>湘25/急行</span>");
no[9] = new bustime(15, 34, "湘28/直行");
no[10] = new bustime(15, 38, "<span style='color:#860000'>湘25/急行</span>");
no[11]=new bustime(15,45,"<span style='color:#860000'>湘25/急行</span>");
no[12] = new bustime(15, 50, "湘23");
no[13] = new bustime(15, 56, "<span style='color:#860000'>湘25/急行</span>");
no[14] = new bustime(16, 4, "<span style='color:#860000'>湘25/急行</span>");
no[15]=new bustime(16,14,"<span style='color:#860000'>湘25/急行</span>");
no[16] = new bustime(16, 18, "湘23");
no[17] = new bustime(16, 24, "<span style='color:#860000'>湘25/急行</span>");
no[18] = new bustime(16, 31, "<span style='color:#860000'>湘25/急行</span>");
no[19] = new bustime(16, 39, "<span style='color:#860000'>湘25/急行</span>");
no[20] = new bustime(16, 47, "<span style='color:#860000'>湘25/急行</span>");
no[21] = new bustime(16, 55, "<span style='color:#860000'>湘25/急行</span>");
no[22] = new bustime(17, 5, "<span style='color:#860000'>湘25/急行</span>");
no[23] = new bustime(17, 15, "<span style='color:#860000'>湘25/急行</span>");
no[24] = new bustime(17, 23, "<span style='color:#860000'>湘25/急行</span>");
no[25] = new bustime(17, 30, "<span style='color:#860000'>湘25/急行</span>");
no[26] = new bustime(17, 37, "<span style='color:#860000'>湘25/急行</span>");
no[27] = new bustime(17, 45, "<span style='color:#860000'>湘25/急行</span>");
no[28] = new bustime(17, 53, "<span style='color:#860000'>湘25/急行</span>");
no[29] = new bustime(18, 1, "<span style='color:#860000'>湘25/急行</span>");
no[30] = new bustime(18, 9, "<span style='color:#860000'>湘25/急行</span>");
no[31] = new bustime(18, 11, "湘28/直行");
no[32] = new bustime(18, 16, "<span style='color:#860000'>湘25/急行</span>");
no[33] = new bustime(18, 23, "<span style='color:#860000'>湘25/急行</span>");
no[34] = new bustime(18, 30, "<span style='color:#860000'>湘25/急行</span>");
no[35] = new bustime(18, 37, "<span style='color:#860000'>湘25/急行</span>");
no[36] = new bustime(18, 42, "湘28/直行");
no[37] = new bustime(18, 45, "<span style='color:#860000'>湘25/急行</span>");
no[38] = new bustime(19, 0, "<span style='color:#860000'>湘25/急行</span>");
no[39] = new bustime(19, 15, "<span style='color:#860000'>湘25/急行</span>");
no[40]=new bustime(19,30,"<span style='color:#860000'>湘25/急行</span>");
no[41]=new bustime(19,50,"湘23");
no[42]=new bustime(20,5,"湘23");
no[43]=new bustime(20,20,"湘23");
no[44]=new bustime(20,35,"湘23");
no[45]=new bustime(20,50,"湘23");
no[46]=new bustime(21,0,"湘23");
no[47]=new bustime(21,15,"湘23");
no[48]=new bustime(21,35,"湘23");
no[49]=new bustime(21,50,"湘23");
no[50]=new bustime(22,35,"湘23");



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
