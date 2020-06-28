var door = {
    id:"door",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

var patient = {
    id:"patient",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

var doctor = {
    id:"doctor",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

var keshi = {
    id:"keshi",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

door.cl = function (){
    $.ajax({
        url: "/door",
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "",
        success: function (res) {
            console.log('获取door信息', res);
        },
        error: function () {
            layer.msg('获取失败');
        }
    });
};

keshi.cl = function (){
    $.ajax({
        url: "/keshi",
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "",
        success: function (res) {
            console.log('获取keshi信息', res);
        },
        error: function () {
            layer.msg('获取失败');
        }
    });
};

patient.cl = function (){
    $.ajax({
        url: "/patient",
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "",
        success: function (res) {
            console.log('获取patient信息', res);
        },
        error: function () {
            layer.msg('获取失败');
        }
    });
};

doctor.cl = function (){
    $.ajax({
        url: "/doctor",
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "",
        success: function (res) {
            console.log('获取doctor信息', res);
        },
        error: function () {
            layer.msg('获取失败');
        }
    });
};


$(function () {
    
});