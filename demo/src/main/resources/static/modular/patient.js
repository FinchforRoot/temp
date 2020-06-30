var table = layui.table;
var patient = {
    id: "patient",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

$(function () {

    table.render({
        elem: '#patient'
        , height: 600
        , url: "/patient"
        , title: '患者信息表'
        , toolbar: 'default'
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

    patient.update = function () {
        let id = $("#patientid").val();
        let record = $("#patientrecord").val();
        let name = $("#patientname").val();
        let gender = $("#patientgender").val();
        let age = $("#patientage").val();
        let inhos_date = $("#patientinhos_date").val();
        let outhos_date = $("#patientouthos_date").val();
        let doctorid = $("#patientdoctorid").val();
        let doorid = $("#patientdoorid").val();
        let data = {
            "id": id,
            "record": record,
            "name": name,
            "gender": gender,
            "address": address,
            "age": age,
            "inhos_date": inhos_date,
            "outhos_date": outhos_date,
            "doctorid": doctorid,
            "doorid": doorid,
        };
        $.ajax({
            type: "post",
            url: "/patient/update",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                if (result.code === "200") {
                    layer.msg("更新成功");
                    window.parent.location.reload();
                } else {
                    layer.msg("更新失败");
                }
            },
            error: function (e) {
                console.log(e);
                layer.msg("请求数据库异常");
            }
        })
    }

    table.on('toolbar(patient)', function (obj) {
        var checkStatus = table.checkStatus(obj.config.id)
            , data = checkStatus.data; //获取选中的数据
        switch (obj.event) {
            case 'add':
                layer.msg('添加');
                break;
            case 'update':
                if (data.length === 0) {
                    layer.msg('请选择一行');
                } else if (data.length > 1) {
                    layer.msg('只能同时编辑一个');
                } else {
                    layer.open({
                        type: 1,
                        title: '患者信息更新',
                        area: ['400px', '200px'],
                        content: "<label class='layui-form-label'>id</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientid' disabled value='" + checkStatus.data[0].id + "'></div>" +
                            "<label class='layui-form-label'>roomnum</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientrecord' value='" + checkStatus.data[0].record + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientname' value='" + checkStatus.data[0].name + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientgender' value='" + checkStatus.data[0].gender + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientage' value='" + checkStatus.data[0].age + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientinhos_date' value='" + checkStatus.data[0].inhos_date + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientouthos_date' value='" + checkStatus.data[0].outhos_date + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientdoctorid' value='" + checkStatus.data[0].doctorid + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='patientdoorid' value='" + checkStatus.data[0].doorid + "'></div>" +
                            "<button class='layui-btn layui-btn-normal' id='update' onclick='patient.update()'>更新</button>",
                    });
                }
                break;
            case 'delete':
                if (data.length === 0) {
                    layer.msg('请选择一行');
                } else {
                    $.ajax({
                        type: "post",
                        url: "/patient/delete?id=" + checkStatus.data[0].id,
                        data: "",
                        contentType: "application/json; charset=utf-8",
                        success: function (result) {
                            if (result.code === "200") {
                                layer.msg("删除成功");
                                window.parent.location.reload();
                            } else {
                                layer.msg("删除失败");
                            }
                        },
                        error: function (e) {
                            console.log(e);
                            layer.msg("请求数据库异常");
                        }
                    })
                }
                break;
        }
        ;
    });

})