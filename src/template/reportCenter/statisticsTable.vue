<template>
  <div class="content clf">
    <div class="search ">
      <div class="add">
        <button class="registration-car blu-button">登记车辆</button>
        <button class="upload-aut blu-button">导入授权</button>
        <button class="doenloadtxt blu-button">导出TXT</button>
      </div>
      <div class="clf top toggleDiv">
        <div class="cominput fl">
          <span class="conditions-text">电话号码：</span>
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
          <span class="conditions-text">搜索名称：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div class="fl create">
          <span>创建时间：</span>
          <div>
            <div class="c-datepicker-date-editor  J-datepicker-range-day mt10">
              <input placeholder="开始时间" name="" class="c-datepicker-data-input only-date" value="">
              <span class="c-datepicker-range-separator">至</span>
              <input placeholder="结束时间" name="" class="c-datepicker-data-input only-date" value="">
            </div>
            <a href="javascript:"></a>
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
            <span>收起搜索</span>
          </button>
        </div>
      </div>
    </div>
    <div class="result clf">
      <div class="selected">已选 <span>5</span> 项数据</div>
      <div class="tab">
        <table class="report-table">
          <tr>
            <th><input type="checkbox"></th>
            <th>代码</th>
            <th>名称</th>
            <th>类型</th>
            <th>创建日期</th>
            <th>创建者</th>
            <th>状态</th>
            <th>最后操作日期</th>
            <th>最后操作者</th>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>币种</td>
            <td>离散条件</td>
            <td>2015-09-26 08:50:08</td>
            <td>正常</td>
            <td>已配置，待生效</td>
            <td>2015-09-26 08:50:08</td>
            <td>李大昌</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>币种</td>
            <td>离散条件</td>
            <td>2015-09-26 08:50:08</td>
            <td>正常</td>
            <td>已配置，待生效</td>
            <td>2015-09-26 08:50:08</td>
            <td>李大昌</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>币种</td>
            <td>离散条件</td>
            <td>2015-09-26 08:50:08</td>
            <td>正常</td>
            <td>已配置，待生效</td>
            <td>2015-09-26 08:50:08</td>
            <td>李大昌</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>币种</td>
            <td>离散条件</td>
            <td>2015-09-26 08:50:08</td>
            <td>正常</td>
            <td>已配置，待生效</td>
            <td>2015-09-26 08:50:08</td>
            <td>李大昌</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>L0678</td>
            <td>币种</td>
            <td>离散条件</td>
            <td>2015-09-26 08:50:08</td>
            <td>正常</td>
            <td>已配置，待生效</td>
            <td>2015-09-26 08:50:08</td>
            <td>李大昌</td>
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
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {
      toggleSearch () {
        var toggleDiv = $('.search .toggleDiv');
        toggleDiv.toggle();
      },
    }
  };
</script>

<style scoped>
  @import "../../assets/css/Report.css";
  @import "../../assets/css/datepicker.css";
</style>
