var table = layui.table;

var door = {
    id: "door",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

var patient = {
    id: "patient",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

var doctor = {
    id: "doctor",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

var keshi = {
    id: "keshi",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

door.update = function (){
    console.log("更新")
}

door.cl = function () {
    table.render({
        elem: '#door'
        , height: 600
        , url: "/door"
        , title: '病房信息表'
        ,toolbar:'default'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: 'ID', width: 80, align: 'center'}
            , {field: 'roomnum', title: '病房号', width: 120, align: 'center'}
            , {field: 'address', title: '病房地址', width: 120, align: 'center'}
        ]]
    });
};

keshi.cl = function () {
    table.render({
        elem: '#keshi'
        , height: 600
        , url: "/keshi"
        , title: '科室信息表'
        ,toolbar:'default'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: 'ID', width: 80, align: 'center'}
            , {field: 'ksnum', title: '科室编号', width: 120, align: 'center'}
            , {field: 'telephone', title: '科室电话', width: 120, align: 'center'}
            , {field: 'name', title: '科室名称', width: 180, align: 'center'}
            , {field: 'address', title: '科室地址', width: 180, align: 'center'}
        ]]
    });
};

patient.cl = function () {
    table.render({
        elem: '#patient'
        , height: 600
        , url: "/patient"
        , title: '患者信息表'
        ,toolbar:'default'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: 'ID', width: 80, align: 'center'}
            , {field: 'record', title: '患者病历', width: 180, align: 'center'}
            , {field: 'name', title: '患者姓名', width: 80, align: 'center'}
            , {field: 'gender', title: '患者性别', width: 80, align: 'center'}
            , {field: 'age', title: '患者年龄', width: 120, align: 'center'}
            , {field: 'inhos_date', title: '入院时间', width: 120, align: 'center'}
            , {field: 'outhos_date', title: '出院时间', width: 180, align: 'center'}
            , {field: 'doctorid', title: '主治医生', width: 180, align: 'center'}
            , {field: 'doorid', title: '病房号', width: 180, align: 'center'}
        ]]
    });
};

doctor.cl = function () {
    table.render({
        elem: '#doctor'
        , height: 600
        , url: "/doctor"
        , title: '医生信息表'
        ,toolbar:'default'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: 'ID', width: 80, align: 'center'}
            , {field: 'idcard', title: '工作证号', width: 120, align: 'center'}
            , {field: 'name', title: '医生姓名', width: 120, align: 'center'}
            , {field: 'age', title: '医生年龄', width: 120, align: 'center'}
            , {field: 'gender', title: '医生性别', width: 120, align: 'center'}
            , {field: 'rank', title: '医生职位', width: 120, align: 'center'}
            , {field: 'salary', title: '医生薪水', width: 180, align: 'center'}
            , {field: 'ksnum', title: '医生所属科室', width: 180, align: 'center'}
        ]]
    });
};

table.on('toolbar(door)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id)
        ,data = checkStatus.data; //获取选中的数据
    switch(obj.event){
        case 'add':
            layer.msg('添加');
            break;
        case 'update':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else if(data.length > 1){
                layer.msg('只能同时编辑一个');
            } else {
                layer.open({
                    type:1,
                    title: '病房更新',
                    area:['800px', '420px'],
                    content:"<label>id</label><input type='text' id='id' value='"+checkStatus.data[0].id+"'><br><label>roomnum</label><input type='text' id='roomnum' value='"+checkStatus.data[0].roomnum+"'><br><label>address</label><input type='text' id='address' value='"+checkStatus.data[0].address+"'><br><button id='update' onclick='door.update()'>更新</button>",
                });
            }
            break;
        case 'delete':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else {
                layer.msg('删除');
            }
            break;
    };
});
table.on('toolbar(keshi)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id)
        ,data = checkStatus.data; //获取选中的数据
    switch(obj.event){
        case 'add':
            layer.msg('添加');
            break;
        case 'update':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else if(data.length > 1){
                layer.msg('只能同时编辑一个');
            } else {
                layer.alert('编辑 [id]：'+ checkStatus.data[0].id);
            }
            break;
        case 'delete':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else {
                layer.msg('删除');
            }
            break;
    };
});
table.on('toolbar(doctor)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id)
        ,data = checkStatus.data; //获取选中的数据
    switch(obj.event){
        case 'add':
            layer.msg('添加');
            break;
        case 'update':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else if(data.length > 1){
                layer.msg('只能同时编辑一个');
            } else {
                layer.alert('编辑 [id]：'+ checkStatus.data[0].id);
            }
            break;
        case 'delete':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else {
                layer.msg('删除');
            }
            break;
    };
});
table.on('toolbar(patient)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id)
        ,data = checkStatus.data; //获取选中的数据
    switch(obj.event){
        case 'add':
            layer.msg('添加');
            break;
        case 'update':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else if(data.length > 1){
                layer.msg('只能同时编辑一个');
            } else {
                layer.alert('编辑 [id]：'+ checkStatus.data[0].id);
            }
            break;
        case 'delete':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else {
                layer.msg('删除');
            }
            break;
    };
});