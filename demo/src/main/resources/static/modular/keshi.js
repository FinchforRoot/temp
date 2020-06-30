var table = layui.table;
var keshi = {
    id: "keshi",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

$(function () {

    table.render({
        elem: '#keshi'
        , height: 600
        , url: "/keshi"
        , title: '科室信息表'
        , toolbar: 'default'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: 'ID', width: 80, align: 'center'}
            , {field: 'ksnum', title: '科室编号', width: 120, align: 'center'}
            , {field: 'telephone', title: '科室电话', width: 120, align: 'center'}
            , {field: 'name', title: '科室名称', width: 180, align: 'center'}
            , {field: 'address', title: '科室地址', width: 180, align: 'center'}
        ]]
    });


    keshi.update = function () {
        let id = $("#keshiid").val();
        let ksnum = $("#keshiksnum").val();
        let telephone = $("#keshitelephone").val();
        let name = $("#keshiname").val();
        let address = $("#keshiaddress").val();
        let data = {"id": id, "ksnum": ksnum, "telephone": telephone, "name": name, "address": address};
        $.ajax({
            type: "post",
            url: "/keshi/update",
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

    table.on('toolbar(keshi)', function (obj) {
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
                        title: '科室更新',
                        area: ['400px', '200px'],
                        content: "<label class='layui-form-label'>id</label><div class='layui-input-block'><input type='text' class='layui-input' id='keshiid' disabled value='" + checkStatus.data[0].id + "'></div>" +
                            "<label class='layui-form-label'>科室编号</label><div class='layui-input-block'><input type='text' class='layui-input' id='keshiksnum' value='" + checkStatus.data[0].ksnum + "'></div>" +
                            "<label class='layui-form-label'>科室电话</label><div class='layui-input-block'><input type='text' class='layui-input' id='keshitelephone' value='" + checkStatus.data[0].telephone + "'></div>" +
                            "<label class='layui-form-label'>科室名称</label><div class='layui-input-block'><input type='text' class='layui-input' id='keshiname' value='" + checkStatus.data[0].name + "'></div>" +
                            "<label class='layui-form-label'>科室地址</label><div class='layui-input-block'><input type='text' class='layui-input' id='keshiaddress' value='" + checkStatus.data[0].address + "'></div>" +
                            "<button class='layui-btn layui-btn-normal' id='update' onclick='keshi.update()'>更新</button>",
                    });
                }
                break;
            case 'delete':
                if (data.length === 0) {
                    layer.msg('请选择一行');
                } else {
                    $.ajax({
                        type: "post",
                        url: "/keshi/delete?id=" + checkStatus.data[0].id,
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