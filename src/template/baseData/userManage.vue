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
            <input type="text" placeholder="请输入用户名或号码">
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
        <table class="usermanagement-table">
          <tr>
            <th></th>
            <th>照片</th>
            <th>用户名</th>
            <th>姓名</th>
            <th>电话</th>
            <th>创建时间</th>
            <th>更新时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="normal">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="normal">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="normal">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="normal">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="normal">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="normal">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><span><img src="../../assets/images/photo_1.jpg" alt=""></span></td>
            <td>user</td>
            <td>用户1</td>
            <td>13099998888</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td>2015-09-06 <br> 08:50:08</td>
            <td><span class="freeze">正常</span></td>
            <td>
              <a href="javascript:" class="edit">编辑</a>
              <a href="javascript:" class="delete">删除</a>
              <a href="javascript:">重置密码</a>
              <a href="javascript:">角色</a>
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
          <p class="t-text fl">用户信息</p>
          <p class="close fr">x</p>
        </div>
        <div class="bot">
          <div class="cet">
            <div class="clf">
              <p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案</p>
              <p class="clf"><span class="fl"><span class='red-text'>*</span>用户名：</span><input class="fl user"
                                                                                               name="user"
                                                                                               type="text"
                                                                                               placeholder="请输入编号，必填">
              </p>
              <p class="clf">
                <span class="fl"><span class='red-text'>*</span>密码：</span>
                <input class="fl psw" name="psw" type="text" placeholder="请输入6-8位数字密码，必填">
                <span class="pswremind remind">请输入正确信息</span>
              </p>

              <p class="clf">
                <span class="fl"><span class='red-text'>*</span>确认密码：</span>
                <input class="fl ppsw" name="ppsw" type="text" placeholder="请输入6-8位数字密码，必填">
                <span class="ppswremind remind">请输入正确信息</span>
              </p>
              <p class="clf"><span class="fl"><span class='red-text'>*</span>姓名：</span><input class="fl" type="text"
                                                                                              placeholder="请输入姓名，必填">
              </p>
              <p class="clf">
                <span class="fl"><span class='red-text'>*</span>电话：</span>
                <input class="fl tel" type="text" name="tel" placeholder="请输入电话号码，必填">
                <span class="telremind remind">请输入正确信息</span>
              </p>
              <p class="clf upload"><span class="fl">名称：</span><span class="up fl">+</span><span class="fl r-text">只能上传jpg/png文件</span>
              </p>
              <p class="bz clf"><span class="fl">备注：</span><input class="fl" type="text" placeholder="请输入备注" id="inp">
              </p>
            </div>
            <div class="button clf">
              <a class="acknowledgement fr">确定</a>
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
        searchDivShow: true
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
          function isPhoneNo (psw) {
            var pattern = /^[a-zA-Z0-9]{6,8}$/;
            return pattern.test(psw);
          }

          function main () {
            var num = 0;
            var user = $('.user').val();
            var psw = $('.psw').val();
            var ppsw = $('.ppsw').val();
            var tel = $.trim($('.tel').val());
            //判断是否输入电话号码
            if (tel.length == 0) {
              $('.telremind').css('display', 'block');
              $('.tel').css('border-color', '#ff0000');
              $('.tel').focus();
            }

            //判断手机号码
            else {
              if (tel.substring(0, 1) == 1) {
                if (isMobileNo(tel) == false) {
                  $('.telremind').css('display', 'block');
                  $('.tel').css('border-color', '#ff0000');
                  $('.tel').focus();
                } else {
                  $('.telremind').css('display', 'none');
                  $('.tel').css('border-color', '#999');
                  num++;
                }
              }
              //判断电话号码
              else if (tel.substring(0, 1) == 0) {
                if (isPhoneNo(tel) == false) {
                  $('.telremind').css('display', 'block');
                  $('.tel').css('border-color', '#ff0000');
                  $('.tel').focus();
                } else {
                  $('.telremind').css('display', 'none');
                  $('.tel').css('border-color', '#999');
                  num++;
                }
              } else {
                $('.telremind').css('display', 'block');
                $('.tel').css('border-color', '#ff0000');
                $('.tel').focus();
              }
            }

            //判断密码
            if (psw.length == 0) {
              $('.pswremind').css('display', 'block');
              $('.psw').css('border-color', '#ff0000');
              $('.psw').focus();
            }
            //判断电话号码是否正确
            else {
              if (isPhoneNo(psw) == false) {
                $('.pswremind').css('display', 'block');
                $('.psw').css('border-color', '#ff0000');
                $('.psw').focus();
              } else {
                $('.pswremind').css('display', 'none');
                $('.psw').css('border-color', '#999');
              }
            }
            //确认密码
            if (ppsw.length == 0) {
              $('.ppswremind').css('display', 'block');
              $('.ppsw').css('border-color', '#ff0000');
              $('.ppsw').focus();
            }
            //判断电话号码是否正确
            else {
              if (isPhoneNo(ppsw) == false) {
                $('.ppswremind').css('display', 'block');
                $('.ppsw').css('border-color', '#ff0000');
                $('.ppsw').focus();
              }
              //判断密码是否一致
              else {
                if (psw == ppsw) {
                  $('.ppswremind').css('display', 'none');
                  $('.ppsw').css('border-color', '#999');
                  num++;
                } else {
                  $('.ppswremind').css('display', 'block');
                  $('.ppsw').css('border-color', '#ff0000');
                  $('.psw').focus();
                }
              }
            }
            if (num == 2) {
              $('.depwd').hide();
            }
          }

          $('.acknowledgement').on('click', function () {
            main();
          }); //回调函数 当button确认被点击的时候触发main（）函数
          $('.add').click(function () {
            $('.main').show();
            $('.depwd').draggable({
              handle: 'div.top-nav'
            }, {
              containment: 'parent'
            });
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
          $('.close').click(function () {
            $('.main').hide();
            $('.delete_prompt').hide();
          });
          $('.qx').click(function () {
            $('.main').hide();
            $('.delete_prompt').hide();
          });
          $('.qr').click(function () {
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
  @import "../../assets/css/UserManagement.css";
</style>
