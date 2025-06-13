import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sso/success/__root')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sso/success/__root"!</div>
}
