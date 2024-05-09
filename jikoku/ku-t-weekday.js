// JavaScript Document
// 湘南台駅　平日
	///////////↓コピペ用
	//no[]=new bustime(,,"");


	
//////////　bustimeクラス　/////////////////////////////////////
	
	no=new Array();		//オブジェクトを入れる配列
	var cnt=0;		//カウンタ
	
no[0]=new bustime(7,2,"辻34");
no[1]=new bustime(7,46,"辻34");
no[2]=new bustime(7,58,"辻34");
no[3]=new bustime(8,16,"辻34");
no[4]=new bustime(8,26,"辻34");
no[5]=new bustime(8,36,"辻34");
no[6]=new bustime(8,46,"辻34");
no[7]=new bustime(9,0,"辻34");
no[8]=new bustime(9,14,"<span style='color:#860000'>辻35/急行</span>");
no[9]=new bustime(9,29,"辻34");
no[10]=new bustime(9,44,"辻34");
no[11]=new bustime(10,1,"辻34");
no[12]=new bustime(10,16,"辻34");
no[13]=new bustime(10,31,"辻34");
no[14]=new bustime(10,46,"辻34");
no[15]=new bustime(11,1,"辻34");
no[16]=new bustime(11,16,"辻34");
no[17]=new bustime(11,31,"辻34");
no[18]=new bustime(11,46,"辻34");
no[19]=new bustime(12,1,"辻34");
no[20]=new bustime(12,16,"辻34");
no[21]=new bustime(12,31,"辻34");
no[22]=new bustime(12,46,"辻34");
no[23]=new bustime(13,1,"辻34");
no[24]=new bustime(13,16,"辻34");
no[25]=new bustime(13,31,"辻34");
no[26]=new bustime(13,46,"辻34");
no[27]=new bustime(14,1,"辻34");
no[28]=new bustime(14,16,"辻34");
no[29]=new bustime(14,31,"辻34");
no[30]=new bustime(14,46,"辻34");
no[31]=new bustime(15,1,"辻34");
no[32]=new bustime(15,16,"辻34");
no[33]=new bustime(15,28,"辻34");
no[34]=new bustime(15,33,"辻34");
no[35]=new bustime(15,44,"<span style='color:#860000'>辻35/急行</span>");
no[36]=new bustime(15,49,"辻34");
no[37]=new bustime(15,59,"<span style='color:#860000'>辻35/急行</span>");
no[38]=new bustime(16,4,"辻34");
no[39]=new bustime(16,16,"<span style='color:#860000'>辻35/急行</span>");
no[40]=new bustime(16,31,"<span style='color:#860000'>辻35/急行</span>");
no[41]=new bustime(16,46,"辻34");
no[42]=new bustime(16,56,"辻34");
no[43]=new bustime(17,6,"辻34");
no[44]=new bustime(17,16,"<span style='color:#860000'>辻35/急行</span>");
no[45]=new bustime(17,26,"辻34");
no[46]=new bustime(17,36,"<span style='color:#860000'>辻35/急行</span>");
no[47]=new bustime(17,46,"辻34");
no[48]=new bustime(17,56,"<span style='color:#860000'>辻35/急行</span>");
no[49]=new bustime(18,6,"<span style='color:#860000'>辻35/急行</span>");
no[50]=new bustime(18,16,"辻34");
no[51]=new bustime(18,26,"辻34");
no[52]=new bustime(18,46,"<span style='color:#860000'>辻35/急行</span>");
no[53]=new bustime(19,5,"<span style='color:#860000'>辻35/急行</span>");
no[54]=new bustime(19,25,"<span style='color:#860000'>辻35/急行</span>");
no[55]=new bustime(19,46,"辻34");
no[56]=new bustime(20,14,"辻34");
no[57]=new bustime(20,44,"辻34");
no[58]=new bustime(21,14,"辻34");
no[59]=new bustime(22,14,"辻34【最終】");
no[60]=new bustime("--","--","");
no[61]=new bustime("--","--","");
no[62]=new bustime("--","--","");
no[63]=new bustime("--","--","");
no[64]=new bustime("--","--","");




	function bustime(bt_hour,bt_minute,bt_kind){ 	//コンストラクタ(もどき) bt=bus time
	this.bt_hour=bt_hour;			
	this.bt_minute=bt_minute;
	this.bt_kind=bt_kind;
}	
