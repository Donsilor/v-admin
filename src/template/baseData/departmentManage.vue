<template>
  <div class="content clf">
    <div class="search ">
      <div class="add">
        <button class="add-department blu-button">+新增</button>
      </div>
      <div class="clf top toggleDiv" v-show="searchDivShow">
        <div class="condition">
          <span class="conditions-text">搜索条件：</span>
          <div class="custom-input">
            <input type="text" placeholder="请输入">
            <input type="submit" value="">
          </div>
        </div>
      </div>
      <div class="clf bottom">
        <div class="fl">
          <button class="plechoose fl">请选择 <img src="../../assets/images/icon_9.png" alt=""></button>
          <button class="batchdel fl">批量删除</button>
          <div>共搜索到 <span>922</span> 条数据</div>
        </div>
        <div class="fr">
          <button class="search-button blu-button">搜索</button>
          <button class="clear-button bluborder-button">清除</button>
          <button class="ss transf-button" @click="toggleSearch">
            <i><img src="../../assets/images/icon_t_arrow2.png" alt=""></i>
            <span>{{toggleSearchText}}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="result clf">
      <div class="selected">已选 <span>5</span> 项数据</div>
      <div class="tab">
        <table class="departmentmanagement-table">
          <tr>
            <th><input type="checkbox" name="checkbox"></th>
            <th>编号</th>
            <th>名称</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>部门A</td>
            <td>备注1</td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
        </table>
      </div>
      <div class="page">
        <a href="javascript:"><img src="images/icon_l_arrow.png" alt=""></a>
        <a href="javascript:">1</a>
        <a href="javascript:">2</a>
        <a href="javascript:">3</a>
        <a href="javascript:">4</a>
        <a href="javascript:">5</a>
        <a href="javascript:">6</a>
        <a href="javascript:">7</a>
        <a href="javascript:">8</a>
        <a href="javascript:">9</a>
        <a href="javascript:"><img src="images/icon_r_arrow.png" alt=""></a>
        <span>10条/页</span>
        <span>跳至<input type="text">页</span>
        <button class="go">Go</button>
      </div>
    </div>
    <!--弹窗-->
    <div class="main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">部门信息</p>
          <p class="close fr">x</p>
        </div>
        <div class="bot">
          <div class="cet">
            <div class="clf">
              <p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案</p>
              <p class="num"><span class='red-text'>*</span><span>编号：</span><input type="text" placeholder="请输入编号，必填">
              </p>
              <p class="name"><span class='red-text'>*</span><span>名称：</span><input type="text" placeholder="请输入名称，必填">
              </p>
              <p class="bz"><span class='red-text'>*</span><span>备注：</span><input type="text" placeholder="请输入备注"
                                                                                  id="inp"></p>
            </div>
            <div class="button clf">
              <a class="qr fr">确定</a>
              <a class="qx fr">取消</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="delete_prompt">
      <div class="depwd">
        <div class="text">你是否确认删除选中的记录</div>
        <div class="button clf">
          <a class="qr fr">确定</a>
          <a class="qx fr">取消</a>
        </div>
      </div>
    </div>
    <!--弹窗-->
  </div>
</template>

<script>
  import '../../assets/js/jquery-ui.min';

  export default {
    data () {
      return {
        toggleSearchText: '收起搜索',
        searchDivShow: true
      };
    },
    methods: {
      toggleSearch () {
        this.searchDivShow = !this.searchDivShow;
        this.toggleSearchText = this.searchDivShow === true ? '收起搜索' : '展开搜索';
        if (this.searchDivShow) {
          $('.transf-button').removeClass('hide')
        } else {
          $('.transf-button').addClass('hide')
        }
      },
      pageInit () {
        $(document).ready(function () {
          $('.add').click(function () {
            $('.main').show();
            $('.depwd').draggable({
              handle: 'div.top-nav'
            }, {
              containment: 'parent'
            });
          });
          $('.close').click(function () {
            $('.main').hide();
          });
          $('.qr').click(function () {
            $('.main').hide();
            $('.delete_prompt').hide();
          });
          $('.qx').click(function () {
            $('.main').hide();
            $('.delete_prompt').hide();
          });
          $('.edit').click(function () {
            $('.main').show();
            $('.depwd').draggable({
              handle: 'div.top-nav'
            }, {
              containment: 'parent'
            });
          });
          $('.delete').click(function () {
            $('.delete_prompt').show();
            $('.depwd').draggable({
              handle: 'div.top-nav'
            }, {
              containment: 'parent'
            });
          });
        });
      }
    },
    mounted () {
      this.pageInit();
    }
  };
</script>

<style scoped>
  @import "../../assets/css/DepartmentManagement.css";
</style>
