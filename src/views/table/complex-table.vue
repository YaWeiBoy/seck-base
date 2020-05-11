
<template>
  <div class="complex-table">
    <common-table
      v-loading="listLoading"
      :data="list"
      :columns="columns"
      border
      fit
      show-summary
      highlight-current-row
      :total="50"
      :list-query="listQuery"
      @pagination="_fetchList"
      @sort-change="sortChange"
    >
      <template v-slot:header>
        <button>aa</button>
      </template>
    </common-table>
  </div>
</template>

<script>

import CommonTable from '@/components/Table/common-table'
import { fetchList } from '@/api/article'
import columns from './columns'
// import columns from './columns'

export default {
  name: 'ComplexTable',
  components: { CommonTable },
  mixins: [columns],
  data() {
    return {
      list: [],
      total: 0,
      showcColumns: [],
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }

    }
  },
  computed: {

  },
  watch: {
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this._fetchList()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  methods: {
    sortChange(e) {
      this.$message({
        message: `按照 ” ${e.prop} “ 排序`,
        type: 'success'
      })
    },
    handleButon(e, e1) {
      this.$alert(JSON.stringify(e), `点击按钮 ”${e1}“ `, {
        confirmButtonText: '确定'
      })
      switch (e1) {
        case 'delete':

          break
        case 'edit':
          this.confirmEdit(e)
          break
        case 'add':

          break
        default:
          break
      }
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    handleUpdate(e) {
      alert(JSON.stringify(e))
    },
    async _fetchList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.total = data.total
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
      this.listLoading = false
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total

      // })
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.complex-table{
  padding: 20px;
}
/deep/.edit-input {
  padding-right: 100px;
}
/deep/.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
