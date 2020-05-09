<script>
export default {
  name: 'CommonTableItem',
  // 自定义内容的组件
  functional: true,
  render: (createElement, context) => {
    const params = {
      row: context.props.row,
      index: context.props.index
    }
    if (context.props.column) params.column = context.props.column
    return context.props.render(createElement, params)
  }
}
</script>
