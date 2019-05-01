<template>
  <div class="content clf">
    <div class="search ">
      <div class="add">
        <button class="registration-car blu-button">登记车辆</button>
        <button class="upload-aut blu-button">导入授权</button>
      </div>
      <div class="clf top toggleDiv" v-show="searchDivShow">
        <div class="cominput fl">
          <span class="conditions-text">车牌号码：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div class="cominput fl">
          <span class="conditions-text">住户姓名：</span>
          <select>
            <option>请选择</option>
            <option>请选择</option>
            <option>请选择</option>
          </select>
        </div>
        <div class="cominput fl">
          <span class="conditions-text">房号：</span>
          <select>
            <option>请选择</option>
            <option>请选择</option>
            <option>请选择</option>
          </select>
        </div>
        <div class="cominput fl">
          <span class="conditions-text">电话号码：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div class="cominput fl">
          <span class="conditions-text">车辆品牌：</span>
          <select>
            <option>请选择</option>
            <option>请选择</option>
            <option>请选择</option>
          </select>
        </div>
        <div class="fl create">
          <span>更新时间：</span>
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
          <button class="greenbut fl">配置车场收费标准</button>
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
        <table class="vehiclelicense-table">
          <tr>
            <th class="ckb"><input class="chk" type="checkbox"></th>
            <th>车牌号码</th>
            <th>住户姓名</th>
            <th>房号</th>
            <th>电话号码</th>
            <th>车辆颜色</th>
            <th>车辆品牌</th>
            <th>车辆型号</th>
            <th>状态</th>
            <th>创建时间</th>
            <th>更新时间</th>
            <th>操作员</th>
            <th>是否授权</th>
            <th class="de">操作</th>
          </tr>
          <tr>
            <td class="ckb"><input class="rad" type="checkbox" id="deo1" name="checkbox" value="1"><label
              for="deo1"></label></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td><span class="col black"></span></td>
            <td>宝马</td>
            <td>530</td>
            <td>正常</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>admin</td>
            <td>
              <a class="nonreg" href="javascript:;">未授权</a>
            </td>
            <td class="de detext">
              <a class="bj" href="javascript:;">编辑</a>
              <a class="delete" href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td class="ckb"><input class="rad" type="checkbox" id="deo2" name="checkbox" value="1"><label
              for="deo2"></label></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td><span class="col green"></span></td>
            <td>宝马</td>
            <td>530</td>
            <td>正常</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>admin</td>
            <td>
              <a class="nonreg" href="javascript:;">未授权</a>
            </td>
            <td class="de detext">
              <a class="bj" href="javascript:;">编辑</a>
              <a class="delete" href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td class="ckb"><input class="rad" type="checkbox" id="deo3" name="checkbox" value="1"><label
              for="deo3"></label></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td><span class="col blue"></span></td>
            <td>宝马</td>
            <td>530</td>
            <td>正常</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>admin</td>
            <td>
              <a class="nonreg" href="javascript:;">未授权</a>
            </td>
            <td class="de detext">
              <a class="bj" href="javascript:;">编辑</a>
              <a class="delete" href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td class="ckb"><input class="rad" type="checkbox" id="deo4" name="checkbox" value="1"><label
              for="deo4"></label></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td><span class="col rd"></span></td>
            <td>宝马</td>
            <td>530</td>
            <td>正常</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>admin</td>
            <td>
              <a class="nonreg" href="javascript:;">未授权</a>
            </td>
            <td class="de detext">
              <a class="bj" href="javascript:;">编辑</a>
              <a class="delete" href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td class="ckb"><input class="rad" type="checkbox" id="deo5" name="checkbox" value="1"><label
              for="deo5"></label></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td><span class="col brown"></span></td>
            <td>宝马</td>
            <td>530</td>
            <td>正常</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>admin</td>
            <td>
              <a class="nonreg" href="javascript:;">未授权</a>
            </td>
            <td class="de detext">
              <a class="bj" href="javascript:;">编辑</a>
              <a class="delete" href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td class="ckb"><input class="rad" type="checkbox" id="deo6" name="checkbox" value="1"><label
              for="deo6"></label></td>
            <td>粤b123456</td>
            <td>李大亮</td>
            <td>碧海苑2栋1单元1609</td>
            <td>13056874952</td>
            <td><span class="col brown"></span></td>
            <td>宝马</td>
            <td>530</td>
            <td>正常</td>
            <td>2018-08-21</td>
            <td>2018-08-21</td>
            <td>admin</td>
            <td>
              <a class="nonreg" href="javascript:;">未授权</a>
            </td>
            <td class="de detext">
              <a class="bj" href="javascript:;">编辑</a>
              <a class="delete" href="javascript:;">删除</a>
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
          <p class="t-text fl">车辆登记</p>
          <p class="close fr">x</p>
        </div>

        <div class="bot">
          <p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案<span>x</span></p>
          <div class="cet">
            <div class="clf">

              <p class="clf"><span class="fl"><span class='red-text'>*</span>住户：李大，碧海苑2栋1单元1609，13099990000</span><span
                class="plechoose">请选择</span></p>
              <p class="clf"><span class="fl"><span class='red-text'>*</span>车牌号码：</span><input class="fl" type="text"
                                                                                                value="请输入6-8位数字密码，必填">
              </p>
              <p class="clf"><span class="fl">车辆颜色：</span><span class="color-choose fl">颜色选择器<input class="fr"
                                                                                                    type="color"
                                                                                                    value="#00479d"></span>
              </p>
              <p class="clf"><span class="fl">车辆品牌：</span>
                <select name="">
                  <option value="">选择1</option>
                  <option value="">选择2</option>
                </select>
              </p>
              <p class="clf"><span class="fl">车辆型号：</span>
                <select name="">
                  <option value="">选择1</option>
                  <option value="">选择2</option>
                </select>
              </p>
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
    <div class="import-main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">导入授权</p>
          <p class="close fr">x</p>
        </div>
        <div class="bot">
          <div class="cet clf">
            <div class="fl choose-file">
              选择文件
              <input type="file"/>
            </div>
            <a class="fr downloadtemp" href="javascript:;">下载模板</a>
            <p>支持扩展名：.xls .xlsx</p>
          </div>
          <div class="button clf">
            <a class="upload fr" href="javascript:;">上传</a>
          </div>
        </div>
      </div>
    </div>
    <div class="nonreg-main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">车辆登记</p>
          <p class="close fr">x</p>
        </div>

        <div class="bot">
          <p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案<span>x</span></p>
          <div class="cet">
            <div class="clf">

              <p class="clf"><span class="fl">车牌号码：</span><span class="p-text">粤B123456</span></p>
              <p class="clf"><span class="fl">车牌类型：</span><input class="fl" type="text" value="请输入名称"></p>
              <p class="clf"><span class="fl">授权车位：</span><span class="p-text fl">A1001<span class="red-text">为车位组时显示车位组名称，并修改标题为授权车位组</span></span>
                <a class="ap-choose" href="javascript:;">请选择</a>
              </p>
              <p class="clf"><span class="fl">授权月份：</span>
                <select name="">
                  <option value="">选择1</option>
                  <option value="">选择2</option>
                </select>
                <span class="red-text position-red">根据车辆类型及授权车位自动关联收费标准</span>
              </p>
              <p class="clf"><span class="fl">车辆型号：</span>
                <select name="">
                  <option value="">选择1</option>
                  <option value="">选择2</option>
                </select>
              </p>
              <p class="clf"><span class="fl">可通行的设备：</span><span class="p-text">东门入口、东门出口、西门入口、西门出口<a
                class="choose-equ" href="javascript:;">请选择</a></span></p>
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
    <div class="vehreg-main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl"></p>
          <p class="v-close fr">x</p>
        </div>
        <div class="bot">
          <div class="vc-cet">
            <div class="clf">
              <p class="clf"><span class="fl">姓名：</span>
                <select>
                  <option>选择1</option>
                  <option>选择2</option>
                </select>
              </p>
              <p class="clf">
                <select>
                  <option>选择1</option>
                  <option>选择2</option>
                </select><span class="fr">房号：</span></p>
              <p class="clf"><span class="fl">电话：</span>
                <select>
                  <option>选择1</option>
                  <option>选择2</option>
                </select>
              </p>
              <p class="button clf">
                <a class="v-qr fr">确定</a>
                <a class="v-qx fr">取消</a>
              </p>
            </div>
          </div>
          <div class="residents-table">
            <table>
              <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>住户类型</th>
                <th>电话</th>
                <th>证件号码</th>
                <th>证件地址</th>
                <th>出生日期</th>
                <th>操作员</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>春晖苑</td>
                <td>男</td>
                <td>业主</td>
                <td>13013849218</td>
                <td>221587499633587461</td>
                <td>广东省深圳市福田...</td>
                <td>2015-09-26</td>
                <td>admin</td>
                <td>编辑</td>
                <td>
                  <a href="javascript:" class="v-choose">选择</a>
                </td>
              </tr>
              <tr>
                <td>春晖苑</td>
                <td>男</td>
                <td>业主</td>
                <td>13013849218</td>
                <td>221587499633587461</td>
                <td>广东省深圳市福田...</td>
                <td>2015-09-26</td>
                <td>admin</td>
                <td>编辑</td>
                <td>
                  <a href="javascript:" class="v-choose">选择</a>
                </td>
              </tr>
              <tr>
                <td>春晖苑</td>
                <td>男</td>
                <td>业主</td>
                <td>13013849218</td>
                <td>221587499633587461</td>
                <td>广东省深圳市福田...</td>
                <td>2015-09-26</td>
                <td>admin</td>
                <td>编辑</td>
                <td>
                  <a href="javascript:" class="v-choose">选择</a>
                </td>
              </tr>

              <tr>
                <td>春晖苑</td>
                <td>男</td>
                <td>业主</td>
                <td>13013849218</td>
                <td>221587499633587461</td>
                <td>广东省深圳市福田...</td>
                <td>2015-09-26</td>
                <td>admin</td>
                <td>编辑</td>
                <td>
                  <a href="javascript:" class="v-choose">选择</a>
                </td>
              </tr>
              <tr>
                <td>春晖苑</td>
                <td>男</td>
                <td>业主</td>
                <td>13013849218</td>
                <td>221587499633587461</td>
                <td>广东省深圳市福田...</td>
                <td>2015-09-26</td>
                <td>admin</td>
                <td>编辑</td>
                <td>
                  <a href="javascript:" class="v-choose">选择</a>
                </td>
              </tr>
              <tr>
                <td>春晖苑</td>
                <td>男</td>
                <td>业主</td>
                <td>13013849218</td>
                <td>221587499633587461</td>
                <td>广东省深圳市福田...</td>
                <td>2015-09-26</td>
                <td>admin</td>
                <td>编辑</td>
                <td>
                  <a href="javascript:" class="v-choose">选择</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="traffic-main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">可通行设备</p>
          <p class="traffic-close fr">x</p>
        </div>
        <div class="bot">
          <div class="traffic-cet">
            <div class="clf">
              <p class="clf"><span class="fl">设备编号：</span><input type="text" placeholder="请输入"></p>
              <p class="clf"><input type="text" placeholder="请输入"><span class="fr">设备名称：</span></p>
              <p class="clf"><span class="fl">设备类型：</span>
                <select>
                  <option>选择1</option>
                  <option>选择2</option>
                </select>
              </p>
              <p class="button clf">
                <a class="traffic-qr fr">搜索</a>
                <a class="traffic-qx fr">取消</a>
              </p>
            </div>
          </div>
          <div class="residents-table">
            <table>
              <tr>
                <th>选择</th>
                <th>设备编号</th>
                <th>设备名称</th>
                <th>设备类型(只显示出口和入口)</th>
                <th>开闸方式</th>
              </tr>
              <tr>
                <td class="traffic-ckb"><input class="check" type="checkbox" id="tdeo1" name="radio" value="1"><label
                  for="tdeo1"></label></td>
                <td>L0678</td>
                <td>东门岗亭</td>
                <td>入口</td>
                <td>自动开闸</td>
              </tr>
              <tr>
                <td class="traffic-ckb"><input class="check" type="checkbox" id="tdeo2" name="radio" value="1"><label
                  for="tdeo2"></label></td>
                <td>L0678</td>
                <td>东门岗亭</td>
                <td>入口</td>
                <td>自动开闸</td>
              </tr>

              <tr>
                <td class="traffic-ckb"><input class="check" type="checkbox" id="tdeo3" name="radio" value="1"><label
                  for="tdeo3"></label></td>
                <td>L0678</td>
                <td>东门岗亭</td>
                <td>入口</td>
                <td>自动开闸</td>
              </tr>
              <tr>
                <td class="traffic-ckb"><input class="check" type="checkbox" id="tdeo4" name="radio" value="1"><label
                  for="tdeo4"></label></td>
                <td>L0678</td>
                <td>东门岗亭</td>
                <td>入口</td>
                <td>自动开闸</td>
              </tr>
              <tr>
                <td class="traffic-ckb"><input class="check" type="checkbox" id="tdeo5" name="radio" value="1"><label
                  for="tdeo5"></label></td>
                <td>L0678</td>
                <td>东门岗亭</td>
                <td>入口</td>
                <td>自动开闸</td>
              </tr>
              <tr>
                <td class="traffic-ckb"><input class="check" type="checkbox" id="tdeo6" name="radio" value="1"><label
                  for="tdeo6"></label></td>
                <td>L0678</td>
                <td>东门岗亭</td>
                <td>入口</td>
                <td>自动开闸</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="ap-main">
      <div class="depwd">
        <div class="top-nav">
          <p class="t-text fl">授权车位</p>
          <p class="ap-close fr">x</p>
        </div>
        <div class="bot">
          <div class="ap-cet">
            <div class="clf">
              <p class="clf"><span class="fl">车位号或车位组编号：</span><input type="text" placeholder="请输入"></p>
              <p class="button clf">
                <a class="ap-search fr" href="javascript:;">搜索</a>
                <a class="ap-clear fr" href="javascript:;">清除</a>
              </p>
            </div>
          </div>
          <div class="residents-table">
            <table>
              <tr>
                <th>车位主编号</th>
                <th>车位号</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>张三</td>
                <td>张三</td>
                <td>
                  <a class="choose-parkingnumber" href="javascript:;">选择</a>
                </td>
              </tr>
              <tr>
                <td>张三</td>
                <td>张三</td>
                <td>
                  <a class="choose-parkingnumber" href="javascript:;">选择</a>
                </td>
              </tr>

              <tr>
                <td>张三</td>
                <td>张三</td>
                <td>
                  <a class="choose-parkingnumber" href="javascript:;">选择</a>
                </td>
              </tr>
              <tr>
                <td>张三</td>
                <td>张三</td>
                <td>
                  <a class="choose-parkingnumber" href="javascript:;">选择</a>
                </td>
              </tr>
              <tr>
                <td>张三</td>
                <td>张三</td>
                <td>
                  <a class="choose-parkingnumber" href="javascript:;">选择</a>
                </td>
              </tr>
              <tr>
                <td>张三</td>
                <td>张三</td>
                <td>
                  <a class="choose-parkingnumber" href="javascript:;">选择</a>
                </td>
              </tr>
            </table>
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
      PageInit () {
        $(document).ready(function () {
          $('.registration-car').click(function() {
            $(".main").show();
            $('.depwd').draggable({
              handle: "div.top-nav"
            }, {
              containment: "parent"
            }); //控制弹窗出现和限制拖拽范围
          });
          $('.close').click(function () {
            $('.main').hide();
          });
          $('.qx').click(function () {
            $('.main').hide();
          });
        });
      }
    }
  };
</script>

<style scoped>
  @import "../../assets/css/VehicleLicense.css";
  @import "../../assets/css/datepicker.css";
</style>
