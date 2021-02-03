type Props = {
  paddingBottom?: number,
  marginBottom?: number
}

export const TableOuterLayout: React.FC<Props> = ({ children, paddingBottom, marginBottom }) => {
  const pb = paddingBottom
  const mb = marginBottom
  return (
    <div className={`-my-2 py-2 overflow-x-auto ${mb && `mb-${mb}`} ${ pb && `pb-${pb}` }sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8`}>
      <div className="align-middle inline-block min-w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
        {children}
      </div>
    </div>
  )
}