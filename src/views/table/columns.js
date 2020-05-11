
// 无法使用vue filter  无法使用elementUi table-column  formatter
import { parseTime } from '@/common/utils'
const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]
// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})
const statusFilter = (status) => {
  const statusMap = {
    published: 'success',
    draft: 'info',
    deleted: 'danger'
  }
  return statusMap[status]
}
const typeFilter = (type) => {
  return calendarTypeKeyValue[type]
}
export default {

  data() {
    return {
      columns: [
        {
          prop: 'id',
          label: 'ID',
          align: 'center',
          width: '70',
          sortable: 'custom'
        },
        {
          label: 'Date',
          align: 'center',
          render: (h, { row }) => {
            return h('span', parseTime(row.timestamp, '{y}-{m}-{d} {h}:{i}'))
          }
        },
        {
          label: 'Title',
          align: 'center',
          render: (h, { row }) => {
            return [
              h('span', {
                class: {
                  'link-type': true
                },
                domProps: {
                  innerHTML: row.title
                },
                on: {
                  click: this.handleUpdate.bind(this, row)
                }
              }),
              h('el-tag', {
                domProps: {
                  innerHTML: typeFilter(row.type)
                }
              })
            ]
          }
        },
        {
          prop: 'author',
          label: 'Author',
          align: 'center',
          width: '200',
          render: (h, { row }) => {
            return row.edit ? [
              h('el-input', {
                class: {
                  'edit-input': true
                },
                attrs: {
                  'size': 'small'
                },
                domProps: {
                  value: row.author
                },
                on: {
                  // input: this.data.bind(this, e)
                }
              }),
              h('el-button', {
                class: {
                  'cancel-btn': true
                },
                attrs: {
                  'v-model': row.author,
                  'type': 'warning',
                  'icon': 'el-icon-refresh',
                  'size': 'small'
                },
                on: {
                  click: this.cancelEdit.bind(this, row)
                },
                domProps: {
                  innerHTML: 'cancel'
                }
              })
            ] : h('span', row.author)
          }
        },
        {
          prop: 'reviewer',
          label: 'Reviewer',
          visible: false,
          align: 'center',
          width: '100'
        },
        {
          prop: 'importance',
          label: 'Imp',
          align: 'center',
          width: '100',
          sortable: true,
          render: (h, { row }) => {
            const result = []
            for (let key = 0; key < row.importance; key++) {
              result.push(h('svg-icon', {
                key: key,
                class: {
                  'meta-item__icon': true
                },
                attrs: {
                  'icon-class': 'star'
                }
              }))
            }
            return result
          }
        },
        {
          prop: 'pageviews',
          label: 'Readings',
          align: 'center',
          width: '100',
          edit: true
        },
        {
          prop: 'status',
          label: 'Status',
          align: 'center',
          width: '100',
          render: (h, { row }) => {
            return h('el-tag', {
              attrs: {
                type: statusFilter(row.status)
              },
              domProps: {
                innerHTML: row.status
              }
            })
          }
        },
        {
          label: 'Actions',
          align: 'center',
          width: '230',
          render: (h, { row }) => {
            const arr = [{ name: 'delete', type: 'danger' }, { name: 'add', type: '' }]
            const result = []
            for (const key in arr) {
              result.push(h('el-button', {
                key: key,
                on: {
                  click: this.handleButon.bind(this, row, arr[key].name)
                },
                class: {
                  'meta-item__icon': true
                },
                attrs: {
                  'icon-class': 'star',
                  'type': arr[key].type
                },
                domProps: {
                  innerHTML: arr[key].name
                }
              }))
            }
            return result
          }
        },
        {
          label: 'Actions1',
          align: 'center',
          render: (h, { row }) => {
            return row.edit ? h('el-button', {
              on: {
                click: this.confirmEdit.bind(this, row)
              },
              attrs: {
                'type': 'success'
              },
              domProps: {
                innerHTML: 'ok'
              }
            }) : h('el-button', {
              on: {
                click: () => { row.edit = !row.edit }
              },
              attrs: {
                'type': 'primary'
              },
              domProps: {
                innerHTML: 'edit'
              }
            })
          }
        }]

    }
  }
}
