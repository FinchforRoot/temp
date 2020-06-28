package com.example.demo.Dao;

/**
 * @author root
 * @Description
 * @date 2020/6/28 17:19
 */
public class keshi {
    private int id;
    private int ksnum;
    private String telephone;
    private String name;
    private String address;

    public keshi() {
    }

    public keshi(int id, int ksnum, String telephone, String name, String address) {
        this.id = id;
        this.ksnum = ksnum;
        this.telephone = telephone;
        this.name = name;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getKsnum() {
        return ksnum;
    }

    public void setKsnum(int ksnum) {
        this.ksnum = ksnum;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "keshi{" +
                "id=" + id +
                ", ksnum=" + ksnum +
                ", telephone='" + telephone + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
