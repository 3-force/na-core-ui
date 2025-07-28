import { AvatarGroup } from './libs/components/AvatarGroup'

function App() {
  const avatars = [
    { id: 1, src: 'https://i.pravatar.cc/100?img=1', tooltip: 'User 1' },
    { id: 2, src: 'https://i.pravatar.cc/100?img=2', tooltip: 'User 2' },
    { id: 3, src: 'https://i.pravatar.cc/100?img=3', tooltip: 'User 3' },
    { id: 4, src: 'https://i.pravatar.cc/100?img=4', tooltip: 'User 4' },
    { id: 5, src: 'https://i.pravatar.cc/100?img=5', tooltip: 'User 5' },
    { id: 6, src: 'https://i.pravatar.cc/100?img=6', tooltip: 'User 6' },
  ]
  return (
    <div>
      <AvatarGroup avatars={avatars} size="sm" />
      {/* <Button color="slate">teste</Button> */}
    </div>
  )
}

export default App
