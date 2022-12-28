import axios from "axios";
import authHeader from "./auth-header";

const Coupon_URL = "http://localhost:6789/";
const users_URL="http://localhost:8888/";

class CouponService {
  addCoupon(couponName, couponValidity,description,couponCode,couponCategory,couponPrice,couponQuantity,couponBrand) {
    return axios.post(Coupon_URL + "couponAndDeals/create", {
      couponName,
      couponValidity,
      description,
      couponCode,
      couponCategory,
      couponPrice,
      couponQuantity,
      couponBrand
    });
  }

  getAllUsers() {
    return axios.get(users_URL+'admin/profileDetails/getAll');
  }

  getAllCoupons() {
    return axios.get(Coupon_URL + 'couponAndDeals/getAll');
  }
  deleteCoupon(couponId) {
    return axios.delete(Coupon_URL  + 'couponAndDeals/delete/' + couponId);
  }
  updateCoupon(couponId){
    return axios.put (Coupon_URL  + 'couponAndDeals/update/' + couponId);
  }
}

export default new CouponService();
