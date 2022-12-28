//package com.example.OrderService.model;
//
//import com.example.OrderService.entity.Order;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//public class CouponTest {
//    Order r1;
//    @BeforeEach
//    public void before() {
//        r1=new Order(1, 22.5, 11 / 01 / 2022, 1, "happy", "test", "test@gmail.com");
//    }
//
//
//    @AfterEach
//    public void after() {
//        r1=null;
//    }
//
//    @Test
//    void testGetId() {
//        assertEquals(1, r1.getId());
//    }
//
//    @Test
//    void testGetcost() {
//        assertEquals(22.5, r1.getCost());
//    }
//
//    @Test
//    void testGetdate() {
//        assertEquals(11 / 01 / 2022, r1.getDate());
//    }
//
//
//    @Test
//    void testGetCategory() {
//        assertEquals(1, r1.getQuantity());
//    }
//
//    @Test
//    void testGetcouponname() {
//        assertEquals("happy", r1.getCouponName());
//    }
//
//    @Test
//    void testSetId() {
//        p1.setId(111);
//        assertEquals(101, p1.getId());
//    }
//
//    @Test
//    void testSetName() {
//        p1.setName("oppo");
//        assertEquals("oppo", p1.getName());
//    }
//
//    @Test
//    void testSetCategory() {
//        p1.setCategory("tv");
//        assertEquals("tv", p1.getCategory());
//    }
//
//    @Test
//    void testSetPrice() {
//        p1.setPrice(100);
//        assertEquals(100, p1.getPrice());
//    }
//
//}
//}
