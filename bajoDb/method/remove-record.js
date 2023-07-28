import getRecord from './get-record.js'

async function removeRecord ({ schema, id, options = {} } = {}) {
  const { importPkg } = this.bajo.helper
  const { findIndex, pullAt } = await importPkg('lodash-es')
  const rec = await getRecord.call(this, { schema, id })
  const idx = findIndex(this.bajoDbMingo.storage[schema.name], { id })
  pullAt(this.bajoDbMingo.storage[schema.name], [idx])
  return { data: rec.data }
}

export default removeRecord
