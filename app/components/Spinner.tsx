export default function Spinner({
  borderColor = 'border-blue-500',
}: {
  borderColor?: string
}) {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 animate-spin rounded-full border-4 ${borderColor} border-t-transparent`}
      />
    </div>
  )
}
