import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Lucas', 'nh.lucass');
  console.log('This is gonna delay 2 seconds.');
  console.log(await user.getAddresses());

  console.log('This is gonna repeat(Cache)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
