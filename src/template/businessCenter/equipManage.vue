<template>
  <div class="content clf">
    <div class="search ">
      <div class="add">
        <button class="add-department blu-button">+新增</button>
      </div>
      <div class="clf top toggleDiv">

        <div class="cominput fl">
          <span class="conditions-text">车场区域：</span>
          <input type="text" placeholder="请输入">
        </div>
      </div>
      <div class="clf bottom">
        <div class="fl">
          <button class="plechoose fl">请选择 <img src="images/icon_9.png" alt=""></button>
          <button class="batchdel fl">批量删除</button>
          <div>共搜索到 <span>922</span> 条数据</div>
        </div>
        <div class="fr">
          <button class="search-button blu-button">搜索</button>
          <button class="clear-button bluborder-button">清除</button>
          <button class="ss transf-button" @click="toggleSearch">
            <i><img src="images/icon_t_arrow2.png" alt=""></i>
            <span>收起搜索</span>
          </button>
        </div>
      </div>
    </div>
    <div class="result clf">
      <div class="selected">已选 <span>5</span> 项数据</div>
      <div class="tab">
        <table class="tab_1">
          <tr>
            <th class="ckb">
              <!--<input class="chk" type="checkbox">--></th>
            <th>设备编号</th>
            <th>设备名称</th>
            <th>所属区域</th>
            <th>设备类型</th>
            <th>IP地址</th>
            <th>创建时间</th>
            <th>更新时间</th>
            <th>操作员</th>
            <th class="de">操作</th>
          </tr>
          <tr>
            <td class="ckb show"><span><strong>+</strong></span></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td>192.168.1.1</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>
              <a href="javascript:;">admin</a>
            </td>
            <td class="de detext">
              <i style="margin-right: 1rem;margin-left: 2rem;" class="iconfont icon-edit fl bj"></i>
              <i class="iconfont icon-shanchu fl"></i>
            </td>
          </tr>
          <tr class="jun" colspan="9">
            <td class="ckb"></td>
            <td colspan="9">
              <table class="tab_2">
                <tr>
                  <th class="ckb">
                    <!--<input class="chk" type="checkbox">--></th>
                  <th>设备编号</th>
                  <th>设备名称</th>
                  <th>所属区域</th>
                  <th>设备类型</th>
                  <th>IP地址</th>
                  <th>创建时间</th>
                  <th>创建时间</th>
                  <th>更新时间</th>
                  <th>操作员</th>
                  <th class="de">操作</th>
                </tr>
                <tr>
                  <td class="ckb show_1"><span><strong>＋</strong></span></td>
                  <td>粤b123456</td>
                  <td>李大亮</td>
                  <td>碧海苑2栋1单元1609</td>
                  <td>13056874952</td>
                  <td>192.168.1.1</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>
                    <a href="javascript:;">admin</a>
                  </td>
                  <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                           class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i>
                  </td>
                </tr>
                <tr class="jun_1">
                  <td class="ckb"></td>
                  <td colspan="10">
                    <table class="tab_3">
                      <tr>
                        <th class="ckb">
                          <!--<input class="chk" type="checkbox">--></th>
                        <th>设备编号</th>
                        <th>设备名称</th>
                        <th>所属区域</th>
                        <th>设备类型</th>
                        <th>IP地址</th>
                        <th>创建时间</th>
                        <th>更新时间</th>
                        <th>操作员</th>
                        <th class="de">操作</th>
                      </tr>
                      <tr>
                        <td class="ckb show_2"><span><strong>＋</strong></span></td>
                        <td>粤b123456</td>
                        <td>李大亮</td>
                        <td>碧海苑2栋1单元1609</td>
                        <td>13056874952</td>
                        <td>192.168.1.1</td>
                        <td>2018-08-21</td>
                        <td>2018-08-21</td>
                        <td>
                          <a href="javascript:;">admin</a>
                        </td>
                        <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                                 class="iconfont icon-edit fl bj"></i><i
                          class="iconfont icon-shanchu fl"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="ckb show_2"><span><strong>＋</strong></span></td>
                        <td>粤b123456</td>
                        <td>李大亮</td>
                        <td>碧海苑2栋1单元1609</td>
                        <td>13056874952</td>
                        <td>192.168.1.1</td>
                        <td>2018-08-21</td>
                        <td>2018-08-21</td>
                        <td>
                          <a href="javascript:;">admin</a>
                        </td>
                        <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                                 class="iconfont icon-edit fl bj"></i><i
                          class="iconfont icon-shanchu fl"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="ckb show_2"><span><strong>＋</strong></span></td>
                        <td>粤b123456</td>
                        <td>李大亮</td>
                        <td>碧海苑2栋1单元1609</td>
                        <td>13056874952</td>
                        <td>192.168.1.1</td>
                        <td>2018-08-21</td>
                        <td>2018-08-21</td>
                        <td>
                          <a href="javascript:;">admin</a>
                        </td>
                        <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                                 class="iconfont icon-edit fl bj"></i><i
                          class="iconfont icon-shanchu fl"></i>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="ckb show_1"><span><strong>＋</strong></span></td>
                  <td>粤b123456</td>
                  <td>李大亮</td>
                  <td>碧海苑2栋1单元1609</td>
                  <td>13056874952</td>
                  <td>192.168.1.1</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>
                    <a href="javascript:;">admin</a>
                  </td>
                  <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                           class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i>
                  </td>
                </tr>
                <tr>
                  <td class="ckb show_1"><span><strong>＋</strong></span></td>
                  <td>粤b123456</td>
                  <td>李大亮</td>
                  <td>碧海苑2栋1单元1609</td>
                  <td>13056874952</td>
                  <td>192.168.1.1</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>
                    <a href="javascript:;">admin</a>
                  </td>
                  <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                           class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="ckb show"><span><strong>+</strong></span></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td>192.168.1.1</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>
              <a href="javascript:;">admin</a>
            </td>
            <td class="de detext">
              <i style="margin-right: 1rem;margin-left: 2rem;" class="iconfont icon-edit fl bj"></i>
              <i class="iconfont icon-shanchu fl"></i>
            </td>
          </tr>
          <tr class="jun" colspan="9">
            <td class="ckb"></td>
            <td colspan="9">
              <table class="tab_2">
                <tr>
                  <th class="ckb">
                    <!--<input class="chk" type="checkbox">--></th>
                  <th>设备编号</th>
                  <th>设备名称</th>
                  <th>所属区域</th>
                  <th>设备类型</th>
                  <th>IP地址</th>
                  <th>创建时间</th>
                  <th>创建时间</th>
                  <th>更新时间</th>
                  <th>操作员</th>
                  <th class="de">操作</th>
                </tr>
                <tr>
                  <td class="ckb show_1"><span><strong>＋</strong></span></td>
                  <td>粤b123456</td>
                  <td>李大亮</td>
                  <td>碧海苑2栋1单元1609</td>
                  <td>13056874952</td>
                  <td>192.168.1.1</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>
                    <a href="javascript:;">admin</a>
                  </td>
                  <td class="de detext">
                    <i style="margin-right: 1rem;margin-left: 2rem;" class="iconfont icon-edit fl"></i>
                    <i class="iconfont icon-shanchu fl"></i>
                  </td>
                </tr>
                <tr class="jun_1">
                  <td class="ckb"></td>
                  <td colspan="10">
                    <table class="tab_3">
                      <tr>
                        <th class="ckb">
                          <!--<input class="chk" type="checkbox">--></th>
                        <th>设备编号</th>
                        <th>设备名称</th>
                        <th>所属区域</th>
                        <th>设备类型</th>
                        <th>IP地址</th>
                        <th>创建时间</th>
                        <th>更新时间</th>
                        <th>操作员</th>
                        <th class="de">操作</th>
                      </tr>
                      <tr>
                        <td class="ckb show_2"><span><strong>＋</strong></span></td>
                        <td>粤b123456</td>
                        <td>李大亮</td>
                        <td>碧海苑2栋1单元1609</td>
                        <td>13056874952</td>
                        <td>192.168.1.1</td>
                        <td>2018-08-21</td>
                        <td>2018-08-21</td>
                        <td>
                          <a href="javascript:;">admin</a>
                        </td>
                        <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                                 class="iconfont icon-edit fl bj"></i><i
                          class="iconfont icon-shanchu fl"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="ckb show_2"><span><strong>＋</strong></span></td>
                        <td>粤b123456</td>
                        <td>李大亮</td>
                        <td>碧海苑2栋1单元1609</td>
                        <td>13056874952</td>
                        <td>192.168.1.1</td>
                        <td>2018-08-21</td>
                        <td>2018-08-21</td>
                        <td>
                          <a href="javascript:;">admin</a>
                        </td>
                        <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                                 class="iconfont icon-edit fl bj"></i><i
                          class="iconfont icon-shanchu fl"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="ckb show_2"><span><strong>＋</strong></span></td>
                        <td>粤b123456</td>
                        <td>李大亮</td>
                        <td>碧海苑2栋1单元1609</td>
                        <td>13056874952</td>
                        <td>192.168.1.1</td>
                        <td>2018-08-21</td>
                        <td>2018-08-21</td>
                        <td>
                          <a href="javascript:;">admin</a>
                        </td>
                        <td class="de detext"><i style="margin-right: 1rem;margin-left: 2rem;"
                                                 class="iconfont icon-edit fl bj"></i><i
                          class="iconfont icon-shanchu fl"></i>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="ckb show_1"><span><strong>＋</strong></span></td>
                  <td>粤b123456</td>
                  <td>李大亮</td>
                  <td>碧海苑2栋1单元1609</td>
                  <td>13056874952</td>
                  <td>192.168.1.1</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>
                    <a href="javascript:;">admin</a>
                  </td>
                  <td class="de detext">
                    <i style="margin-right: 1rem;margin-left: 2rem;" class="iconfont icon-edit fl bj"></i>
                    <i class="iconfont icon-shanchu fl"></i>
                  </td>
                </tr>
                <tr>
                  <td class="ckb show_1"><span><strong>＋</strong></span></td>
                  <td>粤b123456</td>
                  <td>李大亮</td>
                  <td>碧海苑2栋1单元1609</td>
                  <td>13056874952</td>
                  <td>192.168.1.1</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>2018-08-21</td>
                  <td>
                    <a href="javascript:;">admin</a>
                  </td>
                  <td class="de detext">
                    <i style="margin-right: 1rem;margin-left: 2rem;" class="iconfont icon-edit fl bj"></i>
                    <i class="iconfont icon-shanchu fl"></i>
                  </td>
                </tr>
              </table>
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
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {
      PageInit () {
        $('.jun').hide();
        $('.jun_1').hide();
      },
      toggleSearch () {
        var toggleDiv = $('.search .toggleDiv');
        toggleDiv.toggle();
      }
    },
    mounted () {
      this.PageInit();
    }
  };
</script>

<style scoped>
  @import "../../assets/css/EquipmentManagement_1.css";
</style>
