package com.example.demo.Controller;

import com.example.demo.Dao.Doctor;
import com.example.demo.Dao.Door;
import com.example.demo.Dao.Keshi;
import com.example.demo.Dao.Patient;
import com.example.demo.Util.DbUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author root
 * @Description
 * @date 2020/6/28 16:50
 */
@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping("/aaa")
    public String index(){
        return "index";
    }

    @GetMapping("/keshi")
    @ResponseBody
    public Map getKeShi() throws SQLException {
        Map m = new HashMap();
        Connection conn = DbUtil.getConnection();
        String sql = "select * from keshi";
        PreparedStatement ptmt = conn.prepareStatement(sql);
        ResultSet rs = ptmt.executeQuery();
        List lists = new ArrayList();
        while (rs.next()){
            Keshi keshi = new Keshi();
            keshi.setId(rs.getInt("id"));
            keshi.setName(rs.getString("name"));
            keshi.setAddress(rs.getString("address"));
            keshi.setKsnum(rs.getInt("ksnum"));
            keshi.setTelephone(rs.getString("telephone"));
            lists.add(keshi);
        }
        m.put("code",200);
        m.put("data",lists);
        return m;
    }

    @GetMapping("/doctor")
    @ResponseBody
    public Map getDoctor() throws SQLException {
        Map m = new HashMap();
        Connection conn = DbUtil.getConnection();
        String sql = "select * from doctor";
        PreparedStatement ptmt = conn.prepareStatement(sql);
        ResultSet rs = ptmt.executeQuery();
        List lists = new ArrayList();
        while (rs.next()){
            Doctor doctor = new Doctor();
            doctor.setAge(rs.getInt("age"));
            doctor.setGender(rs.getString("gender"));
            doctor.setIdcard(rs.getInt("idcard"));
            doctor.setKsnum(rs.getInt("ksnum"));
            doctor.setRank(rs.getString("rank"));
            doctor.setSalary(rs.getString("salary"));
            doctor.setId(rs.getInt("id"));
            doctor.setName(rs.getString("name"));
            lists.add(doctor);
        }
        m.put("code",200);
        m.put("data",lists);
        return m;
    }

    @GetMapping("/door")
    @ResponseBody
    public Map getDoor() throws SQLException {
        Map m = new HashMap();
        Connection conn = DbUtil.getConnection();
        String sql = "select * from door";
        PreparedStatement ptmt = conn.prepareStatement(sql);
        ResultSet rs = ptmt.executeQuery();
        List lists = new ArrayList();
        while (rs.next()){
            Door door = new Door();
            door.setAddress(rs.getString("address"));
            door.setId(rs.getInt("id"));
            door.setRoomnum(rs.getInt("roomnum"));
            lists.add(door);
        }
        m.put("code",200);
        m.put("data",lists);
        return m;
    }

    @GetMapping("/patient")
    @ResponseBody
    public Map getPatient() throws SQLException {
        Map m = new HashMap();
        Connection conn = DbUtil.getConnection();
        String sql = "select * from patient";
        PreparedStatement ptmt = conn.prepareStatement(sql);
        ResultSet rs = ptmt.executeQuery();
        List lists = new ArrayList();
        while (rs.next()){
            Patient p = new Patient();
            p.setAge(rs.getInt("age"));
            p.setDoctorid(rs.getInt("doctorid"));
            p.setDoorid(rs.getInt("doorid"));
            p.setGender(rs.getString("gender"));
            p.setId(rs.getInt("id"));
            p.setInhos_date(rs.getDate("inhos_date"));
            p.setOuthos_date(rs.getDate("outhos_date"));
            p.setName(rs.getString("name"));
            p.setRecord(rs.getString("record"));
            lists.add(p);
        }
        m.put("code",200);
        m.put("data",lists);
        return m;
    }
}
