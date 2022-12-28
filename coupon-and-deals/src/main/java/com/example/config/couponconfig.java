//package com.example.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//
////import static jdk.internal.joptsimple.util.RegexMatcher.regex;
//import static springfox.documentation.builders.PathSelectors.regex;
//
//@Configuration
//@EnableSwagger2
//public class couponconfig {
//    @Bean
//    public Docket postApi(){
//        return new Docket(DocumentationType.SWAGGER_2).groupName("coupon-and-deals").apiInfo(apiInfo()).select()
//                .paths(regex("/couponAndDeals.*")).build();
//    }
//    private ApiInfo apiInfo(){
//        return  new ApiInfoBuilder().title("book")
//                .description("sample")
//                .termsOfServiceUrl("sample")
//                .license("mantra")
//                .licenseUrl("sample").version("1.0").build();
//    }
//}
