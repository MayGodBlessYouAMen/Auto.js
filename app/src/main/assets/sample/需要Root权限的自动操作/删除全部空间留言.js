"auto";

setScreenMetrics(1080, 1920);
launchApp("QQ");

sleep(1500);

//点击动态图标
Tap(891, 1851);
//点击好友动态
Tap(192, 453);
//点击头像
Tap(155, 638);
//点击留言
Tap(747, 775);

while(true){
    if(currentPackage() == 'com.tencent.mobileqq'){
        //点击箭头图标
        Tap(1029, 433);
        //点击删除
        Tap(530, 820);
        //点击确定
        Tap(331, 1122);
    }
    sleep(200);
}
