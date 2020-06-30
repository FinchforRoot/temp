package com.example.demo.Controller;

import com.example.demo.Dao.Doctor;
import com.example.demo.Dao.Door;
import com.example.demo.Dao.Keshi;
import com.example.demo.Dao.Patient;
import com.example.demo.Util.DbUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping("/ks")
    public String ks() {
        return "keshi";
    }

    @RequestMapping("/bf")
    public String bf() {
        return "door";
    }

    @RequestMapping("/ys")
    public String ys() {
        return "doctor";
    }

    @RequestMapping("/hz")
    public String hz() {
        return "patient";
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
        while (rs.next()) {
            Keshi keshi = new Keshi();
            keshi.setId(rs.getInt("id"));
            keshi.setName(rs.getString("name"));
            keshi.setAddress(rs.getString("address"));
            keshi.setKsnum(rs.getInt("ksnum"));
            keshi.setTelephone(rs.getString("telephone"));
            lists.add(keshi);
        }
        m.put("code", 0);
        m.put("data", lists);
        return m;
    }

    @PostMapping("/keshi/update")
    @ResponseBody
    public Map keshiUpdate(@RequestBody Keshi keshi) {
        String sql = "update keshi set ksnum = '" + String.valueOf(keshi.getKsnum()) + "',telephone = '" + String.valueOf(keshi.getTelephone()) + "',name = '" + String.valueOf(keshi.getName()) + "',address = '" + String.valueOf(keshi.getAddress()) + "' where id = '" + String.valueOf(keshi.getId()) + "';";
        return DbUtil.operDB(sql);
    }

    @PostMapping("/keshi/delete")
    @ResponseBody
    public Map keshiDelete(@RequestParam("id") String id) {
        String sql = "delete from keshi where id = '" + id + "';";
        return DbUtil.operDB(sql);
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
        while (rs.next()) {
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
        m.put("code", 0);
        m.put("data", lists);
        return m;
    }

    @PostMapping("/doctor/update")
    @ResponseBody
    public Map doctorUpdate(@RequestBody Doctor doctor) {
        String sql = "update doctor set idcard = '" + String.valueOf(doctor.getIdcard()) + "',name = '" + String.valueOf(doctor.getName()) + "',age = '" + String.valueOf(doctor.getAge()) + "',gender = '" + String.valueOf(doctor.getGender()) + "',rank = '" + String.valueOf(doctor.getRank()) + "',salary = '" + String.valueOf(doctor.getSalary()) + "',ksnum = '" + doctor.getKsnum() + "' where id = '" + String.valueOf(doctor.getId()) + "';";
        return DbUtil.operDB(sql);
    }

    @PostMapping("/doctor/delete")
    @ResponseBody
    public Map doctorDelete(@RequestParam("id") String id) {
        String sql = "delete from doctor where id = '" + id + "';";
        return DbUtil.operDB(sql);
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
        while (rs.next()) {
            Door door = new Door();
            door.setAddress(rs.getString("address"));
            door.setId(rs.getInt("id"));
            door.setRoomnum(rs.getInt("roomnum"));
            lists.add(door);
        }
        m.put("code", 0);
        m.put("data", lists);
        return m;
    }

    @PostMapping("/door/update")
    @ResponseBody
    public Map doorUpdate(@RequestBody Door door) {
        String sql = "update door set roomnum = '" + String.valueOf(door.getRoomnum()) + "',address = '" + String.valueOf(door.getAddress()) + "' where id = '" + String.valueOf(door.getId()) + "';";
        return DbUtil.operDB(sql);
    }

    @PostMapping("/door/delete")
    @ResponseBody
    public Map doorDelete(@RequestParam("id") String id) {
        String sql = "delete from door where id = '" + id + "';";
        return DbUtil.operDB(sql);
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
        while (rs.next()) {
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
        m.put("code", 0);
        m.put("data", lists);
        return m;
    }

    @PostMapping("/patient/update")
    @ResponseBody
    public Map patientUpdate(@RequestBody Patient patient) {
        String sql = "update patient set record = '" + String.valueOf(patient.getRecord()) + "',name = '" + String.valueOf(patient.getName()) + "',gender = '"+String.valueOf(patient.getGender())+"',age = '"+String.valueOf(patient.getAge())+"',inhos_date = '"+String.valueOf(patient.getInhos_date())+"',outhos_date = '"+String.valueOf(patient.getOuthos_date())+"',doctorid = '"+String.valueOf(patient.getDoctorid())+"',doorid = '"+String.valueOf(patient.getDoorid())+"' where id = '" + String.valueOf(patient.getId()) + "';";
        return DbUtil.operDB(sql);
    }

    @PostMapping("/patient/delete")
    @ResponseBody
    public Map patientDelete(@RequestParam("id") String id) {
        String sql = "delete from patient where id = '" + id + "';";
        return DbUtil.operDB(sql);
    }
}
