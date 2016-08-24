var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.x = shape.y = 100;
        this.addChild(shape);
        //创建 Tween 对象
        egret.Tween.get(shape, {
            loop: true,
            onChange: this.onChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ rotation: 360 }, 2000) //设置2000毫秒内 rotation 属性变为360
            .wait(1000) //设置等待1000毫秒
            .call(this.onComplete, this, ["param1", { key: "key", value: 3 }]); //设置回调函数及作用域，可用于侦听动画完成
    }
    var d = __define,c=Main,p=c.prototype;
    p.onChange = function () {
        console.log("onChange");
    };
    p.onComplete = function (param1, param2) {
        console.log("onComplete");
        console.log(param1);
        console.log(param2);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map