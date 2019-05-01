<template>
  <div class="content clf">
    <div class="search ">
      <div class="clf top toggleDiv" v-show="searchDivShow">
        <div class="condition fl">
          <span class="conditions-text">搜索条件：</span>
          <div class="custom-input">
            <input type="text" placeholder="请输入">
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
        <table class="operationlog-table">
          <tr>
            <th></th>
            <th>资源</th>
            <th>操作内容</th>
            <th>操作时间</th>
            <th>操作员</th>
            <th>操作</th>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>角色管理</td>
            <td>添加角色【财务】</td>
            <td>2015-09-26 08:50:08</td>
            <td>用户1</td>
            <td>
              <a href="javascript:" class="view">查看</a>
              <a href="javascript:" class="delete">删除</a>
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
          <p class="t-text fl">操作日志</p>
          <p class="close fr">x</p>
        </div>
        <div class="bot">
          <div class="cet">
            <div class="clf">
              <p class="clf"><span class="l fl">资源名称：</span><span class="fl">角色管理</span></p>
              <p class="clf"><span class="l fl">操作员：</span><span class="fl">admin</span></p>
              <p class="clf"><span class="l fl">操作时间：</span><span class="fl">2018-06-25 18:15:45</span></p>
              <p class="clf"><span class="l fl">操作内容：</span><span class="fl">添加角色【财务】</span></p>
            </div>
            <div class="clf">
              <span class="fl l">备注：</span>
              <p class="fl bz">
                还off就是飞机撒发飞机啊 就就看看你看一 【破【破就囧破瓶颈【 就破解破解就就紧迫【 【哦豁【哦豁级【欧珀就【破偶就【破oj
              </p>
            </div>
            <div class="button clf">
              <a class="qr fr">确定</a>
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
          $('.view').click(function() {
            $(".main").show();
            $('.depwd').draggable({
              handle: "div.top-nav"
            }, {
              containment: "parent"
            });
          });
          $('.delete').click(function() {
            $(".delete_prompt").show();
            $('.depwd').draggable({
              handle: "div.top-nav"
            }, {
              containment: "parent"
            });
          });
          $('.close').click(function () {
            $('.main').hide();
            $(".delete_prompt").hide();
          });
          $('.qx').click(function () {
            $('.main').hide();
            $(".delete_prompt").hide();
          });
          $('.qr').click(function () {
            $('.main').hide();
            $(".delete_prompt").hide();
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
  @import "../../assets/css/OperationLog.css";
  @import "../../assets/css/datepicker.css";
</style>
