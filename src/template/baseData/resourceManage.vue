<template>
  <div class="content">
    <div class="left">
      <div class="add"><a href="javascript:" class="add_child">+新增</a></div>
      <div class="clf btns">
        <div class="selectDiv">
          <div class="btn_1">
            <span class="icon toggleBtn"><img src="../../assets/images/icon_b_arrow.png" alt="" style="transform: rotate(-90deg);"></span>
            <input type="checkbox">
            <span class="b_title">系统管理员</span>
          </div>
          <ul>
            <li>
              <input type="checkbox">
              <span class="b_title">资源管理</span>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">角色管理</span>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">用户管理</span>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">系统配置</span>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">操作日志</span>
            </li>
          </ul>
          <div class="btn_1">
            <span class="icon toggleBtn"><img src="../../assets/images/icon_b_arrow.png" alt="" style="transform: rotate(-90deg);"></span>
            <input type="checkbox">
            <span class="b_title">业务中心</span>
          </div>
          <div class="btn_1">
            <span class="icon toggleBtn"><img src="../../assets/images/icon_b_arrow.png" alt="" style="transform: rotate(-90deg);"></span>
            <input type="checkbox">
            <span class="b_title">监控中心</span>
          </div>
          <div class="btn_1">
            <span class="icon toggleBtn"><img src="../../assets/images/icon_b_arrow.png" alt="" style="transform: rotate(-90deg);"></span>
            <input type="checkbox">
            <span class="b_title">报表中心</span>
          </div>
        </div>
      </div></div>
    <div class="right">
      <div></div>
      <div>
        <div class="name">父级：</div>
        <div class="role"><input type="text" placeholder="请选择"></div>
      </div>
      <div>
        <div class="name">编号：</div>
        <div class="role"><input type="text" placeholder="请输入"></div>
      </div>
      <div>
        <div class="name">名称：</div>
        <div class="role"><input type="text" placeholder="请输入"></div>
      </div>
      <div>
        <div class="name">类型：</div>
        <div class="role">
          <label for="1"><input type="radio" id="1" name="radio">菜单</label>
          <label for="2"><input type="radio" id="2" name="radio" checked="checked">按钮</label>
        </div>
      </div>
      <div>
        <div class="name">链接：</div>
        <div class="role"><input type="text" placeholder="请输入"></div>
      </div>
      <div>
        <div class="name">是否显示：</div>
        <div class="role">
          <label for="3"><input type="radio" id="3" name="radio1">显示</label>
          <label for="4"><input type="radio" id="4" name="radio1" checked="checked">不显示</label>
        </div>
      </div>

      <div>
        <div class="name">图标：</div>
        <div class="role-icon"><a href="javascript:">选择图标</a></div>
      </div>

      <div>
        <div class="name">排序：</div>
        <div class="role">

          <div class="scroll" id="scroll">
            <div class="bar" id="bar"></div>
            <div class="mask" id="mask"></div>
          </div>



          <!--<div class="bottom_line">-->
          <!--<span class="left_line"></span>-->
          <!--<span class="top_line"><i></i></span>-->
          <!--<span class="right_line"></span>-->
          <!--</div>-->
        </div>
      </div>
      <div>
        <div class="name">备注：</div>
        <div class="role">
          <textarea name="" id="" cols="30" rows="10" placeholder="请输入备注"></textarea>
        </div>
      </div>

      <div class="clf btn btn_modify">
        <a href="javascript:">修改</a>
        <a href="javascript:">删除</a>
      </div>

      <div class="clf btn btn_determine">
        <a href="javascript:">确定</a>
        <a href="javascript:" class="cancel">取消</a>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @import "../../assets/css/ResourceManagement.css";
</style>
