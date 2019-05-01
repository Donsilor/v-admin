<template>
  <div class="left_column">
    <ul id="sideMenuUl">
      <li class='current'>
        <div class="title">基础资料</div>
        <div class="menu">
          <router-link to="/admin/departmentManage">部门管理</router-link>
          <router-link to="/admin/handleLog">操作日志</router-link>
          <router-link to="/admin/dataDict">数据字典</router-link>
          <router-link to="/admin/systemConfig">系统配置</router-link>
          <router-link to="/admin/userManage">用户管理</router-link>
          <router-link to="/admin/roleManage">角色管理</router-link>
          <router-link to="/admin/resourceManage">资源管理</router-link>
          <router-link to="/admin/projectManage">项目管理</router-link>
        </div>
      </li>
      <li>
        <div class="title">业务中心</div>
        <div class="menu">
          <router-link to="/admin/parkArea">车场区域</router-link>
          <router-link to="/admin/carAccredit">车辆授权</router-link>
          <router-link to="/admin/houseManage">房屋管理</router-link>
          <router-link to="/admin/equipManage">设备管理</router-link>
          <router-link to="/admin/monthCard">月卡续费</router-link>
        </div>
      </li>
      <li>
        <div class="title">监控中心</div>
        <div class="menu">
          <router-link to="/admin/equipMonitor">设备监控</router-link>
        </div>
      </li>
      <li>
        <div class="title">报表中心</div>
        <div class="menu">
          <router-link to="/admin/statisticsTable">固定车辆信息统计表</router-link>
        </div>
      </li>
    </ul>
    <a href="javascript:" class="toggleBtn" @click="simplifyToggle"></a>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {
      simplifyToggle () {
        let $sideMenu = $('.left_column');
        $sideMenu.toggleClass('simplify');
      }
    },
    mounted () {
      function initSideMenuTab (id) {
        let ul = document.getElementById(id);
        let lis = ul.children;
        for (let i = 0; i < lis.length; i++) {
          lis[i].onclick = function () {
            for (let i = 0; i < lis.length; i++) {
              lis[i].className = '';
            }
            this.className = 'current';
          };
        }
      }

      initSideMenuTab('sideMenuUl');
    }
  };
</script>

<style scoped>

</style>
