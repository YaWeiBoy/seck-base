<!-- 普通表格 -->
<template>
  <div class="common-table">
    <div class="table-header">
      <slot name="header" />
    </div>
    <el-table
      :key="tableKey"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
      <template v-for="(item,index) in columns">
        <el-table-column
          :key="index"
          :type="item.type"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :align="item.align"
          :width="item.width"
          :sortable="item.sortable"
          :label-class-name="item.headerClassName"
          :show-overflow-tooltip="item.showOverflowTooltip||false"
          :formatter="item.formatter&&item.formatter"
        >
          <template slot-scope="scope">
            <common-table-item v-if="item.render" :render="item.render" :row="scope.row" :index="scope.$index" :column="item" />
            <span v-else>{{ scope.row[item.prop] || '-' }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" v-on="$listeners" />

  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import CommonTableItem from './common-table-item'
export default {
  name: 'CommonTable',
  components: { CommonTableItem, Pagination },
  props: {
    total: {
      type: Number,
      required: true
    },
    listLoading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => [],
      require: true
    },
    listQuery: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  data() {
    return {
      tableKey: 0
    }
  },
  computed: {},
  watch: {
    columns() {
      this.tableKey = this.tableKey + 1 // 为了保证table 每次都会重渲
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
