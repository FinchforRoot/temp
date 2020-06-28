package com.example.demo.Dao;

/**
 * @author root
 * @Description
 * @date 2020/6/28 17:19
 */
public class Door {
    private int id;
    private int roomnum;
    private String address;

    public Door() {
    }

    public Door(int id, int roomnum, String address) {
        this.id = id;
        this.roomnum = roomnum;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRoomnum() {
        return roomnum;
    }

    public void setRoomnum(int roomnum) {
        this.roomnum = roomnum;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Door{" +
                "id=" + id +
                ", roomnum=" + roomnum +
                ", address='" + address + '\'' +
                '}';
    }
}
