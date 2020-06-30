package com.example.demo.Util;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

/**
 * @author root
 * @Description
 * @date 2020/6/28 17:09
 */
public class DbUtil {

    public static final String URL = "jdbc:mysql://localhost:3306/hospital?serverTimezone=UTC";
    public static final String USER = "root";
    public static final String PASSWORD = "root";

    public static Connection getConnection(){
        Connection conn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conn;
    }

    public static Map operDB(String sql){
        Map m = new HashMap();
        Connection conn = DbUtil.getConnection();
        PreparedStatement ptmt = null;
        try {
            ptmt = conn.prepareStatement(sql);
            int i = ptmt.executeUpdate();
            System.out.println(i);
        } catch (SQLException e) {
            e.printStackTrace();
            m.put("code", "303");
            return m;
        }
        m.put("code","200");
        return m;
    }
}
