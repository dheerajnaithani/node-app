describe('first test', () => {
  test('if this works', () => {
    function getParameter(param, callback) {
      return callback(param)
    }

    function fetchParameterValue(param) {
      return getParameter(param, (data) => data)
    }

    const fetchAll = () => [
      fetchParameterValue('hello'),
      fetchParameterValue('world'),
      fetchParameterValue('check that'),
    ]
    const results = fetchAll()
    console.log(results)
  })
})
