import Vue from 'vue';
import Router from 'vue-router';

import login from '../template/login';

import admin from '../template/admin';

import home from '../template/home';

import departmentManage from '../template/baseData/departmentManage';
import handleLog from '../template/baseData/handleLog';
import dataDict from '../template/baseData/dataDict';
import systemConfig from '../template/baseData/systemConfig';
import userManage from '../template/baseData/userManage';
import roleManage from '../template/baseData/roleManage';
import resourceManage from '../template/baseData/resourceManage';
import projectManage from '../template/baseData/projectManage';

import parkArea from '../template/businessCenter/parkArea';
import carAccredit from '../template/businessCenter/carAccredit';
import houseManage from '../template/businessCenter/houseManage';
import equipManage from '../template/businessCenter/equipManage';
import monthCard from '../template/businessCenter/monthCard';

import equipMonitor from '../template/monitorCenter/equipMonitor';

import statisticsTable from '../template/reportCenter/statisticsTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
      name: '登录',
      meta: {title: 'admin登录界面'}
    },
    {
      path: '/admin',
      component: admin,
      redirect: '/admin/home',
      name: '停车场后台管理系统',
      meta: {title: '停车场后台管理系统'},
      children: [
        {path: '/admin/home', component: home, meta: {title: '停车场后台管理系统'}},
        {path: '/admin/departmentManage', component: departmentManage, meta: {title: '基础资料 - 部门管理'}},
        {path: '/admin/handleLog', component: handleLog, meta: {title: '基础资料 - 操作日志'}},
        {path: '/admin/dataDict', component: dataDict, meta: {title: '基础资料 - 数据字典'}},
        {path: '/admin/systemConfig', component: systemConfig, meta: {title: '基础资料 - 系统配置'}},
        {path: '/admin/userManage', component: userManage, meta: {title: '基础资料 - 用户管理'}},
        {path: '/admin/roleManage', component: roleManage, meta: {title: '基础资料 - 角色管理'}},
        {path: '/admin/resourceManage', component: resourceManage, meta: {title: '基础资料 - 资源管理'}},
        {path: '/admin/projectManage', component: projectManage, meta: {title: '基础资料 - 项目管理'}},
        {path: '/admin/parkArea', component: parkArea, meta: {title: '业务中心 - 车场区域'}},
        {path: '/admin/carAccredit', component: carAccredit, meta: {title: '业务中心 - 车辆授权'}},
        {path: '/admin/houseManage', component: houseManage, meta: {title: '业务中心 - 房屋管理'}},
        {path: '/admin/equipManage', component: equipManage, meta: {title: '业务中心 - 设备管理'}},
        {path: '/admin/monthCard', component: monthCard, meta: {title: '业务中心 - 月卡续费'}},
        {path: '/admin/equipMonitor', component: equipMonitor, meta: {title: '监控中心 - 设备监控'}},
        {path: '/admin/statisticsTable', component: statisticsTable, meta: {title: '报表中心 - 固定车辆信息统计表'}}
      ]
    },
  ]
});
