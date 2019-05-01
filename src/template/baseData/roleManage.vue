<template>
  <div class="content clf">
    <div class="left clf fl">
      <div class="add" @click="togglePopup">
        <a href="javascript:">+新增</a>
      </div>
      <div class="clf btns">
        <div class="selectDiv">
          <div class="btn_1">
            <span class="icon toggleBtn"><img src="../../assets/images/icon_b_arrow.png" alt=""
                                              style="transform: rotate(-90deg);"></span>
            <input type="checkbox">
            <span class="b_title">系统管理员</span>
            <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
            <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
          </div>
          <ul>
            <li>
              <input type="checkbox">
              <span class="b_title">运营</span>
              <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
              <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">管理</span>
              <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
              <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">资料员</span>
              <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
              <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
            </li>
          </ul>
        </div>
        <div class="selectDiv show">
          <div class="btn_1">
            <span class="icon toggleBtn"><img src="../../assets/images/icon_b_arrow.png" alt=""></span>
            <input type="checkbox">
            <span class="b_title">系统管理员</span>
            <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
            <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
          </div>
          <ul style="display: block;">
            <li>
              <input type="checkbox">
              <span class="b_title">运营</span>
              <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
              <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">管理</span>
              <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
              <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
            </li>
            <li>
              <input type="checkbox">
              <span class="b_title">资料员</span>
              <a href="javascript:"><img src="../../assets/images/icon_10.png" alt=""></a>
              <a href="javascript:"><img src="../../assets/images/icon_11.png" alt=""></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right clf fl">
      <div>
        <div class="name">父级：</div>
        <div class="role">
          <select name="" id="0">
            <option value="">请选择</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <!--<div ><input type="text" placeholder="请选择"></div>-->
      </div>
      <div>
        <div class="name">角色标识：</div>
        <div class="role"><input type="text" placeholder="请输入"></div>
      </div>
      <div>
        <div class="name">角色名称：</div>
        <div class="role"><input type="text" placeholder="请输入"></div>
      </div>
      <div>
        <div class="name">是否显示：</div>
        <div class="role">
          <label for="1"><input type="radio" id="1" name="radio">菜单</label>
          <label for="2"><input type="radio" id="2" name="radio">按钮</label>
        </div>
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

      <div class="clf btn">
        <a href="javascript:">修改</a>
        <a href="javascript:">配置资源</a>
        <a href="javascript:">删除</a>
      </div>

    </div>
    <div class="main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">分配资源</p>
          <p class="close fr" @click="closePopup">x</p>
        </div>
        <div class="bot">
          <div class="cet">
            <div class="one">
              <div class="nav"><i class="iconfont icon-shixiangyoujiantou-"></i><input type="checkbox"><span>基础资料</span>
              </div>
              <div class="subtopic">
                <ul>
                  <li><input type="checkbox"><span>资源管理</span></li>
                  <li><input type="checkbox"><span>角色管理</span></li>
                  <li><input type="checkbox"><span>用户管理</span></li>
                  <li><input type="checkbox"><span>系统配置</span></li>
                  <li><input type="checkbox"><span>操作日志</span></li>
                </ul>
              </div>
            </div>
            <div class="two">
              <div class="nav"><i class="iconfont icon-shixiangyoujiantou-"></i><input type="checkbox"><span>业务中心</span>
              </div>
              <div class="subtopic">
                <ul>
                  <li><input type="checkbox"><span>房屋管理</span></li>
                  <li><input type="checkbox"><span>车辆授权</span></li>
                  <li><input type="checkbox"><span>月卡续费</span></li>
                </ul>
              </div>
            </div>
            <div class="th">
              <div class="nav"><i class="iconfont icon-shixiangyoujiantou-"></i><input type="checkbox"><span>监控中心</span>
              </div>
              <div class="subtopic">
                <ul>
                  <li><input type="checkbox"><span>设备监控</span></li>
                </ul>
              </div>
            </div>
            <div class="four">
              <div class="nav"><i class="iconfont icon-shixiangyoujiantou-"></i><input type="checkbox"><span>报表中心</span>
              </div>
              <div class="subtopic">
                <ul>
                  <li><input type="checkbox"><span>固定车辆信息统计表</span></li>
                  <li><input type="checkbox"><span>房屋信息统计表</span></li>
                  <li><input type="checkbox"><span>固定车辆收费信息统计</span></li>
                  <li><input type="checkbox"><span>临时车辆收费信息统计</span></li>
                </ul>
              </div>
            </div>
            <div class="button clf">
              <a class="qr">确定</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/js/jquery-ui.min';

  export default {
    data () {
      return {};
    },
    methods: {
      pageInit () {
        var scroll = document.getElementById('scroll');
        var bar = document.getElementById('bar');
        var mask = document.getElementById('mask');
        var ptxt = document.getElementsByTagName('p')[0];
        var barleft = 0;
        bar.onmousedown = function (event) {
          var event = event || window.event;
          var leftVal = event.clientX - this.offsetLeft;
          var that = this;
          // 拖动一定写到 down 里面才可以
          document.onmousemove = function (event) {
            var event = event || window.event;
            barleft = event.clientX - leftVal;
            if (barleft < 0) {
              barleft = 0;
            } else if (barleft > scroll.offsetWidth - bar.offsetWidth) {
              barleft = scroll.offsetWidth - bar.offsetWidth;
            }
            mask.style.width = barleft + 'px';
            that.style.left = barleft + 'px';
            //        ptxt.innerHTML = "已经走了" + parseInt(barleft/(scroll.offsetWidth-bar.offsetWidth) * 100) + "%";

            //防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
          };

        };
        document.onmouseup = function () {
          document.onmousemove = null; //弹起鼠标不做任何操作
        };

        var leftColumn = $('.left_column');
        var leftColumn_ToggleBtn = $('.left_column > .toggleBtn');
        var box = $('body > .box');
        leftColumn_ToggleBtn.on('click', function () {
          leftColumn.toggleClass('simplify');
          box.toggleClass('simplify');
        });

        var selectDiv_toggleBtn = $('.selectDiv .toggleBtn');
        selectDiv_toggleBtn.on('click', function () {
          var parentsSelectDiv = $(this).parents('.selectDiv');
          if (parentsSelectDiv.hasClass('show')) {
            parentsSelectDiv.removeClass('show');
            parentsSelectDiv.children('ul').slideUp(300);
            parentsSelectDiv.find('.toggleBtn').children('img').css('transform', 'rotate(-90deg)');
          } else {
            parentsSelectDiv.addClass('show');
            parentsSelectDiv.children('ul').slideDown(300);
            parentsSelectDiv.find('.toggleBtn').children('img').css('transform', 'rotate(0)');
          }
        });
      },
      togglePopup () {
        var popup = $('.main').show();
        $('.depwd').draggable({
          handle: 'div.top-nav'
        }, {
          containment: 'parent'
        });
      },
      closePopup () {
        $('.main').hide(); //关闭弹窗
      }
    },
    mounted () {
      this.pageInit();
    }
  };
</script>

<style scoped>
  @import "../../assets/css/RolemManagement.css";
</style>
