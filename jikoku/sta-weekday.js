// JavaScript Document
// 湘南台駅　平日
	///////////↓コピペ用
	//no[]=new bustime(,,"");


	
//////////　bustimeクラス　/////////////////////////////////////
	
	no=new Array();		//オブジェクトを入れる配列
	var cnt=0;		//カウンタ
	
no[0]=new bustime(7,10,"湘23");
no[1]=new bustime(7,17,"湘23");
no[2]=new bustime(7,24,"<span style='color:#860000'>湘25/急行</span>");
no[3]=new bustime(7,30,"湘23");
no[4]=new bustime(7,35,"<span style='color:#860000'>湘25/急行</span>");
no[5]=new bustime(7,40,"湘23");
no[6]=new bustime(7,44,"湘23");
no[7]=new bustime(7,48,"湘23");
no[8]=new bustime(7,53,"<span style='color:#860000'>湘25/急行</span>");
no[9]=new bustime(7,56,"湘23");
no[10]=new bustime(8,1,"<span style='color:#860000'>湘25/急行</span>");
no[11]=new bustime(8,4,"湘23");
no[12]=new bustime(8,9,"<span style='color:#860000'>湘25/急行</span>");
no[13]=new bustime(8,12,"湘23");
no[14]=new bustime(8,17,"<span style='color:#860000'>湘25/急行</span>");
no[15]=new bustime(8,20,"湘23");
no[16]=new bustime(8,24,"湘23");
no[17]=new bustime(8,28,"湘23");
no[18]=new bustime(8,35,"<span style='color:#860000'>湘25/急行</span>");
no[19]=new bustime(8,40,"湘23");
no[20]=new bustime(8,45,"<span style='color:#860000'>湘25/急行</span>");
no[21]=new bustime(8,49,"湘23");
no[22]=new bustime(8,55,"<span style='color:#860000'>湘25/急行</span>");
no[23]=new bustime(8,59,"湘23");
no[24]=new bustime(9,4,"<span style='color:#860000'>湘25/急行</span>");
no[25]=new bustime(9,8,"湘23");
no[26]=new bustime(9,12,"湘23");
no[27]=new bustime(9,16,"湘23");
no[28]=new bustime(9,22,"<span style='color:#860000'>湘25/急行</span>");
no[29]=new bustime(9,26,"湘23");
no[30]=new bustime(9,32,"<span style='color:#860000'>湘25/急行</span>");
no[31]=new bustime(9,36,"湘23");
no[32]=new bustime(9,40,"湘23");
no[33]=new bustime(9,50,"<span style='color:#860000'>湘25/急行</span>");
no[34]=new bustime(9,55,"湘23");
no[35]=new bustime(10,0,"湘23");
no[36]=new bustime(10,5,"湘23");
no[37]=new bustime(10,12,"<span style='color:#860000'>湘25/急行</span>");
no[38]=new bustime(10,17,"湘23");
no[39]=new bustime(10,25,"<span style='color:#860000'>湘25/急行</span>");
no[40]=new bustime(10,30,"湘23");
no[41]=new bustime(10,35,"湘23");
no[42]=new bustime(10,40,"湘23");
no[43]=new bustime(10,45,"湘23");
no[44]=new bustime(10,50,"湘23");
no[45]=new bustime(10,55,"湘23");
no[46]=new bustime(11,0,"湘23");
no[47]=new bustime(11,5,"湘23");
no[48]=new bustime(11,10,"湘23");
no[49]=new bustime(11,15,"湘23");
no[50]=new bustime(11,20,"湘23");
no[51]=new bustime(11,30,"湘23");
no[52]=new bustime(11,40,"湘23");
no[53]=new bustime(11,50,"湘23");
no[54]=new bustime(12,0,"<span style='color:#860000'>湘25/急行</span>");
no[55]=new bustime(12,10,"湘23");
no[56]=new bustime(12,20,"湘23");
no[57]=new bustime(12,25,"湘23");
no[58]=new bustime(12,30,"湘23");
no[59]=new bustime(12,35,"湘23");
no[60]=new bustime(12,40,"湘23");
no[61]=new bustime(12,45,"<span style='color:#860000'>湘25/急行</span>");
no[62]=new bustime(12,50,"湘23");
no[63]=new bustime(12,55,"湘23");
no[64]=new bustime(13,5,"<span style='color:#860000'>湘25/急行</span>");
no[65]=new bustime(13,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[66]=new bustime(13,25,"湘23");
no[67]=new bustime(13,35,"湘23");
no[68]=new bustime(13,45,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[69]=new bustime(13,55,"<span style='color:#860000'>湘25/急行</span>");
no[70]=new bustime(14,5,"湘23");
no[71]=new bustime(14,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[72]=new bustime(14,20,"湘23");
no[73]=new bustime(14,25,"湘23");
no[74]=new bustime(14,35,"湘23");
no[75]=new bustime(14,45,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[76]=new bustime(14,55,"湘23");
no[77]=new bustime(15,5,"湘23");
no[78]=new bustime(15,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[79]=new bustime(15,25,"湘23");
no[80]=new bustime(15,35,"湘23");
no[81]=new bustime(15,40,"<span style='color:#860000'>湘25/急行</span>");
no[82]=new bustime(15,45,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[83]=new bustime(15,52,"湘23");
no[84]=new bustime(16,0,"<span style='color:#860000'>湘25/急行</span>");
no[85]=new bustime(16,5,"湘23");
no[86]=new bustime(16,10,"<span style='color:#860000'>湘25/急行</span>");
no[87]=new bustime(16,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[88]=new bustime(16,21,"<span style='color:#860000'>湘25/急行</span>");
no[89]=new bustime(16,27,"湘23");
no[90]=new bustime(16,33,"湘23");
no[91]=new bustime(16,39,"<span style='color:#860000'>湘25/急行</span>");
no[92]=new bustime(16,45,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[93]=new bustime(16,52,"<span style='color:#860000'>湘25/急行</span>");
no[94]=new bustime(17,0,"湘23");
no[95]=new bustime(17,8,"<span style='color:#860000'>湘25/急行</span>");
no[96]=new bustime(17,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[97]=new bustime(17,21,"<span style='color:#860000'>湘25/急行</span>");
no[98]=new bustime(17,27,"<span style='color:#860000'>湘25/急行</span>");
no[99]=new bustime(17,33,"湘23");
no[100]=new bustime(17,39,"<span style='color:#860000'>湘25/急行</span>");
no[101]=new bustime(17,45,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[102]=new bustime(17,50,"<span style='color:#860000'>湘25/急行</span>");
no[103]=new bustime(17,57,"湘23");
no[104]=new bustime(18,5,"<span style='color:#860000'>湘25/急行</span>");
no[105]=new bustime(18,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[106]=new bustime(18,23,"<span style='color:#860000'>湘25/急行</span>");
no[107]=new bustime(18,30,"湘23");
no[108]=new bustime(18,35,"<span style='color:#860000'>湘25/急行</span>");
no[109]=new bustime(18,42,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[110]=new bustime(18,47,"<span style='color:#860000'>湘25/急行</span>");
no[111]=new bustime(18,54,"<span style='color:#860000'>湘25/急行</span>");
no[112]=new bustime(19,3,"湘23");
no[113]=new bustime(19,13,"<span style='color:#860000'>湘25/急行</span>");
no[114]=new bustime(19,17,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[115]=new bustime(19,21,"<span style='color:#860000'>湘25/急行</span>");
no[116]=new bustime(19,27,"湘23");
no[117]=new bustime(19,33,"<span style='color:#860000'>湘25/急行</span>");
no[118]=new bustime(19,39,"湘23");
no[119]=new bustime(19,45,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[120]=new bustime(19,55,"湘23");
no[121]=new bustime(20,5,"湘23");
no[122]=new bustime(20,15,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[123]=new bustime(20,25,"湘23");
no[124]=new bustime(20,35,"湘23");
no[125]=new bustime(20,50,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[126]=new bustime(21,5,"湘23");
no[127]=new bustime(21,20,"<span style='color:#2b7100'>湘24/笹久保経由</span>");
no[128]=new bustime(21,35,"湘23");
no[129]=new bustime(21,50,"<span style='color:#2b7100'>湘24/笹久保経由</span>【最終】");
no[130]=new bustime("--","--","");
no[131]=new bustime("--","--","");
no[132]=new bustime("--","--","");
no[133]=new bustime("--","--","");
no[134]=new bustime("--","--","");




	function bustime(bt_hour,bt_minute,bt_kind){ 	//コンストラクタ(もどき) bt=bus time
	this.bt_hour=bt_hour;			
	this.bt_minute=bt_minute;
	this.bt_kind=bt_kind;
}	
