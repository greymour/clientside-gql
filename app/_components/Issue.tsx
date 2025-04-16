import { useMutation } from 'urql'
import Status from './Status'
import { DeleteIssueMutation } from '@/gql/issues/mutations'
import { DeleteIcon } from 'lucide-react'
import { Issue as TIssue } from '@/__generated__/graphql'

const Issue = ({ issue }: { issue: NonNullable<TIssue> }) => {
  const displayId = issue?.id?.split('-')?.pop()?.slice(-3)
  const [_, deleteIssue] = useMutation(DeleteIssueMutation);
  const handleDelete = async () => {
    const result = await deleteIssue({ input: issue.id });
    console.log(result);
  }

  return (
    <div className="px-4 h-[40px] border-b flex items-center hover:bg-slate-50 gap-4">
      <span className="text-sm text-slate-300 w-[80px]">
        {`PAR-${displayId}`.toUpperCase()}
      </span>
      <Status status={issue.status} issueId={issue.id} />
      <span>{issue.name}</span>
      <button type="button" onClick={() => handleDelete()} className='ml-auto'>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Issue
