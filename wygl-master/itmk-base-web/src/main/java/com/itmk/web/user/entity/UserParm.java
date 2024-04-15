package com.itmk.web.user.entity;

import lombok.Data;

/**
 * @Classname UserParm
 * @Description
 * @Date 2024/2/21 18:32
 * 
 */
@Data
public class UserParm {
    //页容量
    private Long pageSize;
    //当前页
    private Long currentPage;
    private String phone;
    private String loginName;

}
