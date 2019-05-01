<template>
  <div class="content clf">
    <div class="search ">
      <div class="clf top toggleDiv" v-show="searchDivShow">
        <div class="condition fl">
          <span class="conditions-text">资源名称：</span>
          <div class="custom-input">
            <input type="text" placeholder="请输入编号或者名称">
            <input type="submit" value="">
          </div>
        </div>
        <div class="fr create">
          <span>创建时间：</span>
          <div>
            <div class="c-datepicker-date-editor  J-datepicker-range-day mt10">
              <el-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
            </div>
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
        <table class="project-table">
          <tr>
            <th></th>
            <th>编号</th>
            <th>名称</th>
            <th>地址</th>
            <th>联系人</th>
            <th>电话</th>
            <th>总车位</th>
            <th>创建时间</th>
            <th>更新时间</th>
            <th>操作员</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>user</td>
            <td>user</td>
            <td>地址地址地址地址</td>
            <td>用户1</td>
            <td>13049587456</td>
            <td>100</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td><p>2015-09-26</p>08:50:08</td>
            <td>用户1</td>
            <td><span>正常</span></td>
            <td>
              <a class="bj" href="javascript:">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
            </td>
          </tr>
        </table>
      </div>
      <div class="page">
        <a href="javascript:"><img src="../../assets/images/icon_l_arrow.png" alt=""></a>
        <a href="javascript:">1</a>
        <a href="javascript:">2</a>
        <a href="javascript:">3</a>
        <a href="javascript:">4</a>
        <a href="javascript:">5</a>
        <a href="javascript:">6</a>
        <a href="javascript:">7</a>
        <a href="javascript:">8</a>
        <a href="javascript:">9</a>
        <a href="javascript:"><img src="../../assets/images/icon_r_arrow.png" alt=""></a>
        <span>10条/页</span>
        <span>跳至<input type="text">页</span>
        <button class="go">Go</button>
      </div>
    </div>
    <!--弹窗-->
    <div class="main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">项目信息</p>
          <p class="close fr">x</p>
        </div>
        <div class="bot">
          <div class="cet">
            <div class="clf">
              <p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案</p>
              <p class="clf"><span class="fl"><span class='red-text'>*</span>项目编号：</span><input class="fl"
                                                                                                type="text"
                                                                                                value="请输入编号，必填"></p>
              <p class="clf"><span class="fl"><span class='red-text'>*</span>项目名称：</span><input class="fl"
                                                                                                type="text"
                                                                                                value="请输入6-8位数字密码，必填">
              </p>
              <p class="clf"><span class="fl">地址：</span><input class="fl" type="text" value="请输入6-8位数字密码，必填"></p>
              <p class="clf"><span class="fl">联系人：</span><input class="fl" type="text" value="请输入6-8位数字密码，必填"></p>
              <p class="clf"><span class="fl">联系电话：</span><input class="fl" type="text" value="请输入编号，必填"></p>
              <p class="clf"><span class="fl">车位总数：</span><input class="fl" type="text" value="请输入编号，必填"></p>
              <p class="bz clf"><span class="fl">备注：</span><input class="fl" type="text" value="请输入备注" id="inp"></p>
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
  export default {
    data () {
      return {
        toggleSearchText: '收起搜索',
        searchDivShow: true,
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value7: ''
      };
    },
    methods: {
      toggleSearch () {
        this.searchDivShow = !this.searchDivShow;
        this.toggleSearchText = this.searchDivShow === true ? '收起搜索' : '展开搜索';
        if (this.searchDivShow) {
          $('.transf-button').removeClass('hide');
        } else {
          $('.transf-button').addClass('hide');
        }
      },
      pageInit () {
        $(document).ready(function () {
          $('.bj').click(function () {
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
          $('.close').click(function () {
            $('.main').hide();
          });
          $('.qx').click(function () {
            $('.main').hide();
            $('.delete_prompt').hide();
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
  @import "../../assets/css/ProjectManagement.css";
  @import "../../assets/css/datepicker.css";
</style>
