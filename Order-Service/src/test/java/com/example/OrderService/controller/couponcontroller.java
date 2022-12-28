//package com.example.OrderService.controller;
////
////package com.example.profileservice.controller;
//
//import com.example.OrderService.Service.OrderServiceImpl;
////import com.example.profileservice.entity.Profile;
////import com.example.profileservice.exception.NoProperDataException;
////import com.example.profileservice.service.ProfileServiceImpl;
//import com.example.OrderService.entity.Order;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.ObjectWriter;
//import com.fasterxml.jackson.databind.SerializationFeature;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.context.annotation.Profile;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.hamcrest.Matchers.hasSize;
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@SpringBootTest
//@AutoConfigureMockMvc
//public class couponcontroller {
//    @MockBean
//    private OrderServiceImpl orderserviceimpl;
//
//    @Autowired
//    MockMvc mockMvc;
//
//    @Test
//    void testorderServiceNotNull() {
//        assertThat(orderserviceimpl).isNotNull();
//    }
//
//    @Test
//    void testMockMvcNotNull() {
//        assertThat(mockMvc).isNotNull();
//    }
//
//    @Test
//    void testShowProfile() throws Exception {
//        Order r1 = new Order (122,22.5,1,"happy","rohi","rohi@gmail.com");
//        Order r2= new Order (123,22.5,1,"happy","rohi","rohi@gmail.com");
//        List<Order> orderList = new ArrayList<Order>();
//        orderList.add(r1);
//        orderList.add(r2);
//        when(orderserviceimpl.getAllOrders()).thenReturn(orderList);
//        mockMvc.perform(get("/order/allorders"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType("application/json"))
//                .andExpect(jsonPath("$[*]", hasSize(2)))
//                .andExpect(jsonPath("$[0].id").value(122))
//                .andExpect(jsonPath("$[0].cost").value(22.5))
//                .andExpect(jsonPath("$[0].quantity").value(1))
//                .andExpect(jsonPath("$[0].couponName").value("happy"))
//                .andExpect(jsonPath("$[0].userName").value("rohi"))
//                .andExpect(jsonPath("$[0].userEmail").value("rohi@gmail.com"))
//
//
//    }
//
//    @Test
//    void testShoworderInvalidId() throws Exception {
//        Order r1 = new Order (122,22.5,1,"happy","rohi","rohi@gmail.com");
//        when(orderserviceimpl.findOrderById(122));
//        MvcResult result = mockMvc.perform(get("/order/orders/2"))
//                .andExpect(status().isOk())
//                .andReturn();
//        assertThat(result.getResponse().toString())
//                .as("Profile with the id 2 doesn't exist");
//
//    }
//
//    @Test
//    void testDeleteorderbyId() throws Exception {
//
//        Order r1 = new Order (122,22.5,1,"happy","rohi","rohi@gmail.com");
//        String s = "deleted successfully....";
//        when(orderserviceimpl.deleteOrderById(122)).thenReturn(s);
//        mockMvc.perform(delete("/order/orders/122"))
//                .andExpect(status().isOk());
//
//    }
//
//    @Test
//    void testdeleteProfileInvalidId() throws Exception {
//        Profile p1 = new Profile(233, "alugol", "dinesh", "dinu@gmail.com", "1234567", "ongole", "4756928130");
//        String s = "deleted successfully....";
//        when(profileserviceImpl.deleteProfile(20)).thenReturn(s);
//        MvcResult result = mockMvc.perform(delete("/profile/profiles/20"))
//                .andExpect(status().isOk())
//                .andReturn();
//        assertThat(result.getResponse().toString())
//                .as("Profile with the id 20 doesn't exist");
//
//    }
//
//
//    @Test
//    void testAddProfile() throws Exception {
//        Profile p1 = new Profile(233, "alugol", "dinesh", "dinu@gmail.com", "1234567", "ongole", "4756928130");
//        String s = "added  profile successfully";
//        when(profileserviceImpl.addprofile(p1)).thenReturn(p1);
////		pdto.setPlanterId(service.getSequenceNumberForPlanter(Planter.SEQUENCE_NAME));
////		planterServiceimpl.addPlanter(pdto);
//
//        ObjectMapper mapper = new ObjectMapper();
//        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
//        ObjectWriter writer = mapper.writer().withDefaultPrettyPrinter();
//        String reqstr = writer.writeValueAsString(p1);
//        mockMvc.perform(post("/profile/addProfile/")
//                        .contentType("application/json")
//                        .content(reqstr))
//                .andExpect(status().isCreated());
//
//
//    }
//
//    @Test
//    void testAddProfileException() throws NoProperDataException {
//        Profile p1 = new Profile(233, "alugol", "dinesh", "dinu@gmail.com", "1234567", "ongole", "4756928130");
//        String s = "added  profile successfully";
//        when(profileserviceImpl.addprofile(p1)).thenReturn(p1);
////		pdto.setPlanterId(service.getSequenceNumberForPlanter(Planter.SEQUENCE_NAME));
////		planterServiceimpl.addPlanter(pdto);
//
//        ObjectMapper mapper = new ObjectMapper();
//        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
//        ObjectWriter writer = mapper.writer().withDefaultPrettyPrinter();
//        // String reqstr=writer.writeValueAsString(p1);
//        // mockMvc.perform(post("/profile/addProfile/")
//        //               .contentType("application/json"));
//        //                .content(reqstr))
//        //      .andExpect(status().isCreated());
//
//
//    }
//}