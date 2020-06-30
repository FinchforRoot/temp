var table = layui.table;

var door = {
    id: "door",
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

$(function () {

    table.render({
        elem: '#door'
        , height: 600
        , url: "/door"
        , title: '病房信息表'
        , toolbar: 'default'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: 'ID', width: 80, align: 'center'}
            , {field: 'roomnum', title: '病房号', width: 120, align: 'center'}
            , {field: 'address', title: '病房地址', width: 240, align: 'center'}
        ]]
    });

    door.update = function () {
        let id = $("#doorid").val();
        let roomnum = $("#doorroomnum").val();
        let address = $("#dooraddress").val();
        let data = {"id": id, "roomnum": roomnum, "address": address};
        $.ajax({
            type: "post",
            url: "/door/update",
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


    table.on('toolbar(door)', function (obj) {
        let checkStatus = table.checkStatus(obj.config.id)
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
                        title: '病房更新',
                        area: ['400px', '200px'],
                        content: "<label class='layui-form-label'>id</label><div class='layui-input-block'><input type='text' class='layui-input' id='doorid' disabled value='" + checkStatus.data[0].id + "'></div>" +
                            "<label class='layui-form-label'>roomnum</label><div class='layui-input-block'><input type='text' class='layui-input' id='doorroomnum' value='" + checkStatus.data[0].roomnum + "'></div>" +
                            "<label class='layui-form-label'>address</label><div class='layui-input-block'><input type='text' class='layui-input' id='dooraddress' value='" + checkStatus.data[0].address + "'></div>" +
                            "<button class='layui-btn layui-btn-normal' id='update' onclick='door.update()'>更新</button>",
                    });
                }
                break;
            case 'delete':
                if (data.length === 0) {
                    layer.msg('请选择一行');
                } else {
                    $.ajax({
                        type: "post",
                        url: "/door/delete?id=" + checkStatus.data[0].id,
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