<template>
  <div class="content clf">
    <div class="wrap clf">
      <div class="wrap-left fl">
        <div class="ltop">
          <div class="openc ltopopen">
            <div class="opend">开闸</div>
            <div class="closed">关闸</div>
          </div>
          <p class="p1"><span class="sptop">...</span></p>
          <section class="secl fl"><img src="../../assets/images/secl.png"></section>
          <section class="secr fr">
            <b>东门入口</b>
            <span style="color:#52d669;">道闸已开启</span>
          </section>
        </div>
        <div class="lbot">
          <div class="openc lbotopen">
            <div class="opend">开闸</div>
            <div class="closed">关闸</div>
          </div>
          <p class="p1"><span class="spbot">...</span></p>
          <section class="secl fl" style="padding-top:6%;"><img src="../../assets/images/secr.png"></section>
          <section class="secr fr">
            <b>东门出口</b>
            <span>道闸已关闭</span>
          </section>
        </div>
      </div>
      <div class="wrap-right fr">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="wrap1 clf">
      <div class="wrap1-left fl">
        <div class="top">
          <a class="but1 fl">场内车辆查询</a>
          <a class="but2 fl">临占固</a>
          <a class="but2 fl">扫描枪配置</a>
          <a class="but2 fl">换班</a>
          <a class="but2 fl">其他</a>
          <p class="ptext">当日收入总额：<span class="redtext"><strong>43555</strong></span>元</p>
        </div>
        <div class="bot">
          <table>
            <tbody>
            <tr>
              <th><input class="ckb" type="checkbox"></th>
              <th>代码</th>
              <th>名称</th>
              <th>类型</th>
              <th>创建日期</th>
              <th>状态</th>
              <th>最后创建者</th>
              <th class="cz">操作</th>
            </tr>
            <tr>
              <td><input class="rad" type="radio" id="deo1" name="radio" value="1"><label for="deo1"></label></td>
              <td>L0678</td>
              <td>币种</td>
              <td>离散条件</td>
              <td><p>2015-09-26</p>
                <p>08：50：08</p></td>
              <td><a href="/">已配置，已生效</a></td>
              <td>灵惜</td>
              <td><i class="iconfont icon-yanjing"></i><i class="iconfont icon-edit"></i><i
                class="iconfont icon-shanchu"></i></td>
            </tr>
            <tr>
              <td><input class="rad" type="radio" id="deo2"><label for="deo2" name="radio" value="1"></label></td>
              <td>L0678</td>
              <td>币种</td>
              <td>离散条件</td>
              <td><p>2015-09-26</p>
                <p>08：50：08</p></td>
              <td><a href="/">已配置，已生效</a></td>
              <td>灵惜</td>
              <td><i class="iconfont icon-yanjing"></i><i class="iconfont icon-edit"></i><i
                class="iconfont icon-shanchu"></i></td>
            </tr>
            <tr>
              <td><input class="rad" type="radio" id="deo3"><label for="deo3" name="radio" value="1"></label></td>
              <td>L0678</td>
              <td>币种</td>
              <td>离散条件</td>
              <td><p>2015-09-26</p>
                <p>08：50：08</p></td>
              <td><a class="red-text" href="/">未配置</a></td>
              <td>灵惜</td>
              <td><i class="iconfont icon-yanjing"></i><i class="iconfont icon-edit"></i><i
                class="iconfont icon-shanchu"></i></td>
            </tr>
            <tr>
              <td><input class="rad" type="radio" id="deo4"><label for="deo4" name="radio" value="1"></label></td>
              <td>L0678</td>
              <td>币种</td>
              <td>离散条件</td>
              <td><p>2015-09-26</p>
                <p>08：50：08</p></td>
              <td><a href="/">已配置，已生效</a></td>
              <td>灵惜</td>
              <td><i class="iconfont icon-yanjing"></i><i class="iconfont icon-edit"></i><i
                class="iconfont icon-shanchu"></i></td>
            </tr>
            <tr>
              <td><input class="rad" type="radio" id="deo5"><label for="deo5" name="radio" value="1"></label></td>
              <td>L0678</td>
              <td>币种</td>
              <td>离散条件</td>
              <td><p>2015-09-26</p>
                <p>08：50：08</p></td>
              <td><a href="/">已配置，已生效</a></td>
              <td>灵惜</td>
              <td><i class="iconfont icon-yanjing"></i><i class="iconfont icon-edit"></i><i
                class="iconfont icon-shanchu"></i></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="wrap1-right fr">
        <div class="section-one clf">
          <div class="pbb"><strong>粤B·123456</strong></div>
          <div class="ps">2015-09-2608：50：08 入场</div>
          <div class="pst">已停<span>1</span>天<span>12</span>小时<span>8</span>分<span>41</span>秒</div>
        </div>
        <div class="clf" style="margin-bottom:3.125rem;">
          <div class="pgt">应收金额：<span><strong>60</strong></span>元</div>
          <div class="pl fl">优惠金额：<span>20</span>元</div>
          <div class="pr fr">实收金额：<span>80</span>元</div>
        </div>
        <div class="py clf">
          <div class="pay xj">
            <input type="radio" name="radio1" value="1" id="way">
            <label for="way"></label>
            <span>现金</span>
          </div>
          <div class="pay zfb">
            <input type="radio" name="radio1" value="1" id="zfb">
            <label for="zfb"></label>
            <span>支付宝</span>
          </div>
          <div class="wx wx">
            <input type="radio" name="radio1" value="1" id="wx">
            <label for="wx"></label>
            <span>微信</span>
          </div>
        </div>
        <div class="clf">
          <a class="but" href="javascript:">确认开闸</a>

        </div>
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
  @import "../../assets/css/EquipmentMonitoring.css";
  @import "../../assets/css/datepicker.css";
</style>
