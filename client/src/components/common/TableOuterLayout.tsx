type Props = {
  marginTop?: number
}

export const TableOuterLayout: React.FC<Props> = ({ children, marginTop }) => {
  const mt = marginTop
  return (
    <div className={`-my-2 py-2 overflow-x-auto ${mt && `mb-${mt}`} sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8`}>
      <div className="align-middle inline-block min-w-full shadow overflow-x-auto sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}