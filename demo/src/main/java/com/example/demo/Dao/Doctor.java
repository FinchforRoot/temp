package com.example.demo.Dao;

/**
 * @author root
 * @Description
 * @date 2020/6/28 17:19
 */
public class Doctor {
    private int id;
    private int idcard;
    private String name;
    private int age;
    private String gender;
    private String rank;
    private String salary;
    private int ksnum;

    @Override
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", idcard=" + idcard +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", rank='" + rank + '\'' +
                ", salary='" + salary + '\'' +
                ", ksnum=" + ksnum +
                '}';
    }

    public Doctor(int id, int idcard, String name, int age, String gender, String rank, String salary, int ksnum) {
        this.id = id;
        this.idcard = idcard;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.rank = rank;
        this.salary = salary;
        this.ksnum = ksnum;
    }

    public Doctor() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdcard() {
        return idcard;
    }

    public void setIdcard(int idcard) {
        this.idcard = idcard;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public int getKsnum() {
        return ksnum;
    }

    public void setKsnum(int ksnum) {
        this.ksnum = ksnum;
    }
}
