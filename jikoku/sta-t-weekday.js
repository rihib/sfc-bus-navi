// JavaScript Document
// 湘南台駅　平日
	///////////↓コピペ用
	//no[]=new bustime(,,"");


	
//////////　bustimeクラス　/////////////////////////////////////
	
	no=new Array();		//オブジェクトを入れる配列
	var cnt=0;		//カウンタ
	
no[0]=new bustime(7,5,"辻34");
no[1]=new bustime(7,20,"辻34");
no[2]=new bustime(7,35,"辻34");
no[3]=new bustime(7,45,"辻34");
no[4]=new bustime(7,56,"辻34");
no[5]=new bustime(8,5,"辻34");
no[6]=new bustime(8,15,"辻34");
no[7]=new bustime(8,25,"辻34");
no[8]=new bustime(8,36,"<span style='color:#860000'>辻35/急行</span>");
no[9]=new bustime(8,46,"<span style='color:#860000'>辻35/急行</span>");
no[10]=new bustime(8,56,"<span style='color:#860000'>辻35/急行</span>");
no[11]=new bustime(9,4,"<span style='color:#860000'>辻35/急行</span>");
no[12]=new bustime(9,13,"辻34");
no[13]=new bustime(9,23,"辻34");
no[14]=new bustime(9,33,"辻34");
no[15]=new bustime(9,43,"辻34");
no[16]=new bustime(9,53,"辻34");
no[17]=new bustime(10,3,"<span style='color:#860000'>辻35/急行</span>");
no[18]=new bustime(10,13,"辻34");
no[19]=new bustime(10,23,"辻34");
no[20]=new bustime(10,33,"辻34");
no[21]=new bustime(10,43,"辻34");
no[22]=new bustime(10,53,"辻34");
no[23]=new bustime(11,5,"辻34");
no[24]=new bustime(11,20,"辻34");
no[25]=new bustime(11,35,"辻34");
no[26]=new bustime(11,50,"辻34");
no[27]=new bustime(12,5,"辻34");
no[28]=new bustime(12,20,"辻34");
no[29]=new bustime(12,35,"辻34");
no[30]=new bustime(12,50,"辻34");
no[31]=new bustime(13,5,"辻34");
no[32]=new bustime(13,20,"辻34");
no[33]=new bustime(13,35,"辻34");
no[34]=new bustime(13,49,"辻34");
no[35]=new bustime(14,3,"辻34");
no[36]=new bustime(14,18,"辻34");
no[37]=new bustime(14,33,"辻34");
no[38]=new bustime(14,48,"辻34");
no[39]=new bustime(15,3,"辻34");
no[40]=new bustime(15,18,"辻34");
no[41]=new bustime(15,33,"辻34");
no[42]=new bustime(15,48,"辻34");
no[43]=new bustime(16,3,"辻34");
no[44]=new bustime(16,18,"辻34");
no[45]=new bustime(16,33,"<span style='color:#860000'>辻35/急行</span>");
no[46]=new bustime(16,48,"<span style='color:#860000'>辻35/急行</span>");
no[47]=new bustime(17,3,"<span style='color:#860000'>辻35/急行</span>");
no[48]=new bustime(17,18,"<span style='color:#860000'>辻35/急行</span>");
no[49]=new bustime(17,35,"辻34");
no[50]=new bustime(17,50,"<span style='color:#860000'>辻35/急行</span>");
no[51]=new bustime(18,10,"<span style='color:#860000'>辻35/急行</span>");
no[52]=new bustime(18,30,"<span style='color:#860000'>辻35/急行</span>");
no[53]=new bustime(18,50,"辻34");
no[54]=new bustime(19,10,"<span style='color:#860000'>辻35/急行</span>");
no[55]=new bustime(19,33,"<span style='color:#860000'>辻35/急行</span>");
no[56]=new bustime(20,3,"<span style='color:#860000'>辻35/急行</span>");
no[57]=new bustime(20,33,"辻34");
no[58]=new bustime(21,5,"辻34");
no[59]=new bustime(21,35,"辻34");
no[60]=new bustime(22,35,"辻34【最終】");
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
