package com.example.demo.Dao;

import java.util.Date;

/**
 * @author root
 * @Description
 * @date 2020/6/28 17:19
 */
public class Patient {
    private int id;
    private String record;
    private String name;
    private String gender;
    private int age;
    private Date inhos_date;
    private Date outhos_date;
    private int doctorid;
    private int doorid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRecord() {
        return record;
    }

    public void setRecord(String record) {
        this.record = record;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getInhos_date() {
        return inhos_date;
    }

    public void setInhos_date(Date inhos_date) {
        this.inhos_date = inhos_date;
    }

    public Date getOuthos_date() {
        return outhos_date;
    }

    public void setOuthos_date(Date outhos_date) {
        this.outhos_date = outhos_date;
    }

    public int getDoctorid() {
        return doctorid;
    }

    public void setDoctorid(int doctorid) {
        this.doctorid = doctorid;
    }

    public int getDoorid() {
        return doorid;
    }

    public void setDoorid(int doorid) {
        this.doorid = doorid;
    }

    public Patient() {
    }

    public Patient(int id, String record, String name, String gender, int age, Date inhos_date, Date outhos_date, int doctorid, int doorid) {
        this.id = id;
        this.record = record;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.inhos_date = inhos_date;
        this.outhos_date = outhos_date;
        this.doctorid = doctorid;
        this.doorid = doorid;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", record='" + record + '\'' +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                ", inhos_date=" + inhos_date +
                ", outhos_date=" + outhos_date +
                ", doctorid=" + doctorid +
                ", doorid=" + doorid +
                '}';
    }
}
