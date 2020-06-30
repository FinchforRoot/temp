var table = layui.table;
var doctor = {
    id: "doctor",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

$(function () {
    table.render({
        elem: '#doctor'
        , height: 600
        , url: "/doctor"
        , title: '医生信息表'
        , toolbar: 'default'
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

    doctor.update = function () {
        let id = $("#doctorid").val();
        let idcard = $("#doctoridcard").val();
        let name = $("#doctorname").val();
        let age = $("#doctorage").val();
        let gender = $("#doctorgender").val();
        let rank = $("#doctorrank").val();
        let salary = $("#doctorsalary").val();
        let ksnum = $("#doctorksnum").val();
        let data = {
            "id": id,
            "idcard": idcard,
            "name": name,
            "age": age,
            "gender": gender,
            "rank": rank,
            "salary": salary,
            "ksnum": ksnum
        };
        $.ajax({
            type: "post",
            url: "/doctor/update",
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

    table.on('toolbar(doctor)', function (obj) {
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
                        title: '医生信息更新',
                        area: ['400px', '200px'],
                        content: "<label class='layui-form-label'>id</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorid' disabled value='" + checkStatus.data[0].id + "'></div>" +
                            "<label class='layui-form-label'>工作证号</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctoridcard' value='" + checkStatus.data[0].idcard + "'></div>" +
                            "<label class='layui-form-label'>姓名</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorname' value='" + checkStatus.data[0].name + "'></div>" +
                            "<label class='layui-form-label'>年龄</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorage' value='" + checkStatus.data[0].age + "'></div>" +
                            "<label class='layui-form-label'>性别</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorgender' value='" + checkStatus.data[0].gender + "'></div>" +
                            "<label class='layui-form-label'>职位</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorrank' value='" + checkStatus.data[0].rank + "'></div>" +
                            "<label class='layui-form-label'>薪水</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorsalary' value='" + checkStatus.data[0].salary + "'></div>" +
                            "<label class='layui-form-label'>科室编号</label><div class='layui-input-block'><input type='text' class='layui-input' id='doctorksnum' value='" + checkStatus.data[0].ksnum + "'></div>" +
                            "<button class='layui-btn layui-btn-normal' id='update' onclick='doctor.update()'>更新</button>",
                    });
                }
                break;
            case 'delete':
                if (data.length === 0) {
                    layer.msg('请选择一行');
                } else {
                    $.ajax({
                        type: "post",
                        url: "/doctor/delete?id=" + checkStatus.data[0].id,
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