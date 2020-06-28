package com.example.demo.Util;

import java.sql.*;

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

}
